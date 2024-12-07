import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        urbanist: ['var(--font-urbanist)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'mobile': '375px',    
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      }
    },
  },
  plugins: [],
} satisfies Config;
