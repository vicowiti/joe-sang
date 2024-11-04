import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
//  import TopBanner from "./components/TopBanner";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

const poppins_init = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Joe Sang Foundation",
  description: "Fundraiser",
  icons: {
    icon: "/logo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(children);

  return (
    <html lang="en">
      <body className={`${poppins_init.className} `}>
        <link rel="icon" href="/logo/favicon.ico" sizes="any" />
        {/* <TopBanner />
        <NavBar />
        {children}
        <Footer />  */}

        <div className="h-screen w-screen flex justify-center items-center bg-black text-white font-bold text-2xl">
          <p>
            {" "}
            Service <span className="text-red-600">Terminated</span>
          </p>
        </div>
      </body>
    </html>
  );
}
