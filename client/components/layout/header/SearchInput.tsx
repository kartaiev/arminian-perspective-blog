import React, { useState } from "react";
import Input from "@chakra-ui/core/dist/Input";
import { InputGroup, InputRightElement, useColorMode } from "@chakra-ui/core";
import { FiSearch } from "react-icons/fi";
import Box from "@chakra-ui/core/dist/Box";
import { motion } from "framer-motion";
import {
  bgColorReversed,
  borderColor,
  colorReversed,
} from "../../../customTheme";
import { AnimateSharedLayout } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const SearchInput = ({ switchToSearchInput }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const { colorMode } = useColorMode();

  const MotionInput = motion.custom(Input);
  const MotionInputGroup = motion.custom(InputGroup);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      switchToSearchInput();
    }
  };

  const handleClick = () => {
    switchToSearchInput();
  };

  return (
      <MotionInputGroup layout>
        <MotionInput
          layout
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 300 }}
          value={value}
          autoFocus
          onBlur={switchToSearchInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="поиск"
          borderColor={borderColor[colorMode]}
          w={{ base: "250px", lg: "350px" }}
          variant="outline"
          rounded="full"
          _focus={{ outline: "none" }}
        />
        <InputRightElement
          rounded="full"
          bg={bgColorReversed[colorMode]}
          cursor="pointer"
          children={
            <Box
              onClick={handleClick}
              as={FiSearch}
              color={colorReversed[colorMode]}
              size={{ base: "20px", lg: "30px" }}
            />
          }
        />
      </MotionInputGroup>
  );
};

export default SearchInput;
