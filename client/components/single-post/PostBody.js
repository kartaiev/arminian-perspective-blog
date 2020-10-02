import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import AuthorDate from "../shared/AuthorDate";

const PostBody = ({ body, title, subtitle, publishedAt, name }) => {
  return (
    <div className="article-body-container">
      <h1 className="article-body-title">{title}</h1>
      <AuthorDate publishedAt={publishedAt} secondProp={name} />
      <h2 className="article-body-subtitle">{subtitle}</h2>
      <BlockContent className="my-6" blocks={body} />
    </div>
  );
};

export default PostBody;
