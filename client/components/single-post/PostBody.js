import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import AuthorDate from "../shared/AuthorDate";
import Box from "@chakra-ui/core/dist/Box";
import Heading from "@chakra-ui/core/dist/Heading";
import { useColorMode } from "@chakra-ui/core";
import { color, colorAlt, borderColor } from "../../customTheme";
import Grid from "@chakra-ui/core/dist/Grid";
import Divider from "@chakra-ui/core/dist/Divider";
import PostCategories from "./PostCategories";

const PostBody = ({ body, title, subtitle, publishedAt, name, categories }) => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      templateColumns="3fr auto 1fr"
      gap={6}
      color={color[colorMode]}
      className="article-body-container"
    >
      <Box>
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
      <Divider
        borderColor={borderColor[colorMode]}
        orientation="vertical"
        my="6"
      />
      <Box>{categories && <PostCategories categories={categories} />}</Box>
    </Grid>
  );
};

export default PostBody;
