"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import ButtonAll from "./ButtonAll";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const navOption = (
    <>
      <li className="text-md font-bold m-4 hover:text-[#121643] transition-all cursor-pointer hover:bg-transparent">
        <Link href="/">Home</Link>
      </li>
      <li className="text-md font-bold m-4 hover:text-[#121643] transition-all cursor-pointer hover:bg-transparent">
        <Link href="/about">About</Link>
      </li>
      <li className="text-md font-bold m-4 hover:text-[#121643] transition-all cursor-pointer hover:bg-transparent">
        <Link href="/pricing">Pricing</Link>
      </li>
      <li className="text-md font-bold m-4 hover:text-[#121643] transition-all cursor-pointer hover:bg-transparent">
        <Link href="/blog">Blog</Link>
      </li>
      <li className="text-md font-bold m-4 hover:text-[#121643] transition-all cursor-pointer hover:bg-transparent">
        <Link href="/tryDemo">Try Demo</Link>
      </li>
      <li className="text-md font-bold m-4 hover:text-[#121643] transition-all cursor-pointer hover:bg-transparent">
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="mb-4">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navOption}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Ai-Assist</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
          </div>
          <div className="navbar-end">
           <ButtonAll content="Sign Up"></ButtonAll>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
