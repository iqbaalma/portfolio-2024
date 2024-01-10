import Image from "next/image";
import React from "react";
import ThumbnailDesign from "../../../public/resource/design.svg";
import { toolsData } from "../utils/data-tools";

const Thumbnail = () => {
  return (
    <>
      {/* thumbnail */}
      <div className="thumbnail__design min-h-[400px] px-5 py-8 rounded-xl flex flex-col justify-between items-center border border-gray border-opacity-50 w-full">
        <Image src={ThumbnailDesign} width={250} alt="Thumbnail Design" />
        <div className="title__design">
          <h2 className="text-left w-full text-[20px] text-soft-white">
            Creative Design
          </h2>
          <p className="text-left w-full text-[14px] text-gray">
            Create a design that is attractive and can be understood clearly.
          </p>
        </div>
      </div>
    </>
  );
};

export default function DesignCards() {
  const designTools = toolsData.filter((data) => data.category === "design");

  return (
    <main className="flex flex-col justify-center items-center gap-5 w-full">
      <Thumbnail />
      {designTools.map((item) => (
        <div
          key={item.id}
          className="w-full min-h-auto p-5 rounded-xl gap-3 flex flex-col justify-center items-center border border-gray border-opacity-50"
        >
          <h1 className="text-left w-full text-[20px] text-soft-white">{item.name}</h1>
          <p className="text-left w-full text-[14px] text-gray">{item.desc}</p>
        </div>
      ))}
    </main>
  );
}
