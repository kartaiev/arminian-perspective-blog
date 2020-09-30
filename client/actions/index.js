import { useSWRInfinite } from "swr";
import { PAGE_SIZE } from "../lib/vars";

const fetcher = (url) => fetch(url).then((res) => res.json());

const getKey = (index, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/api/posts?offset=${index * PAGE_SIZE}`;
};

export const useGetPosts = (initialData) =>
  useSWRInfinite(getKey, fetcher, { initialData });
