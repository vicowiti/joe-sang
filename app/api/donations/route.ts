import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const configData = {
    amount: data.amount,
    email: data.phone +"@email.com",
    currency: "KES",
    mobile_money: {
      phone: data.phone,
      provider: "mpesa",
    },
  };

  const config = {
    method: "post",
    url: "https://api.paystack.co/charge",
    headers: {
      Authorization: `Bearer ${"sk_live_03f1e12af15c5e0e2e1ab5583a57063cec6299c9"}`,
      "Content-Type": "application/json",
    },
    data: configData,
  };

  try {
    const response = await axios(config);

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
