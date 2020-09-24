import React from "react";

const PostCatigories = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default PostCatigories;
