import React from "react";
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

const useBlogs = () => {
  const [blogs, setBlogs] = useRecoilState(blogsState);
  const [currentBlog, setCurrentBlog] = useRecoilState(currentBlogState);
  const [tagState, setTagState] = useRecoilState(tags);
  const [fulfilled, setFulfilled] = React.useState(false);
  const [changing, setChanging] = React.useState(false);

  const setBlogContent = async (slug) => {
    setChanging(true);
    const response = await fetchBlogs(slug);
    let id;
    let selectedBlog;
    setBlogs((oldBlogs) => {
      const newBlogs = oldBlogs.map((blog) => {
        if (blog.slug === slug) {
          id = blog._id;
          selectedBlog = response;
          return response;
        }
        console.log(blog);
        return blog;
      });
      return newBlogs;
    });
    setCurrentBlog(selectedBlog);
    setChanging(false);
  };

  const setCurrentBlogContent = (id) => {
    const selectedBlog = blogs.find((blog) => blog._id === id);
    setCurrentBlog(selectedBlog);
  };

  const getBlogs = async () => {
    const data = await fetchBlogs();
    setBlogs(data);
    setFulfilled(true);
  };

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

  React.useEffect(() => {
    getBlogs();
  }, []);

  return {
    blogs,
    setBlogContent,
    changing,
    setCurrentBlogContent,
    currentBlog,
    postContent,
    fulfilled,
  };
};

export default useBlogs;
