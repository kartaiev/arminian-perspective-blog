import { useSWRInfinite } from "swr";
import { PAGE_SIZE } from "../lib/vars";

const fetcher = (url) => fetch(url).then((res) => res.json());

const getKey = (index, previousPageData) => {
  const offset = index * PAGE_SIZE;
  console.log(offset);

  return `/api/posts?offset=${offset}`;
};

export const useGetPosts = (initialData) =>
  useSWRInfinite(getKey, fetcher, { initialData });
