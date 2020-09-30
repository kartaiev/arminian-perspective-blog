import { getAllPosts } from "../../lib/api";

export default async (req, res) => {
  const offset = +req.query.offset;
  console.log(offset);
  const posts = await getAllPosts(offset);
  res.status(200).json(posts);
};
