import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { bgColor, color } from "../../customTheme";
import { Box, useColorMode } from "@chakra-ui/core";

const PostLayout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box px="6" bg={bgColor[colorMode]} color={color[colorMode]}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default PostLayout;
