import BlogSummary from "../components/BlogSummary";
import { blogData } from "../utils/blogData";
const Blogs = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#f5f5ff] min-h-screen">
      <header className="pt-10">
        <h4 className="font-bold text-center text-4xl">Blogs</h4>
      </header>

      <main className="pt-10 lg:px-10 px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 just">
        {blogData.map(blog => <BlogSummary key={blog.id} blog={blog}/>) }
      </main>
    </div>
  );
};

export default Blogs;
