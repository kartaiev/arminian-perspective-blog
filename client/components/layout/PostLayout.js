import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { bgColor } from "../../customTheme";
import { Box, useColorMode } from "@chakra-ui/core";

const PostLayout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box h="100%" px="6" bg={bgColor[colorMode]}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default PostLayout;
