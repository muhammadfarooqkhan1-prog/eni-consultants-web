"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Force muted state on the actual DOM element to bypass browser autoplay policy
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay interaction blocked by browser:", err);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden flex items-center justify-center border-none p-0 m-0 bg-slate-950">
      {/* 1. Full-Bleed Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover border-none outline-none z-10"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Seamless Dark Tint Overlay */}
      <div className="absolute inset-0 bg-slate-950/60 z-20 border-none outline-none" />

      {/* 3. Responsive Content Layer */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-5 sm:px-8 py-16 md:py-24 flex flex-col items-start justify-center">
        {/* Tagline Badge */}
        <span className="bg-[#ff7027] text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 sm:mb-6 shadow-md">
          Making Immigration Easy
        </span>

        {/* Responsive Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight sm:leading-tight max-w-4xl mb-4 sm:mb-6">
          Your Gateway to Worldwide Immigration, Study & Visit Visas
        </h1>

        {/* Responsive Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed">
          Expert global guidance for Local & Overseas Pakistanis across the Middle East, GCC, and worldwide.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/check-eligibility"
            className="bg-[#ff7027] hover:bg-[#e05a14] text-white text-center px-7 py-3.5 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-orange-500/20 no-underline"
          >
            Check Eligibility Now
          </Link>

          <Link
            href="/book-appointment"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-center px-7 py-3.5 rounded-lg font-bold text-base border border-white/40 transition-all no-underline"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}