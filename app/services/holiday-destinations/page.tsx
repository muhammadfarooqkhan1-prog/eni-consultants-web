import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holiday & Visit Visa Services | Tourist, Business & Family Visas | ENI Consultants",
  description:
    "Expert visit visa consultancy for Schengen Europe, UK, USA, Canada, Turkey, UAE, and Asia. Fast processing, error-free documentation, and high approval rates.",
};

export default function HolidayDestinationsServicePage() {
  const holidayDestinations = [
    {
      country: "Schengen Europe",
      flag: "https://flagcdn.com/w160/eu.png",
      title: "29 European Nations, Single Visa Access",
      badge: "Multi-Entry Tourist & Business",
      description:
        "Travel seamlessly across France, Germany, Italy, Spain, Switzerland, and 24 other European nations with a single Schengen short-stay visa.",
      features: [
        "VFS / TLS / BLS Appointment Slot Booking",
        "Schengen-Compliant Travel Insurance & Itinerary Drafting",
        "Bank Statement & Ties to Home Country File Structuring",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Schengen European Union Visit Visa Consultancy",
    },
    {
      country: "United Kingdom",
      flag: "https://flagcdn.com/w160/gb.png",
      title: "Standard Visitor Visa (6 Months, 2, 5 & 10 Years)",
      badge: "High-Demand Tourist & Family Visit",
      description:
        "Visit family, attend corporate business meetings, or explore historic cities with long-term multiple-entry UK visitor visa pathways.",
      features: [
        "UKVI Account Setup & Application Submission",
        "Detailed Cover Letter & Sponsorship File Preparation",
        "Fast-Track Priority & Super Priority Processing Strategy",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "UK Standard Visitor Visa Services",
    },
    {
      country: "USA & Canada",
      flag: "https://flagcdn.com/w160/us.png",
      title: "B1/B2 Visitor Visa & Canada Visitor Visa (V-1)",
      badge: "10-Year Multiple Entry",
      description:
        "Secure long-term visitor visas for leisure, medical treatment, or business conferences across North America.",
      features: [
        "DS-160 Form Filing & US Embassy Interview Coaching",
        "Canada Biometrics & Port of Entry Documentation",
        "Family & Group Tourist Application Handling",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "USA B1 B2 and Canada Tourist Visa",
    },
    {
      country: "Turkey, Malaysia & Asia",
      flag: "https://flagcdn.com/w160/tr.png",
      title: "eVisa, Sticker Visas & Asian Destinations",
      badge: "Hassle-Free & Fast Processing",
      description:
        "Quick turnarounds for leisure trips, island getaways, and trade delegation visits across Turkey, Malaysia, Thailand, and East Asia.",
      features: [
        "Official eVisa Verification & Immediate Issuance",
        "Hotel Voucher & Flight Reservation Management",
        "Express Processing for Urgent Travel Schedules",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Turkey and Asia Holiday Visit Visas",
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff7027] rounded-full blur-[140px] opacity-20 pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Global Leisure & Business Travel
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Holiday, Visit & Tourist Visa Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore the world with total confidence. ENI Consultants prepares flawless visitor visa files, error-free financial proof, travel itineraries, and interview preparation to ensure high visa success rates for tourism, business trips, and family visits.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Visit Eligibility Free
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book 1-on-1 Visa Consultation
              </Link>
            </div>
          </div>

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop"
                alt="Worldwide Tourist and Holiday Visa Guidance"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Precision Visa File Preparation</p>
                <p className="text-white font-bold text-sm">Minimal Rejection Risk</p>
                <p className="text-slate-400 text-xs mt-0.5">Schengen, UK, USA, Canada & Worldwide Visas</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-STEP VISIT VISA PROCESS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Our 4-Stage Visit Visa Submission Framework
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              How we construct a bulletproof visit application that satisfies embassy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">01</span>
              <h3 className="text-white font-bold text-base">Travel & Purpose Evaluation</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Reviewing your travel history, financial capacity, employment status, and home-country ties.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">02</span>
              <h3 className="text-white font-bold text-base">File & Cover Letter Drafting</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Drafting an authentic day-by-day travel itinerary, formal cover letter, and proof of accommodation.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">03</span>
              <h3 className="text-white font-bold text-base">Appointment & Submission</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Securing biometrics slots at VFS/TLS centres or submitting electronic eVisa forms accurately.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">04</span>
              <h3 className="text-white font-bold text-base">Interview Prep & Collection</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Conducting embassy interview practice (for USA/Germany) and tracking passport collection status.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED DESTINATIONS */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Popular Holiday & Visit Visa Destinations
            </h2>
          </div>

          <div className="space-y-12">
            {holidayDestinations.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl hover:border-[#ff7027]/40 transition-all"
              >
                {/* Media Column */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-md h-64 sm:h-72">
                    <img
                      src={item.mediaUrl}
                      alt={item.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <img src={item.flag} alt={`${item.country} Flag`} className="w-7 h-4 object-cover rounded shadow" />
                      <span className="text-white font-bold text-sm">{item.country} Visas</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-[#ff7027] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href="/check-eligibility"
                      className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm hover:underline"
                    >
                      Check Eligibility for {item.country} <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Planning Your Next Vacation or Business Trip?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Avoid common embassy rejections caused by improper file structuring. Let our experienced visa officers handle your file.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Schedule Visit Visa Advisory
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}