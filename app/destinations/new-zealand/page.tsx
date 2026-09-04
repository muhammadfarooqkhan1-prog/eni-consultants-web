import Link from "next/link";
import { Metadata } from "next";
import {
  Award,
  HeartPulse,
  GraduationCap,
  Globe,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "New Zealand Permanent Residency & Skilled Visa Advisory | ENI Consultants",
  description:
    "Expert migration consultancy for New Zealand Skilled Migrant Category (SMC) 6-Points System, Green List Tier 1 & 2 Visas, AEWV, and Student Visas.",
};

export default function NewZealandDestinationPage() {
  const nzPathways = [
    {
      title: "Skilled Migrant Category (SMC) Resident Visa",
      badge: "6-Points System for Direct PR",
      description:
        "New Zealand's points-based residency framework. Applicants must claim a minimum of 6 points through higher academic qualifications, recognized NZ occupational registration, or high salary, combined with skilled NZ work experience.",
      highlights: [
        "Qualifications points (Doctorate = 6, Master's = 5, Bachelor's = 3)",
        "Income points (Up to 6 points for high-earning professionals)",
        "Skilled NZ work experience bonus points (1 to 3 points)",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "New Zealand Skilled Migrant Category Consultation",
    },
    {
      title: "Green List Tier 1: Straight to Residence Visa",
      badge: "Fast-Track Direct Residence",
      description:
        "Immediate residence pathway for eligible professionals with job offers from NZ Accredited Employers in Tier 1 high-demand roles, including doctors, engineers, and ICT specialists.",
      highlights: [
        "Apply for NZ Residence immediately without waiting periods",
        "Targeted occupations in Healthcare, Engineering, and Tech",
        "Includes spouse work rights and domestic tuition for children",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "New Zealand Green List Straight to Residence",
    },
    {
      title: "Green List Tier 2: Work to Residence Visa",
      badge: "Residence After 2 Years",
      description:
        "Pathway for skilled workers in Tier 2 Green List roles—such as specialized trades, technicians, teachers, and care workers—who complete 24 months of full-time NZ employment.",
      highlights: [
        "Guaranteed residency pathway after 2 years of accredited NZ work",
        "Clear registration and qualification equivalence guidelines",
        "Fast-track processing for Accredited Employer Work Visas (AEWV)",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "New Zealand Work to Residence Visa",
    },
    {
      title: "Study in New Zealand & Post-Study Work Visa (PSWV)",
      badge: "Academic Pathway to SMC Points",
      description:
        "Enroll in Level 7+ Bachelor's, Postgraduate, or Master's programs at NZ universities and institutes of technology, leading to up to 3 years of unrestricted Post-Study Work rights.",
      highlights: [
        "NZQA International Qualification Assessment (IQA) support",
        "3-Year Post-Study Work Visa eligibility for degree graduates",
        "Direct point contributions toward the Skilled Migrant Category (SMC)",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Study in New Zealand Higher Education",
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
              <img src="https://flagcdn.com/w160/nz.png" alt="New Zealand Flag" className="w-8 h-5 object-cover rounded shadow" />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Immigrate to New Zealand: Residence & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Experience an exceptional work-life balance, high safety standards, world-class healthcare, and energetic career opportunities in Aotearoa New Zealand. ENI Consultants manages your SMC 6-Points calculation, Green List qualification mapping, and Accredited Employer filing.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess NZ 6-Points Eligibility</span>
                <ArrowRight className="w-4 h-4" />
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
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
                alt="New Zealand Immigration Consultancy"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Immigration NZ Specialists</p>
                <p className="text-white font-bold text-sm">Strategic SMC & Green List Filing</p>
                <p className="text-slate-400 text-xs mt-0.5">SMC 6-Points, Tier 1/2 Green List & AEWV</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF NEW ZEALAND RESIDENCY */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Migrate to New Zealand?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages granted to resident status holders and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-base pt-1">Direct Resident Status</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Live, work, and study indefinitely in New Zealand with full employment flexibility.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-base pt-1">Public Healthcare</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Free or subsidized public healthcare services for permanent residents and their children.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-base pt-1">Domestic Education</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Free public schooling (K-12) for dependent children and domestic university fee rates.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-base pt-1">Citizenship in 5 Years</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Eligible for a New Zealand Passport after completing 5 years of physical residency.
              </p>
            </div>
          </div>
        </section>

        {/* NEW ZEALAND IMMIGRATION PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary New Zealand Visa Programs
            </h2>
          </div>

          <div className="space-y-12">
            {nzPathways.map((item, idx) => (
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
                        <Check className="w-4 h-4 text-[#ff7027] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href="/check-eligibility"
                      className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm hover:underline"
                    >
                      <span>Check Eligibility for {item.title.split(" ")[0]}</span>
                      <ArrowRight className="w-4 h-4" />
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
            Evaluate Your New Zealand SMC Points Score
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with Chief Consultant Muhammad Farooq Khan to assess your NZQA qualification equivalence, Green List status, and Accredited Employer job offer requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center justify-center gap-2"
            >
              <span>Evaluate Points Score</span>
              <ArrowRight className="w-4 h-4" />
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