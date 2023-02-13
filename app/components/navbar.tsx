import Image from "next/image";
import React from "react";

type Props = {};

const navbar = (props: Props) => {
  return (
    <>
      <nav className=" w-screen h-16 bg-[#BEC8CF] flex justify-around items-center font-[600]">
        <div>
          <a href="/" title="Homepage">
            <h1>SyntaxSage</h1>
            {/* <Image src="" alt="" width={300} height={50} /> */}
          </a>
        </div>
        <div className=" xs:hidden ">
          <ul className="flex">
            <li>
              <a href="/" title="Homepage">
                Home
              </a>
            </li>
            <li>
              <a href="/products" title="Our Products">
                Products
              </a>
            </li>
            <li>
              <a href="/courses" title="Our Courses">
                Courses
              </a>
            </li>
            <li>
              <a href="/blog" title="Our Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="/about" title="About Us">
                About
              </a>
            </li>
            <li>
              <a href="/contact" title="Contact Us">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
