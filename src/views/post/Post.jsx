import React from "react";
import useBlogs from "@/blog/useBlogs";
import Container from "@/components/atoms/Container";
import MarkDownContainer from "@/components/atoms/MarkDownContainer";
import { useParams } from "react-router-dom";
const Post = () => {
  const { blogs, setBlogContent, currentBlog } = useBlogs();
  const { slug } = useParams();
  React.useEffect(() => {
    if (!blogs) return;
    if (currentBlog.slug === slug) return;
    if (blogs.length > 0) {
      setBlogContent(slug);
    }
  }, [blogs, currentBlog]);
  return (
    <Container>
      {currentBlog.content !== "" && (
        <>
          {currentBlog.title}
          <MarkDownContainer content={currentBlog?.content} />
        </>
      )}
    </Container>
  );
};

export default Post;
