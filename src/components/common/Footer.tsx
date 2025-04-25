import React from "react";
import seierLogoWhite from "../../../public/images/seier-logo-white.png";
import Image from "next/image";
import {
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoFacebook,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="py-[50px] px-[25px] tablet:py-[100px] tablet:px-[50px] laptop:px-[70px] desktop:px-[150px] flex flex-col laptop:flex-row items-start justify-between bg-[#091E26]">
      <div className="flex flex-col w-full gap-10 tablet:gap-0 tablet:flex-row tablet:justify-between desktop:w-[90%]">
        <div className="flex flex-col gap-5 tablet:w-[50%]">
          <div>
            <Image
              className="h-[25px] tablet:h-[40px] w-auto"
              src={seierLogoWhite}
              alt="seier tech lab logo jasa buat website dan aplikasi"
            ></Image>
          </div>
          <h1 className="font-urbanist font-bold text-white text-lg">
            We help you to transforming ideas into powerful digital solutions
          </h1>
          <h2 className="font-urbanist font-normal text-white text-xs">
            © 2024 Seier Tech Labs. All rights reserved.
          </h2>
        </div>
        <div className="">
          <div className="flex text-white gap-16">
            {/* Services Column */}
            <div className="flex flex-col gap-2">
              <h2 className="font-urbanist font-bold text-md">Services</h2>
              <nav className="flex flex-col font-urbanist font-normal text-sm gap-1">
                <a href="#">Web Development</a>
                <a href="#">Mobile Development</a>
                <a href="#">UI/UX Design</a>
              </nav>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-2">
              <h2 className="font-urbanist font-bold text-md">Company</h2>
              <nav className="flex flex-col font-urbanist font-normal text-sm gap-1">
                <a href="#">About us</a>
                <a href="#">Portofolio</a>
                <a href="#">Blog</a>
                <a href="#">Career</a>
              </nav>
            </div>
          </div>
        <div className="flex gap-5 mt-10">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin color="white" className="h-[20px] w-auto" />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp color="white" className="h-[20px] w-auto" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <IoLogoInstagram color="white" className="h-[20px] w-auto" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="TikTok"
          >
            <IoLogoTiktok color="white" className="h-[20px] w-auto" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <IoLogoFacebook color="white" className="h-[20px] w-auto" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="X (formerly Twitter)"
          >
            <FaXTwitter color="white" className="h-[20px] w-auto" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
