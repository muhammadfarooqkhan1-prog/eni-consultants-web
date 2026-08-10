import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turkey, Malaysia & Asia Tourist Visas | e-Visas & Travel Services | ENI Consultants",
  description:
    "Expert visa advisory for Turkey, Malaysia, Thailand, Indonesia (Bali), Japan, Singapore, Hong Kong, Azerbaijan, and Uzbekistan. Fast-track e-Visa & consular processing.",
};

export default function AsiaTurkeyDestinationPage() {
  const regions = [
    {
      country: "Turkey",
      flag: "🇹🇷",
      badge: "e-Visa & Consular Sticker",
      title: "Bridge Between Continents",
      desc: "Fast-track electronic visas for qualified holders of Schengen/UK/USA/Ireland visas, and complete Gateway consular file structuring for sticker visas.",
      features: [
        "Official e-Visa portal filing within 24 hours",
        "Gateway/Consulate biometric appointment booking",
        "Verified flight & hotel vouchers with bank audit",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Turkey Visit Visa Consultancy",
    },
    {
      country: "Malaysia, Thailand & Indonesia",
      flag: "🇲🇾 🇹🇭 🇮🇩",
      badge: "Southeast Asia Hubs",
      title: "Tropical Island & Holiday Visas",
      desc: "Seamless digital entry processing across Southeast Asia including MDAC arrival cards, Thai e-Visas, and Bali Electronic Visas on Arrival (E-VOA).",
      features: [
        "Malaysia MDAC Arrival Registration & Tourist e-Visas",
        "Thailand 60-Day Tourist e-Visa submission",
        "Indonesia Bali E-VOA (30/60 Days) & B211A extended visas",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Malaysia Thailand Indonesia Holiday Visas",
    },
    {
      country: "Japan, Singapore & Hong Kong",
      flag: "🇯🇵 🇸🇬 🇭🇰",
      badge: "East Asia Business & Tourism",
      title: "Premier Financial & Travel Hubs",
      desc: "Precision file structuring for East Asia. Detailed Japan Schedule of Stay itineraries, Singapore ICA submissions, and Hong Kong PAR clearances.",
      features: [
        "Japan e-Visa & Day-by-Day 'Schedule of Stay' drafting",
        "Singapore Authorized Agent e-Visa & SG Arrival Card",
        "Hong Kong Pre-Arrival Registration (PAR) instant clearance",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Japan Singapore Hong Kong Visas",
    },
    {
      country: "Azerbaijan & Uzbekistan",
      flag: "🇦🇿 🇺🇿",
      badge: "Silk Road e-Visas",
      title: "Fast-Track Caucasus & Central Asia",
      desc: "Instant digital entry for exploring Baku's architecture or Samarkand's historic Silk Road heritage with 3-day standard or 3-hour urgent processing.",
      features: [
        "Azerbaijan ASAN 30-Day e-Visa (3-Hour express option)",
        "Uzbekistan official tourist e-Visa portal filing",
        "Full digital itinerary & passport copy validation",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Azerbaijan and Uzbekistan Silk Road Visas",
    },
  ];

  const travelTips = [
    {
      title: "Strict 6-Month Passport Rule",
      detail: "Almost all Asian countries enforce a minimum 6-month passport validity requirement calculated from your date of entry.",
    },
    {
      title: "Official Government Portals",
      detail: "We route applications strictly through accredited official portals to protect you from third-party copycat scam websites.",
    },
    {
      title: "Matched Reservation Proofs",
      detail: "Ensuring flight PNRs and hotel booking confirmation dates align perfectly with your submitted travel itinerary.",
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff7027] rounded-full blur-[140px] opacity-20 pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇷 🇲🇾 🇯🇵</span>
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Regional Travel Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Turkey, Malaysia & Asia Visit Visa Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore the rich heritage of Turkey, tropical getaways in Southeast Asia, or premier financial hubs in Japan, Singapore, and Hong Kong. ENI Consultants manages fast-track e-Visas, consular filings, and flawless itineraries.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Asian Visa Eligibility
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book 1-on-1 Consultation
              </Link>
            </div>
          </div>

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop"
                alt="Turkey and Asia Holiday Visas"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">e-Visa & Consular Advisory</p>
                <p className="text-white font-bold text-sm">Turkey, Malaysia, Thailand, Japan & More</p>
                <p className="text-slate-400 text-xs mt-0.5">Fast-track submissions & error-free itineraries</p>
              </div>
            </div>
          </div>
        </div>

        {/* REGIONAL BREAKDOWN GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Destinations & Visa Frameworks
            </h2>
          </div>

          <div className="space-y-12">
            {regions.map((item, idx) => (
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
                      <span className="text-xl">{item.flag}</span>
                      <span className="text-white font-bold text-sm">{item.country}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                  <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
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
                      Check Eligibility for {item.country.split(",")[0]} <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KEY TRAVEL TIPS SECTION */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-[#ff7027] font-bold text-xs uppercase tracking-wider">Avoid Application Delays</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Critical Visa Guidelines for Travelers to Asia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelTips.map((tip, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3">
                <span className="text-3xl font-extrabold text-[#ff7027]">0{idx + 1}</span>
                <h3 className="text-white font-bold text-base">{tip.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Planning Your Journey Across Asia or Turkey?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Avoid costly delays and copycat portal scams. Let our specialists manage your e-Visa submissions and hotel/flight itineraries accurately.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Assess Eligibility Free
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book Advisory Consultation
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}