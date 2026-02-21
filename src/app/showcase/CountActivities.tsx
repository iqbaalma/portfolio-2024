import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function CountActivities() {
  return (
    <main className="w-full bg-[#f8f8f8] py-10 md:py-20 mt-5 md:mt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-center justify-evenly items-center gap-20 sm:gap-40 md:px-0 px-3 text-soft-black">
        {/* left */}
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="flex flex-row item-start">
            <p className="text-[46px]  font-bold">2</p>
            <p className="text-[33px]  font-semibold">nd</p>
          </span>
          <div className="text-center">
            <span className="flex flex-row items-start justify-center">
              <p className="text-[20px] font-semibold">Years Experience</p>
            </span>
            <Link
              href="/experience"
              target="_blank"
              className="flex flex-row items-center justify-center text-gray hover:underline"
            >
              <p className="text-[20px]">Check Here</p>
              <LuArrowUpRight />
            </Link>
          </div>
        </div>
        {/* center */}
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="flex flex-row items-start">
            <p className="text-[46px]  font-bold">10+</p>
          </span>
          <div className="text-center">
            <span className="flex flex-row item-start justify-center">
              <p className="text-[20px] font-semibold">Cerificate</p>
            </span>
            <Link
              href="https://www.linkedin.com/in/muhammad-iqbal-maulana-82a916214/details/experience/"
              target="_blank"
              className="flex flex-row items-center justify-center text-gray hover:underline"
            >
              <p className="text-[20px]">on LinkedIn</p>
              <LuArrowUpRight />
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="flex flex-row items-start">
            <p className="text-[46px]  font-bold">51</p>
            <p className="text-[33px]  font-semibold">th</p>
          </span>
          <div className="text-center">
            <span className="flex flex-row item-start justify-center">
              <p className="text-[20px] font-semibold">Repositories</p>
            </span>
            <Link
              href="https://github.com/iqbaalma"
              target="_blank"
              className="flex flex-row items-center justify-center text-gray hover:underline"
            >
              <p className="text-[20px]">on GitHub</p>
              <LuArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
