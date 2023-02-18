import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="z-0 flex flex-col max-w-6xl mx-auto text-center items-center">
        <h1 className="relative font-bold text-[34px] mt-16 max-w-lg lg:max-w-full">
          Embark on a journey of wonder and discover the <br />
          <span className="text-transparent font-black bg-clip-text bg-gradient-to-br from-orange via-red to-pink">
            SECRETS OF CODING
          </span>
        </h1>

        <div className="z-0 flex w-full flex-col justify-evenly mt-16 px-16 gap-5 max-w-md lg:max-w-3xl lg:flex-row">
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

        <div className="relative">
          <Image
            src={"/public/images/large_picture.png"}
            alt={"syntaxsage wallpaper image"}
            width={300}
            height={300}
          />
        </div>
      </main>
    </>
  );
}
