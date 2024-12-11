import React from "react";
import { IoFlash } from "react-icons/io5";
import { IoTv } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { IoShield } from "react-icons/io5";
import { IoSparkles } from "react-icons/io5";

export default function ProductValueSection() {
  return (
    <section className="my-[50px] mx-[25px] tablet:my-[100px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px]">
      <div className="flex flex-col font-urbanist font-bold justify-center items-center laptop:justify-start laptop:items-start mb-[50px] tablet:mb-[100px]">
        <h1 className="text-[14px] tablet:text-[36px] laptop:text-[25px] desktop:text-[32px] text-[#5ABFAD]">
          Kami siap
        </h1>
        <h1 className="text-[18px] tablet:text-[48px] laptop:text-[32px] desktop:text-[40px] text-center laptop:text-start">
          Prioritaskan kualitas <br /> untuk website bisnis anda
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-rows-6 laptop:grid-rows-2 laptop:grid-cols-3 w-[270px] tablet:w-[510px] laptop:w-full">
          <div className="border border-gray-300 min-h-[130px] rounded-t-[15px] tablet:rounded-t-[25px] laptop:rounded-t-none laptop:rounded-tl-[20px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[10px] tablet:gap-[30px] laptop:gap-[20px]">
              <IoFlash
                color="#5ABFAD"
                className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto"
              />
              <h1 className="text-[16px] tablet:text-[24px] laptop:text-[16px] desktop:text-[20px] font-urbanist font-bold">
                Lightspeed
              </h1>
              <p className="text-[10px] tablet:text-[20px] laptop:text-[13px] desktop:text-[16px] font-poppins font-normal">
                Akses website dan aplikasi dengan cepat menggunakan teknologi
                terbaru.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 min-h-[130px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[10px] tablet:gap-[30px] laptop:gap-[20px]">
              <IoTv
                color="#5ABFAD"
                className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto"
              />
              <h1 className="text-[16px] tablet:text-[24px] laptop:text-[16px] desktop:text-[20px] font-urbanist font-bold">
                Lightspeed
              </h1>
              <p className="text-[10px] tablet:text-[20px] laptop:text-[13px] desktop:text-[16px] font-poppins font-normal">
                Akses website dan aplikasi dengan cepat menggunakan teknologi
                terbaru.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 min-h-[130px] laptop:rounded-tr-[20px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[10px] tablet:gap-[30px] laptop:gap-[20px]">
              <IoSearch
                color="#5ABFAD"
                className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto"
              />
              <h1 className="text-[16px] tablet:text-[24px] laptop:text-[16px] desktop:text-[20px] font-urbanist font-bold">
                Lightspeed
              </h1>
              <p className="text-[10px] tablet:text-[20px] laptop:text-[13px] desktop:text-[16px] font-poppins font-normal">
                Akses website dan aplikasi dengan cepat menggunakan teknologi
                terbaru.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 min-h-[130px] laptop:rounded-bl-[20px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[10px] tablet:gap-[30px] laptop:gap-[20px]">
              <IoStatsChart
                color="#5ABFAD"
                className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto"
              />
              <h1 className="text-[16px] tablet:text-[24px] laptop:text-[16px] desktop:text-[20px] font-urbanist font-bold">
                Lightspeed
              </h1>
              <p className="text-[10px] tablet:text-[20px] laptop:text-[13px] desktop:text-[16px] font-poppins font-normal">
                Akses website dan aplikasi dengan cepat menggunakan teknologi
                terbaru.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 min-h-[130px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[10px] tablet:gap-[30px] laptop:gap-[20px]">
              <IoShield
                color="#5ABFAD"
                className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto"
              />
              <h1 className="text-[16px] tablet:text-[24px] laptop:text-[16px] desktop:text-[20px] font-urbanist font-bold">
                Lightspeed
              </h1>
              <p className="text-[10px] tablet:text-[20px] laptop:text-[13px] desktop:text-[16px] font-poppins font-normal">
                Akses website dan aplikasi dengan cepat menggunakan teknologi
                terbaru.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 min-h-[130px] rounded-b-[15px] tablet:rounded-b-[25px] laptop:rounded-b-none laptop:rounded-br-[20px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[10px] tablet:gap-[30px] laptop:gap-[20px]">
              <IoSparkles
                color="#5ABFAD"
                className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto"
              />
              <h1 className="text-[16px] tablet:text-[24px] laptop:text-[16px] desktop:text-[20px] font-urbanist font-bold">
                Lightspeed
              </h1>
              <p className="text-[10px] tablet:text-[20px] laptop:text-[13px] desktop:text-[16px] font-poppins font-normal">
                Akses website dan aplikasi dengan cepat menggunakan teknologi
                terbaru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
