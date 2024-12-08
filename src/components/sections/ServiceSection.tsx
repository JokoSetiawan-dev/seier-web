import React from "react";
import { IoDesktopOutline, IoPhonePortrait, IoBrush } from "react-icons/io5";

export default function Services() {
  return (
    <div>
      <div className="my-[50px] mx-[25px] tablet:my-[100px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px]">
        <div className="flex flex-col font-urbanist font-bold justify-center items-center laptop:justify-start laptop:items-start mb-[50px] tablet:mb-[100px]">
          <h2 className="text-[14px] tablet:text-[36px] laptop:text-[25px] desktop:text-[32px] text-[#5ABFAD]">Yang kami lakukan</h2>
          <h2 className="text-[18px] tablet:text-[48px] laptop:text-[32px] desktop:text-[40px]">Untuk bisnis anda</h2>
        </div>
        <div className="flex flex-col items-center justify-center laptop:flex-row">
          <div className="border border-gray-300 w-[80%] tablet:w-[70%] rounded-t-[15px] tablet:rounded-t-[25px] laptop:rounded-l-[20px] laptop:rounded-r-[0px]  tablet:min-h-[490px] min-h-[275px] laptop:min-h-[350px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[20px] tablet:gap-[40px] laptop:gap-[30px]">
              <IoDesktopOutline color="#5ABFAD" className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto" />
              <h1 className="font-urbanist font-bold text-[16px] tablet:text-[32px] laptop:text-[18px] dekstop:text-[24px]">
                Website Development
              </h1>
              <p className="font-poppins font-normal text-[11px] tablet:text-[20px] laptop:text-[13px] dekstop:text-[16px]">
                Kami menciptakan website yang tidak hanya menarik secara visual,
                tapi juga efektif mengkonversi pengunjung menjadi pelanggan.
                Dengan sistem manajemen konten yang user-friendly, website Anda
                mudah dikelola dan selalu up-to-date.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 w-[80%] tablet:w-[70%] min-h-[275px] tablet:min-h-[490px] laptop:min-h-[350px] ">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[20px] tablet:gap-[40px] laptop:gap-[30px]">
              <IoPhonePortrait  color="#5ABFAD" className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto" />
              <h1 className="font-urbanist font-bold text-[16px] tablet:text-[32px] laptop:text-[18px] dekstop:text-[24px]">
                Mobile App Development
              </h1>
              <p className="font-poppins font-normal text-[11px] tablet:text-[20px] laptop:text-[13px] dekstop:text-[16px]">
                Kembangkan aplikasi mobile yang powerful bersama tim kami. Dari
                Android hingga iOS, kami membangun aplikasi yang responsif,
                cepat, dan memberikan pengalaman pengguna terbaik untuk bisnis
                Anda.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 w-[80%] tablet:w-[70%] rounded-b-[15px] tablet:rounded-b-[50px] laptop:rounded-r-[20px] laptop:rounded-b-[0px]  tablet:min-h-[490px] min-h-[275px] laptop:min-h-[350px]">
            <div className="m-[25px] tablet:m-[50px] laptop:m-[30px] flex flex-col items-start gap-[20px] tablet:gap-[40px] laptop:gap-[30px]">
              <IoBrush color="#5ABFAD" className="h-[25px] tablet:h-[50px] laptop:h-[30px] dekstop:h-[40px] w-auto" />
              <h1 className="font-urbanist font-bold text-[16px] tablet:text-[32px] laptop:text-[18px] dekstop:text-[24px]">
              UI/UX Design
              </h1>
              <p className="font-poppins font-normal text-[11px] tablet:text-[20px] laptop:text-[13px] dekstop:text-[16px]">
                Kami merancang antarmuka yang menggabungkan estetika dengan
                fungsionalitas. Setiap desain dibuat berdasarkan riset mendalam
                untuk menciptakan pengalaman digital yang memikat dan mudah
                digunakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
