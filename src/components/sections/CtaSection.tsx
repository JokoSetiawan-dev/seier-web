import React from 'react'
import Button from '../ui/Button'

export default function CtaSection() {
  return (
    <section className="my-[50px] mx-[25px] tablet:my-[100px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px] flex flex-col laptop:flex-row items-center justify-between">
      <div className="flex flex-col font-urbanist font-bold justify-center items-center laptop:justify-start laptop:items-start mb-[50px] laptop:mb-0">
        <h1 className="text-[14px] tablet:text-[36px] laptop:text-[25px] desktop:text-[32px] text-[#5ABFAD]">
        Ready to evolve your business?
        </h1>
        <h1 className="text-[18px] tablet:text-[48px] laptop:text-[32px] desktop:text-[40px] text-center laptop:text-start">
        Buat website kamu sekarang
        </h1>
      </div>
      <Button text="Konsultasi sekarang" href="/" variant="primary" />
    </section>
  )
}
