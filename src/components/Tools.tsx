import React from "react";
import DesignCards from "./cards/DesignCard";
import ManageCards from "./cards/ManageCard";
import ProgrammingeCards from "./cards/ProgrammingCard";
import { Button } from "@nextui-org/react";
import { LuChevronRight } from "react-icons/lu";
import "./style/tools.css";

export default function Tools() {
  return (
    <main className="main__tools w-full">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10 px-3 pb-10">
        {/* title */}
        <div className="title__tools flex flex-col md:flex-row items-center gap-3">
          <h1 className="text-[32px]">What is used for work?</h1>
          <p className="text-soft-gray text-[20px]">
            I split it into three parts, let&apos;s see
          </p>
        </div>

        {/* thumbnail and title cards */}
        <div className="thumbnail__tools flex flex-col md:flex-row justify-between items-start w-full gap-10">
          <DesignCards />
          <ManageCards />
          <ProgrammingeCards />
        </div>

        {/* action */}
        <div className="action__tools w-full flex flex-row gap-3 justify-end items-center">
          <p className="text-[14px] text-gray">
            Looks like you need to see my expertise.
          </p>
          <Button
            className="flex flex-row items-center gap-1 text-soft-white"
            variant="bordered"
            radius="full"
          >
            OK, Show more <LuChevronRight />
          </Button>
        </div>
      </div>
    </main>
  );
}
