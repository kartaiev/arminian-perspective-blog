import React from "react";
import { color, colorAlt } from "../../customTheme";
import { ABOUT_TEXT } from "../../lib/vars";
import { useColorMode, Text, Heading } from "@chakra-ui/core";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Heading color={color[colorMode]} as="h1" fontSize="2xl">
        О сайте
      </Heading>
      <Text pb="6" color={colorAlt[colorMode]}>
        {ABOUT_TEXT}
      </Text>
    </>
  );
};

export default About;
