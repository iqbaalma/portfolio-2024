import Image from "next/image";
import React from "react";
import Iconic from "../../public/resource/glow-roles-background.svg";
import { Chip } from "@nextui-org/react";
import Snowfall from "./animation/SnowAnimate";

export default function Roles() {
  return (
    <main className="container mx-auto flex flex-col justify-center items-center gap-3 px-3 m-16">
      {/* image */}
      <Image src={Iconic} width={1000} alt="Roles Muhammad Iqbal Maulana" />
      <Snowfall />

      {/* say thank you */}
      <Chip
        variant="bordered"
        radius="full"
        className="bg-tranparant text-white -mt-20 md:-mt-56"
      >
        Meet, connect, and work with me
      </Chip>
      <h1 className="text-[36px] md:text-[86px] md:-mt-5 text-center">
        I’ll Make You Say Wow
      </h1>

      {/* caption on bottom */}
      <div className="title__hero w-full flex justify-center items-center border-t border-dashed border-gray border-opacity-40 py-5 px-10">
        <p className="text-[16px] md:text-[20px] text-gray text-center lg:max-w-[60%]">
          Introducing, my name is
          <span className="text-soft-white"> Muhammad Iqbal Maulana</span> based
          in Indonesia, and have approximately 2 years of experience in
          <span className="text-soft-white"> Creative Design</span> and
          <span className="text-soft-white"> Web Development</span>.
        </p>
      </div>
    </main>
  );
}