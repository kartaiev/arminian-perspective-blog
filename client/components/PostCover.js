import React, { useContext } from "react";
import { urlFor } from "../lib/helpers";
import { GlobalContext } from "../context/global.context";

const PostCover = ({ mainImage, title }) => {
  const { isListView } = useContext(GlobalContext);

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
