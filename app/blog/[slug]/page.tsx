import { blogData } from "../../utils/blogData";

export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogData.find((blog) => blog.id === Number(params.slug));

  return (
    <div className="lg:px-32 px-12 pt-10">
      <div className="mb-6">
        <h3 className="font-bold text-3xl text-center">{blog?.title}</h3>
        <h6>By: {blog?.author}</h6>
      </div>

      <main>
        <p>{blog?.content}</p>
      </main>
    </div>
  );
}
