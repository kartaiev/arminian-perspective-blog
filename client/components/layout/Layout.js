import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { handleScroll } from "../../lib/helpers";
import { Box, useColorMode } from "@chakra-ui/core";
import { bgColor } from "../../customTheme";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box h="100%" bg={bgColor[colorMode]} px="6" overflowX="hidden" w="100%">
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
