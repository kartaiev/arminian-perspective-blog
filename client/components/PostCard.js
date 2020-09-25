import React from "react";
import Link from "next/link";
import PostCover from "./PostCover";
import PostAuthorDate from "./PostAuthorDate";
import { motion } from "framer-motion";

const PostCard = ({ slug, publishedAt, mainImage, title, subtitle }) => {
  const variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 5px 10px rgba(0,0,0,.5)",
      transition: { ease: "easeOut" },
    },
    off: { scale: 1 },
  };
  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <motion.a
          whileHover="hover"
          variants={variants}
          className="mt-6 border border-gray-400 rounded-lg overflow-hidden"
        >
          {mainImage && <PostCover mainImage={mainImage} title={title} />}
          <div className=" p-4 lg:p-6">
            <h1 className="font-bold text-gray-800 text-2xl">{title}</h1>
            <h2 className="font-semibold text-gray-800 my-6">{subtitle}</h2>
            <PostAuthorDate secondProp={""} publishedAt={publishedAt} />
          </div>
        </motion.a>
      </Link>
    )
  );
};

export default PostCard;
