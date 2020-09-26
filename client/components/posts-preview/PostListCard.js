import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PostAuthorDate from "../single-post/PostAuthorDate";
import { urlFor } from "../../lib/helpers";
import PostCover from "../PostCover";

const PostListCard = ({
  slug,
  mainImage,
  subtitle,
  publishedAt,
  title,
  isToggled,
}) => {
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
          className="mt-6 h-64 border border-gray-400 rounded-lg overflow-hidden flex"
        >
          <PostCover
            mainImage={mainImage}
            title={title}
            isToggled={isToggled}
          />
          <div className=" w-full p-6 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-gray-800 text-2xl">{title}</h1>
              <h2 className="font-semibold text-xl text-gray-800 my-6 pr-24">
                {subtitle}
              </h2>
            </div>
            <PostAuthorDate secondProp={""} publishedAt={publishedAt} />
          </div>
        </motion.a>
      </Link>
    )
  );
};

export default PostListCard;
