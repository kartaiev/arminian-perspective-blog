import React from "react";
import Nav from "components/layout/header/Nav";
import IconsBtn from "../../shared/IconsBtn";
import { MAIN_TITLE } from "../../../lib/vars";
import { useToggle } from "../../../hooks/useToggle";
import SearchInput from "./SearchInput";
import { FiMoon, FiSun, FiSearch } from "react-icons/fi";
import IconButton from "@chakra-ui/core/dist/IconButton";
import { AnimatePresence, motion } from "framer-motion";
import { Heading, useColorMode } from "@chakra-ui/core";
import { bgColor, borderColor, color } from "../../../customTheme";
import Box from "@chakra-ui/core/dist/Box";

const Header = () => {
  const { isToggled: isThemeChanged, toggle: changeTheme } = useToggle();
  const { isToggled: isSearchInput, toggle: switchToSearchInput } = useToggle();

  const { colorMode, toggleColorMode } = useColorMode();

  const MotionIconBtn = motion.custom(IconButton);
  const MotionBox = motion.custom(Box);
  const MotionHeading = motion.custom(Heading);

  const headerTitleClass = isSearchInput && "";

  const switchTheme = () => {
    changeTheme();
    toggleColorMode();
    console.log(colorMode);
  };

  return (
    <>
      <MotionBox
        borderBottom="1px"
        borderColor={borderColor[colorMode]}
        layout
        className="header-container"
        color={color[colorMode]}
      >
        <IconsBtn
          firstIcon={FiMoon}
          secondIcon={FiSun}
          toggle={switchTheme}
          isToggled={isThemeChanged}
        />
        <MotionHeading
          layout
          as="h1"
          color={color[colorMode]}
          fontSize={["xl", "2xl", "3xl", "5xl"]}
          className={`header-title ${headerTitleClass}`}
        >
          {MAIN_TITLE}
        </MotionHeading>

        {isSearchInput ? (
          <SearchInput switchToSearchInput={switchToSearchInput} />
        ) : (
          <MotionIconBtn
            whileHover={{ scale: 1.2 }}
            display="flex"
            alignItems="center"
            justifyContent="end"
            textAlign="center"
            aria-label="Call Sage"
            variant="unstyled"
            onClick={switchToSearchInput}
            fontSize="30px"
            icon={FiSearch}
          />
        )}
      </MotionBox>
      <Nav />
    </>
  );
};

export default Header;
