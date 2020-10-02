import { useToggle } from "../../hooks/useToggle";
import navLinks from "./navLinks";
import React from "react";

const Nav = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <div className="nav-container">
        <ul className="nav-list-container">
          {navLinks()}
        </ul>
        <button onClick={toggle} className="menu-button">
          меню
        </button>
      </div>
      {isToggled && (
        <ul className="nav-list-container-mobile">
          {navLinks()}
        </ul>
      )}
    </div>
  );
};

export default Nav;
