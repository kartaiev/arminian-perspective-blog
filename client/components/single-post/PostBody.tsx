import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import AuthorDate from "../shared/AuthorDate";
import { useColorMode, Heading, Box } from "@chakra-ui/core";
import { color, colorAlt } from "../../customTheme";
import PostCategories from "./PostCategories";
import {IPost} from '../../interfaces/IPost';

const PostBody = ({ body, title, subtitle, publishedAt, name, categories }: IPost) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box color={color[colorMode]}>
        <AuthorDate publishedAt={publishedAt} secondProp={name} />
        <Heading
          as="h1"
          my="6"
          fontSize="4xl"
          color={color[colorMode]}
          className="article-body-title"
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          fontSize="2xl"
          color={colorAlt[colorMode]}
          className="article-body-subtitle"
        >
          {subtitle}
        </Heading>
        <BlockContent className="my-6" blocks={body} />
      </Box>

      <Box>{categories && <PostCategories categories={categories} />}</Box>
    </>
  );
};

export default PostBody;
