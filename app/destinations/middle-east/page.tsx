import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Middle East & GCC Immigration & Residency Advisory | ENI Consultants",
  description:
    "Strategic visa and residency advisory for Saudi Arabia (KSA Gold Visa/Investor), UAE (Golden Visa, Green Visa), Qatar, Oman, Kuwait, and Bahrain.",
};

export default function MiddleEastGccDestinationPage() {
  const gccPathways = [
    {
      title: "Saudi Arabia (KSA) Premium Residency & Investment Visas",
      badge: "KSA Premium Residency (Gold Visa)",
      description:
        "Long-term residency options under the Saudi Premium Residency Center (SAPRC) for investors, entrepreneurs, executives, real estate owners, and highly skilled professionals.",
      highlights: [
        "Special Skilled Residency (Executives, Healthcare, Tech & Engineering)",
        "Investor & Real Estate Owner Premium Residency (Direct KSA Green/Gold Card)",
        "Full business ownership and freedom to sponsor dependents and domestic staff",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Saudi Arabia KSA Premium Residency Advisory",
    },
    {
      title: "UAE Golden Visa & Green Visa Pathways",
      badge: "5 & 10-Year Self-Sponsored Residency",
      description:
        "Long-term self-sponsored UAE residency program tailored for investors, entrepreneurs, exceptional talents, specialized professionals, and top-tier graduates.",
      highlights: [
        "10-Year Golden Visa for Real Estate Investors, Executives, and Specialists",
        "5-Year Green Visa for Freelancers, Skilled Employees, and Partners",
        "No sponsor requirement with 100% foreign business ownership",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "UAE Golden Visa and Green Visa Advisory",
    },
    {
      title: "Qatar Permanent & Real Estate Residency",
      badge: "Strategic Gulf Residency",
      description:
        "Residency programs granted through real estate investment, commercial operations, or specialized skills across Doha and major Qatari development hubs.",
      highlights: [
        "Property Investment Residency (Eligible real estate areas in Qatar)",
        "Commercial & Free Zone Business Establishment Residency",
        "Comprehensive family sponsorship and public health/education privileges",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Qatar Real Estate and Permanent Residency",
    },
    {
      title: "Oman, Kuwait & Bahrain Investor & Work Visas",
      badge: "Regional Expansion Pathways",
      description:
        "Corporate establishment, foreign direct investment, and specialized executive migration pathways for the broader Gulf Cooperation Council (GCC).",
      highlights: [
        "Oman Investor Residency Program (5-Year & 10-Year Options)",
        "Bahrain Golden Residency Visa for Property Owners & High Earners",
        "GCC Cross-Border Corporate Mobility & Executive Work Authorizations",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "GCC Investor and Work Visa Services",
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
              <span className="text-2xl">🇸🇦 🇦🇪 🇶🇦</span>
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Middle East & GCC: Golden Visas, Residency & Investment Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Capitalize on the dynamic economic growth of the Gulf region. ENI Consultants guides investors, entrepreneurs, executives, and skilled professionals through self-sponsored long-term residencies in Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess GCC Residency Eligibility
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book Advisory Consultation
              </Link>
            </div>
          </div>

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
                alt="Middle East GCC Immigration and Residency Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">GCC Immigration Advisory</p>
                <p className="text-white font-bold text-sm">Long-Term Self-Sponsored Residencies</p>
                <p className="text-slate-400 text-xs mt-0.5">KSA Premium Residency, UAE Golden Visa & Qatar Investment</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF GCC RESIDENCY */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Secure Long-Term GCC Residency?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key strategic and financial benefits offered to residency status holders across the Gulf region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💼</span>
              <h3 className="text-white font-bold text-base">Self-Sponsored Freedom</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Live, work, and operate businesses independently without requiring a local employer sponsor.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🏛️</span>
              <h3 className="text-white font-bold text-base">Tax Optimization</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Benefit from 0% personal income tax and attractive corporate tax frameworks across the Gulf.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🏢</span>
              <h3 className="text-white font-bold text-base">100% Foreign Ownership</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Establish and fully own mainland or free-zone corporate structures with international banking access.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <h3 className="text-white font-bold text-base">Family Sponsoring</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Sponsor spouses, dependent children, parents, and domestic staff under your residency umbrella.
              </p>
            </div>
          </div>
        </section>

        {/* GCC PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary GCC Residency & Investor Programs
            </h2>
          </div>

          <div className="space-y-12">
            {gccPathways.map((item, idx) => (
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
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-[#ff7027] font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href="/check-eligibility"
                      className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm hover:underline"
                    >
                      Check Eligibility for {item.title.split(" ")[0]} <span>→</span>
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
            Plan Your Middle East & GCC Residency Strategy
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a private advisory session with our senior advisors to review real estate, investment thresholds, executive talent pathways, and family sponsorship across the Gulf region.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Assess Residency Eligibility Free
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book Advisory Appointment
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}