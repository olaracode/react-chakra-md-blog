import React from "react";
import { Wrap } from "@chakra-ui/react";
import { Tags } from "@/components/atoms";

const BlogTags = ({ tags }) => {
  return (
    <Wrap>
      {tags.map((tag, index) => {
        return <Tags key={index} content={tag} />;
      })}
    </Wrap>
  );
};

export default BlogTags;
