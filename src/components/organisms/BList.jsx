import React from "react";
import useBlogs from "@/blog/useBlogs";
import { Stack, Heading, Box, Wrap } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const BList = () => {
  const { blogs } = useBlogs();
  const navigate = useNavigate();
  return (
    <Stack direction={"column"}>
      {blogs.map((blog) => {
        return (
          <Box
            key={blog._id}
            borderBottom="1px"
            color="brand.txt"
            p={5}
            _hover={{
              borderColor: "brand.secondary",
              color: "brand.primary",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/post/${blog.slug}`)}
          >
            <Heading as="h2">{blog.title}</Heading>
            <Wrap>
              {blog.tags &&
                blog.tags.map((tag, index) => {
                  return (
                    <Box
                      key={index}
                      p={1}
                      borderRadius="md"
                      color="brand.secondary"
                    >
                      {tag}
                    </Box>
                  );
                })}
            </Wrap>
          </Box>
        );
      })}
    </Stack>
  );
};

export default BList;
