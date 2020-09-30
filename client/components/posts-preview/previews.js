import React from "react";
import { useSWRInfinite } from "swr";
import { fetcher, getKey } from "../../actions";
import PostCard from "./PostCard";

const previews = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const getKey = (index, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/posts?offset=${index}`;
  };

  const { data: paginatedPosts, size, setSize } = useSWRInfinite(
    getKey,
    fetcher
  );

  if (!paginatedPosts) return "loading";

  console.log(paginatedPosts);

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

export default previews;
