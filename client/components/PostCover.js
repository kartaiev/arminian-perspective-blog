import React from "react";
import { urlFor } from "../lib/helpers";
import { motion } from "framer-motion";

const PostCover = ({ mainImage, title }) => {
  const variants = {
    hover: { scale: 1.05 },
    off: { scale: 1 },
  };

  return (
    <motion.div
      onHover="hover"
      variants={variants}
      className="mainImage-container"
    >
      <img
        className="w-full h-full block object-cover top-0 left-0 align-top absolute"
        src={urlFor(mainImage).auto("format").url()}
        alt={title}
      />
    </motion.div>
  );
};

export default PostCover;
