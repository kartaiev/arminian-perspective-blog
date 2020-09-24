import React from "react";
import { urlFor } from "../lib/helpers";
import Link from "next/link";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const PostCard = ({ slug, updatedAt, mainImage, title, subtitle }) => {
  return (
    slug && (
      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
        <a className="mt-6">
          <div className="overflow-hidden">
            {mainImage && (
              <div>
                <img
                  className="w-full h-56 block object-cover top-0 left-0 align-top"
                  src={urlFor(mainImage).auto("format").url()}
                  alt={title}
                />
              </div>
            )}
            <div className="pt-4">
              <h1 className="font-bold text-gray-800">{title}</h1>
              <p>{subtitle}</p>
              <div className="py-2 flex justify-between text-sm text-gray-600">
                <span>
                  {format(new Date(updatedAt), "d MMM yyyy", { locale: ru })}
                </span>
                <span className="hover:text-gray-800">читать</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
  );
};

export default PostCard;
