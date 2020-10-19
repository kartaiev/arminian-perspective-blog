import React from "react";
import MainLayout from "components/layout/MainLayout";
import { getSinglePost } from "lib/api";
import PostCover from "../../components/shared/PostCover";
import PostBody from "../../components/single-post/PostBody";
import { getAllSlugs } from "../../lib/api";
import Box from "@chakra-ui/core/dist/Box";
import PostLayout from "../../components/layout/PostLayout";

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
    <PostLayout>
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
    </PostLayout>
  );
};

export default Post;
