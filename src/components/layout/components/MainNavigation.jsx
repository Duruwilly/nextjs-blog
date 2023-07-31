import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const MainNavigation = () => {
  return (
    <header className="w-full h-24 bg-gray-900 flex justify-between items-center px-[10%]">
      <Link href="/" className=" ">
        <Logo />
      </Link>
      <nav>
        <ul className=" list-none flex items-baseline m-0 p-0 md:gap-2">
          <li className="mx-5">
            <Link
              className="text-gray-300 text-base md:text-xl hover:text-gray-200 duration-300"
              href="/posts"
            >
              Posts
            </Link>
          </li>
          <li className="mx-5">
            <Link
              className="text-gray-300 text-base md:text-xl hover:text-gray-200 duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
