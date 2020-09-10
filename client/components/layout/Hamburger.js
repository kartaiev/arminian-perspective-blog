import React, { useContext } from "react";
import { GlobalContext } from "../../context/global.context";
import { motion } from "framer-motion";

const Hamburger = () => {
  const { open, isOpened } = useContext(GlobalContext);

  const topVariants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  const middleVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomVariants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <button
      onClick={open}
      className="h-full w-5 outline-none focus:outline-none z-40 flex flex-col justify-center xl:hidden"
    >
      <motion.div
        animate={isOpened ? "open" : "closed"}
        variants={topVariants}
        className="h-mk w-full mb-1 bg-gray-600"
      />
      <motion.div
        animate={isOpened ? "open" : "closed"}
        variants={middleVariants}
        className="h-mk w-full mb-1 bg-gray-600"
      />
      <motion.div
        animate={isOpened ? "open" : "closed"}
        variants={bottomVariants}
        className="h-mk w-full bg-gray-600"
      />
    </button>
  );
};

export default Hamburger;
