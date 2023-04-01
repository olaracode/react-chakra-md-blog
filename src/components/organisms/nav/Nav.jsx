import React from "react";
import { Flex, Text, IconButton, Box, Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Container from "@/components/atoms/Container";
import { useNavigate } from "react-router-dom";
import useStore from "@/hooks/useStore";
import img from "@/assets/imgs/react-logo.png";
const Nav = () => {
  const { store, actions } = useStore();
  const navigate = useNavigate();
  return (
    <Flex
      h="50px"
      maxH="100%"
      bgColor="brand.card"
      boxShadow={"md"}
      align="center"
    >
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
            <Text fontWeight={"bold"}>ReactJs</Text>
          </Box>
          <IconButton variant={"ghost"} onClick={() => actions.handleTheme()}>
            {store.theme ? (
              <SunIcon color="brand.light" />
            ) : (
              <MoonIcon color="brand.dark" />
            )}
          </IconButton>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Nav;
