import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { BlogTags } from "@/components/molecules/blog";
import { useNavigate } from "react-router-dom";
import useSearchModal from "@/hooks/useSearchModal";
const Blog = ({ blog, isToggable = false }) => {
  const { toggle } = useSearchModal();
  const navigate = useNavigate();
  const handleClick = () => {
    if (isToggable) toggle();
    navigate(`/post/${blog.slug}`);
  };
  return (
    <Box
      borderBottom="1px"
      color="brand.txt"
      p={5}
      _hover={{
        borderColor: "brand.secondary",
        color: "brand.primary",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Heading as="h2">{blog.title}</Heading>
      {blog.tags && <BlogTags tags={blog.tags} />}
    </Box>
  );
};

export default Blog;
