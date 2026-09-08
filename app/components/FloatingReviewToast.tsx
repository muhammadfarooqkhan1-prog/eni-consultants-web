"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  visaType: string;
  comment: string;
  flag: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Muhammad Usman",
    visaType: "New Zealand SMC PR",
    comment: "ENI Consultants guided me through the new NZ SMC pathway seamlessly!",
    flag: "🇳🇿",
  },
  {
    id: 2,
    name: "Dr. Ayesha Malik",
    visaType: "Canada Express Entry",
    comment: "Got my COPR within 5 months. The documentation guidance was perfect!",
    flag: "🇨🇦",
  },
  {
    id: 3,
    name: "Hassan Raza",
    visaType: "UK Student Visa",
    comment: "Secured admission & visa with zero stress. Highly recommended!",
    flag: "🇬🇧",
  },
];

export default function FloatingReviewToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && !isDismissed) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  useEffect(() => {
    if (!isVisible || isDismissed) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = reviews[currentIndex];

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 max-w-sm w-[calc(100%-2.5rem)] transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 text-slate-200 p-4 rounded-2xl shadow-2xl relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 text-slate-500 hover:text-slate-300 text-xs font-bold p-1 z-10"
          aria-label="Close review popup"
        >
          ✕
        </button>

        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">{current.flag}</span>
          <div className="space-y-1 pr-4 w-full">
            <div className="flex items-center gap-1 text-amber-400 text-xs">
              ★★★★★
              <span className="text-slate-400 text-[10px] font-bold uppercase ml-1">
                • Verified Client
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium italic">
              "{current.comment}"
            </p>
            <div className="pt-1 flex items-center justify-between text-[11px]">
              <span className="font-bold text-white">{current.name}</span>
              <span className="text-[#ff7027] font-semibold">{current.visaType}</span>
            </div>

            {/* LEARN MORE / READ ALL REVIEWS LINK */}
            <div className="pt-2 mt-2 border-t border-slate-800/80 flex items-center justify-between">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-1 text-[11px] text-[#ff7027] hover:text-[#e05a14] font-bold transition-colors"
              >
                <span>Learn More & Read All Reviews</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}