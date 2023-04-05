import React, { useCallback, useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

let BASE_URL = "https://express-blog-xa7v.onrender.com";
let test_url = "http://localhost:3000";
const url = BASE_URL;
const fetchBlogs = (slug) => {
  if (slug) {
    return fetch(`${url}/blogs/${slug}`).then((res) => res.json());
  }
  return fetch(`${url}/blogs/`).then((res) => res.json());
};

const tags = atom({
  key: "tags",
  default: [],
});

const blogsState = atom({
  key: "blogsState",
  default: [],
});

const currentBlogState = atom({
  key: "currentBlogState",
  default: {},
});

const getRelatedBlogs = async (slug) => {
  try {
    const response = await fetch(`${url}/blogs/related/${slug}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const useBlogs = () => {
  const [blogs, setBlogs] = useRecoilState(blogsState);
  const [currentBlog, setCurrentBlog] = useRecoilState(currentBlogState);
  const [tagState, setTagState] = useRecoilState(tags);
  const [fulfilled, setFulfilled] = useState(false);
  const [changing, setChanging] = useState(false);

  const fetchBlogs = useCallback(async (slug) => {
    if (slug) {
      return fetch(`${url}/blogs/${slug}`).then((res) => res.json());
    }
    return fetch(`${url}/blogs/`).then((res) => res.json());
  }, []);

  const getRelatedBlogs = useCallback(async (slug) => {
    try {
      const response = await fetch(`${url}/blogs/related/${slug}`);
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setBlogContent = useCallback(
    async (slug) => {
      setChanging(true);
      const response = await fetchBlogs(slug);
      const related = await getRelatedBlogs(slug);
      let id;
      let selectedBlog;
      setBlogs((oldBlogs) => {
        const newBlogs = oldBlogs.map((blog) => {
          if (blog.slug === slug) {
            id = blog._id;
            selectedBlog = { ...response, relatedBlogs: related };
            return response;
          }
          return blog;
        });
        return newBlogs;
      });
      setCurrentBlog(selectedBlog);
      setChanging(false);
    },
    [setBlogs, setCurrentBlog, fetchBlogs, getRelatedBlogs]
  );

  const setCurrentBlogContent = useCallback(
    (id) => {
      const selectedBlog = blogs.find((blog) => blog._id === id);
      setCurrentBlog(selectedBlog);
    },
    [blogs, setCurrentBlog]
  );

  const fetchTags = useCallback(async () => {
    try {
      const response = await fetch(`${url}/blogs/tags`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getBlogs = useCallback(async () => {
    try {
      const response = await fetch(`${url}/blogs`);
      const data = await response.json();
      setBlogs(data);
      setFulfilled(true);
    } catch (error) {
      console.log(error);
    }
  }, [setBlogs]);

  const postContent = async (post) => {
    const response = await fetch(`${url}/blogs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getBlogs();
    fetchTags().then((data) => setTagState(data));
  }, []);

  return {
    blogs,
    currentBlog,
    tagState,
    fulfilled,
    postContent,
    changing,
    setBlogContent,
    setCurrentBlogContent,
  };
};

export default useBlogs;
