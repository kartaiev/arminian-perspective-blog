import React from "react";
import Nav from "components/layout/Nav";
import { moonIcon, searchIcon, sunIcon } from "../../lib/icons";
import IconsBtn from "../IconsBtn";
import { MAIN_TITLE } from "../../lib/vars";
import { useToggle } from "../../hooks/useToggle";

const Header = () => {
  const { isToggled: isThemeChanged, toggle: changeTheme } = useToggle();
  return (
    <>
      <div className="h-24 border-b border-gray-300 flex items-center justify-between">
        <IconsBtn
          firstIcon={sunIcon}
          secondIcon={moonIcon}
          toggle={changeTheme}
          isToggled={isThemeChanged}
        />
        <h1 className="header-title lg:text-4xl xl:text-5xl letter-pressed">
          {MAIN_TITLE}
        </h1>
        {searchIcon}
      </div>
      <Nav />
    </>
  );
};

export default Header;
