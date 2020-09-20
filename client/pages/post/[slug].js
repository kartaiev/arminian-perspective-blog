import React from "react";
import client from "lib/client";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "components/layout/Layout";
import { urlFor } from "lib/helpers";
import { getSinglePost, getAllPosts } from "lib/api";

const Post = ({ post }) => {
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
        <div className="max-w-4xl p-8 mx-auto">
          <h1 className="font-bold mb-6">{post.title}</h1>
          <span>{post.name}</span>
          {post.categories && (
            <ul>
              Posted in
              {post.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}
          <BlockContent
            blocks={post.body}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            {...client.config()}
          />
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
