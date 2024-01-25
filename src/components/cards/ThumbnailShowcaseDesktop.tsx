import React from "react";
import others from "xbal/public/resource/others-image.png";
import sidewwways from "xbal/public/resource/sidewwways-background.png";
import diamond from "xbal/public/resource/diamond-background.png";
import portfolio from "xbal/public/resource/portfolio-background.png";
import uniicode from "xbal/public/resource/uniicode-background.png";
import Image from "next/image";
import logoSW from "xbal/public/sidewwways-logo.svg";
import logoDG from "xbal/public/diamond-logo.svg";
import logoPR from "xbal/public/logo-black.svg";
import logoUN from "xbal/public/uniicode-logo.svg";
import logoOT from "xbal/public/others-logo.svg";
import Link from "next/link";

export const LeftContentCard = () => {
  return (
    <div className="left__content flex flex-col justify-center items-center gap-5">
      {/* card 1 */}
      <Link
        target="_blank"
        href="https://drive.google.com/drive/folders/1gckz-3V5Yt2r11oljv3DI5T2IvJvjbNC?usp=sharing"
        className="group/item relative border border-soft-gray border-opacity-30 rounded-lg"
      >
        <Image
          src={others}
          alt="Others Background"
          className="border-t-lg h-auto max-h-[266px] object-cover bg-no-repeat"
          width={400}
          height={266}
        />
        {/* content card */}
        <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-between items-start gap-5">
          {/* logo title card */}
          <Image src={logoOT} width={130} alt="logo others" />

          {/* body card */}
          <div className="flex flex-col gap-5">
            <span className="text-soft-black text-[16px] font-bold">
              Individuals and work experience: Projects in 2023 such as design,
              content, and other roles
            </span>
            {/* card inner card */}
            <div className="group/inner hidden group-hover/item:flex flex-row gap-3 items-center h-auto transition-transform duration-300 transform group-hover:transition-all">
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Projects
                </span>
                <span className="text-black text-[12px]">
                  Creative and Marketing
                </span>
              </div>
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Jan 2021
                </span>
                <span className="text-black text-[12px]">Start working</span>
              </div>
            </div>
          </div>
        </div>
        {/* content card - end */}
      </Link>
      {/* card 2 */}
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/muhammad-iqbal-maulana-82a916214/details/projects/"
        className="group/item relative border border-soft-gray border-opacity-30 rounded-lg"
      >
        <Image
          src={sidewwways}
          alt="Sidewwways Background"
          className="border-t-lg object-cover bg-no-repeat max-h-[266px]"
          width={400}
          height={266}
        />
        {/* content card */}
        <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-between items-start gap-5">
          {/* logo title card */}
          <Image src={logoSW} width={130} alt="logo sidewwways" />

          {/* body card */}
          <div className="flex flex-col gap-5">
            <span className="text-soft-black text-[16px] font-bold">
              Marketplace for freelancer: Created use TypeScript, NextJS, and
              ExpressJS
            </span>
            {/* card inner card */}
            <div className="group/inner hidden group-hover/item:flex flex-row gap-3 items-center h-auto ">
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Programming
                </span>
                <span className="text-black text-[12px]">Typescript</span>
              </div>
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Sep 2023
                </span>
                <span className="text-black text-[12px]">Start running</span>
              </div>
            </div>
          </div>
        </div>
        {/* content card - end */}
      </Link>
    </div>
  );
};

export const CenterContentCard = () => {
  return (
    <div className="left__content flex flex-col justify-center items-center gap-5">
      {/* card 1 */}
      <Link
        target="_blank"
        href="https://diamondgloryhotelschool.com/"
        className="group/item relative border border-soft-gray border-opacity-30 rounded-lg"
      >
        <Image
          src={diamond}
          alt="Diamond Background"
          className="border-t-lg object-cover bg-no-repeat"
          width={400}
        />
        {/* content card */}
        <div className="absolute bottom-0 left-0 p-8 h-full flex flex-col justify-between items-start gap-5">
          {/* logo title card */}
          <Image src={logoDG} width={150} alt="logo diamond" />

          {/* body card */}
          <div className="flex flex-col gap-5">
            <span className="text-soft-black text-[24px] font-bold">
              Education Website: Created website with WordPress and Elementor
            </span>
            {/* card inner card */}
            <div className="group/inner hidden group-hover/item:flex flex-row gap-3 items-center h-auto ">
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  WordPress
                </span>
                <span className="text-black text-[12px]">Design and SEO</span>
              </div>
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Dec 2023
                </span>
                <span className="text-black text-[12px]">Development date</span>
              </div>
            </div>
          </div>
        </div>
        {/* content card - end */}
      </Link>
    </div>
  );
};

export const RightContentCard = () => {
  return (
    <div className="left__content flex flex-col justify-center items-center gap-5">
      {/* card 1 */}
      <Link
        target="_blank"
        href="/"
        className="group/item relative border border-soft-gray border-opacity-30 rounded-lg"
      >
        <Image
          src={portfolio}
          alt="Portfolio Background"
          className="border-t-lg h-auto max-h-[266px] object-cover bg-no-repeat"
          width={400}
          height={266}
        />
        {/* content card */}
        <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-between items-start gap-5">
          {/* logo title card */}
          <Image src={logoPR} width={70} alt="logo portfolio" />

          {/* body card */}
          <div className="flex flex-col gap-5">
            <span className="text-soft-black text-[16px] font-bold">
              My Portfolio 2024: Created website with TypeScript, NextJS, and
              Tailwindcss
            </span>
            {/* card inner card */}
            <div className="group/inner hidden group-hover/item:flex flex-row gap-3 items-center h-auto ">
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Portfolio
                </span>
                <span className="text-black text-[12px]">
                  Programming and design
                </span>
              </div>
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Jan 2024
                </span>
                <span className="text-black text-[12px]">Development date</span>
              </div>
            </div>
          </div>
        </div>
        {/* content card - end */}
      </Link>
      {/* card 2 */}
      <Link
        target="_blank"
        href="https://www.figma.com/file/ad8yUkZOYnReUIlrtpsRiL/UNIICODE-UIX?type=design&node-id=0%3A1&mode=design&t=f4yLaHS4nNu3H1IZ-1"
        className="group/item relative border border-soft-gray border-opacity-30 rounded-lg"
      >
        <Image
          src={uniicode}
          alt="Uniicode Background"
          className="border-t-lg object-cover bg-no-repeat max-h-[266px]"
          width={400}
          height={266}
        />
        {/* content card */}
        <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-between items-start gap-5">
          {/* logo title card */}
          <Image src={logoUN} width={130} alt="logo uniicode" />

          {/* body card */}
          <div className="flex flex-col gap-5">
            <span className="text-soft-black text-[16px] font-bold">
              Where programming meet fun: UI/UX design for landing uniicode
              community
            </span>
            {/* card inner card */}
            <div className="group/inner hidden group-hover/item:flex flex-row gap-3 items-center h-auto ">
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  1st winner
                </span>
                <span className="text-black text-[12px]">
                  Champions in competitions
                </span>
              </div>
              <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 rounded-md">
                <span className="text-black font-medium text-[16px]">
                  Aug 2023
                </span>
                <span className="text-black text-[12px]">Competition date</span>
              </div>
            </div>
          </div>
        </div>
        {/* content card - end */}
      </Link>
    </div>
  );
};
