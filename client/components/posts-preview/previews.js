import React from "react";
import PostCard from "./PostCard";

export const previews = (paginatedPosts) => {
  return (
    paginatedPosts &&
    paginatedPosts.map(
      ({ _id, title, subtitle, slug, mainImage, publishedAt, body }) => (
        <PostCard
          key={_id}
          title={title}
          subtitle={subtitle}
          slug={slug}
          mainImage={mainImage}
          publishedAt={publishedAt}
          body={body}
        />
      )
    )
  );
};
