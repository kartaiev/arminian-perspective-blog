import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PostAuthorDate from "../single-post/PostAuthorDate";
import PostCover from "../PostCover";

const PostCard = ({
  slug,
  mainImage,
  subtitle,
  publishedAt,
  title,
  isListView,
}) => {
  const variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 5px 10px rgba(0,0,0,.5)",
      transition: { ease: "easeOut" },
    },
    off: { scale: 1 },
  };

  const cardClass = isListView
    ? "mt-6 h-64 flex border border-gray-400 rounded-lg overflow-hidden"
    : "mt-6 border border-gray-400 rounded-lg overflow-hidden";

  const h2Class = isListView ? " pr-24" : "";

  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <motion.a whileHover="hover" variants={variants} className={cardClass}>
          <PostCover
            mainImage={mainImage}
            title={title}
            isListView={isListView}
          />
          <div className=" w-full p-6 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-gray-800 text-2xl">{title}</h1>
              <h2
                className={`font-semibold text-xl text-gray-800 my-6 ${h2Class}`}
              >
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

export default PostCard;
