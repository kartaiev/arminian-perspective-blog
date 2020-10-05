import React from "react";
import { motion } from "framer-motion";
import Nav from "components/layout/Nav";
import { moonIcon, searchIcon, sunIcon } from "../../lib/icons";
import IconsBtn from "../shared/IconsBtn";
import { MAIN_TITLE } from "../../lib/vars";
import { useToggle } from "../../hooks/useToggle";
import SearchInput from "./SearchInput";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Icon from "@chakra-ui/core/dist/Icon";

const Header = () => {
  const { isToggled: isThemeChanged, toggle: changeTheme } = useToggle();
  const { isToggled: isSearchInput, toggle: switchToSearchInput } = useToggle();
  const width = useWindowWidth();

  const headerTitleClass = isSearchInput && "ml-300px";

  return (
    <>
      <div className="header-container">
        <IconsBtn
          firstIcon={sunIcon}
          secondIcon={moonIcon}
          toggle={changeTheme}
          isToggled={isThemeChanged}
        />
        {width >= 768 ? (
          <h1 className={`header-title ${headerTitleClass}`}>{MAIN_TITLE}</h1>
        ) : (
          !isSearchInput && (
            <h1 className={`header-title ${headerTitleClass}`}>{MAIN_TITLE}</h1>
          )
        )}

        {isSearchInput ? (
          <SearchInput switchToSearchInput={switchToSearchInput} />
        ) : (
          <motion.button
            className="ease"
            whileHover={{ scale: 1.2 }}
            onClick={switchToSearchInput}
          >
            <Icon name="search-2" size={"24px"} />
          </motion.button>
        )}
      </div>
      <Nav />
    </>
  );
};

export default Header;
