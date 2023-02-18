"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

type Props = {};

const navbar = (props: Props) => {
  const [openMenu, isOpen] = useState(false);
  return (
    <>
      <nav className="relative w-screen h-16 flex justify-center items-center z-50">
        <div className=" w-screen max-w-6xl bg-transparent flex justify-between items-center pl-5 ">
          <div className=" justify-start">
            <a href="/" title="Homepage">
              <h1 className="text-3xl font-extrabold ">
                Syntax
                <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-orange via-red to-pink">
                  Sage
                </span>
              </h1>
              {/* <Image src="" alt="" width={300} height={50} /> */}
            </a>
          </div>

          {/* mobile menu hamburger toggle button  */}
          <button
            className="xl:hidden flex flex-col justify-evenly h-8 w-12 border-none bg-black cursor-pointer p-0 pr-5"
            aria-label="Menu"
            aria-expanded="false"
            type="button"
            onClick={() => isOpen(!openMenu)}
          >
            <span className="block w-full h-[3px] bg-dark rounded-md transform origin-center transition duration-300 ease-in-out"></span>
            <span className="block w-full h-[3px] bg-dark rounded-md transform origin-center transition duration-300 ease-in-out"></span>
            <span className="block w-full h-[3px] bg-dark rounded-md transform origin-center transition duration-300 ease-in-out"></span>
          </button>

          <div
            onClick={() => isOpen(false)}
            className={` ${
              openMenu
                ? "absolute flex flex-col w-full h-full  top-0  bg-light left-0  text-center gap-5 right-0 ml-auto text-lg z-50"
                : "xl:flex xl:relative hidden flex-row"
            }`}
          >
            <button
              className={`${
                openMenu
                  ? "absolute top-5 right-5 flex flex-col justify-evenly h-8 w-8 border-none bg-black cursor-pointer p-0"
                  : "hidden"
              }`}
              aria-label="Menu"
              aria-expanded="false"
              type="button"
              onClick={() => isOpen(false)}
            >
              <span className="block w-full h-[3px] rotate-45  translate-y-[11px] bg-red rounded-md transform origin-center transition duration-300 ease-in-out"></span>
              <span className="block w-full h-[3px] -rotate-45 bg-red rounded-md transform origin-center transition duration-300 ease-in-out"></span>
            </button>

            <ul className="relative w-full bg-light flex flex-col mt-16 mb-16 gap-3 xl:flex-row font-bold xl:font-medium">
              <li className="px-2 w-full">
                <Link
                  href="/"
                  title="Homepage"
                  className="transition-all duration-300 ease-in-out w-0 hover:w-full border border-transparent border-b-2 hover:border-b-red hover:text-red"
                >
                  Home
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/products"
                  title="Our Products"
                  className="transition-all duration-300 ease-in-out w-0 hover:w-full border border-transparent border-b-2 hover:border-b-red hover:text-red"
                >
                  Products
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/courses"
                  title="Our Courses"
                  className="transition-all duration-300 ease-in-out w-0 hover:w-full border border-transparent border-b-2 hover:border-b-red hover:text-red"
                >
                  Courses
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/blog"
                  title="Our Blog"
                  className="transition-all duration-300 ease-in-out w-0 hover:w-full border border-transparent border-b-2 hover:border-b-red hover:text-red"
                >
                  Blog
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/about"
                  title="About Us"
                  className="transition-all duration-300 ease-in-out w-0 hover:w-full border border-transparent border-b-2 hover:border-b-red hover:text-red"
                >
                  About
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="/contact"
                  title="Contact Us"
                  className="transition-all duration-300 ease-in-out w-0 hover:w-full border border-transparent border-b-2 hover:border-b-red hover:text-red"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="relative xl:hidden p-0 ">
              <h3 className="font-bold">JOIN A GROWING COMMUNITY</h3>
              <span className="flex flex-row gap-5 justify-center text-[25px]">
                <Link
                  href="https://twitter.com/syntax_sage"
                  target={"_blank"}
                  className="hover:text-pink text-red transition-all duration-300"
                >
                  <BsTwitter></BsTwitter>
                </Link>
                <Link
                  href="https://www.tiktok.com/@syntax_sage?lang=en"
                  target={"_blank"}
                  className="hover:text-pink text-red transition-all duration-300"
                >
                  <FaTiktok></FaTiktok>
                </Link>
                <Link
                  href="https://www.instagram.com/syntax.sage/"
                  target={"_blank"}
                  className="hover:text-pink text-red transition-all duration-300"
                >
                  <BsInstagram></BsInstagram>
                </Link>
                <Link
                  href="https://github.com/syntax-sage"
                  target={"_blank"}
                  className="hover:text-pink text-red transition-all duration-300"
                >
                  <BsGithub></BsGithub>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCGq5jlXlVqm2xPxC8KqAEfQ"
                  target={"_blank"}
                  className="hover:text-pink text-red transition-all duration-300"
                >
                  <BsYoutube></BsYoutube>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/syntax-sage-5b0536265/"
                  target={"_blank"}
                  className="hover:text-pink text-red transition-all duration-300"
                >
                  <BsLinkedin></BsLinkedin>
                </Link>
                <Link
                  href="https://discord.gg/BRpSNDZhFG"
                  target={"_blank"}
                  className="hover:text-pink text-red transition-all duration-300"
                >
                  <FaDiscord></FaDiscord>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
