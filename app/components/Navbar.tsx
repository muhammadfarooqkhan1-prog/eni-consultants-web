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

  const destinationLinks = [
    { name: "Canada", code: "ca", href: "/destinations/canada" },
    { name: "United Kingdom", code: "gb", href: "/destinations/uk" },
    { name: "USA", code: "us", href: "/destinations/usa" },
    { name: "New Zealand", code: "nz", href: "/destinations/new-zealand" },
    { name: "Schengen", code: "eu", href: "/destinations/schengen" },
    { name: "Turkey", code: "tr", href: "/destinations/turkey" },
    { name: "Sri Lanka", code: "lk", href: "/destinations/srilanka" },
    { name: "Zimbabwe", code: "zw", href: "/destinations/zimbabwe" },
    { name: "Maldives", code: "mv", href: "/destinations/maldives" },
    { name: "Azerbaijan", code: "az", href: "/destinations/azerbaijan" },
    { name: "Thailand", code: "th", href: "/destinations/thailand" },
    { name: "Mauritius", code: "mu", href: "/destinations/mauritius" },
    { name: "Indonesia", code: "id", href: "/destinations/indonesia" },
    { name: "Malaysia", code: "my", href: "/destinations/malaysia" },
  ];

  return (
    <>
      {/* SVG Wave Filter Definition for Navbar */}
      <svg className="hidden">
        <defs>
          <filter id="nav-flag-wave-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.09"
              numOctaves="2"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                dur="2.5s"
                values="0.05 0.09; 0.02 0.05; 0.05 0.09"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Global CSS for Flag Wave Movement */}
      <style jsx global>{`
        @keyframes navRippleFlow {
          0% {
            transform: perspective(300px) rotateY(0deg) translateY(0px);
          }
          33% {
            transform: perspective(300px) rotateY(10deg) translateY(-1px);
          }
          66% {
            transform: perspective(300px) rotateY(-8deg) translateY(1px);
          }
          100% {
            transform: perspective(300px) rotateY(0deg) translateY(0px);
          }
        }

        .nav-flag-wave {
          filter: url(#nav-flag-wave-filter);
          animation: navRippleFlow 2.5s ease-in-out infinite;
          transform-origin: left center;
        }
      `}</style>

      {/* 1. GCC Regional SEO Bar */}
      <div
        style={{
          backgroundColor: "#e05a14",
          color: "#ffffff",
          fontSize: "12px",
          padding: "6px 16px",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        Serving Pakistanis & Overseas Pakistanis in{" "}
        <strong>
          KSA (Riyadh, Jeddah, Dammam, Khobar, Abha), UAE, Qatar, Bahrain,
          Muscat & Kuwait
        </strong>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        style={{
          backgroundColor: "#ff7027",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 20px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
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
            <Link
              href="/"
              className="text-white hover:text-slate-200 no-underline"
            >
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
                  <Link
                    href="/services/skilled-immigration"
                    className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"
                  >
                    🌐 Skilled Immigration
                  </Link>
                  <Link
                    href="/services/study-abroad"
                    className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"
                  >
                    🎓 Study Abroad
                  </Link>
                  <Link
                    href="/services/holiday-destinations"
                    className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"
                  >
                    ✈️ Holiday & Visit Visas
                  </Link>
                  <Link
                    href="/services/cv-optimization"
                    className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"
                  >
                    📄 CV & LinkedIn Optimization
                  </Link>
                  <Link
                    href="/services/schengen-phd"
                    className="block px-4 py-2 hover:bg-[#e05a14] no-underline text-white"
                  >
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
                <div className="absolute top-full left-0 w-64 bg-[#ff7027] text-white rounded-lg shadow-xl py-2 border border-[#e05a14] z-50 max-h-[80vh] overflow-y-auto">
                  {destinationLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-2.5 px-4 py-2 hover:bg-[#e05a14] no-underline text-white"
                    >
                      <div className="w-6 h-4 relative flex-shrink-0 overflow-hidden rounded-sm shadow-sm bg-black/10">
                        <img
                          src={`https://flagcdn.com/w80/${item.code}.png`}
                          alt={`${item.name} Flag`}
                          className="w-full h-full object-cover nav-flag-wave"
                          style={{
                            animationDelay: `${(idx % 4) * 0.2}s`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/check-eligibility"
              className="text-slate-900 font-bold no-underline"
            >
              Check Eligibility
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-slate-200 no-underline"
            >
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
                textDecoration: "none",
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
          <div className="md:hidden bg-[#e05a14] text-white px-6 py-4 flex flex-col gap-4 border-t border-orange-600 max-h-[85vh] overflow-y-auto">
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
                <span className="text-sm">
                  {mobileServicesOpen ? "▲" : "▼"}
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col gap-2 pl-3 pt-2 pb-1 border-l-2 border-orange-400 my-1">
                  <Link
                    href="/services/skilled-immigration"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white no-underline text-sm"
                  >
                    🌐 Skilled Immigration
                  </Link>
                  <Link
                    href="/services/study-abroad"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white no-underline text-sm"
                  >
                    🎓 Study Abroad
                  </Link>
                  <Link
                    href="/services/holiday-destinations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white no-underline text-sm"
                  >
                    ✈️ Holiday Visas
                  </Link>
                  <Link
                    href="/services/cv-optimization"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white no-underline text-sm"
                  >
                    📄 CV & LinkedIn Optimization
                  </Link>
                  <Link
                    href="/services/schengen-phd"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white no-underline text-sm"
                  >
                    🧬 Schengen PhD
                  </Link>
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
                <span className="text-sm">
                  {mobileDestinationsOpen ? "▲" : "▼"}
                </span>
              </button>

              {mobileDestinationsOpen && (
                <div className="flex flex-col gap-2.5 pl-3 pt-2 pb-1 border-l-2 border-orange-400 my-1">
                  {destinationLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white no-underline text-sm flex items-center gap-2.5"
                    >
                      <div className="w-6 h-4 relative flex-shrink-0 overflow-hidden rounded-sm shadow-sm bg-black/10">
                        <img
                          src={`https://flagcdn.com/w80/${item.code}.png`}
                          alt={`${item.name} Flag`}
                          className="w-full h-full object-cover nav-flag-wave"
                          style={{
                            animationDelay: `${(idx % 4) * 0.2}s`,
                          }}
                        />
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  ))}
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