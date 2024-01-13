import React from "react";
import { Button, Chip } from "@nextui-org/react";
import { LuChevronRight } from "react-icons/lu";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Hero() {
  return (
    <main className="container mx-auto flex flex-col justify-center items-center m-5 md:m-24 border-x border-dashed border-gray border-opacity-30">
      {/* caption on top */}
      <div className="caption__top__hero flex flex-col-reverse md:flex-row items-center gap-3 border-x border-dashed border-gray border-opacity-40 px-10 py-5">
        <Chip
          size="sm"
          radius="full"
          className="bg-cyan bg-opacity-50 text-cyan border-2 border-cyan md:block hidden"
        >
          New
        </Chip>
        <p className="text-gray text-[16px] text-center">
          My latest <span className="text-soft-white">project showcase</span> in
          a modern, aesthetic, and out of the box.
        </p>
        <Button
          className="flex flex-row items-center gap-1 text-soft-white"
          variant="bordered"
          radius="full"
        >
          Look, how can <LuChevronRight />
        </Button>
      </div>
      {/* title */}
      <div className="title__hero w-full text-center border-t border-dashed border-gray border-opacity-40 py-5 px-10">
        <h1 className={`text-[42px] md:text-[78px] font-extrabold ${montserrat.className}`}>
          I’ll Make You Say Wow
        </h1>
      </div>
      {/* caption on bottom */}
      <div className="caption_bottom__hero w-full flex justify-center items-center border-t border-dashed border-gray border-opacity-40 py-5 px-10">
        <p className="text-[16px] md:text-[20px] text-gray text-center lg:max-w-[60%]">
          Introducing, my name is
          <span className="text-soft-white">Muhammad Iqbal Maulana</span> based
          in Indonesia, and have approximately 2 years of experience in
          <span className="text-soft-white"> Creative Design</span> and
          <span className="text-soft-white"> Web Development</span>.
        </p>
      </div>
      <div className="action__hero w-full flex flex-col justify-center items-center text-center gap-5 border-t border-dashed border-gray border-opacity-40">
        {/* call to action */}
        <div className="action__hero flex flex-col justify-center items-center text-center gap-5 border-x border-dashed border-gray border-opacity-40 p-10">
          <div className="flex flex-row items-center gap-5">
            <Button
              className="flex flex-row items-center gap-1 bg-soft-white"
              variant="solid"
              radius="sm"
            >
              Get Started
            </Button>
            <Button
              className="flex flex-row items-center gap-1 text-soft-white"
              variant="bordered"
              radius="sm"
            >
              Learn My Resume
            </Button>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image src={Logo} width={30} alt="Happy Explore" loading="lazy" />
            <span className="text-[12px] text-gray">Happy Explore</span>
          </div>
        </div>
      </div>
    </main>
  );
}
