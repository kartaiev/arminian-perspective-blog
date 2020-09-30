import client from "./client";
import groq from "groq";
import { PAGE_SIZE } from "./vars";

const queryAll = (offset) => groq`*[_type == "post"][${offset}...${
  offset + PAGE_SIZE
}]  | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  publishedAt,
  slug,
  mainImage,
}`;

export const getAllPosts = async (offset) => {
  return await client.fetch(queryAll(offset));
};

const queryBySlug = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  subtitle,
  publishedAt,
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
