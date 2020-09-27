import React from "react";
import { urlFor } from "../lib/helpers";

const PostCover = ({ mainImage, title, isListView }) => {
  const mainImageContainer = isListView
    ? "w-1/2 relative"
    : "mainImage-container";

  return (
    <div className={mainImageContainer}>
      <img
        className="w-full h-full block object-cover top-0 left-0 align-top absolute"
        src={urlFor(mainImage).auto("format").url()}
        alt={title}
      />
    </div>
  );
};

export default PostCover;
