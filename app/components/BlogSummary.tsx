import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blog: {
    id: number;
    title: string;
    content: string;
    author: string;
  };
}

const BlogSummary = (props: Props) => {
  return (
    <Link href={`/blog/${props.blog.id}`} className="relative rounded">
      <Image
        src="/2.jpeg"
        width={100}
        height={100}
        alt="Preview"
        className="w-full rounded"
      />
      <div className="absolute bottom-0 right-0 left-0 bg-white/55 px-5 font-bold h-[70px]">
        <h3 className="text-center flex just">{props.blog.title}</h3>
      </div>
    </Link>
  );
};

export default BlogSummary;
