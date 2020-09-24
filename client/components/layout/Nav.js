import React, { useContext, useState } from "react";
import { GlobalContext } from "context/global.context";
import { motion } from "framer-motion";

const Nav = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened((state) => !state);
  };

  const { links } = useContext(GlobalContext);

  return (
    <div>
      <div className="h-10 lg:h-16 w-full border-b border-gray-300 flex items-center justify-center">
        <ul className="hidden lg:w:2/3 xl:w-1/2  h-full lg:flex lg:items-center lg:justify-around">
          {links}
        </ul>
        <button onClick={handleOpen} className="lg:hidden  focus:outline-none">
          меню
        </button>
      </div>
      {opened && (
        <ul className="h-26 py-2 flex items-center justify-center flex-wrap border-b border-gray-300">
          {links}
        </ul>
      )}
    </div>
  );
};

export default Nav;
