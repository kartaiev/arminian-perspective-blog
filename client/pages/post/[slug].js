import React from "react";
import Layout from "components/layout/Layout";
import { getSinglePost, getAllPosts } from "lib/api";
import PostCover from "../../components/shared/PostCover";
import PostBody from "../../components/single-post/PostBody";
import AuthorDate from "../../components/shared/AuthorDate";
import PostCategories from "../../components/single-post/PostCategories";
import { getAllSlugs } from "../../lib/api";
import Box from "@chakra-ui/core/dist/Box";

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllSlugs();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug: slug.current },
    })),
    fallback: false,
  };
}

const Post = ({
  post: { mainImage, title, subtitle, publishedAt, name, body, categories },
}) => {
  return (
    <Layout>
      <Box as="article" className="article-container">
        {mainImage && <PostCover mainImage={mainImage} title={title} />}
        <PostBody
          title={title}
          subtitle={subtitle}
          body={body}
          publishedAt={publishedAt}
          name={name}
          categories={categories}
        />
      </Box>
    </Layout>
  );
};

export default Post;
