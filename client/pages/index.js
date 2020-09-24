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
      mainImage,
      publishedAt = "",
    }) => (
      <PostCard
        key={_id}
        title={title}
        subtitle={subtitle}
        slug={slug}
        mainImage={mainImage}
        publishedAt={publishedAt}
      />
    )
  );

  return (
    <Layout>
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mt-6 lg:mx-32 xl:grid-cols-3 xl:gap-12">
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
