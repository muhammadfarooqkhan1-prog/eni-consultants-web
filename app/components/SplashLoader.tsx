"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Keeps logo visible for 1.8 seconds, then starts fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // Completely removes loader overlay after 2.3 seconds
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      /* Replace #0F172A below with your exact brand/logo hex color code.
         Examples: 
         - Dark Navy Blue: bg-[#0F172A]
         - Pure Brand Blue: bg-[#0052CC]
         - Pure White: bg-[#FFFFFF]
      */
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#fe7026] transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Centered Animated Logo */}
      <div className="animate-pulse">
        <Image
          src="/logo.png" // Ensure this matches your logo image path inside /public
          alt="ENI Consultants Logo"
          width={200}
          height={200}
          priority
          className="h-auto w-auto max-w-[220px]"
        />
      </div>
    </div>
  );
}