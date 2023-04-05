import React from "react";
import { Badge } from "@chakra-ui/react";

const colors = ["red", "green", "blue", "yellow", "purple", "pink"];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Tags = ({ content }) => {
  return (
    <Badge variant="subtle" colorScheme={"blue"}>
      {content}
    </Badge>
  );
};

export default Tags;
