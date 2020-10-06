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

const App = ({ posts }) => {
  const { setListView, isListView, switchView } = useContext(GlobalContext);

  const { colorMode } = useColorMode();

  const width = useWindowWidth();

  useEffect(() => {
    width <= 768 && setListView(false);
  }, [width]);

  const initialData = posts && [posts];

  const { data: paginatedPosts, size, setSize } = useGetPosts(initialData);

  const isEmpty = paginatedPosts?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty ||
    (paginatedPosts &&
      paginatedPosts[paginatedPosts.length - 1]?.length < PAGE_SIZE);

  // const increaseSize = () => !isReachingEnd && setSize((prev) => prev + 1);
  //
  // useEffect(() => {
  //   window.addEventListener("scroll", () => handleScroll(increaseSize));
  //   return () =>
  //     window.removeEventListener("scroll", () => handleScroll(increaseSize));
  // }, []);

  if (!paginatedPosts) return "loading";

  const previews =
    paginatedPosts &&
    paginatedPosts.map((el) =>
      el.map(({ _id, title, subtitle, slug, mainImage, publishedAt, body }) => (
        <PostCard
          key={_id}
          title={title}
          subtitle={subtitle}
          slug={slug}
          mainImage={mainImage}
          publishedAt={publishedAt}
          body={body}
        />
      ))
    );

  const previewClass = isListView
    ? "md:mx-16 ip:ml-48"
    : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";

  return (
    <Layout>
      <Grid
        templateColumns="5fr auto 1fr"
        gap={6}
        color={color[colorMode]}
        className="article-body-container"
      >
        <Box>
          <div className="view-button-container">
            <IconsBtn
              whileHover={{ scale: 1.2 }}
              firstIcon={BsGrid}
              secondIcon={FiList}
              toggle={switchView}
              isToggled={isListView}
              className="ease"
            />
          </div>
          <Skeleton isLoaded={paginatedPosts}>
            <Box
              color={color[colorMode]}
              className={`preview-container ${previewClass}`}
            >
              {previews}
            </Box>
          </Skeleton>
          <div className="preview-button-container">
            <Button
              disabled={isReachingEnd}
              size="lg"
              rounded="full"
              onClick={() => !isReachingEnd && setSize(size + 1)}
              variant="outline"
              borderColor={borderColor[colorMode]}
              _focus={{ outline: "none" }}
            >
              {downChevron(isReachingEnd)}
            </Button>
          </div>
        </Box>
        <Divider
          borderColor={borderColor[colorMode]}
          orientation="vertical"
          my="6"
        />
        <Box mt="4">
          <Heading color={color[colorMode]} as="h1" fontSize="2xl">
            О сайте
          </Heading>
          <Text pb="6" color={colorAlt[colorMode]}>
            {ABOUT_TEXT}
          </Text>
          <Divider borderColor={borderColor[colorMode]} />
        </Box>
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts(0);
  return {
    props: {
      posts,
    },
  };
}

export default App;
