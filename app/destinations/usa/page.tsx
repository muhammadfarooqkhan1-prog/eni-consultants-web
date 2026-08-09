import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USA Visas & Permanent Residency (Green Card) Advisory | ENI Consultants",
  description:
    "Expert consultancy for US Business & Tourist Visas (B1/B2), Student Visas (F-1/OPT), Work Visas (H-1B, L-1, O-1), and Employment Green Cards (EB-1, EB-2 NIW, EB-3).",
};

export default function USADestinationPage() {
  const usaPathways = [
    {
      title: "Business & Tourist Visas (B1 / B2)",
      badge: "Up to 10-Year Multiple Entry",
      description:
        "Seamless guidance for business travel, corporate conferences, medical treatment, or family leisure trips across the United States with complete DS-160 and consular interview preparation.",
      highlights: [
        "Accurate DS-160 electronic application filing",
        "Consular interview coaching & document file structuring",
        "Proof of financial solvency & ties to home country strategy",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "USA Visitor Visa Advisory B1 B2",
    },
    {
      title: "Work & Specialty Visas (H-1B, L-1, O-1)",
      badge: "Corporate & Professional Mobility",
      description:
        "Comprehensive support for professionals, corporate transferees, and individuals with extraordinary ability seeking work authorization in North America.",
      highlights: [
        "H-1B Specialty Occupation classification assistance",
        "L-1A/L-1B Intra-Company Executive & Specialist transfers",
        "O-1 Visa for Individuals with Extraordinary Ability",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "USA Work Visas H1B L1 O1",
    },
    {
      title: "Employment-Based Green Cards (EB-1, EB-2 NIW, EB-3)",
      badge: "Direct US Permanent Residency",
      description:
        "Immigrant visa pathways providing direct Permanent Residency (Green Card) for high-achieving researchers, advanced degree professionals, and skilled workers.",
      highlights: [
        "EB-2 National Interest Waiver (NIW) for Advanced Degree Holders",
        "EB-1 Priority Worker classification for Executives & Researchers",
        "EB-3 Skilled Worker PERM Labor Certification routes",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "USA Green Card EB2 NIW EB1 EB3",
    },
    {
      title: "Student Visas (F-1) & Optional Practical Training (OPT)",
      badge: "Academic & Career Pathway",
      description:
        "Gain admission into accredited SEVP-approved universities and colleges with direct access to STEM OPT extension work authorization upon graduation.",
      highlights: [
        "I-20 Form issuance & SEVIS fee filing",
        "US Embassy F-1 student interview preparation",
        "STEM OPT (up to 3 years) post-graduation career planning",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Study in USA F1 Visa and OPT",
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
              <img src="https://flagcdn.com/w160/us.png" alt="USA Flag" className="w-8 h-5 object-cover rounded shadow" />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              United States Visas & Permanent Residency (Green Card) Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Navigate complex US Citizenship and Immigration Services (USCIS) and Department of State regulations with total precision. ENI Consultants delivers strategic counsel for visitor visas, student admissions, professional work authorizations, and employment-based Green Cards.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess USA Visa Eligibility
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
                src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000&auto=format&fit=crop"
                alt="USA Immigration Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">USCIS & Embassy Advisory</p>
                <p className="text-white font-bold text-sm">Strategic Visa File Structuring</p>
                <p className="text-slate-400 text-xs mt-0.5">B1/B2, F-1, H-1B, L-1 & EB-2 NIW Green Cards</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE USA */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Key Advantages of US Immigration & Career Mobility
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Why the United States remains the leading global destination for career, business, and educational expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🗽</span>
              <h3 className="text-white font-bold text-base">Global Economic Hub</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Access the world's largest economy with premier career opportunities in STEM, Finance, and Executive Management.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🎓</span>
              <h3 className="text-white font-bold text-base">World-Class Higher Ed</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Study at Ivy League and top-ranked universities with up to 3 years of STEM OPT practical work rights.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💼</span>
              <h3 className="text-white font-bold text-base">EB-2 NIW Pathway</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Self-petition for a Green Card without needing an employer sponsor through National Interest Waivers.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">✈️</span>
              <h3 className="text-white font-bold text-base">Long-Term Visitor Visas</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Enjoy multi-entry visitor visas valid up to 10 years for seamless business and personal travel.
              </p>
            </div>
          </div>
        </section>

        {/* USA IMMIGRATION PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Featured USA Visa & Residency Programs
            </h2>
          </div>

          <div className="space-y-12">
            {usaPathways.map((item, idx) => (
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
            Need Expert Guidance for Your US Visa Application?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a confidential profile evaluation with senior consultant Muhammad Farooq Khan to assess your DS-160, F-1, H-1B, or EB-2 NIW profile.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Check Your Eligibility Free
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book Priority Advisory
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}