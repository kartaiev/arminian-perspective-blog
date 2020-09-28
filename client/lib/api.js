import client from "./client";
import groq from "groq";

const queryAll = (offset = 0) => groq`*[_type == "post"][${offset}...${
  offset + 3
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

const queryBuSlug = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  subtitle,
  publishedAt,
  "name": author->name,
  mainImage,
  "categories": categories[]->title,
  body
}`;

export const getSinglePost = async (slug) => {
  return await client.fetch(queryBuSlug, { slug });
};
