import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australia Permanent Residency (PR) & Visa Advisory | ENI Consultants",
  description:
    "Expert migration consultancy for Australia Subclass 189 Skilled Independent, Subclass 190 State Nominated, Subclass 491 Regional Visas, and Subclass 500 Student Visas.",
};

export default function AustraliaDestinationPage() {
  const australiaPathways = [
    {
      title: "Skilled Independent Visa (Subclass 189)",
      badge: "Direct Permanent Residency (Unrestricted)",
      description:
        "Direct PR pathway for highly qualified candidates targeting critical national shortage sectors without needing state nomination or employer sponsorship.",
      highlights: [
        "Full freedom to live and work anywhere in Australia from day one",
        "Targeted priorities for Healthcare, Teaching, STEM, Construction & Trades",
        "SkillSelect Expression of Interest (EOI) filing & score maximization",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Australia Subclass 189 PR Visa Advisory",
    },
    {
      title: "Skilled Nominated Visa (Subclass 190)",
      badge: "+5 Bonus PR Points (State Nominated)",
      description:
        "Permanent residency route sponsored by Australian state/territory governments looking to fill local occupational demands.",
      highlights: [
        "Adds 5 bonus points to your SkillSelect score",
        "Registration of Interest (ROI) & State Nomination management (NSW, VIC, QLD, WA)",
        "Direct Medicare access and full employment rights",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Australia Subclass 190 State Nomination",
    },
    {
      title: "Skilled Work Regional Visa (Subclass 491)",
      badge: "+15 Bonus Points (Pathway to 191 PR)",
      description:
        "5-year provisional visa providing a fast track for candidates looking to live and work in designated regional areas (e.g., Perth, Gold Coast, Adelaide).",
      highlights: [
        "Adds 15 bonus points to lower the point barrier",
        "Transition pathway to Subclass 191 Permanent Residency after 3 years",
        "Medicare rights and domestic education access for dependents",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Australia Subclass 491 Regional Visa",
    },
    {
      title: "Student Visa (Subclass 500) & Post-Study Work Rights",
      badge: "Genuine Student (GS) Route",
      description:
        "Enroll in world-renowned Australian Group of Eight (Go8) or regional universities, leading directly to post-study work authorization.",
      highlights: [
        "Genuine Student (GS) criterion drafting & financial file preparation",
        "Subclass 485 Temporary Graduate Visa planning",
        "Skills Assessment body alignment (ACS, Engineers Australia, TRA, VETASSESS)",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Study in Australia Subclass 500 Visa",
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
              <img src="https://flagcdn.com/w160/au.png" alt="Australia Flag" className="w-8 h-5 object-cover rounded shadow" />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Immigrate to Australia: Points Test, PR & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Unlock a high quality of life, universal Medicare healthcare, and strong economic opportunities in Australia. ENI Consultants guides you through Skills Assessments, SkillSelect EOI submissions, and state nominations with full technical precision.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Calculate Australia PR Points Free
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
                src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop"
                alt="Australia PR Migration Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">SkillSelect Experts</p>
                <p className="text-white font-bold text-sm">Strategic Migration Planning</p>
                <p className="text-slate-400 text-xs mt-0.5">Subclass 189, 190, 491 & Skills Assessment Strategy</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF AUSTRALIA PR */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Migrate to Australia?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages granted to Permanent Resident status holders and family dependents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🦘</span>
              <h3 className="text-white font-bold text-base">Direct PR Rights</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Live, work, and sponsor dependent family members unconditionally under 189 & 190 visa routes.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🏥</span>
              <h3 className="text-white font-bold text-base">Medicare Healthcare</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full access to Australia's public healthcare system (Medicare) upon visa approval.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🎓</span>
              <h3 className="text-white font-bold text-base">World-Class Education</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Free public schooling for primary and secondary children of permanent residents.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🇦🇺</span>
              <h3 className="text-white font-bold text-base">Citizenship Pathway</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Qualify for Australian Passport & Citizenship after 4 years of continuous lawful residence.
              </p>
            </div>
          </div>
        </section>

        {/* AUSTRALIA IMMIGRATION PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Skilled Migration Routes
            </h2>
          </div>

          <div className="space-y-12">
            {australiaPathways.map((item, idx) => (
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
                      Check Points for {item.title.split(" ")[0]} <span>→</span>
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
            Evaluate Your Australian Points Score
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with senior consultant Muhammad Farooq Khan to review your Skills Assessment (ACS, EA, VETASSESS), PTE/IELTS requirements, and state nomination strategy.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate Points Score Free
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book Priority Consultation
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}