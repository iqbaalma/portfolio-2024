import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container flex flex-col justify-between items-center border-t py-5 px-3 border-gray border-opacity-30 bg-black w-full z-20 gap-20">
      {/* content-top */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-10 w-full">
        {/* logo */}
        <div className="logo__footer flex flex-row justify-start items-center">
          <Image src={Logo} width={100} alt="Logo Portfolio" />
        </div>

        {/* menu footer */}
        <div className="menu__footer flex flex-col md:flex-row justify-end items-center md:items-start gap-10 md:gap-20">
          {/* Resource menu */}
          <div className="resource__menu flex flex-col justify-center md:justify-start items-center md:items-start gap-5 text-[14px]">
            <span className="text-soft-white font-medium">Resource</span>
            <Link href="/showcase" className="text-gray">
              Showcase
            </Link>
            <Link href="/showcase" className="text-gray">
              Experience
            </Link>
            <Link href="/showcase" className="text-gray">
              Template
            </Link>
          </div>
          {/* Connection menu */}
          <div className="connection__menu flex flex-col justify-center md:justify-start items-center md:items-start gap-5 text-[14px]">
            <span className="text-soft-white font-medium">Connection</span>
            <Link
              href="https://github.com/iqbaalma"
              target="_blank"
              className="text-gray"
            >
              GitHub
            </Link>
            <Link
              href="https://www.instagram.com/iqbaalna/"
              target="_blank"
              className="text-gray"
            >
              Instagram
            </Link>
            <Link
              href="https://dribbble.com/iqbaalna"
              target="_blank"
              className="text-gray"
            >
              Dribbble
            </Link>
            <Link
              href="https://www.fiverr.com/iqbaalna"
              target="_blank"
              className="text-gray"
            >
              Fiverr
            </Link>
          </div>
          {/* Contact menu */}
          <div className="contact__menu flex flex-col justify-center md:justify-start items-center md:items-start gap-5 text-[14px]">
            <span className="text-soft-white font-medium">Contact</span>
            <Link
              href="https://www.linkedin.com/in/muhammad-iqbal-maulana-82a916214/"
              target="_blank"
              className="text-gray"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:suraatiqbaal@gmail.com?subject=Hiring Offer Letter for Iqbal&body=I have an offer to hire you with a project like..."
              target="_blank"
              className="text-gray"
            >
              Email
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=6285712248041&text=I%20have%20an%20offer%20to%20hire%20you%20with%20a%20project%20like..."
              target="_blank"
              className="text-gray"
            >
              WhatsApp Business
            </Link>
          </div>
        </div>
      </div>

      {/* content-bottom */}
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-5 w-full text-[14px]">
        {/* copyright */}
        <span className="text-gray">
          2024 &copy; Muhammad Iqbal Maulana&trade;
        </span>
        {/* terms */}
        <div className="flex flex-row items-center gap-3 text-gray">
          <span>Terms</span>
          <span>|</span>
          <span>Policy</span>
        </div>
      </div>
    </footer>
  );
}
