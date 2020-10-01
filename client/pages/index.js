import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { getAllPosts } from "../lib/api";
import IconsBtn from "../components/IconsBtn";
import { downChevron, gridIcon, listIcon } from "../lib/icons";
import PostCard from "../components/posts-preview/PostCard";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { handleScroll } from "../lib/helpers";
import { GlobalContext } from "../context/global.context";

import { useGetPosts } from "../actions";
import Button from "@chakra-ui/core/dist/Button";
import { Skeleton } from "@chakra-ui/core";
import { PAGE_SIZE } from "../lib/vars";

const App = ({ posts }) => {
  const { setListView, isListView, switchView } = useContext(GlobalContext);

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

  const increaseSize = () => !isReachingEnd && setSize((prev) => prev + 1);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(increaseSize));
    return () =>
      window.removeEventListener("scroll", () => handleScroll(increaseSize));
  }, []);

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

  const gridClass = isListView
    ? "md:mx-16"
    : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";

  return (
    <Layout>
      <div className="hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64">
        <IconsBtn
          firstIcon={gridIcon}
          secondIcon={listIcon}
          toggle={switchView}
          isToggled={isListView}
        />
      </div>
      <Skeleton isLoaded={paginatedPosts}>
        <div
          className={`mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ${gridClass}`}
        >
          {previews}
        </div>
      </Skeleton>
      <div className="flex  items-center justify-center my-6 lg:my-12 lg:mx-16 ip:mx-64">
        <Button
          disabled={isReachingEnd}
          onClick={() => !isReachingEnd && setSize(size + 1)}
          variant="outline"
        >
          {downChevron}
        </Button>
      </div>
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
