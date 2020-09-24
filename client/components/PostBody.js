import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import client from "../lib/client";

const PostBody = ({ body, title, subtitle }) => {
  return (
    <div className="max-w-4xl  mx-auto">
      <h1 className="font-bold text-2xl mt-6 mb-2">{title}</h1>
      <h2 className="font-semibold text-gray-800">{subtitle}</h2>

      <BlockContent className="my-6" blocks={body} {...client.config()} />
    </div>
  );
};

export default PostBody;
