import React from "react";
import { atom, useRecoilState } from "recoil";

let development = true;
let BASE_URL = "https://express-blog-xa7v.onrender.com";

const fetchBlogs = (slug) => {
  if (slug) {
    return fetch(`${BASE_URL}/blogs/${slug}`).then((res) => res.json());
  }
  return fetch(`${BASE_URL}/blogs/`).then((res) => res.json());
};

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
  const [fulfilled, setFulfilled] = React.useState(false);

  const setBlogContent = async (slug) => {
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
    console.log();
    setCurrentBlog(selectedBlog);
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
    const response = await fetch(`${BASE_URL}/blogs/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    setCurrentBlogContent,
    currentBlog,
    postContent,
    fulfilled,
  };
};

export default useBlogs;
