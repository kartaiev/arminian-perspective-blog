import React, { useContext } from "react";
import client from "../../lib/client";
import BlockContent from "@sanity/block-content-to-react";
import groq from "groq";
import Layout from "../../components/layout/Layout";
import { urlFor } from "../../lib/helpers";
import { GlobalContext } from "../../context/global.context";
import { getSinglePost } from "../../lib/api";

const Post = ({ title = "", name = "", categories, body = [], mainImage }) => {
  const { isOpened } = useContext(GlobalContext);

  return (
    <Layout>
      {!isOpened && (
        <article className="h-full mb-20">
          {mainImage && (
            <div className="mainImage-container">
              <img
                // className="w-full h-full block object-cover top-0 left-0 align-top"
                src={urlFor(mainImage).auto("format").url()}
                alt={title}
              />
            </div>
          )}
          <div className="max-w-4xl p-8 mx-auto">
            <h1 className="font-bold mb-6">{title}</h1>
            <span>{name}</span>
            {categories && (
              <ul>
                Posted in
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )}
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
        </article>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const post = await getSinglePost();
  return {
    props: {
      post,
    },
  };
}

export default Post;
