import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <section>
        <h1 className="text-center my-4 text-5xl font-bold">
          <span className="font-extrabold">Bringing</span> Hope,{" "}
          <span className="font-extrabold">Changing</span> Lives
        </h1>
        <p className="text-[#636363] text-lg text-center">
          From Barefoot Beginnings to Boundless Destinations,
        </p>
        <p className="text-[#636363] text-lg text-center">
          A journey of Hope, Resilience and Transformation
        </p>

        <section className="my-3 flex justify-center items-center gap-3">
          <a href="#donate">
            <button className="rounded-md py-3 px-4 text-white bg-[#0431FE] flex items-center gap-3">
              Donate Now
              <FaArrowRightLong />
            </button>
          </a>
          <button className="rounded-md py-3 px-4 text-[#232944] border border-[#9B9BFF] bg-[#fff] flex items-center gap-3">
            About Our Project
            <FaArrowRightLong />
          </button>
        </section>
      </section>
      <section></section>
    </div>
  );
};

export default Header;
