import React from "react";
import Image from "next/image";
import seierLogo from "../../../public/images/seier-logo.png";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="absolute z-10 w-full">
      <div className="flex m-[25px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px] items-center justify-between">
        <Image
          className="h-[25px] tablet:h-[40px] w-auto"
          src={seierLogo}
          alt="seier tech lab logo jasa buat website dan aplikasi"
        ></Image>
        <IoMenu className="h-[25px] tablet:h-[50px] w-auto" color="#ffffff" />
      </div>
    </div>
  );
}
