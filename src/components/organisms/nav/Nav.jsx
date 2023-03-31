import React from "react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Container from "@/components/atoms/Container";
import useStore from "@/hooks/useStore";
const Nav = () => {
  const { store, actions } = useStore();
  return (
    <Flex h="50px" bgColor="brand.card" boxShadow={"md"} align="center">
      <Container>
        <Flex justify="space-between" align="center">
          <Text>React 101</Text>
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
