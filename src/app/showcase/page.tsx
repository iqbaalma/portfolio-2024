import React from "react";
import { NavbarLight } from "./NavbarLight";
import HeroShowcase from "./HeroShowcase";
import TopShowcase from "./TopShowcase";
import CountActivities from "./CountActivities";
import { Metadata } from "next";
import CardShowcase from "./CardShowcase";
import FooterLight from "./FooterLight";

export const metadata: Metadata = {
  title:
    "Showcase | Iqbal: Full-stack expertise will create the perfect showcase",
  description: "My Portfolio in 2024",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/favicon.ico?v=4"],
    shortcut: ["/favicon.ico?v=4"],
  },
};

export default function Showcase() {
  return (
    <>
      <NavbarLight />
      <main className="light flex min-h-screen flex-col items-center justify-between">
        <HeroShowcase />
        <TopShowcase />
        <CountActivities />
        <CardShowcase />
        <FooterLight />
      </main>
    </>
  );
}
