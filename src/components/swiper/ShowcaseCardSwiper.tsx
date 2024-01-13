"use client";
import React from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../style/showcase-swiper.css";

// Import your images and logos here
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

export default function ShowcaseCardSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* slider start */}
        <SwiperSlide>
          <div className="relative border-2 rounded-lg w-full">
            <Image
              src={others}
              alt="Other Background"
              className="bg-swiper border-t-lg bg-right"
            />
            {/* content card */}
            <div className="shadow absolute bottom-0 left-0 p-8 h-full flex flex-col justify-between items-start gap-5">
              {/* logo title card */}
              <Image src={logoOT} width={150} alt="logo others" />

              {/* body card */}
              <div className="flex flex-col gap-5">
                <span className="text-soft-black text-[24px] font-bold text-left">
                  Individuals and work experience: Projects in 2023 such as
                  design, content, and other roles
                </span>
                {/* card inner card */}
                <div className="flex flex-row gap-3 items-center h-auto">
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Projects
                    </span>
                    <span className="text-black text-[12px]">
                      Creative and Marketing
                    </span>
                  </div>
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Jan 2021
                    </span>
                    <span className="text-black text-[12px]">
                      Start working
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* content card - end */}
          </div>
        </SwiperSlide>
        {/* slider end */}
        {/* slider start */}
        <SwiperSlide>
          <div className="relative border-2 rounded-lg w-full">
            <Image
              src={sidewwways}
              alt="Sidewwways Background"
              className="bg-swiper border-t-lg bg-right"
            />
            {/* content card */}
            <div className="shadow absolute bottom-0 left-0 p-8 h-full flex flex-col justify-between items-start gap-5">
              {/* logo title card */}
              <Image src={logoSW} width={150} alt="logo sidewwways" />

              {/* body card */}
              <div className="flex flex-col gap-5">
                <span className="text-soft-black text-[24px] font-bold text-left">
                  Marketplace for freelancer: Created use TypeScript, NextJS,
                  and ExpressJS
                </span>
                {/* card inner card */}
                <div className="flex flex-row gap-3 items-center h-auto">
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Programming
                    </span>
                    <span className="text-black text-[12px]">Typescript</span>
                  </div>
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Sep 2023
                    </span>
                    <span className="text-black text-[12px]">
                      Start running
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* content card - end */}
          </div>
        </SwiperSlide>
        {/* slider end */}
        {/* slider start */}
        <SwiperSlide>
          <div className="relative border-2 rounded-lg w-full">
            <Image
              src={diamond}
              alt="Diamond Background"
              className="bg-swiper border-t-lg bg-right"
            />
            {/* content card */}
            <div className="shadow absolute bottom-0 left-0 p-8 h-full flex flex-col justify-between items-start gap-5">
              {/* logo title card */}
              <Image src={logoDG} width={150} alt="logo diamond" />

              {/* body card */}
              <div className="flex flex-col gap-5">
                <span className="text-soft-black text-[24px] font-bold text-left">
                  Education Website: Created website with WordPress and
                  Elementor
                </span>
                {/* card inner card */}
                <div className="flex flex-row gap-3 items-center h-auto">
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      WordPress
                    </span>
                    <span className="text-black text-[12px]">
                      Design and SEO
                    </span>
                  </div>
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Dec 2023
                    </span>
                    <span className="text-black text-[12px]">
                      Development date
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* content card - end */}
          </div>
        </SwiperSlide>
        {/* slider end */}
        {/* slider start */}
        <SwiperSlide>
          <div className="relative border-2 rounded-lg w-full">
            <Image
              src={portfolio}
              alt="Portfolio Background"
              className="bg-swiper border-t-lg bg-right"
            />
            {/* content card */}
            <div className="shadow absolute bottom-0 left-0 p-8 h-full flex flex-col justify-between items-start gap-5">
              {/* logo title card */}
              <Image src={logoPR} width={90} alt="logo portfolio" />

              {/* body card */}
              <div className="flex flex-col gap-5">
                <span className="text-soft-black text-[24px] font-bold text-left">
                  My Portfolio 2024: Created website with TypeScript, NextJS,
                  and Tailwindcss
                </span>
                {/* card inner card */}
                <div className="flex flex-row gap-3 items-center h-auto">
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Portfolio
                    </span>
                    <span className="text-black text-[12px]">
                      Programming and design
                    </span>
                  </div>
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Jan 2024
                    </span>
                    <span className="text-black text-[12px]">
                      Development date
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* content card - end */}
          </div>
        </SwiperSlide>
        {/* slider end */}
        {/* slider start */}
        <SwiperSlide>
          <div className="relative border-2 rounded-lg w-full">
            <Image
              src={uniicode}
              alt="Uniicode Background"
              className="bg-swiper border-t-lg bg-right"
            />
            {/* content card */}
            <div className="shadow absolute bottom-0 left-0 p-8 h-full flex flex-col justify-between items-start gap-5">
              {/* logo title card */}
              <Image src={logoUN} width={150} alt="logo uniicode" />

              {/* body card */}
              <div className="flex flex-col gap-5">
                <span className="text-soft-black text-[24px] font-bold text-left">
                  Where programming meet fun: UI/UX design for landing uniicode
                  community
                </span>
                {/* card inner card */}
                <div className="flex flex-row gap-3 items-center h-auto">
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      1st winner
                    </span>
                    <span className="text-black text-[12px]">
                      Champions in competitions
                    </span>
                  </div>
                  <div className="flex flex-col justify-start items-start border border-soft-gray py-3 px-5 text-left rounded-md">
                    <span className="text-black font-medium text-[16px]">
                      Aug 2023
                    </span>
                    <span className="text-black text-[12px]">
                      Competition date
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* content card - end */}
          </div>
        </SwiperSlide>
        {/* slider end */}
      </Swiper>
    </>
  );
}
