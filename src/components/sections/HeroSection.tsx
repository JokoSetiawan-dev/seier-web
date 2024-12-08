import React from "react";
import Image from "next/image";
import heroBackground from "../../../public/images/hero-background.jpg";
import Link from "next/link";

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
          <h1 className="text-white font-urbanist text-[28px] tablet:text-[50px] desktop:text-[64px] font-bold">
            Jasa buat website yang cepat dan aman
          </h1>
          <p className="text-white font-poppins font-normal text-[12px] desktop:text-[20px] tablet:text-[16px]">
            Optimalkan performa bisnis anda melalui website berstandar tinggi.
            Dengan fokus pada kecepatan, SEO, dan responsivitas, kami wujudkan
            platform digital yang mendorong pertumbuhan bisnis Anda.
          </p>
          <Link
            className="text-white font-urbanist font-bold text-[12px] tablet:text-[20px] desktop:text-[26px] bg-[#5ABFAD] rounded-full py-[10px] px-[20px] laptop:px-[25px] w-fit"
            href="/"
          >
            Konsultasi sekarang
          </Link>
        </div>
      </div>

      {/* Tech Container - positioned absolute at the bottom */}
      <div className="laptop:absolute bottom-0 right-0 z-10 laptop:h-[120px] h-[100px] laptop:w-[500px] bg-white rounded-tl-[20px]">
        <div className="flex items-center justify-between h-full laptop:mx-[50px] mx-[50px] tablet:mx-[100px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-urbanist font-bold text-[18px] tablet:text-[28px] text-[#5ABFAD]">7 Day</h1>
            <p className="font-poppins font-normal text-[10px] tablet:text-[14px]">Delivery</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-urbanist font-bold text-[18px] tablet:text-[28px] text-[#5ABFAD]">FREE</h1>
            <p className="font-poppins font-normal text-[10px] tablet:text-[14px]">UI/UX Design</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-urbanist font-bold text-[18px] tablet:text-[28px] text-[#5ABFAD]">SEO</h1>
            <p className="font-poppins font-normal text-[10px] tablet:text-[14px]">Optimized</p>
          </div>
        </div>
      </div>
    </section>
  );
}
