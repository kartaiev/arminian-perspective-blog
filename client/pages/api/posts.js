import { getAllPosts } from "../../lib/api";

export default async (req, res) => {
  const posts = await getAllPosts(0);
  res.status(200).json(posts);
};
