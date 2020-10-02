import React, { useContext } from "react";
import { urlFor } from "../../lib/helpers";
import { GlobalContext } from "../../context/global.context";
import { AspectRatioBox } from "@chakra-ui/core";

const PostCover = ({ mainImage, title }) => {
  const { isListView } = useContext(GlobalContext);

  const coverImageContainer = isListView && "w-1/2";

  return (
    <AspectRatioBox
      ratio={16 / 9}
      className={`${coverImageContainer} coverImage-container`}
    >
      <img
        className="coverImage"
        src={urlFor(mainImage).auto("format").url()}
        alt={title}
      />
    </AspectRatioBox>
  );
};

export default PostCover;
