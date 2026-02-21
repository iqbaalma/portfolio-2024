"use client";
import { Button, Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { LuArrowUpRight } from "react-icons/lu";

export default function CaptionShowcase() {
  const badgeSghowcase = [
    {
      label: "JavaScript",
      color: "#FFFF00",
      text: "black",
    },
    {
      label: "TypeScript",
      color: "#1D59F1",
      text: "white",
    },
    {
      label: "UI/UX",
      color: "#FF29A3",
      text: "white",
    },
    {
      label: "WordPress",
      color: "#8DA2FF",
      text: "black",
    },
    {
      label: "Next.js",
      color: "#0A0A0A",
      text: "white",
    },
    {
      label: "etc",
      color: "white",
      text: "black",
    },
  ];

  const route = useRouter();

  const handleShowcase = () => {
    route.push("/showcase");
  };

  return (
    <div className="flex flex-col justify-start items-start w-full gap-8 md:ps-20 pt-10 overflow-hidden">
      {/* chip/badge */}
      <div className="flex flex-row justify-start items-center gap-2">
        {badgeSghowcase.map((item: any) => (
          <Chip
            key={item.label}
            className="opacity-70"
            style={{ backgroundColor: item.color, color: item.text }}
          >
            {item.label}
          </Chip>
        ))}
      </div>

      {/* caption */}
      <div className="flex flex-col justify-start items-start gap-2">
        <p className="text-soft-gray text-[16px]">
          I will showcase my work in the showcase that I created from 2022 until
          now.
        </p>
        <p className="text-soft-gray text-[16px]">
          Interested? Let&apos;s take a look now!
        </p>
      </div>

      {/* action */}
      <Button
        radius="sm"
        variant="solid"
        onClick={handleShowcase}
        className="bg-soft-white flex flex-row items-center gap-1"
      >
        Go, view Iqbal&apos;s showcase
        <LuArrowUpRight />
      </Button>
    </div>
  );
}
