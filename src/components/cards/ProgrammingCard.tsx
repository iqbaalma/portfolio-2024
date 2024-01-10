import Image from "next/image";
import React from "react";
import ThumbnailProgramming from "../../../public/resource/programming.svg";
import { toolsData } from "../utils/data-tools";

const Thumbnail = () => {
  return (
    <>
      {/* thumbnail */}
      <div className="thumbnail__programming min-h-[400px] px-5 py-8 rounded-xl flex flex-col justify-between items-center border border-gray border-opacity-50 w-full">
        <Image
          src={ThumbnailProgramming}
          width={250}
          alt="Thumnail Programming"
        />
        <div className="title__programming">
          <h2 className="w-full text-[20px] text-soft-white">Programming</h2>
          <p className="text-left w-full text-[14px] text-gray">
            Development of web-based digital solutions and applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default function ProgrammingeCards() {
  const programmingTools = toolsData.filter(
    (data) => data.category === "programming"
  );

  return (
    <main className="flex flex-col justify-center items-center gap-5">
      <Thumbnail />
      {programmingTools.map((item) => (
        <div
          key={item.id}
          className="w-full min-h-auto p-5 rounded-xl gap-3 flex flex-col justify-center items-center border border-gray border-opacity-50"
        >
          <h1 className="text-left w-full text-[20px] text-soft-white">
            {item.name}
          </h1>
          <p className="text-left w-full text-[14px] text-gray">{item.desc}</p>
        </div>
      ))}
    </main>
  );
}
