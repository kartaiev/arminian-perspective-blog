import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetPosts = (initialData) =>
  useSWR(`/api/posts`, fetcher, { initialData });
