import React from "react";
import Image from "next/image";
import heroBackground from "../../../public/images/Hero-Abstract.png";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src={heroBackground}
        alt="Background"
        fill
        className="object-cover z-0 max-h-screen"
        quality={100}
      />
      <div className="relative flex flex-col z-10 mx-[25px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px] w-[80%] laptop:w-[50%] min-h-screen justify-end laptop:justify-center pb-[75px] tablet:pb-[150px] laptop:pb-0">
        <div className="flex flex-col gap-[20px] tablet:gap-[40px] self-center">
          <h1 className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent font-urbanist text-[28px] tablet:text-[50px] desktop:text-[64px] font-bold">
            Website Profesional Mulai Dari Rp500.000
          </h1>
          <Button text="Konsultasi sekarang" href="/" variant="primary" />
        </div>
      </div>

      {/* Tech Container - positioned absolute at the bottom */}
      <div className="laptop:absolute bottom-0 right-0 z-10 laptop:h-[120px] h-[100px] laptop:w-[500px]">
        <div className="flex items-center justify-between h-full laptop:mx-[50px] mx-[50px] tablet:mx-[100px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-urbanist font-bold text-[18px] tablet:text-[28px] bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
              3 Day
            </h1>
            <p className="font-poppins font-normal text-[10px] tablet:text-[14px]">
              Delivery
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-urbanist font-bold text-[18px] tablet:text-[28px] bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
              Exclusive
            </h1>
            <p className="font-poppins font-normal text-[10px] tablet:text-[14px]">
              UI/UX Design
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-urbanist font-bold text-[18px] tablet:text-[28px] bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
              SEO
            </h1>
            <p className="font-poppins font-normal text-[10px] tablet:text-[14px]">
              Optimized
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
