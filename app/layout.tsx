import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";
import TopBanner from "./components/TopBanner";


const poppins_init = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
})



export const metadata: Metadata = {
  title: "Joe Sang",
  description: "Fundraiser",
  icons: {
    icon: "/logo/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins_init.className} `}
      >
      <TopBanner/>
        {children}
      </body>
    </html>
  );
}
