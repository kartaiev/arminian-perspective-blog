import React from "react";
import { Heading, useColorMode } from "@chakra-ui/core";
import { color } from "../../../customTheme";

const Categories = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Heading color={color[colorMode]} as="h1" mt="6" fontSize="2xl">
        Категории
      </Heading>
    </>
  );
};

export default Categories;
