import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import PostGridCard from "../components/posts-preview/PostGridCard";

import { getAllPosts } from "../lib/api";
import { useToggle } from "../hooks/useToggle";

import IconsBtn from "../components/IconsBtn";
import { gridIcon, listIcon } from "../lib/icons";
import PostListCard from "../components/posts-preview/PostListCard";
import { useWindowWidth } from "../hooks/useWindowWidth";

const App = ({ posts = [] }) => {
  const { isToggled, setToggle, toggle } = useToggle();

  const width = useWindowWidth();

  useEffect(() => {
    width <= 768 && setToggle(false);
  }, [width]);

  const gridClass = isToggled
    ? "md:mx-16 lg:mx-16 xl:mx-64"
    : "ip:grid-cols-2 lg:grid-cols-2 lg:mt-2 lg:mx-16 xl:mx-64 xl:grid-cols-2 ip:grid-cols-3 xl:gap-12";

  const previews = posts.map(
    ({ _id, title, subtitle, slug, mainImage, publishedAt, body }) =>
      isToggled ? (
        <PostListCard
          key={_id}
          title={title}
          subtitle={subtitle}
          slug={slug}
          mainImage={mainImage}
          publishedAt={publishedAt}
          body={body}
          isToggled={isToggled}
        />
      ) : (
        <PostGridCard
          key={_id}
          title={title}
          subtitle={subtitle}
          slug={slug}
          mainImage={mainImage}
          publishedAt={publishedAt}
          isToggled={isToggled}
        />
      )
  );

  return (
    <Layout>
      <div className="hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-64">
        <IconsBtn
          firstIcon={gridIcon}
          secondIcon={listIcon}
          isToggled={isToggled}
          toggle={toggle}
        />
      </div>
      <div className={`mb-6 grid grid-cols-1 gap-6 ${gridClass}`}>
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
