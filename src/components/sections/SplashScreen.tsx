// components/sections/SplashScreen.tsx
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import seierLogoWhite from '../../../public/images/seier-logo-white.png';

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 100; // Update every 100ms
    const increment = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Separate effect for handling completion
    const completionTimer = setTimeout(() => {
      finishLoading();
    }, duration + 100);

    return () => {
      clearInterval(timer);
      clearTimeout(completionTimer);
    };
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#5ABFAD]">
      <div className="flex flex-col items-center">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={seierLogoWhite}
            alt="Logo"
            className="animate-pulse"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;