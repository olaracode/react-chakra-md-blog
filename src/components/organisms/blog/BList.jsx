import React from "react";
import useBlogs from "@/blog/useBlogs";
import { Stack, Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BlogTags, Blog } from "@/components/molecules/blog";

import { Tags } from "@/components/atoms";
import Carousel from "../carousel/Carousel";
const BList = () => {
  const { blogs, tags } = useBlogs();
  const navigate = useNavigate();
  return (
    <>
      {/* <Carousel>
        {tags.map((tag) => {
          return (
            <Box
              w={"100%"}
              border="1px solid"
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={tag.split(" ")}
            >
              <Tags content={tag} />
            </Box>
          );
        })}
      </Carousel> */}

      <Stack direction={"column"}>
        {blogs.map((blog) => {
          return <Blog key={blog._id} blog={blog} />;
        })}
      </Stack>
    </>
  );
};

export default BList;
