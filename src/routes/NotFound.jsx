import React from "react";
import Container from "@/components/atoms/Container";
import { useNavigate } from "react-router-dom";
import { Image, Box, Text, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import img from "@/assets/imgs/react-logo.png";
const NotFound = () => {
  const toast = useToast();
  const navigate = useNavigate();
  React.useEffect(() => {
    toast({
      title: "404",
      description: "Pagina no encontrada",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <Container>
      <Text textAlign={"center"}>404</Text>
      <Box
        mt={15}
        as={motion.div}
        animate={{
          rotate: 360,
          transition: {
            ease: "linear",
            duration: 100,
            repeat: Infinity,
            delay: 1,
          },
        }}
      >
        <Image src={img} />
      </Box>
    </Container>
  );
};

export default NotFound;
