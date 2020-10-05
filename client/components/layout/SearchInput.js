import React, { useState } from "react";
import Input from "@chakra-ui/core/dist/Input";
import { InputRightElement, Icon, InputGroup } from "@chakra-ui/core";

const SearchInput = ({ switchToSearchInput }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

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
      <Input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="поиск"
        borderColor="gray.300"
        width={{ base: "250px", lg: "300px" }}
        variant="outline"
        rounded="full"
        _focus={{ bg: "white", borderColor: "gray.900" }}
      />
      <InputRightElement
        rounded="full"
        bg="gray.900"
        cursor="pointer"
        _hover={{ bg: "white", borderColor: "gray.50" }}
        children={
          <Icon
            onClick={handleClick}
            name="search-2"
            color="white"
            size={{ base: "20px", lg: "24px" }}
          />
        }
      />
    </InputGroup>
  );
};

export default SearchInput;
