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
    <motion.div layout>
      <div className="h-10 lg:h-16 w-full border-b border-gray-300 flex items-center justify-center">
        <ul className="hidden w-1/3 h-full lg:flex items-center justify-between">
          {links}
        </ul>
        <motion.button
          layout
          onClick={handleOpen}
          className="lg:hidden  focus:outline-none"
        >
          меню
        </motion.button>
      </div>
      {opened && (
        <motion.ul
          layout
          className="h-26 py-2 flex items-center justify-center flex-wrap border-b border-gray-300"
        >
          {links}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Nav;
