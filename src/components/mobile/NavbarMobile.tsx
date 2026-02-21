"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { LuAlignJustify, LuArrowUpRight, LuX } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export function NavbarMenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);
  const route = useRouter();

  const triggerMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleConnect = () => {
    route.push("https://www.linkedin.com/in/muhammad-iqbal-maulana-82a916214/");
  };

  const handleResume = () => {
    route.push(
      "https://drive.google.com/file/d/1KyfaONrgUbkN7Qc6QB6Waax7upIzEW0i/view?usp=sharing",
    );
  };

  const handleError = () => {
    Swal.fire({
      icon: "error",
      title: "Sorry, access denied",
      text: "Page not yet available!",
    });
  };

  return (
    <>
      {/* navbar-menu */}
      <div className="menu__navbar w-full md:hidden flex flex-row justify-between items-center gap-5 text-gray z-50">
        <Link href="/">
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
        nodeRef={nodeRef}
        in={isOpen}
        timeout={300}
        classNames="fade-down"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className="absolute w-full top-20 left-0 min-h-screen bg-black flex flex-col justify-start items-start gap-5 pt-5"
        >
          <span className="w-full border-t border-dark-gray"></span>
          <Link
            className="hover:text-soft-white transition-colors duration-300 ps-3"
            href="/showcase"
          >
            Showcase
          </Link>
          <span className="w-full border-t border-dark-gray"></span>
          <span
            className="hover:text-soft-white transition-colors duration-300 ps-3 cursor-pointer"
            onClick={handleError}
          >
            Experience
          </span>
          <span className="w-full border-t border-dark-gray"></span>
          <Link
            className="hover:text-soft-white transition-colors duration-300 ps-3"
            href="https://iqbaalna.medium.com/"
            target="_blank"
          >
            <span className="flex flex-row items-center">
              Blog
              <LuArrowUpRight />
            </span>
          </Link>
          <span className="w-full border-t border-dark-gray"></span>
          <span
            className="hover:text-soft-white transition-colors duration-300 cursor-pointer px-3"
            onClick={handleError}
          >
            <span className="flex flex-row items-center">
              Template
              <LuArrowUpRight />
            </span>
          </span>
          <span className="w-full border-t border-dark-gray"></span>
          <div className="flex flex-row items-center justify-start gap-5 mt-5 ps-3">
            <Button
              radius="sm"
              variant="bordered"
              className="text-soft-white border border-soft-white flex flex-row items-center gap-1"
              onClick={handleConnect}
            >
              <FaLinkedinIn /> Connect
            </Button>
            <Button
              radius="sm"
              variant="solid"
              className="bg-soft-white flex flex-row items-center"
              onClick={handleResume}
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
