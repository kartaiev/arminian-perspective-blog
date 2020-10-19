import { useToggle } from "../../../hooks/useToggle";
import navLinks from "./navLinks";
import React from "react";
import Box from "@chakra-ui/core/dist/Box";
import { borderColor, color } from "../../../customTheme";
import { List, useColorMode } from "@chakra-ui/core";

const Nav = () => {
  const { isToggled, toggle } = useToggle();
  const { colorMode } = useColorMode();

  return (
    <Box color={color[colorMode]}>
      <Box
        borderBottom="1px"
        borderColor={borderColor[colorMode]}
        className="nav-container"
      >
        <List className="nav-list-container">{navLinks()}</List>
        <button onClick={toggle} className="menu-button">
          меню
        </button>
      </Box>
      {isToggled && (
        <List
          py="2"
          borderColor={borderColor[colorMode]}
          className="nav-list-container-mobile"
        >
          {navLinks()}
        </List>
      )}
    </Box>
  );
};

export default Nav;
