import { blogData } from "../../utils/blogData";

export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogData.find((blog) => blog.id === Number(params.slug));

  const content = blog?.content.substring(1)
  return (
    <div className="lg:px-[20rem] px-12 pt-10">
      <div className="mb-6">
        <h3 className="font-bold text-3xl text-center">{blog?.title}</h3>
        <h6>By: {blog?.author}</h6>
      </div>

<div>
  <img src={blog?.feature} className='w-full h-auto rounded my-3'/>
</div>
      <main>
        <p><span className="font-bold text-2xl">{blog?.content[0]}</span>{content}</p>

        <img src={blog?.feature1} className='w-full h-auto rounded my-3'/>
        <p>{blog?.content2}</p>
      </main>
    </div>
  );
}
