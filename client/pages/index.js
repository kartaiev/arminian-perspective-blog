import React from "react";
import Layout from "../components/layout/Layout";
import client from "../client";
import groq from "groq";
import Link from "next/link";
import { urlFor } from "../lib/helpers";
import PostCard from "../components/PostCard";

const App = ({ posts = [] }) => {
  const previews = posts.map(
    ({ _id, title = "", slug = "", _updatedAt = "", mainImage }) => (
      <PostCard
        key={_id}
        _id={_id}
        title={title}
        slug={slug}
        _updatedAt={_updatedAt}
        mainImage={mainImage}
      />
    )
  );
  return (
    <Layout>
      <div className="mx-4 mb-12 grid grid-cols-1 gap-6">{previews}</div>
    </Layout>
  );
};

App.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `),
});

export default App;
