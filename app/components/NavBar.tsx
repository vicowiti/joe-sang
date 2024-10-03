import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center px-10 justify-between">
      <div>
        <Image src="/logo/logo.jpg" alt="Logo" width={150} height={80} />
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-10 text-lg text-[#000] mr-10 font-bold">
          <li className="hover:text-[#9ca909] hover:scale-105 duration-500">
            About Us
          </li>
          <li className="hover:text-[#9ca909] hover:scale-105 duration-500">
            Campaign
          </li>
          <li className="hover:text-[#9ca909] hover:scale-105 duration-500">
            <a href="#donate">Donation</a>
          </li>
          <li className="hover:text-[#9ca909] hover:scale-105 duration-500">
           <Link href="blog"> Blog</Link>
          </li>
          <li className="hover:text-[#9ca909] hover:scale-105 duration-500">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
