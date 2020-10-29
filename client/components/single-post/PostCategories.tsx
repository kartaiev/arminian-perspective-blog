import React from "react";

const PostCategories = ({ categories }: {categories: string[]}) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default PostCategories;
