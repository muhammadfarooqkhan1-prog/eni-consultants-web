import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada Permanent Residency (PR) & Express Entry Advisory | ENI Consultants",
  description:
    "Expert consultancy for Canada Express Entry, Federal Skilled Worker Program (FSWP), Category-Based Selection, PNPs (OINP, AAIP, BC PNP), and Study Permits.",
};

export default function CanadaDestinationPage() {
  const prPathways = [
    {
      title: "Express Entry System (FSWP & CEC)",
      badge: "Fastest PR Route (6 Months)",
      description:
        "The primary points-based system for skilled professionals. Candidates are ranked using the Comprehensive Ranking System (CRS) based on age, education, language scores, and foreign or Canadian work experience.",
      highlights: [
        "Federal Skilled Worker Program (FSWP) for overseas professionals",
        "Canadian Experience Class (CEC) for candidates with Canadian work history",
        "CRS Score optimization & ECA (WES) verification strategy",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Canada Express Entry Consultation",
    },
    {
      title: "Category-Based Selection Draws",
      badge: "Targeted Low CRS Draws",
      description:
        "IRCC conducts specialized draws for candidates with targeted work experience in high-demand economic sectors, allowing candidates to receive invitations at lower CRS cutoffs.",
      highlights: [
        "Healthcare occupations (Nurses, Physicians, Technicians)",
        "STEM (Software Engineers, Data Scientists, Civil Engineers)",
        "Trades, Transport & Agriculture professions",
        "French Language Proficiency stream",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Canada Category Based Selection",
    },
    {
      title: "Provincial Nominee Programs (PNPs)",
      badge: "+600 Bonus CRS Points",
      description:
        "Canadian provinces nominate skilled workers tailored to local labor market shortages. A successful provincial nomination adds 600 bonus points to your Express Entry profile.",
      highlights: [
        "Ontario Immigrant Nominee Program (OINP)",
        "Alberta Advantage Immigration Program (AAIP)",
        "British Columbia PNP (BC PNP) Tech & Healthcare streams",
        "Saskatchewan SINP & Atlantic Immigration Program (AIP)",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Canada Provincial Nominee Program PNP",
    },
    {
      title: "Study-to-PR & Post-Graduation Work Permit (PGWP)",
      badge: "Academic Career Pathway",
      description:
        "Gain world-class education at Designated Learning Institutions (DLIs) and qualify for up to a 3-year PGWP, leading directly to permanent residency status.",
      highlights: [
        "Admissions into accredited DLI Public Colleges & Universities",
        "Provincial Attestation Letter (PAL) guidance",
        "Spouse Open Work Permit (SOWP) eligibility for Master's programs",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Study in Canada Universities",
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
              <img src="https://flagcdn.com/w160/ca.png" alt="Canada Flag" className="w-8 h-5 object-cover rounded shadow" />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Immigrate to Canada: Permanent Residency & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Canada remains a top destination for skilled professionals, offering universal healthcare, high living standards, free education for children, and direct citizenship pathways. ENI Consultants provides end-to-end legal and technical representation for your Canadian immigration application.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Calculate Canada CRS Score Free
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book 1-on-1 Advisory
              </Link>
            </div>
          </div>

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop"
                alt="Canada Permanent Residency Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">IRCC Application Experts</p>
                <p className="text-white font-bold text-sm">Strategic CRS Score Enhancement</p>
                <p className="text-slate-400 text-xs mt-0.5">Express Entry, PNPs & Category Draws</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF CANADA PR */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Canada Permanent Residency?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key benefits granted to PR status holders and their dependent family members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🍁</span>
              <h3 className="text-white font-bold text-base">Direct PR Status</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Live, work, and study anywhere in Canada with full constitutional rights and job mobility.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🏥</span>
              <h3 className="text-white font-bold text-base">Universal Healthcare</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Free medical coverage for you and your family through Medicare upon arrival.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🎓</span>
              <h3 className="text-white font-bold text-base">Free Child Education</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Free high-quality public school education from Primary to High School (K-12).
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🛂</span>
              <h3 className="text-white font-bold text-base">Citizenship in 3 Years</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Eligible to apply for a Canadian Passport after completing 1,095 days of physical residency.
              </p>
            </div>
          </div>
        </section>

        {/* CANADIAN IMMIGRATION PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Canadian PR & Visa Programs
            </h2>
          </div>

          <div className="space-y-12">
            {prPathways.map((item, idx) => (
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
            Ready to Start Your Canadian PR Journey?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Get an exact CRS score assessment, NOC/TEER classification, and customized PNP strategy from senior consultant Muhammad Farooq Khan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate Your CRS Points
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