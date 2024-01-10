"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { LuAlignJustify, LuArrowUpRight, LuX } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import "./navbarMobile.css";

export function NavbarMenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const triggerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* navbar-menu */}
      <div className="menu__navbar w-full md:hidden flex flex-row justify-between items-center gap-5 text-gray">
        <Link href="#">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            title="Muhammad Iqbal Maulana"
            loading="lazy"
          />
        </Link>
        <Button
          className="text-soft-white"
          variant="light"
          isIconOnly
          onClick={triggerMenu}
        >
          {isOpen ? <LuX size={40} /> : <LuAlignJustify size={40} />}
        </Button>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="fade-down"
        unmountOnExit
      >
        <div className="absolute w-full top-20 left-0 bg-black min-h-screen flex flex-col justify-start items-start gap-5 pt-5">
          <span className="w-full border-t border-gray"></span>
          <Link
            className="hover:text-soft-gray transition-colors duration-300 ps-3"
            href="/"
          >
            Timeline
          </Link>
          <span className="w-full border-t border-gray"></span>
          <Link
            className="hover:text-soft-gray transition-colors duration-300 ps-3"
            href="/showcase"
          >
            Showcase
          </Link>
          <span className="w-full border-t border-gray"></span>
          <Link
            className="hover:text-soft-gray transition-colors duration-300 ps-3"
            href="/Experience"
          >
            Experience
          </Link>
          <span className="w-full border-t border-gray"></span>
          <Link
            className="hover:text-soft-gray transition-colors duration-300 ps-3"
            href="/Template"
          >
            <span className="flex flex-row items-center">
              Template
              <LuArrowUpRight />
            </span>
          </Link>
          <span className="w-full border-t border-gray"></span>
          <div className="flex flex-row items-center justify-start gap-5 mt-5 ps-3">
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
        </div>
      </CSSTransition>
    </>
  );
}

export function ButtonActionMobile() {
  return (
    <>
      {/* navbar-call-to-action */}
      <div className="menu__navbar md:hidden flex flex-row justify-end items-center gap-3"></div>
    </>
  );
}
