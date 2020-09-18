import React from "react";
import Layout from "../components/layout/Layout";
import PostCard from "../components/PostCard";

import { getAllPosts } from "../lib/api";

const App = ({ posts = [] }) => {
  const previews = posts.map(
    ({
      _id,
      title = "",
      subtitle = "",
      slug = "",
      _updatedAt = "",
      mainImage,
    }) => (
      <PostCard
        key={_id}
        title={title}
        subtitle={subtitle}
        slug={slug}
        updatedAt={_updatedAt}
        mainImage={mainImage}
      />
    )
  );

  return (
    <Layout>
      <div className="mb-6 grid grid-cols-1 gap-6">{previews}</div>
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
