import { getPostsByCategory } from "../../lib/api";

export default async (req, res) => {
  const offset = +req.query.offset;
  const category = req.query.category;
  console.log(category);
  const posts = await getPostsByCategory(offset, category);
  res.status(200).json(posts);
};
