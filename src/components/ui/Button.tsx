import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  text: string
  href: string
  variant: 'primary' | 'secondary'
  className?: string
}

export default function Button({ text, href, variant, className }: ButtonProps) {
  const baseStyles = "font-urbanist font-bold text-[12px] tablet:text-[20px] desktop:text-[26px] rounded-full py-[10px] px-[20px] laptop:px-[25px] w-fit inline-flex flex justify-center transition-colors duration-300"
  
  const variantStyles = {
    primary: "bg-[#5ABFAD] text-white hover:bg-[#4da799]",
    secondary: "bg-white text-[#5ABFAD] text-black border border-gray-300 hover:bg-gray-50"
  }

  return (
    <Link
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      href={href}
    >
      {text}
    </Link>
  )
}

