import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo-black.svg";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";
import {
  ButtonActionMobile,
  NavbarMenuMobileLight,
} from "xbal/src/components/mobile/NavbarMobileLight";

export function NavbarLight() {
  return (
    <main className="light sticky top-0 z-50 border-b border-soft-gray">
      <nav className="light container mx-auto  md:bg-white/50 md:backdrop-blur-md flex flex-row justify-between items-center py-5 md:px-0 px-3">
        {/* navbar-menu */}
        <NavbarMenuMobileLight />
        <div className="menu__navbar hidden md:flex flex-row justify-start items-center gap-5 text-gray">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              title="Muhammad Iqbal Maulana"
              loading="lazy"
            />
          </Link>
          <Link
            className="hover:text-black transition-colors duration-300"
            href="/showcase"
          >
            Showcase
          </Link>
          <Link
            className="hover:text-black transition-colors duration-300"
            href="/showcase"
          >
            Experience
          </Link>
          <Link
            className="hover:text-black transition-colors duration-300"
            href="/Template"
          >
            <span className="flex flex-row items-center">
              Blog
              <LuArrowUpRight />
            </span>
          </Link>
          <Link
            className="hover:text-black transition-colors duration-300"
            href="/Template"
          >
            <span className="flex flex-row items-center">
              Template
              <LuArrowUpRight />
            </span>
          </Link>
        </div>

        {/* navbar-call-to-action */}
        <ButtonActionMobile />
        <div className="menu__navbar hidden md:flex flex-row justify-end items-center gap-3">
          <Button
            radius="sm"
            variant="bordered"
            className="text-gray border border-soft-gray flex flex-row items-center gap-1"
          >
            <FaLinkedinIn /> Connect
          </Button>
          <Button
            radius="sm"
            variant="solid"
            className="bg-soft-black text-soft-white flex flex-row items-center"
          >
            Resume
          </Button>
        </div>
      </nav>
    </main>
  );
}
