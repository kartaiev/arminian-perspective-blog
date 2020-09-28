import React from "react";
import Layout from "components/layout/Layout";
import { getSinglePost, getAllPosts } from "lib/api";
import PostCover from "../../components/PostCover";
import PostBody from "../../components/single-post/PostBody";
import PostAuthorDate from "../../components/single-post/PostAuthorDate";
import PostCategories from "../../components/single-post/PostCatigories";

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
      <article className="h-full xl:max-w-5xl py-6 mx-auto mb-20 text-gray-800">
        {mainImage && <PostCover mainImage={mainImage} title={title} />}
        <PostBody
          title={title}
          subtitle={subtitle}
          body={body}
          publishedAt={publishedAt}
          name={name}
        />
        {categories && <PostCategories categories={categories} />}
      </article>
    </Layout>
  );
};

export default Post;
