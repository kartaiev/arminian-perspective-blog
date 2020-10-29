import React, { useContext, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { getAllPosts } from "../lib/api";
import { GlobalContext } from "../context/globalContext";
import Previews from "../components/posts-preview/Previews";
import { GetStaticProps } from "next";
import { IPost } from "../interfaces/IPost";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(0);
  return {
    props: {
      posts,
    },
  };
};

const App = ({ posts }: { posts: IPost[] }) => {
  const { width, setListView } = useContext(GlobalContext);


  width <= 768 && setListView(false);

  return (
    <MainLayout>
      <Previews posts={posts} />
    </MainLayout>
  );
};

export default App;
