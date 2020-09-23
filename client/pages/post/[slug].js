import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "components/layout/Layout";
import { urlFor } from "lib/helpers";
import { getSinglePost, getAllPosts } from "lib/api";
import client from "../../lib/client";

const Post = ({ post }) => {
  console.log(post);
  return (
    <Layout>
      <article className="h-full mb-20">
        {post.mainImage && (
          <div className="mainImage-container">
            <img
              className="w-full h-full block object-cover top-0 left-0 align-top"
              src={urlFor(post.mainImage).auto("format").url()}
              alt={post.title}
            />
          </div>
        )}
        <div className="max-w-4xl  mx-auto">
          <h1 className="font-bold text-2xl my-4">{post.title}</h1>
          <span className="my-4">{post.name}</span>
          <BlockContent
            className="my-4"
            blocks={post.content}
            {...client.config()}
          />
          {/*{post.categories && (*/}
          {/*  <ul>*/}
          {/*    {post.categories.map((category) => (*/}
          {/*      <li key={category}>{category}</li>*/}
          {/*    ))}*/}
          {/*  </ul>*/}
          {/*)}*/}
        </div>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
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

export default Post;
