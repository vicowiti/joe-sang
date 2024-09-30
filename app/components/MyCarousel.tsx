"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/0.jpeg",
  },

  {
    id: 2,
    image: "/1.jpeg",
  },
  {
    id: 3,
    image: "/3.jpeg",
  },
  {
    id: 4,
    image: "/1.jpeg",
  },
];

const MyCarousel = () => {
  return (
    <section className="px-10">
      <Carousel autoPlay>
        {data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              width={500}
              height={500}
              alt="Feature Image"
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MyCarousel;
