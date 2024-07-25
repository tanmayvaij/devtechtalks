import Link from "next/link";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center lg:space-x-4 lg:items-start lg:flex-row lg:justify-evenly bg-gray-950 text-white p-5 py-16 md:py-20 space-y-10 lg:space-y-0">
      <div className="space-y-4 w-80">
        <h4 className="font-semibold text-xl">LeadLinx</h4>
        <p className="text-base">
          Streamline your administrative tasks, access critical patient data,
          and enhance collaboration among your healthcase team effortlessly
        </p>
        <div className="flex space-x-2">
          <a href="" className="bg-gray-700 p-2 rounded-full">
            <FaLinkedinIn />
          </a>
          <a href="" className="bg-gray-700 p-2 rounded-full">
            <FaInstagram />
          </a>
          <a href="" className="bg-gray-700 p-2 rounded-full">
            <FaGoogle />
          </a>
          <a href="" className="bg-gray-700 p-2 rounded-full">
            <FaTwitter />
          </a>
          <a href="" className="bg-gray-700 p-2 rounded-full">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between lg:space-x-10 xl:space-x-20 w-80 lg:w-72">
        <div>
          <h4 className="font-semibold pb-3 text-lg">Pages</h4>
          <div className="flex flex-col text-base space-y-3 text-gray-400">
            <Link href="/">Lorem ipsum</Link>
            <Link href="/">Lorem ipsum</Link>
            <Link href="/">Lorem ipsum</Link>
            <Link href="/">Lorem ipsum</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold pb-3 text-lg">Pages</h4>
          <div className="flex flex-col text-base space-y-3 text-gray-400">
            <Link href="/">Lorem ipsum</Link>
            <Link href="/">Lorem ipsum</Link>
            <Link href="/">Lorem ipsum</Link>
            <Link href="/">Lorem ipsum</Link>
          </div>
        </div>
      </div>

      <div className="space-y-3 w-80">
        <h4 className="font-semibold text-lg">Contact</h4>
        <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <FaPhone className="text-lg" /> <h6 className="text-sm">(406) 555-0120</h6>
        </div>
        <div className="flex items-start space-x-2">
          <IoMail className="text-lg" />
          <h6 className="text-sm">tanmayvaij22@gmail.com</h6>
        </div>
        <div className="flex items-start space-x-2">
          <FaLocationDot className="text-lg" />
          <h6 className="text-sm">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </h6>
        </div>
        </div>
      </div>
    </footer>
  );
};
