import React, { useState } from "react";
import Input from "@chakra-ui/core/dist/Input";
import {
  IconButton,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/core";
import { FiSearch } from "react-icons/fi";
import Box from "@chakra-ui/core/dist/Box";
import { motion } from "framer-motion";
import {
  bgColor,
  bgColorReversed,
  borderColor,
  color,
  colorReversed,
} from "../../customTheme";

const SearchInput = ({ switchToSearchInput }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const { colorMode } = useColorMode();

  const MotionInput = motion.custom(Input);
  const MotionRightEl = motion.custom(InputRightElement);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(value);
      switchToSearchInput();
    }
  };

  const handleClick = () => {
    console.log(value);
    switchToSearchInput();
  };

  return (
    <InputGroup>
      <MotionInput
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        value={value}
        autoFocus
        onBlur={switchToSearchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="поиск"
        borderColor={borderColor[colorMode]}
        width={{ base: "250px", lg: "300px" }}
        variant="outline"
        rounded="full"
        _focus={{ outline: "none" }}
      />
      <MotionRightEl
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        rounded="full"
        bg={bgColorReversed[colorMode]}
        cursor="pointer"
        _hover={{ bg: "white", borderColor: "gray.50" }}
        children={
          <Box
            onClick={handleClick}
            as={FiSearch}
            color={colorReversed[colorMode]}
            size={{ base: "20px", lg: "30px" }}
          />
        }
      />
    </InputGroup>
  );
};

export default SearchInput;
