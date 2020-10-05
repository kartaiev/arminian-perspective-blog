import React from "react";
import Nav from "components/layout/Nav";
import { moonIcon, searchIcon, sunIcon } from "../../lib/icons";
import IconsBtn from "../shared/IconsBtn";
import { MAIN_TITLE } from "../../lib/vars";
import { useToggle } from "../../hooks/useToggle";
import SearchInput from "./SearchInput";

const Header = () => {
  const { isToggled: isThemeChanged, toggle: changeTheme } = useToggle();
  const { isToggled: isSearchInput, toggle: switchToSearchInput } = useToggle();

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
        <h1 className={`header-title ${headerTitleClass}`}>{MAIN_TITLE}</h1>

        {isSearchInput ? (
          <SearchInput switchToSearchInput={switchToSearchInput} />
        ) : (
          <button onClick={switchToSearchInput}>{searchIcon}</button>
        )}
      </div>
      <Nav />
    </>
  );
};

export default Header;
