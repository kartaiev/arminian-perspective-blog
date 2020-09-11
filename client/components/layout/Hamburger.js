import React, { useContext } from "react";
import { GlobalContext } from "../../context/global.context";
import { motion } from "framer-motion";

const Hamburger = () => {
  const { open, isOpened } = useContext(GlobalContext);

  const topVariants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  const bottomVariants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  const visible = isOpened ? "invisible" : "visible";

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
      <div className={`h-mk w-full mb-1 bg-gray-600  ${visible}`} />
      <motion.div
        animate={isOpened ? "open" : "closed"}
        variants={bottomVariants}
        className="h-mk w-full bg-gray-600"
      />
    </button>
  );
};

export default Hamburger;
