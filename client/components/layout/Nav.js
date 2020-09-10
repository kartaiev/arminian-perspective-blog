import React, { useContext } from "react";
import Hamburger from "./Hamburger";
import { GlobalContext } from "../../context/global.context";

const Nav = () => {
  const { links } = useContext(GlobalContext);
  return (
    <nav className="uppercase tracking-wide font-menu text-gray-700 text-xl">
      <ul className="hidden xl:flex">{links}</ul>
      <Hamburger />
    </nav>
  );
};

export default Nav;
