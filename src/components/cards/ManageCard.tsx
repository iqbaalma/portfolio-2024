import Image from "next/image";
import React from "react";
import ThumbnailManage from "../../../public/resource/manage.svg";
import { toolsData } from "../utils/data-tools";

const Thumbnail = () => {
  return (
    <>
      {/* thumbnail */}
      <div className="thumbnail__manage min-h-[400px] px-5 py-8 rounded-xl flex flex-col justify-between items-center border border-gray border-opacity-50 w-full">
        <Image src={ThumbnailManage} width={250} alt="Thumbnail Manage" />
        <div className="title__manage">
          <h2 className="text-left w-full text-[20px] text-soft-white">
            Project Management
          </h2>
          <p className="text-left w-full text-[14px] text-gray">
            Break large tasks into smaller ones with good concept and
            architecture.
          </p>
        </div>
      </div>
    </>
  );
};

export default function ManageCards() {
  const manageTools = toolsData.filter((data) => data.category === "manage");

  return (
    <main className="flex flex-col justify-center items-center gap-5 w-full">
      <Thumbnail />
      {manageTools.map((item) => (
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
