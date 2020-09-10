import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import client from "../client";
import groq from "groq";
import PostCard from "../components/PostCard";
import { GlobalContext } from "../context/global.context";

const App = ({ posts = [] }) => {
  const { isOpened } = useContext(GlobalContext);

  const previews = posts.map(
    ({ _id, title = "", slug = "", _updatedAt = "", mainImage }) => (
      <PostCard
        key={_id}
        title={title}
        slug={slug}
        updatedAt={_updatedAt}
        mainImage={mainImage}
      />
    )
  );

  return (
    <Layout>
      {!isOpened && (
        <div className="mx-4 mb-6 grid grid-cols-1 gap-6">{previews}</div>
      )}
    </Layout>
  );
};

App.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `),
});

export default App;
