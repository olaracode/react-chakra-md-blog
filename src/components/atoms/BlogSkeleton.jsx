import React from "react";
import Container from "./Container";
import { Stack, Skeleton, Box } from "@chakra-ui/react";

const CSkeleton = ({ height }) => {
  return (
    <Skeleton height={height} startColor="brand.card" endColor="brand.light" />
  );
};

const BlogSkeleton = () => {
  return (
    <Container>
      <Stack w="100%" direction={"column"}>
        <CSkeleton height="20px" />
        {[0, 1, 2, 3, 4].map((item) => {
          return (
            <Stack key={Math.random()} direction={"column"} width="100%">
              {item % 2 === 0 && <CSkeleton height="20px" />}
              <CSkeleton height="80px" />
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
};

export default BlogSkeleton;
