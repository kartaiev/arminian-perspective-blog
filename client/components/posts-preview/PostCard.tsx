import React, {ReactNode, useContext} from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import AuthorDate from "../shared/AuthorDate";
import PostCover from "../shared/PostCover";
import { GlobalContext } from "../../context/globalContext";
import Box from "@chakra-ui/core/dist/Box";
import Heading from "@chakra-ui/core/dist/Heading";
import { borderColor, color } from "../../customTheme";
import { useColorMode } from "@chakra-ui/core";
import {IPost} from '../../interfaces/IPost';

const PostCard = ({ slug, mainImage, subtitle, publishedAt, title, name }: IPost) => {
  const { isListView } = useContext(GlobalContext);

  const MotionBox = motion.custom(Box);

  const { colorMode } = useColorMode();

  const variants = {
    hover: {
      scale: 1.02,
    },
    off: { scale: 1 },
  };

  const cardClass = isListView && "h-64 flex";

  const subtitleClass = isListView && " pr-24";

  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <MotionBox
          as="a"
          mt="3"
          shadow="sm"
          whileHover="hover"
          variants={variants}
          borderWidth="1px"
          borderColor={borderColor[colorMode]}
          rounded="lg"
          overflow="hidden"
          className={`card-container ${cardClass}`}
        >
          <PostCover mainImage={mainImage} title={title} />
          <div className="card-content">
            <div>
              <Heading
                color={color[colorMode]}
                fontSize="2xl"
                as="h1"
                className="card-title"
              >
                {title}
              </Heading>
              <h2 className={`card-subtitle ${subtitleClass}`}>{subtitle}</h2>
            </div>
            <AuthorDate secondProp={name} publishedAt={publishedAt} />
          </div>
        </MotionBox>
      </Link>
    )
  );
};

export default PostCard;
