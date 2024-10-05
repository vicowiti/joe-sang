import { BsPersonFill } from "react-icons/bs";
import { blogData } from "../utils/blogData";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Inspiring stories of resilience, from around the world, of triumphs
            and lessons.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {blogData.map((post) => (
            <div
              
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <Link
              href={`/blog/${post.id}`}>

              <div className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  className="h-48 w-full object-cover"
                  src={`/0.png`}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="hover:underline">{`Article`}</span>
                  </p>
                  <span className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.content.slice(0, 100)}...
                    </p>
                  </span>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span>
                      <span className="sr-only">{post.author}</span>
                      <BsPersonFill
                        color="#7d7fa1"
                        className="h-10 w-10 rounded-full "
                      />
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <span className="hover:underline">{post.author}</span>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span aria-hidden="true">&middot;</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
