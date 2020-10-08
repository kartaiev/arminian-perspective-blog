import React from "react";
import Box from "@chakra-ui/core/dist/Box";
import Heading from "@chakra-ui/core/dist/Heading";
import { borderColor, color, colorAlt } from "../../customTheme";
import Text from "@chakra-ui/core/dist/Text";
import { ABOUT_TEXT } from "../../lib/vars";
import Divider from "@chakra-ui/core/dist/Divider";
import Grid from "@chakra-ui/core/dist/Grid";
import { useColorMode } from "@chakra-ui/core";
import About from "./About";

const Aside = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="aside" mt="4">
      <About />
      <Divider borderColor={borderColor[colorMode]} />
    </Box>
  );
};

export default Aside;
