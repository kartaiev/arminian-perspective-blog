import client from "./client";
import groq from "groq";

// const fields = `
//   title,
//   subtitle,
//   slug: slug.current
//   `;

export const getAllPosts = async () => {
  return await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `);
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  mainImage,
  body
}`;

export const getSinglePost = async (slug) => {
  return await client.fetch(query, { slug });
};
