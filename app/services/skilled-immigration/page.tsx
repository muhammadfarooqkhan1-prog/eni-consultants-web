"use client";

import Link from "next/link";

export default function SkilledImmigrationServicePage() {
  const pathways = [
    {
      id: "canada",
      country: "Canada",
      slug: "canada",
      flag: "https://flagcdn.com/w160/ca.png",
      title: "Express Entry & Provincial Nominee Programs (PNP)",
      badge: "Highest PR Success Rate",
      description:
        "Direct Permanent Residency pathways through Federal Skilled Worker (FSWP), Canadian Experience Class (CEC), and Category-Based Selection draws.",
      stats: {
        currentMigrants: "380,000 (Permanent Residents welcomed in 2026)",
        targetMigrants: "365,000 PR target set for 2027 under revised immigration targets",
        netFinancialWorth: "$2.25 Trillion Nominal GDP / ~$280 Billion Net Sovereign Wealth Holdings",
        whyChoose:
          "Offers a clear, direct path to unconditional Permanent Residency upon arrival with universal healthcare and high standard of living.",
      },
      features: [
        "CRS Score Calculation & Points Maximization Strategy",
        "WES & Credential Assessment (ECA) Guidance",
        "Provincial Nomination (PNP) Application Management",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Canada Express Entry Permanent Residency Consultancy",
    },
    {
      id: "usa",
      country: "United States",
      slug: "usa",
      flag: "https://flagcdn.com/w160/us.png",
      title: "EB-2 NIW, EB-1A & Specialty Occupation Pathways",
      badge: "Direct Green Card Pathways",
      description:
        "Permanent immigrant visa pathways for advanced degree professionals, high-impact researchers, and specialists without requiring labor certification.",
      stats: {
        currentMigrants: "1.15 Million (Legal Permanent Residents admitted in 2026)",
        targetMigrants: "1.2 Million Green Cards allocation target for FY 2027",
        netFinancialWorth: "$29.8 Trillion Nominal GDP / $155+ Trillion Total Household Wealth",
        whyChoose:
          "Unrivaled economic market size, top global compensation packages, and direct green card tracks via National Interest Waivers (NIW).",
      },
      features: [
        "EB-2 National Interest Waiver (NIW) Petition Structuring",
        "EB-1 Extraordinary Ability Profile Optimization",
        "USCIS Documentation & Visa Processing Guidance",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "USA EB-2 NIW and Permanent Residency Services",
    },
    {
      id: "uk",
      country: "United Kingdom",
      slug: "uk",
      flag: "https://flagcdn.com/w160/gb.png",
      title: "Skilled Worker, Health & Care, and Global Talent Visas",
      badge: "Fast-Track Settlement",
      description:
        "Direct work visa and talent pathways for qualified professionals entering the UK economy with employer sponsorship or exceptional talent endorsement.",
      stats: {
        currentMigrants: "620,000 (Net Migration recorded in 2026 statistics)",
        targetMigrants: "Focused skilled intake targeting healthcare, tech, and engineering sectors for 2027",
        netFinancialWorth: "$3.65 Trillion Nominal GDP / Premier European Financial Hub",
        whyChoose:
          "Fast-track entry into major global corporations, short 5-year path to Indefinite Leave to Remain (ILR), and British citizenship.",
      },
      features: [
        "Certificate of Sponsorship (CoS) Document Verification",
        "UK ECCTIS Credential Verification Support",
        "Indefinite Leave to Remain (ILR) Strategic Planning",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "UK Skilled Worker Visa Guidance",
    },
    {
      id: "ireland",
      country: "Ireland",
      slug: "ireland",
      flag: "https://flagcdn.com/w160/ie.png",
      title: "Critical Skills Employment Permit (CSEP) & Stamp 4 PR",
      badge: "European Tech & Pharma Hub",
      description:
        "Specialized work permits for tech, engineering, healthcare, and finance experts leading directly to Ireland Permanent Residency (Stamp 4).",
      stats: {
        currentMigrants: "155,000 (Immigrants recorded in 2026 annual census estimates)",
        targetMigrants: "45,000+ Employment Permits planned for critical shortage sectors in 2027",
        netFinancialWorth: "$580 Billion Nominal GDP / European HQ for Global Tech & Bio-Pharma",
        whyChoose:
          "Fastest pathway to EU citizenship (Stamp 4 PR after just 2 years on CSEP), high salaries, and gateway to the entire European Union.",
      },
      features: [
        "Critical Skills Employment Permit (CSEP) Strategy",
        "Job Offer Matching and Employer Compliance Check",
        "Stamp 4 PR & Irish Citizenship Roadmap Advisory",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Ireland Critical Skills Employment Permit Consultancy",
    },
    {
      id: "nz",
      country: "New Zealand",
      slug: "new-zealand",
      flag: "https://flagcdn.com/w160/nz.png",
      title: "Skilled Migrant Category (SMC) & Green List Straight to Residence",
      badge: "High Quality of Life",
      description:
        "Points-based residency and fast-tracked residence visas for in-demand roles across construction, healthcare, ICT, and engineering.",
      stats: {
        currentMigrants: "125,000 (Migrant arrivals recorded in 2026)",
        targetMigrants: "Focused 2027 intake targeting Green List tier 1 & 2 critical skill gaps",
        netFinancialWorth: "$265 Billion Nominal GDP / Top-Ranked Global Stability Index",
        whyChoose:
          "Exceptional work-life balance, pristine environment, direct-to-residence tracks for Green List profiles, and citizenship with Australia access rights.",
      },
      features: [
        "6-Point System & SMC Points Audit",
        "NZQA Qualification Assessment Strategy",
        "Green List Straight to Residence Filing Guidance",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "New Zealand Skilled Migrant Category Services",
    },
    {
      id: "hk",
      country: "Hong Kong",
      slug: "hong-kong",
      flag: "https://flagcdn.com/w160/hk.png",
      title: "Top Talent Pass Scheme (TTPS) & Quality Migrant Admission Scheme (QMAS)",
      badge: "Fast 4-Week Processing",
      description:
        "Rapid entry pathways for high earners and top-world university graduates seeking tax-efficient careers in Asia’s premier financial hub.",
      stats: {
        currentMigrants: "150,000+ (TTPS & Talent Scheme approvals in 2026)",
        targetMigrants: "60,000+ Annual target for high-earning global professionals for 2027",
        netFinancialWorth: "$400 Billion Nominal GDP / $520+ Billion Foreign Exchange Reserves",
        whyChoose:
          "Low tax regime (15% max personal income tax), no job offer required for initial entry under TTPS/QMAS, and direct access to Asian markets.",
      },
      features: [
        "Top University Eligibility Check (Top 100 World Ranking)",
        "QMAS Points Grid Assessment & Documentation",
        "Hong Kong Permanent Residency (7-Year Rule) Guidance",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Hong Kong Top Talent Pass Scheme Advisory",
    },
    {
      id: "germany",
      country: "Europe & Germany",
      slug: "germany",
      flag: "https://flagcdn.com/w160/eu.png",
      title: "German Opportunity Card (Chancenkarte) & EU Blue Card",
      badge: "Chancenkarte & EU Blue Card",
      description:
        "Points-based job search visas and EU Blue Card pathways for skilled specialists seeking long-term European residency and career mobility.",
      stats: {
        currentMigrants: "220,000+ (Skilled EU Blue Card and work visa holders welcomed in 2026)",
        targetMigrants: "400,000 Skilled immigrants needed annually in 2027 to offset demographic trends",
        netFinancialWorth: "$4.7 Trillion Nominal GDP (Germany) / Largest European Economy",
        whyChoose:
          "Chancenkarte allows legal job search inside Germany; accelerated PR within 21-27 months for EU Blue Card holders with German language skills.",
      },
      features: [
        "German Opportunity Card (Chancenkarte) Points Grid Assessment",
        "EU Blue Card Qualification & Threshold Matching",
        "Schengen Area Work & Mobility Advisory",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "European EU Blue Card and Opportunity Card Services",
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
              Core Expertise
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Skilled Immigration & Permanent Residency (PR) Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              We offer complete strategic guidance to professionals, engineers, IT experts, medical practitioners, and executive leaders seeking permanent residency, work visas, and citizenship across leading world economies.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Check Your Eligibility
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
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
                alt="ENI Consultants Skilled PR Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Senior Immigration Counsel</p>
                <p className="text-white font-bold text-sm">Led by Chief Immigration Officer Muhammad Farooq Khan</p>
                <p className="text-slate-400 text-xs mt-0.5">Custom points evaluation & legal documentation guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* PROPRIETARY PROCESS SECTION */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Our 4-Stage PR Advisory Roadmap
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              How we take your profile from preliminary points calculation to visa approval.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">01</span>
              <h3 className="text-white font-bold text-base">Points & Profile Audit</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Detailed assessment of your age, qualifications, NOC/ANZSCO/SOC code, and global points criteria.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">02</span>
              <h3 className="text-white font-bold text-base">Credential Assessment</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Guiding degree verifications through WES, ECCTIS, NZQA, HKCAAVQ, ACS, or Engineers Australia.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">03</span>
              <h3 className="text-white font-bold text-base">EOI & Pool Filing</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Strategic submission into Express Entry, SkillSelect, TTPS/QMAS, or state nomination portals.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">04</span>
              <h3 className="text-white font-bold text-base">ITA & Visa Application</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full legal documentation, medical check guidance, police clearance, and final visa lodging.
              </p>
            </div>
          </div>
        </section>

        {/* DESTINATION PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Featured Skilled Migration Programs
            </h2>
          </div>

          <div className="space-y-12">
            {pathways.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl hover:border-[#ff7027]/40 transition-all"
              >
                {/* Media Column (5 Cols) */}
                <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-md h-64 sm:h-72">
                    <img
                      src={item.mediaUrl}
                      alt={item.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <img src={item.flag} alt={`${item.country} Flag`} className="w-7 h-4 object-cover rounded shadow" />
                      <span className="text-white font-bold text-sm">{item.country} Pathway</span>
                    </div>
                  </div>

                  {/* Country Key Economics & Migration Metrics Box */}
                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-2 text-xs relative">
                    <p className="text-[#ff7027] font-bold uppercase tracking-wide text-[11px]">
                      2026 / 2027 Migration Snapshot
                    </p>

                    <div className="space-y-1.5 text-slate-300">
                      <p><strong className="text-white">Recent 2026 Intake:</strong> {item.stats.currentMigrants}</p>
                      <p><strong className="text-white">2027 Target:</strong> {item.stats.targetMigrants}</p>
                      <p><strong className="text-white">Economic Output:</strong> {item.stats.netFinancialWorth}</p>
                    </div>
                  </div>
                </div>

                {/* Content Column (7 Cols) */}
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

                  {/* 1. POINTS/KEY FEATURES CHECKLIST */}
                  <ul className="space-y-2.5 pt-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-[#ff7027] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 2. "WHY CHOOSE" CALLOUT BOX */}
                  <div className="bg-slate-950/60 border-l-2 border-[#ff7027] p-3.5 rounded-r-lg my-2">
                    <p className="text-xs sm:text-sm text-slate-300">
                      <strong className="text-white">Why Choose {item.country}? </strong>
                      {item.stats.whyChoose}
                    </p>
                  </div>

                  {/* 3. DUAL ACTION LINKS: Check Eligibility & Learn More */}
                  <div className="pt-2 flex items-center gap-6 flex-wrap">
                    <Link
                      href="/check-eligibility"
                      className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm hover:underline"
                    >
                      Check Eligibility for {item.country} <span>→</span>
                    </Link>

                    <Link
                      href={`/destinations/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium text-sm transition-colors"
                    >
                      <span>Learn More</span>
                      <span className="text-xs">↗</span>
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
            Ready to Begin Your Permanent Residency Journey?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a dedicated points review session with Chief Consultant Muhammad Farooq Khan to map out your immigration pathway.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-block"
            >
              Start Your Assessment Today
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}