import React from "react";
import { urlFor } from "../lib/helpers";
import Link from "next/link";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const PostCard = ({ slug, updatedAt, mainImage, title }) => {
  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <a>
          <div className="rounded shadow overflow-hidden">
            {mainImage && (
              <div>
                <img
                  className="w-full h-56 block object-cover top-0 left-0 align-top"
                  src={urlFor(mainImage).auto("format").url()}
                  alt={title}
                />
              </div>
            )}
            <div className="px-4 py-2">
              <h1 className="font-bold text-gray-800">{title}</h1>
              <p className="pt-4 text-sm text-gray-600">
                {format(new Date(updatedAt), "d MMM yyyy", { locale: ru })}
              </p>
            </div>
          </div>
        </a>
      </Link>
    )
  );
};

export default PostCard;
