import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="z-0 flex flex-col max-w-6xl mx-auto text-center items-center">
        <h1 className="relative font-bold text-[36px] mt-16 max-w-lg lg:max-w-full">
          Embark on a journey of wonder and discover the <br />
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-orange via-red to-pink">
            SECRETS OF CODING
          </span>
        </h1>

        <div className="z-0 flex w-full flex-col justify-evenly mt-16 px-16 gap-5 max-w-md lg:max-w-3xl lg:flex-row">
          <Link
            href="/products"
            title="Our Products"
            className="z-0 bg-dark rounded-md px-5 py-2 text-light font-black uppercase"
          >
            View Our Products
          </Link>
          <Link
            href="/products"
            title="Our Products"
            className="z-0 bg-gradient-to-br from-orange via-red to-pink rounded-md px-5 py-2 text-light font-black uppercase"
          >
            View Our Courses
          </Link>
        </div>
      </main>
    </>
  );
}
