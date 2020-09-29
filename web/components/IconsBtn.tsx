import React from "react";
import { motion } from "framer-motion";

type Props = {
  firstIcon: JSX.Element;
  secondIcon: JSX.Element;
  toggle(): void;
  isToggled: boolean;
};

const IconsBtn = ({ firstIcon, secondIcon, toggle, isToggled }: Props) => (
  <motion.button
    whileHover={{ scale: 1.2 }}
    onClick={toggle}
    className="focus:outline-none"
  >
    {isToggled ? firstIcon : secondIcon}
  </motion.button>
);

export default IconsBtn;
