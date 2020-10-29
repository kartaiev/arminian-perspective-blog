import React, { useContext } from "react";
import { urlFor } from "../../lib/helpers";
import { GlobalContext } from "../../context/globalContext";
import { AspectRatioBox } from "@chakra-ui/core";
import Image from "next/image";
import {IPost} from '../../interfaces/IPost';

const PostCover = ({ mainImage, title }: IPost) => {
  const { isListView } = useContext(GlobalContext);

  const coverImageContainer = isListView && "w-1/2";

  return (
    <AspectRatioBox
      ratio={16 / 9}
      className={`${coverImageContainer} coverImage-container`}
    >
      <Image
        unsized
        className="coverImage"
        src={mainImage}
        alt={title}
      />
    </AspectRatioBox>
  );
};

export default PostCover;
