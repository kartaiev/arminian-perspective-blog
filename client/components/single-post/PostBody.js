import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import PostAuthorDate from "./PostAuthorDate";

const PostBody = ({ body, title, subtitle, publishedAt, name }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="font-bold text-2xl mt-6 mb-2">{title}</h1>
      <PostAuthorDate publishedAt={publishedAt} secondProp={name} />
      <h2 className="font-semibold text-gray-800 mt-4">{subtitle}</h2>
      <BlockContent className="my-6" blocks={body} />
    </div>
  );
};

export default PostBody;
