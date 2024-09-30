import React from "react";
import DonationInput from "./DonationInput";

const Donate = () => {
  return (
    <section
      id="donate"
      className="px-20 py-20 flex flex-col gap-2 lg:flex-row  bg-[#f5f5ff]"
    >
      <div className="lg:w-[50%] ">
        <h2 className="font-extrabold text-4xl">Help Children Reach </h2>
        <h2 className="font-extrabold text-4xl mb-3">Their Full Potential</h2>

        <p className="font-semibold text-lg my-4  text-[#636363] leading-8">
          Imagine a world where every child has the chance to chase their dreams
          with the same determination Joe had as a boy. With your support, this
          can become a reality. We can instill resilience, courage, and a
          go-getter attitude in today’s youth, showing them that no dream is too
          big, no obstacle too insurmountable.
        </p>

        <div className="my-4">
          <h3 className="text-lg font-bold">Donate Via Mpesa</h3>
          <DonationInput />
        </div>
      </div>
      <div className="lg:w-[50%]"></div>
    </section>
  );
};

export default Donate;
