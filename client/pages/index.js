import React from "react";
import Layout from "../components/layout/Layout";
import PostCard from "../components/PostCard";
import { Tooltip } from "@chakra-ui/core";
import { getAllPosts } from "../lib/api";
import { useToggle } from "../hooks/useToggle";
import { motion } from "framer-motion";

const App = ({ posts = [] }) => {
  const { isToggled, toggle } = useToggle();

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
      <div className="hidden h-10 lg:px-16 xl:px-48 mt-6 lg:flex justify-start items-center">
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={toggle}
          className="focus:outline-none"
        >
          {isToggled ? (
            <Tooltip
              hasArrow
              bg="gray.600"
              color="white"
              label="отобразить сеткой"
              placement="top"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </Tooltip>
          ) : (
            <Tooltip hasArrow label="отобразить списком" placement="right-end">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </Tooltip>
          )}
        </motion.button>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mt-2 lg:mx-16 xl:mx-48 xl:grid-cols-3 xl:gap-12">
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
