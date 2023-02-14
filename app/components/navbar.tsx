import Image from "next/image";
import React from "react";

type Props = {};

const navbar = (props: Props) => {
  return (
    <>
      <nav className=" w-screen h-16 flex justify-around items-center ">
        <div className=" w-screen max-w-6xl bg-transparent flex justify-between items-center">
          <div>
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
          <div className=" xs:hidden ">
            <ul className="text-xl flex items-center">
              <li className=" transition-all px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange via-red to-pink">
                <a href="/" title="Homepage">
                  Home
                </a>
              </li>
              <li className=" transition-all px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange via-red to-pink">
                <a href="/products" title="Our Products">
                  Products
                </a>
              </li>
              <li className=" transition-all px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange via-red to-pink">
                <a href="/courses" title="Our Courses">
                  Courses
                </a>
              </li>
              <li className=" transition-all px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange via-red to-pink">
                <a href="/blog" title="Our Blog">
                  Blog
                </a>
              </li>
              <li className=" transition-all px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange via-red to-pink">
                <a href="/about" title="About Us">
                  About
                </a>
              </li>
              <li className=" transition-all px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange via-red to-pink">
                <a href="/contact" title="Contact Us">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
