import React from "react";
import Box from "@chakra-ui/core/dist/Box";
import { borderColor } from "../../../customTheme";
import { useColorMode, Divider } from "@chakra-ui/core";
import Categories from "./Categories";
import About from "./About";

const Sidebar = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="aside"
      mt="6"
      d={{ base: "none", xl: "block" }}
    >
      <About />
      <Divider borderColor={borderColor[colorMode]} />
      <Categories />
    </Box>
  );
};

export default Sidebar;
