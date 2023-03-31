import React from "react";
import useBlogs from "@/blog/useBlogs";
import { Card, Stack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const BList = () => {
  const { blogs } = useBlogs();
  const navigate = useNavigate();
  return (
    <Stack direction={"column"}>
      {blogs.map((blog) => {
        return (
          <Card
            key={blog._id}
            backgroundColor="brand.card"
            p={5}
            onClick={() => navigate(`/post/${blog.slug}`)}
          >
            <Heading as="h2">{blog.title}</Heading>
          </Card>
        );
      })}
    </Stack>
  );
};

export default BList;
