import React from "react";
import Link from "next/link";
import PostCover from "./PostCover";
import PostAuthorDate from "./PostAuthorDate";

const PostCard = ({ slug, publishedAt, mainImage, title, subtitle }) => {
  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <a className="mt-6 border-none">
          {mainImage && <PostCover mainImage={mainImage} title={title} />}
          <div className="pt-8">
            <h1 className="font-bold text-gray-800 text-2xl">{title}</h1>
            <h2 className="font-semibold text-gray-800 my-6">{subtitle}</h2>
            <PostAuthorDate secondProp={""} publishedAt={publishedAt} />
          </div>
        </a>
      </Link>
    )
  );
};

export default PostCard;
