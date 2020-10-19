import React from "react";
import { borderColor } from "../../../customTheme";
import { useColorMode } from "@chakra-ui/core";
import Box from "@chakra-ui/core/dist/Box";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="footer" borderColor={borderColor[colorMode]} className="footer">
      <div className="text-sm">&copy; copyright 2020</div>
    </Box>
  );
};

export default Footer;
