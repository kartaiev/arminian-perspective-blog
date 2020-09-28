import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { getAllPosts } from "../lib/api";
import { useToggle } from "../hooks/useToggle";
import IconsBtn from "../components/IconsBtn";
import { gridIcon, listIcon } from "../lib/icons";
import PostCard from "../components/posts-preview/PostCard";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useGetPosts } from "../actions";
import Spinner from "@chakra-ui/core/dist/Spinner";

const App = ({ posts }) => {
  const {
    isToggled: isListView,
    setToggle: setListView,
    toggle: switchView,
  } = useToggle();

  const width = useWindowWidth();

  useEffect(() => {
    width <= 768 && setListView(false);
  }, [width]);

  const { data, error } = useGetPosts();

  const previews = posts.map(
    ({ _id, title, subtitle, slug, mainImage, publishedAt, body }) => (
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
    )
  );

  const gridClass = isListView
    ? "md:mx-16"
    : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";

  return (
    <Layout>
      {!data && (
        <div className="h-full w-full flex items-center justify-center">
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.800"
          />
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
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default App;
