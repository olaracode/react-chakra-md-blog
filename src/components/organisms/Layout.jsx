import React, { Children } from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./nav/Nav";
import SearchModal from "./search/SearchModal";
import useSearchModal from "@/hooks/useSearchModal";
import Footer from "./footer/Footer";

/**
 * @description: Layout component
 * adds the handleKeyDown function
 * that opens the search modal
 */

const Layout = ({ children }) => {
  const { handleKeyDown } = useSearchModal();
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <Box maxW="100vw">
      <Nav />
      <SearchModal />
      <Box py="60px">{children}</Box>
    </Box>
  );
};

export default Layout;
