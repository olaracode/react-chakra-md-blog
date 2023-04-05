import React from "react";
import useSearchModal from "@/hooks/useSearchModal";
import { Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Blog } from "@/components/molecules/blog";
const SearchList = () => {
  const { searchResults, searchStatus } = useSearchModal();
  if (searchStatus === "loading") return <div>Loading...</div>;
  if (searchStatus === "error") return <div>Error</div>;
  if (searchResults.total === 0)
    return (
      <Text textAlign={"center"} color="blue.100">
        No hay resultado
      </Text>
    );
  return (
    <Stack direction={"column"}>
      {searchResults.blogs.map((blog) => {
        return <Blog key={blog._id} blog={blog} isToggable={true} />;
      })}
    </Stack>
  );
};

export default SearchList;
