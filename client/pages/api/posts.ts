import { getAllPosts } from "../../lib/api";
import { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "../../interfaces/IPost";

export default async (req: NextApiRequest, res: NextApiResponse<IPost[]>) => {
  const offset = +req.query.offset;
  const posts = await getAllPosts(offset);
  res.status(200).json(posts);
};
