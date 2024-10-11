"use client";
// import axios from "axios";
// import { useState } from "react";
import PaymentMethods from "../components/PaymentMethods"

/* This example requires Tailwind CSS v3.0+ */
export default function Example() {
  // const [phone, setPhone] = useState("");
  // const [amount, setAmount] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleDonate = async () => {
  //   if (!phone || !amount) {
  //     alert("Please fill in all fields");
  //     return;
  //   }
  //   setLoading(true);
  //   const response = await axios.post(
  //     "https://nextpayapi.nextus.co.ke/api/v1/transactions/stk_push",
  //     {
  //       amountPaid: Number(amount),
  //       msisdn: phone,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         apikey:
  //           "bnVsbDoyNDcyNDc6QzJCOjdEREIxN0Y5ODI0NzRCRjVCMjBENDVGRjA1OTEzNzYw",
  //       },
  //     }
  //   );

  //   setLoading(false);

  //   if (response.status === 200) {
  //     alert("Wait for mpesa popup");
  //     setPhone("");
  //     setAmount("");
  //   } else {
  //     alert("Donation failed");
  //   }
  // };

  return (
    <div className="relative bg-gray-900">
      <PaymentMethods/>
      {/* <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img className="h-full w-full object-cover" src="/3.jpeg" alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Help Children Reach
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white">
            Their Full Potential. Donate Today.
          </p>
          <div className="my-3 text-white flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="number">
                Your Mpesa Phone{" "}
                <span className="text-xs">(format 2547XXXXX or 2541XXXXX)</span>
              </label>
              <input
                type="number"
                className="p-3 rounded bg-white/20"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                className="p-3 rounded bg-white/20"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={handleDonate}
              className=" w-full p-3 text-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
            >
              {loading ? "Donating..." : "Donate Today"}
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
