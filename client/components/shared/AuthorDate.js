import React from "react";
import PublishedDate from "./PublishedDate";

const AuthorDate = ({ secondProp, publishedAt }) => {
  return (
    <div className="flex justify-between text-sm lg:text-lg text-gray-600 mt-4">
      <span className="hover:text-gray-800">{secondProp}</span>
      <PublishedDate publishedAt={publishedAt} />
    </div>
  );
};

export default AuthorDate;
