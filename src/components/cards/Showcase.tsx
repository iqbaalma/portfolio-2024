"use client";
import { Button, button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";

interface CardShowcaseProps {
  key: string;
  imageUrl: string;
  title: string;
  tag: string;
  link: string;
}

const dataCardShowcase: CardShowcaseProps[] = [
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/78319a31-950f-4ada-b9dd-932fc9bab2e3",
    title: "Diamond Glory Hotel School",
    tag: "Education",
    link: "/showcase/diamondglory",
  },
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/72c614ee-d00d-4442-b76a-c5190f9bc6dd",
    title: "Buat Usaha Indonesia",
    tag: "Digital Agency",
    link: "/showcase/buatusaha",
  },
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/bd4971cf-5b12-4ef9-9969-69d9c99755bd",
    title: "Uniicode Community",
    tag: "Entertainment",
    link: "/showcase/uniicode",
  },
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/c1bf88bf-2a02-421a-a88e-10fd56c148f0",
    title: "Social Media Design",
    tag: "Design",
    link: "/showcase/social",
  },
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/0e07de27-c1be-41e7-bb49-d3553ebafae2",
    title: "Sidewwways",
    tag: "Marketplace",
    link: "/showcase/sidewwways",
  },
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/b5946de7-e0d3-4eb3-bece-fbd67c8dfdff",
    title: "Logo Design",
    tag: "Design",
    link: "/showcase/logo",
  },
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/e533b0b1-512d-4836-8972-f494894d3627",
    title: "Email Template",
    tag: "Marketing",
    link: "template",
  },
  {
    key: uuidv4(),
    imageUrl:
      "https://github.com/iqbaalma/source-convert-image/assets/104726883/6cd86671-7eb9-4dce-bafc-e647ef0b4154",
    title: "Social & Banner Design",
    tag: "Design",
    link: "/showcase/social",
  },
];

export default function Showcase() {
  const [displayCount, setDisplayCount] = useState(3);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 3);
  };

  const handleReset = () => {
    setDisplayCount(3);
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {dataCardShowcase.slice(0, displayCount).map((data) => (
          <Link
            key={data.key}
            href={data.link}
            className="group/item bg-[#f8f8f8] p-5 rounded-md flex flex-col justify-center items-center gap-5 hover:bg-soft-black transition-colors duration-200"
          >
            {/* content */}
            <div
              className="w-full min-h-[200px] rounded-md"
              style={{
                backgroundImage: `url(${data.imageUrl})`,
                backgroundSize: `cover`,
              }}
            ></div>

            {/* body */}
            <div className="flex flex-col justify-start items-start w-full">
              <span className="text-[16px] font-semibold text-soft-black flex flex-row items-center justify-start group-hover/item:text-soft-white transition-colors duration-200">
                {data.title}
                <LuArrowUpRight />
              </span>
              <span className="text-[16px] text-soft-gray">{data.tag}</span>
            </div>
          </Link>
        ))}
      </div>
      {displayCount < dataCardShowcase.length ? (
        <>
          <div className="w-full flex items-center justify-center">
            <Button
              variant="bordered"
              onClick={handleLoadMore}
              className="text-soft-black rounded-md w-full sm:w-64"
            >
              Load More Showcase
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full flex items-center justify-center">
          <Button
            variant="bordered"
            onClick={handleReset}
            className="text-soft-black rounded-md w-full md:w-64"
          >
            Reset Display
          </Button>
        </div>
      )}
    </>
  );
}
