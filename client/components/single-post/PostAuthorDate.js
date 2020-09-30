import React from "react";
import PublishedDate from "./PublishedDate";

const PostAuthorDate = ({ secondProp, publishedAt }) => {
  return (
    <div className="flex justify-between  text-sm text-gray-500">
      <span className="hover:text-gray-800">{secondProp}</span>
      <PublishedDate publishedAt={publishedAt} />
    </div>
  );
};

export default PostAuthorDate;
