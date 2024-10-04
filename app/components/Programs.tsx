import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const Programs = () => {
  return (
    <div className="px-5lg:px-20 my-10">
      <section className="grid lg:grid-cols-3 gap-10">
        {data.map((product) => (
           <div key={product.id} className="group relative p-7 rounded-md shadow">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <Image
                width={100}
                height={100}
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 flex flex-col justify-between">
                <div>
                 
                  <p className="mt-1 text-lg font-bold text-gray-900">{product.title}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">{product.subTitle}</p>
                <button className="flex items-center justify-center gap-3 font-bold mt-3 rounded-lg duration-300 hover:text-white p-3 w-full border hover:bg-[#9B9BFF]">Donate Now <FaArrowRightLong /></button>
              </div>
            </div>
        ))}
      </section>
    </div>
  );
};

export default Programs;

const data = [
  {
    id: 1,
    title: "Education for All",
    subTitle: "Empowering minds, one child at a time.",
    image: "/test/education.jpg",
  },
  {
    id: 2,
    title: "Health And Wellness",
    subTitle: "Ensuring healthier lives for vulnerable populations.",
    image: "/test/health.jpg",
  },
  {
    id: 3,
    title: "Clean Water Project",
    subTitle: "Providing access to clean water in remote areas.",
    image: "/test/clean-water.jpg",
  },
  {
    id: 4,
    title: "Food Security",
    subTitle: "Fighting hunger with sustainable solutions.",
    image: "/test/foodsecurity.jpg",
  },
  {
    id: 5,
    title: "Women Empowerment",
    subTitle: "Empowering women to lead change.",
    image: "/test/women.jpg"},
  {
    id: 6,
    title: "Disaster Relief",
    subTitle: "Providing aid and support during emergencies.",
    image: "/test/disaster-relief.jpg",
  },
];
