import React from "react";
import { Box, Heading, Stack, Input, Button, useToast } from "@chakra-ui/react";
import { atom, useRecoilState } from "recoil";
import Container from "@/components/atoms/Container";
import { useNavigate } from "react-router-dom";
import useAuth from "@/auth/useAuth";
const initialValue = {
  email: "",
  password: "",
};

const Auth = () => {
  const { authState, userLogin } = useAuth();
  const [auth, setAuth] = React.useState(initialValue);
  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userLogin(auth);
    if (response) {
      navigate("/create/post/private");
      toast({
        title: "Login Success",
        description: "You have successfully logged in",
        status: "success",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
      return;
    } else {
      toast({
        title: "Login Failed",
        description: "You have failed to log in",
        position: "top",

        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW={"600px"} margin={"auto"}>
      <Box>
        <Heading>Login</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <Stack direction={"column"} gap={5} my={5}>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email@gmail.com"
          />
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Auth;
