"use client";
import React, { useState } from "react";
import Amount from "./Amount";
import { FaArrowRight } from "react-icons/fa6";
import Mobile from "./Mobile";
import axios from "axios";

const DonationInput = () => {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
setLoading(true)
    const response = await axios.post(
      "https://joe-sang.netlify.app/api/donations",
      {
        amount: Number(amount) * 100,
        phone: "+254" + phone,
      }
    );

    setLoading(false)

    if (response.status === 200) {
      alert("Wait for mpesa popup");
    } else {
      alert("Donation failed");
    }
  };
  return (
    <form onSubmit={(e) => handleDonate(e)} className="my-5">
      <div className="my-3">
        <h4 className="font-bold">Your Mpesa Number</h4>
        <Mobile phone={phone} setPhone={setPhone} />
      </div>
      <div className="my-3">
        <h4 className="font-bold">Donation Amount</h4>
        <Amount amount={amount} setAmount={setAmount} />
      </div>

      <button className="text-white bg-[#9B9BFF] flex items-center justify-center gap-2 p-3 font-bold my-2 rounded-md">
        {loading && (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-200"></div>
        )}
        Donate Now <FaArrowRight />
      </button>
    </form>
  );
};

export default DonationInput;
