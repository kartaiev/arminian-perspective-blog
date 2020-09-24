import React from "react";
import { urlFor } from "../lib/helpers";
import Link from "next/link";
import PublishedDate from "./PublishedDate";
import PostCover from "./PostCover";

const PostCard = ({ slug, publishedAt, mainImage, title, subtitle }) => {
  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <a className="mt-6 border-none">
          {mainImage && <PostCover mainImage={mainImage} title={title} />}
          <div className="pt-8">
            <h1 className="font-bold text-gray-800 text-2xl">{title}</h1>
            <p>{subtitle}</p>
            <div className="py-2 flex justify-between text-sm text-gray-600">
              <PublishedDate publishedAt={publishedAt} />
              <span className="hover:text-gray-800">читать</span>
            </div>
          </div>
        </a>
      </Link>
    )
  );
};

export default PostCard;
