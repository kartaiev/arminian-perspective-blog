import React from "react";

const PostCategories = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default PostCategories;
