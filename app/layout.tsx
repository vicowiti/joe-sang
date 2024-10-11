import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBanner from "./components/TopBanner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins_init = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Joe Sang Foundation",
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
      <body className={`${poppins_init.className} `}>
        <TopBanner />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
