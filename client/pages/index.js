import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { getAllPosts } from "../lib/api";
import IconsBtn from "../components/shared/IconsBtn";
import { downChevron } from "../lib/icons";
import PostCard from "../components/posts-preview/PostCard";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { GlobalContext } from "../context/global.context";
import { FiList } from "react-icons/fi";
import { useGetPosts } from "../actions";
import Button from "@chakra-ui/core/dist/Button";
import { Skeleton, useColorMode } from "@chakra-ui/core";
import { ABOUT_TEXT, PAGE_SIZE } from "../lib/vars";
import { BsGrid } from "react-icons/bs";
import Box from "@chakra-ui/core/dist/Box";
import { borderColor, color, colorAlt } from "../customTheme";
import Grid from "@chakra-ui/core/dist/Grid";
import Divider from "@chakra-ui/core/dist/Divider";
import Text from "@chakra-ui/core/dist/Text";
import Heading from "@chakra-ui/core/dist/Heading";
import Previews from "../components/posts-preview/Previews";
import Aside from "../components/aside/Aside";

export async function getStaticProps() {
  const posts = await getAllPosts(0);
  return {
    props: {
      posts,
    },
  };
}

const App = ({ posts }) => {
  const { setListView } = useContext(GlobalContext);

  const { colorMode } = useColorMode();

  const width = useWindowWidth();

  useEffect(() => {
    width <= 768 && setListView(false);
  }, [width]);

  return (
    <Layout>
      <Grid
        templateColumns="5fr auto 1fr"
        gap={6}
        color={color[colorMode]}
        className="article-body-container"
      >
        <Previews posts={posts} />
        <Divider
          borderColor={borderColor[colorMode]}
          orientation="vertical"
          my="6"
        />
        <Aside />
      </Grid>
    </Layout>
  );
};

export default App;
