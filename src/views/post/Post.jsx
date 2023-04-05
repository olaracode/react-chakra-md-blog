import React from "react";
import { useParams } from "react-router-dom";
import useBlogs from "@/blog/useBlogs";
import Container from "@/components/atoms/Container";
import BlogSkeleton from "@/components/atoms/BlogSkeleton";
import MarkDownContainer from "@/components/atoms/MarkDownContainer";
import { BlogTags, Blog } from "@/components/molecules/blog";
import { Wrap, Box, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>{currentBlog?.title}</title>

        {currentBlog?.tags?.map((tag) => {
          return <meta name="keywords" content={tag} />;
        })}
        {/* Flatten the tag array for a description */}
        <meta name="description" content={currentBlog?.tags?.join(", ")} />
      </Helmet>
      <Container>
        {currentBlog.content !== "" && (
          <>
            {currentBlog?.tags && (
              <Box display="flex" justifyContent="end">
                <BlogTags tags={currentBlog?.tags} />
              </Box>
            )}

            <MarkDownContainer content={currentBlog?.content} />
            <Box mt={5}>
              {currentBlog?.relatedBlogs &&
              currentBlog?.relatedBlogs.length > 0 ? (
                <>
                  <Text fontSize={"22px"} fontWeight={"bold"} as={"h3"}>
                    Relacionados
                  </Text>
                  <Wrap direction={"column"}>
                    {currentBlog?.relatedBlogs.map((blog) => {
                      return <Blog key={blog._id} blog={blog} />;
                    })}
                  </Wrap>
                </>
              ) : null}
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Post;
