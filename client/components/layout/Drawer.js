import React, { useContext } from "react";
import { GlobalContext } from "../../context/global.context";
import { motion } from "framer-motion";

const Drawer = () => {
  const { links, isOpened } = useContext(GlobalContext);

  const variants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  return (
    <motion.ul
      animate={isOpened ? "open" : "closed"}
      variants={variants}
      className="uppercase tracking-wide font-menu text-gray-700 text-xl h-full z-10 bg-white w-full absolute left-0 flex flex-col justify-center items-center lg:hidden"
    >
      {links}
    </motion.ul>
  );
};

export default Drawer;
