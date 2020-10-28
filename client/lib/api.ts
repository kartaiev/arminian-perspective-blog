import client from "./client";
import groq from "groq";
import { PAGE_SIZE } from "./vars";
import { IAllPosts } from "../interfaces/IAllPosts";

const queryAll = (offset: number) => groq`*[_type == "post"][${offset}...${
  offset + PAGE_SIZE
}]  | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  publishedAt,
  _updatedAt,
  slug,
  mainImage,
  "categories": categories[]->title,
}`;

export const getAllPosts = async (offset: number): Promise<IAllPosts[]> => {
  return await client.fetch(queryAll(offset));
};

const queryByCategory = (
  offset,
  category
) => groq`*[_type == "post" && ${category} in categories][${offset}...${
  offset + PAGE_SIZE
}]  | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  publishedAt,
  _updatedAt,
  slug,
  mainImage,
}`;

export const getPostsByCategory = async (offset, category) => {
  return await client.fetch(queryByCategory(offset, category));
};

const queryBySlug = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  subtitle,
  publishedAt,
  _updatedAt,
  "name": author->name,
  mainImage,
  "categories": categories[]->title,
  body
}`;

export const getSinglePost = async (slug) => {
  return await client.fetch(queryBySlug, { slug });
};

const queryAllSLugs = groq`*[_type == "post"] {slug}`;

export const getAllSlugs = async () => {
  return await client.fetch(queryAllSLugs);
};
