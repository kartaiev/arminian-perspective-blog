import { useSWRInfinite } from "swr";
import { PAGE_SIZE } from "../lib/vars";

const fetcher = (url) => fetch(url).then((res) => res.json());

const getKey = (index, previousPageData) => {
  const offset = index * PAGE_SIZE;

  return `/api/posts?offset=${offset}`;
};

export const useGetPosts = (initialData) =>
  useSWRInfinite(getKey, fetcher, { initialData });

export const useGetPostsByCategory = (category) =>
  useSWRInfinite(
    (index) => `/api/category?category=${category}&offset=${index * PAGE_SIZE}`,
    fetcher
  );
