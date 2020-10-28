import React from "react";
import { borderColor } from "../../../customTheme";
import { useColorMode, Box } from "@chakra-ui/core";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      mt="auto"
      borderColor={borderColor[colorMode]}
      className="footer"
    >
      <div className="text-sm">&copy; copyright 2020</div>
    </Box>
  );
};

export default Footer;
