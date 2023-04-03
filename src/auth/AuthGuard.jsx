import React from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const AuthGuard = ({ children }) => {
  const { authToken } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  React.useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!authToken && !localToken) {
      navigate("/auth");
      toast({
        title: "You are not logged in",
        description: "Please login to continue",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [authToken]);
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuard;
