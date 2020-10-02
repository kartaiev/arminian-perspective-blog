import React from "react";
import Nav from "components/layout/Nav";
import { moonIcon, searchIcon, sunIcon } from "../../lib/icons";
import IconsBtn from "../shared/IconsBtn";
import { MAIN_TITLE } from "../../lib/vars";
import { useToggle } from "../../hooks/useToggle";

const Header = () => {
  const { isToggled: isThemeChanged, toggle: changeTheme } = useToggle();

  return (
    <>
      <div className="header-container">
        <IconsBtn
          firstIcon={sunIcon}
          secondIcon={moonIcon}
          toggle={changeTheme}
          isToggled={isThemeChanged}
          className="ease"
        />
        <h1 className="header-title">{MAIN_TITLE}</h1>
        {searchIcon}
      </div>
      <Nav />
    </>
  );
};

export default Header;
