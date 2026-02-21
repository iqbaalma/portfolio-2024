import CaptionShowcase from "./CaptionShowcase";
import Link from "next/link";
import Image from "next/image";
import Thumbnail from "../../public/resource/thumbnail-showcase.svg";

export default function Showcase() {
  return (
    <main className="container mx-auto flex flex-col justify-center items-center border-x border-dashed border-gray border-opacity-30 m-5 md:m-24 px-3">
      {/* title */}
      <div className="title__showcase w-full flex flex-col md:flex-row justify-start items-center gap-3 border-b border-dashed border-gray border-opacity-30 py-8 md:ps-20">
        <h1 className="text-[32px]">Get started to view</h1>
        <p className="text-soft-gray text-[20px]">the showcase</p>
      </div>

      {/* cation and action */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start">
        <CaptionShowcase />
        <div className="flex flex-row justify-end items-start md:pe-20 md:-mt-10">
          <Link href="/showcase">
            <Image
              src={Thumbnail}
              width={900}
              alt="Thumbnail Showcase"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
