import React from "react";
import Layout from "components/layout/Layout";
import { getSinglePost, getAllPosts } from "lib/api";
import PostCover from "../../components/PostCover";
import PostBody from "../../components/PostBody";
import PostAuthorDate from "../../components/PostAuthorDate";
import PostCategories from "../../components/layout/PostCatigories";

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
  console.log(post);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug.current },
    })),
    fallback: false,
  };
}

const Post = ({
  post: { mainImage, title, subtitle, publishedAt, name, body, categories },
}) => {
  return (
    <Layout>
      <article className="h-full  mb-20 text-gray-800">
        {mainImage && <PostCover mainImage={mainImage} title={title} />}
        <PostBody title={title} subtitle={subtitle} body={body} />
        <PostAuthorDate name={name} publishedAt={publishedAt} />
        {categories && <PostCategories categories={categories} />}
      </article>
    </Layout>
  );
};

export default Post;
