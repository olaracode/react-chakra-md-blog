import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  IconButton,
  Box,
  Image,
  Button,
  Kbd,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Container from "@/components/atoms/Container";
import { useNavigate } from "react-router-dom";
import useStore from "@/hooks/useStore";
import { SearchIcon } from "@chakra-ui/icons";
import img from "@/assets/imgs/react-logo.png";
import useSearchModal from "@/hooks/useSearchModal";
import Hide from "@/components/molecules/Hide";
const Nav = () => {
  const { store, actions } = useStore();
  const navigate = useNavigate();
  const { toggle } = useSearchModal();
  const buttonColor = store.theme ? "brand.dark" : "brand.white";

  return (
    <Hide>
      <Container>
        <Flex justify="space-between" align="center" maxH="100%">
          <Box
            maxH="100%"
            display="flex"
            alignItems={"center"}
            gap={2}
            onClick={() => navigate("/")}
            cursor="pointer"
          >
            <Image src={img} width="30px" />
            <Text fontWeight={"bold"}>ReactDocs</Text>
          </Box>
          <Box w="70%" display={{ base: "none", md: "block" }}>
            <Button
              w="100%"
              justifyContent={"space-between"}
              color="brand.text"
              _hover={{
                bgColor: buttonColor,
                border: "1px solid",
                borderColor: "blue.100",
              }}
              variant="ghost"
              bgColor={buttonColor}
              onClick={() => toggle()}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <SearchIcon />
                Search
              </Box>
              <Box color="brand.dark">
                <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
              </Box>
            </Button>
          </Box>
          <Flex>
            <IconButton
              variant={"ghost"}
              display={{ base: "block", md: "none" }}
            >
              <SearchIcon onClick={toggle} />
            </IconButton>
            <IconButton variant={"ghost"} onClick={() => actions.handleTheme()}>
              {store.theme ? (
                <SunIcon
                  color="brand.light"
                  _hover={{ color: "brand.primary" }}
                />
              ) : (
                <MoonIcon color="brand.dark" _hover={{ color: "brand.100" }} />
              )}
            </IconButton>
          </Flex>
        </Flex>
      </Container>
    </Hide>
  );
};

export default Nav;
