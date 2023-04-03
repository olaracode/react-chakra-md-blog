import React from "react";
import { useToast } from "@chakra-ui/react";
import { useRecoilState, atom } from "recoil";

const BASE_URL = "https://express-blog-xa7v.onrender.com";
export const authState = atom({
  key: "authToken",
  default: "",
});

const useAuth = () => {
  const [authToken, setAuthToken] = useRecoilState(authState);
  const toast = useToast();
  const userLogin = async (user) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.token) {
        setAuthToken(data.token);

        localStorage.setItem("token", data.token);
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  React.useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setAuthToken(localToken);
    }
  }, []);
  return {
    authToken,
    userLogin,
  };
};

export default useAuth;
