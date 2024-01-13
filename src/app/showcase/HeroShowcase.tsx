import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function HeroShowcase() {
  return (
    <main className="container mx-auto flex-col justify-center items-center m-5 md:m-24">
      {/* title showcase */}
      <div className="title_showcase w-full text-center flex-col justify-center items-center py-5 px-10">
        <h1
          className={`text-[42px] text-black md:text-[68px] font-extrabold ${montserrat.className}`}
        >
          Full-stack expertise will create the perfect showcase
        </h1>
        {/* caption */}
        <div className="showcase__caption__hero w-full flex justify-center items-center py-5 px-10">
          <p className="text-[16px] md:text-[20px] text-dark-gray text-center lg:max-w-[60%]">
            Now everything is needed to be number one, design, content, and
            website to support better growth.
          </p>
        </div>
      </div>
    </main>
  );
}
