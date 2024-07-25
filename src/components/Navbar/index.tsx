import NextImage from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const navData = [
  {
    text: "CONTACT US",
    link: "#",
  },
  {
    text: "FEATURES",
    link: "#",
  },
  {
    text: "BLOGS",
    link: "#",
  },
];

export const Navbar = () => {
  return (
    <header className="bg-gray-950 text-white lg:px-24 px-5">
      <div className="flex items-center justify-between lg:justify-start py-4 lg:py-8 lg:border-b border-gray-700 space-x-10 ">
        <NextImage width={40} height={40} alt="" src="/favicon.png" />
        <div className="lg:flex hidden items-center justify-center space-x-12 text-sm font-medium ">
          {navData.map(({ text, link }) => (
            <Link href={link}>{text}</Link>
          ))}
        </div>

        <Popover>
          <PopoverButton className="">
            <MdMenu className="lg:hidden text-3xl" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="w-full h-full bg-gray-950 mt-5 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3 text-white">
              {
                navData.map(({ link, text }) => (
                  <Link href={link} className="block py-2 px-3">{text}</Link>
                ))
              }
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </header>
  );
};
