import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";
import { ButtonActionMobile, NavbarMenuMobile } from "./mobile/NavbarMobile";

export function Navbar() {
  return (
    <main className="border-b border-dark-gray sticky top-0 z-50">
      <nav className="container mx-auto bg-black md:bg-black/50 md:backdrop-blur-md flex flex-row justify-between items-center py-5 md:px-0 px-3">
        {/* navbar-menu */}
        <NavbarMenuMobile />
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
            className="hover:text-soft-white transition-colors duration-300"
            href="/showcase"
          >
            Showcase
          </Link>
          <Link
            className="hover:text-soft-white transition-colors duration-300"
            href="/showcase"
          >
            Experience
          </Link>
          <Link
            className="hover:text-soft-white transition-colors duration-300"
            href="/Template"
          >
            <span className="flex flex-row items-center">
              Blog
              <LuArrowUpRight />
            </span>
          </Link>
          <Link
            className="hover:text-soft-white transition-colors duration-300"
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
            className="text-soft-white border border-soft-white flex flex-row items-center gap-1"
          >
            <FaLinkedinIn /> Connect
          </Button>
          <Button
            radius="sm"
            variant="solid"
            className="bg-soft-white flex flex-row items-center"
          >
            Resume
          </Button>
        </div>
      </nav>
    </main>
  );
}
