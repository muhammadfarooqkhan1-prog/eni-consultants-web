"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile Sub-menu toggles
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);

  return (
    <>
      {/* 1. GCC Regional SEO Bar */}
      <div style={{
        backgroundColor: "#e05a14",
        color: "#ffffff",
        fontSize: "12px",
        padding: "6px 16px",
        textAlign: "center",
        fontWeight: "500"
      }}>
        Serving Overseas Pakistanis in <strong>KSA (Riyadh, Jeddah, Dammam, Khobar, Abha), UAE, Qatar, Bahrain, Muscat & Kuwait</strong>
      </div>

      {/* 2. Main Navigation Bar */}
      <header style={{
        backgroundColor: "#ff7027",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.15)"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 20px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="ENI Consultants Logo"
              width={140}
              height={45}
              style={{ objectFit: "contain", cursor: "pointer" }}
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 font-semibold">
            <Link href="/" className="text-white hover:text-slate-200 no-underline">
              Home
            </Link>

            {/* Desktop Services Dropdown */}
            <div 
              className="relative cursor-pointer py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="text-white flex items-center gap-1">
                Services ▾
              </span>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-60 bg-[#ff7027] text-white rounded-lg shadow-xl py-2 border border-[#e05a14] z-50">
                  <Link href="/services/skilled-immigration" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">
                    🌐 Skilled Immigration
                  </Link>
                  <Link href="/services/study-abroad" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">
                    🎓 Study Abroad
                  </Link>
                  <Link href="/services/holiday-destinations" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">
                    ✈️ Holiday & Visit Visas
                  </Link>
                  <Link href="/services/cv-optimization" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">
                    📄 CV & LinkedIn Optimization
                  </Link>
                  <Link href="/services/schengen-phd" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">
                    🧬 Schengen PhD
                  </Link>
                </div>
              )}
            </div>

            {/* Desktop Destinations Dropdown */}
            <div 
              className="relative cursor-pointer py-2"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <span className="text-white flex items-center gap-1">
                Destinations ▾
              </span>

              {destinationsOpen && (
                <div className="absolute top-full left-0 w-56 bg-[#ff7027] text-white rounded-lg shadow-xl py-2 border border-[#e05a14] z-50">
                  <Link href="/destinations/canada" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">🇨🇦 Canada</Link>
                  <Link href="/destinations/uk" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">🇬🇧 United Kingdom</Link>
                  <Link href="/destinations/usa" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">🇺🇸 USA</Link>
                  <Link href="/destinations/new-zealand" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">🇳🇿 New Zealand</Link>
                  <Link href="/destinations/schengen" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white">sch Schengen</Link>
                  <Link href="/destinations/asia-turkey-malaysia" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> atm Asia, Turkey, Malaysia</Link>
                  <Link href="/destinations/srilanka" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> s🇱🇰 Srilanka</Link>
                  <Link href="/destinations/zimbabwe" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> 🇿🇼 Zimbabwe</Link>
                  <Link href="/destinations/maldives" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> 🇲🇻 Maldives</Link>
                  <Link href="/destinations/azerbaijan" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> 🇦🇿 Azerbaijan</Link>
                  <Link href="/destinations/thailand" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> 🇹🇭 Thailand</Link>
                  <Link href="/destinations/mauritius" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> 🇹🇭 Mauritius</Link>
                  <Link href="/destinations/indonesia" className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"> 🇮🇩 Indonesia</Link>
                </div>
              )}
            </div>

            <Link href="/check-eligibility" className="text-slate-900 font-bold no-underline">
              Check Eligibility
            </Link>

            <Link href="/about" className="text-white hover:text-slate-200 no-underline">
              About Us
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/book-appointment" 
              style={{
                backgroundColor: "#0F172A",
                color: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "14px",
                textDecoration: "none"
              }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#e05a14] text-white px-6 py-4 flex flex-col gap-4 border-t border-orange-600">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium no-underline py-1"
            >
              Home
            </Link>

            {/* Mobile Services Accordion Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left font-bold text-white py-1 focus:outline-none bg-transparent border-none cursor-pointer"
              >
                <span>Services</span>
                <span className="text-sm">{mobileServicesOpen ? "▲" : "▼"}</span>
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col gap-2 pl-3 pt-2 pb-1 border-l-2 border-orange-400 my-1">
                  <Link href="/services/skilled-immigration" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">🌐 Skilled Immigration</Link>
                  <Link href="/services/study-abroad" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">🎓 Study Abroad</Link>
                  <Link href="/services/holiday-destinations" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">✈️ Holiday Visas</Link>
                  <Link href="/services/cv-optimization" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">📄 CV & LinkedIn Optimization</Link>
                  <Link href="/services/schengen-phd" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">🧬 Schengen PhD</Link>
                </div>
              )}
            </div>

            {/* Mobile Destinations Accordion Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                className="flex items-center justify-between w-full text-left font-bold text-white py-1 focus:outline-none bg-transparent border-none cursor-pointer"
              >
                <span>Destinations</span>
                <span className="text-sm">{mobileDestinationsOpen ? "▲" : "▼"}</span>
              </button>

              {mobileDestinationsOpen && (
                <div className="flex flex-col gap-2 pl-3 pt-2 pb-1 border-l-2 border-orange-400 my-1">
                  <Link href="/destinations/canada" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">🇨🇦 Canada</Link>
                  <Link href="/destinations/uk" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">🇬🇧 United Kingdom</Link>
                  <Link href="/destinations/usa" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">🇺🇸 USA</Link>
                  <Link href="/destinations/new-zealand" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm">🇳🇿 New Zealand</Link>
                  <Link href="/destinations/schengen" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> sch Schengen</Link>
                  <Link href="/destinations/asia-turkey-malaysia" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> atm Asia, Turkey, Malaysia</Link>
                  <Link href="/destinations/srilanka" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> s🇱🇰 Srilanka</Link>
                  <Link href="/destinations/zimbabwe" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> 🇿🇼 Zimbabwe</Link>
                  <Link href="/destinations/maldives" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> 🇲🇻 Maldives</Link>
                  <Link href="/destinations/azerbaijan" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> 🇦🇿 Azerbaijan</Link>
                  <Link href="/destinations/thailand" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> 🇹🇭 Thailand</Link>
                  <Link href="/destinations/mauritius" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> 🇹🇭 Mauritius</Link>
                  <Link href="/destinations/indonesia" onClick={() => setMobileMenuOpen(false)} className="text-white no-underline text-sm"> 🇮🇩 Indonesia</Link>
                </div>
              )}
            </div>

            <Link 
              href="/check-eligibility" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-900 font-bold no-underline py-1"
            >
              Check Eligibility
            </Link>

            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium no-underline py-1"
            >
              About Us
            </Link>

            <Link 
              href="/book-appointment" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-slate-900 text-white text-center py-2.5 rounded-lg font-bold no-underline mt-2"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>
    </>
  );
}