import IconsBtn from "../../shared/IconsBtn";
import { MAIN_TITLE } from "../../../lib/vars";
import { useToggle } from "../../../hooks/useToggle";
import SearchInput from "./SearchInput";
import { FiMoon, FiSearch, FiSun } from "react-icons/fi";
import IconButton from "@chakra-ui/core/dist/IconButton";
import { motion } from "framer-motion";
import { Box, Flex, Heading, useColorMode } from "@chakra-ui/core";
import { borderColor, color } from "../../../customTheme";
import React from "react";
import { AnimateSharedLayout } from "framer-motion";

const Header = () => {
  const { isToggled: isThemeChanged, toggle: changeTheme } = useToggle();
  const { isToggled: isSearchInput, toggle: switchToSearchInput } = useToggle();

  const { colorMode, toggleColorMode } = useColorMode();

  const MotionIconBtn = motion.custom(IconButton);
  const MotionHeading = motion.custom(Heading);

  const headerTitleClass = isSearchInput && "heading-to-center";

  const switchTheme = () => {
    changeTheme();
    toggleColorMode();
  };

  return (
      <Flex
        as="header"
        borderBottom="1px"
        borderColor={borderColor[colorMode]}
        className="header-container"
      >
        <IconsBtn
          firstIcon={FiSun}
          secondIcon={FiMoon}
          toggle={switchTheme}
          isToggled={isThemeChanged}
        />
        <MotionHeading
          layout
          as="h1"
          color={color[colorMode]}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "5xl" }}
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
            aria-label="Call Sage"
            variant="unstyled"
            onClick={switchToSearchInput}
            fontSize="30px"
            icon={FiSearch}
          />
        )}
      </Flex>
  );
};

export default Header;
