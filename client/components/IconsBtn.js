import React from "react";
import { motion } from "framer-motion";

const IconsBtn = ({ firstIcon, secondIcon, switchView, isListView }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      onClick={switchView}
      className="focus:outline-none"
    >
      {isListView ? firstIcon : secondIcon}
    </motion.button>
  );
};

export default IconsBtn;
