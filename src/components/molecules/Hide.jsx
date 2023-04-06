import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Hide = ({ children }) => {
  const [shouldNavShow, setShouldNavShow] = React.useState(true);
  const currentPositionRef = React.useRef(window.pageYOffset);
  const variants = {
    hidden: { y: "-100%" },
    visible: { y: "0%" },
  };
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > currentPositionRef.current) {
      setShouldNavShow(false);
    } else {
      setShouldNavShow(true);
    }
    currentPositionRef.current = currentScrollPos;
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex
      h="50px"
      maxH="100%"
      bgColor="brand.card"
      boxShadow={"md"}
      align="center"
      position="fixed"
      zIndex="99"
      as={motion.div}
      variants={variants}
      initial="hidden"
      animate={shouldNavShow ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </Flex>
  );
};

export default Hide;
