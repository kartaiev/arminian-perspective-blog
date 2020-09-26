import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PostAuthorDate from "../single-post/PostAuthorDate";
import { urlFor } from "../../lib/helpers";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import PostCover from "../PostCover";

const PostListCard = ({
  slug,
  mainImage,
  subtitle,
  publishedAt,
  title,
  body,
  isToggled,
}) => {
  console.log(isToggled);

  const variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 5px 10px rgba(0,0,0,.5)",
      transition: { ease: "easeOut" },
    },
    off: { scale: 1 },
  };

  const width = useWindowWidth();

  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <motion.a
          whileHover="hover"
          variants={variants}
          className="mt-6 h-64 border border-gray-400 rounded-lg overflow-hidden flex"
        >
          {mainImage && (
            <div className="w-1/2 relative">
              <img
                src={urlFor(mainImage).auto("format").url()}
                alt={title}
                className="w-full h-full block object-cover top-0 left-0 align-top absolute"
              />
            </div>
          )}
          <div className=" w-full p-6 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-gray-800 text-2xl">{title}</h1>
              <h2 className="font-semibold text-xl text-gray-800 my-6 pr-24">
                {subtitle}
              </h2>
              {/*{width > 1280 && <BlockContent blocks={body} />}*/}
            </div>
            <PostAuthorDate secondProp={""} publishedAt={publishedAt} />
          </div>
        </motion.a>
      </Link>
    )
  );
};

export default PostListCard;
