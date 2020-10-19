import React, { useContext, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { getAllPosts } from "../lib/api";
import { GlobalContext } from "../context/global.context";
import Previews from "../components/posts-preview/Previews";

export async function getStaticProps() {
  const posts = await getAllPosts(0);
  return {
    props: {
      posts,
    },
  };
}

const App = ({ posts }) => {
  const { width, setListView } = useContext(GlobalContext);

  useEffect(() => {
    width <= 768 && setListView(false);
  }, [width]);

  return (
    <MainLayout>
      <Previews posts={posts} />
    </MainLayout>
  );
};

export default App;
