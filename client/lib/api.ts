import client from "./client";
import groq from "groq";
import { PAGE_SIZE } from "./vars";
import { IPost } from "../interfaces/IPost";

const queryAll = (offset: number) => groq`*[_type == "post"][${offset}...${
  offset + PAGE_SIZE
}]  | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  publishedAt,
  _updatedAt,
  slug,
  'mainImage': mainImage.asset->url,
  "categories": categories[]->title,
  "name": author->name,
}`;

export const getAllPosts = async (offset: number): Promise<IPost[]> => {
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
  'mainImage': mainImage.asset->url,
  "name": author->name,
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
  'mainImage': mainImage.asset->url,
  "categories": categories[]->title,
  body
}`;

export const getSinglePost = async (slug: string): Promise<IPost> => {
  return await client.fetch(queryBySlug, { slug });
};

const queryAllSLugs = groq`*[_type == "post"] {slug}`;

export const getAllSlugs = async (): Promise<IPost[]> => {
  return await client.fetch(queryAllSLugs);
};
