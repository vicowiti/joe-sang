import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import InfoModal from "./InfoModal"

const Programs = () => {
  return (
    <div className="px-5lg:px-20 my-10">
      <section className="grid lg:grid-cols-3 gap-10">
        {data.map((product) => (
          <div
            key={product.id}
            className="group relative p-7 rounded-md shadow"
          >
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
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {product.title}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-500">
                {product.subTitle}
              </p>
              <div className="flex items-center gap-3">
                <button className="flex items-center justify-center gap-3 font-bold mt-3 rounded-lg duration-300 hover:text-white p-3 w-full border hover:bg-[#9B9BFF]">
                  Donate Now <FaArrowRightLong />
                </button>
                <InfoModal title={product.title} content={product.content}/>
              </div>
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
    content: `Our foundation is committed to transforming the lives of children who, through no fault of their own, cannot
access the one thing that can change their futures: Education. As the Swahili Proverb wisely states, “Elimu ni
ufunguo wa Maisha” elevates the indispensable role of education in enriching human potential.
Every day, countless children face formidable barriers that rob them of the chance to attend school. The burden
of school fees, the lack of basic supplies, and the absence of even the most fundamental necessities like food
and clothing prevent them from stepping into classrooms and pursuing their dreams.
These are children with brimming potential who could one day become doctors, teachers, entrepreneurs, and
leaders. Yet, they are left on the sidelines, their futures dimmed by circumstances beyond their control.`,
  },
  {
    id: 2,
    title: "Health And Wellness",
    subTitle: "Ensuring healthier lives for vulnerable populations.",
    image: "/test/health.jpg",
    content: `At the Joe Sang Foundation, we believe that every child deserves the opportunity to live healthy, learn and
thrive regardless of their background. Our mission is not just to cover school fees or provide supplies but to
instill hope to let these children know they are seen, valued, and supported.
Through scholarships, the provision of basic needs – such as a healthy environment and awareness on health
matters - and long-term educational support, we aim to restore dignity and opportunity to these young and
helpless lives. However, we cannot do this alone. This is why we are reaching out to you. With your support, we
can reach many more children, affording them the chance to dream, earn, and succeed.`,
  },

  {
    id: 4,
    title: "Food Security",
    subTitle: "Fighting hunger with sustainable solutions.",
    image: "/test/foodsecurity.jpg",
    content: `By supporting the Joe Sang Foundation, you will not only give needy children the opportunity to go to school
but also help them unlock their potential to transform their communities and, ultimately, our society.
Creating Food Security for these children will have a ripple effect: a child who receives an education today
becomes a leader tomorrow, changing the course of their family’s history and contributing to the broader
progress of our nation. That is the power of education and the change we are striving to create.`,
  },
];
