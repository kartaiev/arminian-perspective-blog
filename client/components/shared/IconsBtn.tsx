import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/core";
import { motion } from "framer-motion";
import { color } from "../../customTheme";

const IconsBtn = ({ firstIcon, secondIcon, toggle, isToggled, }) => {
  const MotionIconBtn = motion.custom(IconButton);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MotionIconBtn
      color={color[colorMode]}
      whileHover={{ scale: 1.2 }}
      variant="unstyled"
      display="flex"
      alignItems="center"
      justifyContent="start"
      onClick={toggle}
      className='ease'
      fontSize="30px"
      icon={isToggled ? firstIcon : secondIcon}
      aria-label="icon-button"
      _focus={{ outline: "none" }}
    />
  );
};

export default IconsBtn;
