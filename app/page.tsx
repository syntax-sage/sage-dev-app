import Link from "next/link";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { CgScrollV } from "react-icons/cg";

export default function Home() {
  return (
    <>
      <main className="z-0 flex flex-col max-w-6xl mx-auto text-center items-center">
        <h1 className="relative font-bold text-[34px] mt-8 max-w-lg lg:max-w-full">
          Embark on a journey of wonder and discover the <br />
          <span className="text-transparent font-black bg-clip-text bg-gradient-to-br from-orange via-red to-pink">
            SECRETS OF CODING
          </span>
        </h1>

        <div className="z-0 flex w-full flex-col justify-evenly mt-8 px-16 gap-5 max-w-md lg:max-w-3xl lg:flex-row">
          <Link
            href="/products"
            title="Our Products"
            className="  z-0 shadow-md shadow-light bg-dark rounded-md px-5 py-2 text-light font-black uppercase hover:shadow-medium hover:shadow-lg transition-all duration-300 "
          >
            View Our Products
          </Link>
          <Link
            href="/products"
            title="Our Products"
            className="transition-all duration-300 z-0 bg-gradient-to-br from-orange via-red to-pink rounded-md px-5 py-2 text-light font-black uppercase hover:shadow-medium hover:shadow-lg shadow-light shadow-md"
          >
            View Our Courses
          </Link>
        </div>

        <Image
          className="rounded-md  border-light mt-8 object-cover w-[320px] h-[310px] shadow-xl-light "
          src="/images/largeImage.png"
          alt={"syntaxsage wallpaper image"}
          width={1000}
          height={1000}
        />

        <div className="relative xl:hidden p-0 mt-8 text-[20px]">
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
        <CgScrollV className="mt-8 text-3xl"></CgScrollV>
      </main>
    </>
  );
}
