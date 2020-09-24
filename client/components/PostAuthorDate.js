import React from "react";
import PublishedDate from "./PublishedDate";

const PostAuthorDate = ({ name, publishedAt }) => {
  return (
    <div className="py-2 flex justify-between text-sm text-gray-600">
      <span className="hover:text-gray-800">{name}</span>
      <PublishedDate publishedAt={publishedAt} />
    </div>
  );
};

export default PostAuthorDate;
