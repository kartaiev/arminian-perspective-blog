import React from "react";
import { moonIcon, searchIcon, sunIcon } from "../../lib/icons";
import IconsBtn from "../IconsBtn";
import Nav from "./Nav";
import { useToggle } from "../../hooks/useToggle";
import { MAIN_TITLE } from "../../lib/vars";

const Header: React.FC = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <>
      <div className="header-container">
        <IconsBtn
          firstIcon={sunIcon}
          secondIcon={moonIcon}
          isToggled={isToggled}
          toggle={toggle}
        />
        <h1 className="header-title lg:text-4xl xl:text-5xl">{MAIN_TITLE}</h1>
        {searchIcon}
      </div>
      <Nav />
    </>
  );
};

export default Header;
