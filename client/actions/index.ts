import { useSWRInfinite } from "swr";
import { PAGE_SIZE } from "../lib/vars";
import { IPost } from "../interfaces/IPost";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (index: number, previousPageData: IPost[]) => {
  const offset = index * PAGE_SIZE;

  return `/api/posts?offset=${offset}`;
};

export const useGetPosts = (initialData: IPost[][]) =>
  useSWRInfinite(getKey, fetcher, { initialData });

export const useGetPostsByCategory = (category) =>
  useSWRInfinite(
    (index) => `/api/category?category=${category}&offset=${index * PAGE_SIZE}`,
    fetcher
  );
