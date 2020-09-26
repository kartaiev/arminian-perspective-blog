import client from "./client";
import groq from "groq";

const queryAll = groq`*[_type == "post"] {
  _id,
  title,
  subtitle,
  publishedAt,
  slug,
  mainImage,
  "body": body[0]
}`;

export const getAllPosts = async () => {
  return await client.fetch(queryAll);
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
