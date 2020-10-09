import React from "react";
import Box from "@chakra-ui/core/dist/Box";
import { borderColor } from "../../customTheme";
import Divider from "@chakra-ui/core/dist/Divider";
import { useColorMode } from "@chakra-ui/core";
import About from "./About";
import Categories from "./Categories";

const Aside = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="aside" mt="6">
      <About />
      <Divider borderColor={borderColor[colorMode]} />
      <Categories />
    </Box>
  );
};

export default Aside;
