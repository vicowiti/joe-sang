import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const Programs = () => {
  return (
    <div className="px-20 my-10">
      <section className="grid lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <article key={item.id} className="shadow-md p-5 rounded-lg">
            <Image
              src={item.image}
              className="w-full h-96"
              alt="program Image"
              width={100}
              height={100}
            />
            <h5 className="font-bold text-lg mt-1">{item.title}</h5>
            <p>{item.subTitle}</p>
            <div>
              <button className="w-full mt-2 hover:bg-[#9b9bff] hover:text-white hover:border-[#9b9bff] duration-500 flex border text-[#232944] rounded-lg py-2.5 border-[#232944] font-semibold text-sm items-center gap-3 justify-center">
                Donate Now
                <FaArrowRightLong />
              </button>
            </div>
          </article>
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
    image: "/programs/Program1.png",
  },
  {
    id: 2,
    title: "Health And Wellness",
    subTitle: "Ensuring healthier lives for vulnerable populations.",
    image: "/programs/Program2.png",
  },
  {
    id: 3,
    title: "Clean Water Project",
    subTitle: "Providing access to clean water in remote areas.",
    image: "/programs/Program3.png",
  },
  {
    id: 4,
    title: "Food Security",
    subTitle: "Fighting hunger with sustainable solutions.",
    image: "/programs/Program4.png",
  },
  {
    id: 5,
    title: "Women Empowerment",
    subTitle: "Empowering women to lead change.",
    image: "/programs/Program5.png",
  },
  {
    id: 6,
    title: "Disaster Relief",
    subTitle: "Providing aid and support during emergencies.",
    image: "/programs/Program6.png",
  },
];
