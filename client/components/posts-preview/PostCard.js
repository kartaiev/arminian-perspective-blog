import React, { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AuthorDate from "../shared/AuthorDate";
import PostCover from "../shared/PostCover";
import { GlobalContext } from "../../context/global.context";

const PostCard = ({ slug, mainImage, subtitle, publishedAt, title }) => {
  const { isListView } = useContext(GlobalContext);

  const variants = {
    hover: {
      scale: 1.02,
    },
    off: { scale: 1 },
  };

  const cardClass = isListView && "h-64 flex";

  const subtitleClass = isListView && " pr-24";

  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <motion.a
          whileHover="hover"
          variants={variants}
          className={`card-container ${cardClass}`}
        >
          <PostCover mainImage={mainImage} title={title} />
          <div className="card-content">
            <div>
              <h1 className="card-title">{title}</h1>
              <h2 className={`card-subtitle ${subtitleClass}`}>{subtitle}</h2>
            </div>
            <AuthorDate secondProp={""} publishedAt={publishedAt} />
          </div>
        </motion.a>
      </Link>
    )
  );
};

export default PostCard;
