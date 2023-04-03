import React from "react";
import { useParams } from "react-router-dom";
import useBlogs from "@/blog/useBlogs";
import Container from "@/components/atoms/Container";
import BlogSkeleton from "@/components/atoms/BlogSkeleton";
import MarkDownContainer from "@/components/atoms/MarkDownContainer";
const Post = () => {
  const { blogs, setBlogContent, currentBlog, changing } = useBlogs();
  const { slug } = useParams();
  React.useEffect(() => {
    if (!blogs) return;
    if (currentBlog.slug === slug) return;
    if (blogs.length > 0) {
      setBlogContent(slug);
    }
  }, [blogs, currentBlog]);
  if (changing) return <BlogSkeleton />;
  return (
    <Container>
      {currentBlog.content !== "" && (
        <>
          <MarkDownContainer content={currentBlog?.content} />
        </>
      )}
    </Container>
  );
};

export default Post;
