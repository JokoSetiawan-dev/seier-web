import React from "react";
import Image from "next/image";
import techStackImage from "../../../public/images/tech-stack.png";

export default function TechStackSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="relative w-auto tablet:min-h-screen">
        <Image
          src={techStackImage}
          alt="tech stack"
          className="z-0 max-h-screen w-auto object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[60%] laptop:w-[70%]">
          <h1 className="font-urbanist font-bold text-[12px] tablet:text-[20px] laptop:text-[28px] desktop:text-[36px] text-center">
            Kami gunakan teknologi terbaru untuk membuat website kamu dengan
            kualitas yang terbaik
          </h1>
        </div>
      </div>
    </section>
  );
}