import Link from "next/link";
import {
    FaArrowRight,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ActualFooter = () => {
  return (
    <footer className="bg-[#232944] px-10 py-10 pt-20 text-[#a7a9b4]">
      <section className="grid grid-cols-4 mb-3">
        <div className="flex flex-col justify-between">
          <h4 className="text-lg text-white font-bold ">DreamCare</h4>

          <div>
            <p className="mb-2">Joe Sang Foundation</p>
            <div className="flex items-center  mt-2 gap-2">
              <Link href={""} className="bg-[#9b9bff] p-1 rounded-full">
                <FaSquareInstagram color="#232944" />
              </Link>
              <Link href={""} className="bg-[#9b9bff] p-1 rounded-full">
                <FaSquareXTwitter color="#232944" />
              </Link>
              <Link href={""} className="bg-[#9b9bff] p-1 rounded-full">
                <FaYoutube color="#232944" />
              </Link>
              <Link href={""} className="bg-[#9b9bff] p-1 rounded-full">
                <FaLinkedin color="#232944" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h6 className="font-bold text-sm text-white mb-3">Contacts</h6>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-[#9B9BFF] rounded-full">
              <FaLocationDot color="#232944" />
            </span>
            <div>
              <p>Nairobi, Kenya</p>
              <p>P.O BOX 1508-00500</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-[#9B9BFF] rounded-full">
              <FaPhone color="#232944" />
            </span>
            <a href="tel:+2547202459 06">+254 720 24 59 06</a>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-[#9B9BFF] rounded-full">
              <IoIosMail color="#232944" />
            </span>
            <a href="mailto:info@joesangfoundation.org">
              {" "}
              info@joesangfoundation.org
            </a>
          </div>
        </div>
        <div>
          <h6 className="font-bold text-sm text-white mb-3">Main Menu</h6>
          <ul>
            <li>Home Page</li>
            <li>About Us</li>
            <li>Campaign</li>
            <li>Donation</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-bold">
            Subscribe to our newsletter and
          </h6>
          <h6 className="text-white font-bold">stay updated</h6>

          <div className=" mt-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent p-2 rounded-md border border-[#9B9BFF] w-full"
            />
            <button className="flex items-center p-2 mt-2 bg-[#9B9BFF] text-[#232944] gap-2 rounded-md">
              Subscribe <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section>
        <hr className="  text-[#9B9BFF] my-3" />
        <div className="flex justify-between items-center">
          <p>
            {new Date().getFullYear()} Joe Sang Foundation, All Rights Reserved
          </p>

          <p>
            <span>Privacy Policy</span> <span>Terms of use</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default ActualFooter;
