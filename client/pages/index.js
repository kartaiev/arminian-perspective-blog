import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { getAllPosts } from "../lib/api";
import { useToggle } from "../hooks/useToggle";
import IconsBtn from "../components/IconsBtn";
import {
  gridIcon,
  listIcon,
  rightArrow,
  leftArrow,
  downChevron,
} from "../lib/icons";
import PostCard from "../components/posts-preview/PostCard";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { dataDDD, fetcher, getKey, useGetPosts } from "../actions";
import { Button } from "semantic-ui-react";
import { PAGE_SIZE } from "../lib/vars";
import { useSWRInfinite } from "swr";

const App = ({ posts }) => {
  const {
    isToggled: isListView,
    setToggle: setListView,
    toggle: switchView,
  } = useToggle();

  const [index, setIndex] = useState(0);

  const width = useWindowWidth();

  useEffect(() => {
    width <= 768 && setListView(false);
  }, [width]);

  const initialData = [posts];

  const { data: paginatedPosts, size, setSize } = useGetPosts(initialData);

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
          isListView={isListView}
        />
      ))
    );

  const gridClass = isListView
    ? "md:mx-16"
    : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";

  return (
    <Layout>
      {!paginatedPosts && (
        <div className="h-full w-full flex items-center justify-center">
          loading...
        </div>
      )}
      <div className="hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64">
        <IconsBtn
          firstIcon={gridIcon}
          secondIcon={listIcon}
          isListView={isListView}
          switchView={switchView}
        />
      </div>
      <div
        className={`mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ${gridClass}`}
      >
        {previews}
      </div>
      <div className="flex  items-center justify-center my-6 lg:my-12 lg:mx-16 ip:mx-64">
        <button
          className="border flex flex-col items-center justify-center border-gray-400  px-4 py-2 rounded-lg hover:border-gray-800"
          onClick={() => setSize(size + 1)}
        >
          {downChevron}
        </button>
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
