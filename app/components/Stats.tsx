import Image from "next/image";

const Stats = () => {
  return (
    <div className="flex justify-center">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-auto">
        {data.map((item) => (
          <article key={item.id} className="flex items-center gap-2">
            <div>
              <Image src={item.image} width={50} height={50} alt="Stat Image" />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-bold text-2xl">{item.value}</h3>
              <p className="text-lg">{item.text}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Stats;

const data = [
  {
    id: 1,
    text: "Lives to be impacted",
    value: "10,000",
    showplus: true,
    image: "/stats/1.png",
  },
  {
    id: 2,
    text: "Volunteers to be engaged",
    value: "500",
    showplus: true,
    image: "/stats/2.png",
  },
  {
    id: 3,
    text: "To be raised for a good course",
    value: "KES 200M",
    showplus: false,
    image: "/stats/3.png",
  },
  {
    id: 4,
    text: "Of Dedicated Service",
    value: "10 Years",
    showplus: false,
    image: "/stats/4.png",
  },
];
