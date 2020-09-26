import React from "react";
import { motion } from "framer-motion";

const IconsBtn = ({ firstIcon, secondIcon, toggle, isToggled }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      onClick={toggle}
      className="focus:outline-none"
    >
      {isToggled ? firstIcon : secondIcon}
    </motion.button>
  );
};

export default IconsBtn;
