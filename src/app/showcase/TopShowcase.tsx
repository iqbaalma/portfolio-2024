"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  CenterContentCard,
  LeftContentCard,
  RightContentCard,
} from "xbal/src/components/cards/ThumbnailShowcaseDesktop";
import ShowcaseCardSwiper from "xbal/src/components/swiper/ShowcaseCardSwiper";

export default function TopShowcase() {
  const route = useRouter();

  const handleContact = () => {
    route.push(
      "https://api.whatsapp.com/send?phone=6285712248041&text=I%20have%20an%20offer%20to%20hire%20you%20with%20a%20project%20like..."
    );
  };

  return (
    <main className="w-full flex flex-col items-center gap-10 px-3 md:px-0">
      {/* desktop display */}
      <div className="container mx-auto hidden lg:flex flex-row items-center justify-center gap-5">
        <LeftContentCard />
        <CenterContentCard />
        <RightContentCard />
      </div>

      {/* tab n mobile display */}
      <div className="container mx-auto block lg:hidden">
        <ShowcaseCardSwiper />
      </div>

      {/* action */}
      <div className="w-full flex sm:flex-row flex-col justify-center items-center gap-3 my-10">
        <span className="text-[20px] text-gray sm:text-left text-center">
          Get experience working together with the best ideas
        </span>
        <Button
          radius="sm"
          variant="solid"
          className="bg-soft-black text-soft-white flex flex-row items-center"
          onClick={handleContact}
        >
          Contact Me
        </Button>
      </div>
    </main>
  );
}
