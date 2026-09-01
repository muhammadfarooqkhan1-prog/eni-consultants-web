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

  const serviceLinks = [
    {
      name: "Skilled Immigration",
      desc: "Permanent residency & work pathways",
      href: "/services/skilled-immigration",
      badge: "Popular",
      icon: (
        <svg className="w-5 h-5 text-orange-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      name: "Study Abroad",
      desc: "Top universities & student visas",
      href: "/services/study-abroad",
      icon: (
        <svg className="w-5 h-5 text-orange-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      name: "Holiday & Visit Visas",
      desc: "Fast tourist & business processing",
      href: "/services/holiday-destinations",
      icon: (
        <svg className="w-5 h-5 text-orange-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V8.065M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      name: "CV & LinkedIn Optimization",
      desc: "ATS-optimized global profiles",
      href: "/services/cv-optimization",
      icon: (
        <svg className="w-5 h-5 text-orange-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: "Schengen PhD Pathways",
      desc: "Research positions & fellowships",
      href: "/services/schengen-phd",
      icon: (
        <svg className="w-5 h-5 text-orange-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  const destinationLinks = [
    { name: "Canada", code: "ca", href: "/destinations/canada" },
    { name: "United Kingdom", code: "gb", href: "/destinations/uk" },
    { name: "USA", code: "us", href: "/destinations/usa" },
    { name: "New Zealand", code: "nz", href: "/destinations/new-zealand" },
    { name: "Schengen Area", code: "eu", href: "/destinations/schengen" },
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
      {/* SVG Wave Filter Definition */}
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

      {/* Global Animations */}
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

        @keyframes menuDropdownSlide {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .nav-flag-wave {
          filter: url(#nav-flag-wave-filter);
          animation: navRippleFlow 2.5s ease-in-out infinite;
          transform-origin: left center;
        }

        .menu-animate-in {
          animation: menuDropdownSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* 1. GCC Regional SEO Bar */}
      <div
        className="bg-gradient-to-r from-[#d05010] via-[#e05a14] to-[#d05010] text-white text-[11px] md:text-xs py-1.5 px-4 text-center font-medium tracking-wide shadow-inner"
      >
        Serving Pakistanis & Overseas Pakistanis in{" "}
        <strong className="font-semibold underline decoration-white/30 underline-offset-2">
          KSA (Riyadh, Jeddah, Dammam, Khobar, Abha), UAE, Qatar, Bahrain, Muscat & Kuwait
        </strong>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="bg-[#ff7027] text-white sticky top-0 z-50 shadow-md backdrop-blur-md border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline transition-transform hover:scale-105">
            <Image
              src="/logo.png"
              alt="ENI Consultants Logo"
              width={145}
              height={48}
              className="object-contain cursor-pointer drop-shadow-sm"
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-7 font-semibold text-sm">
            <Link
              href="/"
              className="text-white hover:text-orange-100 no-underline transition-colors py-2"
            >
              Home
            </Link>

            {/* Desktop Services Mega Dropdown */}
            <div
              className="relative py-6 cursor-pointer"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="text-white flex items-center gap-1.5 group hover:text-orange-100 transition-colors">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {servicesOpen && (
                <div className="absolute top-full -left-4 w-80 bg-[#ff7027] text-white rounded-xl shadow-2xl p-2 border border-orange-400/40 z-50 menu-animate-in backdrop-blur-lg">
                  {serviceLinks.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="flex items-start gap-3.5 p-2.5 rounded-lg hover:bg-[#e05a14] no-underline text-white transition-all duration-150 group"
                    >
                      <div className="p-2 rounded-lg bg-orange-600/40 border border-orange-400/30 group-hover:bg-white/20 group-hover:scale-105 transition-all">
                        {service.icon}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold group-hover:translate-x-0.5 transition-transform">
                            {service.name}
                          </span>
                          {service.badge && (
                            <span className="text-[10px] font-bold bg-white text-[#e05a14] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-orange-100/80 font-normal mt-0.5">
                          {service.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Destinations Grid Dropdown */}
            <div
              className="relative py-6 cursor-pointer"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <span className="text-white flex items-center gap-1.5 group hover:text-orange-100 transition-colors">
                Destinations
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${destinationsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {destinationsOpen && (
                <div className="absolute top-full -left-12 w-80 bg-[#ff7027] text-white rounded-xl shadow-2xl p-2 border border-orange-400/40 z-50 max-h-[75vh] overflow-y-auto menu-animate-in">
                  <div className="grid grid-cols-1 gap-1">
                    {destinationLinks.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e05a14] no-underline text-white transition-all duration-150 group"
                      >
                        <div className="w-6 h-4 relative flex-shrink-0 overflow-hidden rounded shadow-sm bg-black/20 group-hover:scale-110 transition-transform">
                          <img
                            src={`https://flagcdn.com/w80/${item.code}.png`}
                            alt={`${item.name} Flag`}
                            className="w-full h-full object-cover nav-flag-wave"
                            style={{
                              animationDelay: `${(idx % 4) * 0.2}s`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium group-hover:translate-x-0.5 transition-transform">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/check-eligibility"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-3.5 py-1.5 rounded-full border border-white/20 no-underline transition-all hover:scale-105"
            >
              Check Eligibility
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-orange-100 no-underline transition-colors py-2"
            >
              About Us
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/book-appointment"
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-bold text-sm no-underline shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 inline-block"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none rounded-lg hover:bg-orange-600/50 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#e05a14] text-white px-5 py-5 flex flex-col gap-3 border-t border-orange-600/80 max-h-[85vh] overflow-y-auto menu-animate-in shadow-inner">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium no-underline py-2 border-b border-orange-400/20"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="flex flex-col border-b border-orange-400/20 py-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left font-bold text-white py-2 focus:outline-none bg-transparent border-none cursor-pointer"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col gap-2 pl-2 pt-2 pb-2 my-1">
                  {serviceLinks.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white no-underline text-sm flex items-center gap-3 p-2 rounded-lg bg-orange-700/30"
                    >
                      <div className="p-1.5 rounded bg-orange-600/50">
                        {service.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold">{service.name}</span>
                        <span className="text-[11px] text-orange-200/80">{service.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Destinations Accordion */}
            <div className="flex flex-col border-b border-orange-400/20 py-1">
              <button
                onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                className="flex items-center justify-between w-full text-left font-bold text-white py-2 focus:outline-none bg-transparent border-none cursor-pointer"
              >
                <span>Destinations</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDestinationsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileDestinationsOpen && (
                <div className="grid grid-cols-2 gap-2 pl-1 pt-2 pb-2 my-1">
                  {destinationLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white no-underline text-xs flex items-center gap-2 p-2 rounded-lg bg-orange-700/30"
                    >
                      <div className="w-5 h-3.5 relative flex-shrink-0 overflow-hidden rounded shadow-sm">
                        <img
                          src={`https://flagcdn.com/w80/${item.code}.png`}
                          alt={`${item.name} Flag`}
                          className="w-full h-full object-cover nav-flag-wave"
                          style={{
                            animationDelay: `${(idx % 4) * 0.2}s`,
                          }}
                        />
                      </div>
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/check-eligibility"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-bold no-underline py-2 border-b border-orange-400/20 flex items-center justify-between"
            >
              <span>Check Eligibility</span>
              <span className="text-xs bg-slate-900 text-white px-2 py-0.5 rounded-full">Free</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium no-underline py-2"
            >
              About Us
            </Link>

            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-lg font-bold no-underline mt-3 shadow-lg active:scale-95 transition-transform"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>
    </>
  );
}