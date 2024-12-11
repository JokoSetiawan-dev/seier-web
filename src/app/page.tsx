// app/page.tsx
"use client"

import { useState, useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SplashScreen from "@/components/sections/SplashScreen";
import ServiceSection from "@/components/sections/ServiceSection";
import ProductValueSection from "@/components/sections/ProductValueSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFinishLoading = () => {
    setLoading(false);
  };

  // Don't render anything until mounted
  if (!mounted) {
    return null;
  }

  if (loading) {
    return <SplashScreen finishLoading={handleFinishLoading} />;
  }

  return (
    <main className="relative animate-fadeIn">
      <Navbar />
      <HeroSection />
      <ServiceSection/>
      <ProductValueSection/>
      <TechStackSection/>
    </main>
  );
}