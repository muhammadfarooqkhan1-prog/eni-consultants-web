import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Visas, Skilled Work & Permanent Residency (ILR) Advisory | ENI Consultants",
  description:
    "Expert consultancy for UK Skilled Worker Visas, Health & Care Visas, Student Visas (Graduate Route 2-Year Work Permit), Standard Visitor Visas, and Innovator Founder routes.",
};

export default function UKDestinationPage() {
  const ukPathways = [
    {
      title: "Skilled Worker Visa (Certificate of Sponsorship - CoS)",
      badge: "Direct Route to Indefinite Leave to Remain (ILR)",
      description:
        "Direct work visa authorization for qualified foreign professionals sponsored by licensed UK employers. Leads to Indefinite Leave to Remain (ILR) after 5 years of continuous lawful residence.",
      highlights: [
        "Certificate of Sponsorship (CoS) verification & job code alignment",
        "ECCTIS (UK NARIC) degree equivalence and English language verification",
        "Strategic pathway planning to UK Permanent Residency (ILR)",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "UK Skilled Worker Visa Certificate of Sponsorship",
    },
    {
      title: "Health and Care Worker Visa",
      badge: "Fast-Track & Reduced Visa Fees",
      description:
        "Specialized entry route for qualified doctors, nurses, health professionals, and adult social care specialists entering the NHS or approved care provider network.",
      highlights: [
        "Dedicated fast-track processing within 3 weeks",
        "Exemption from the Immigration Health Surcharge (IHS)",
        "Spouse and dependent child sponsorship inclusion",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "UK Health and Care Worker Visa Guidance",
    },
    {
      title: "Student Visa (CAS) & 2-Year Graduate Route",
      badge: "Academic & Post-Grad Work",
      description:
        "Secure university admissions across Russell Group and top public UK institutions with direct eligibility for the 2-Year (3-Year for PhD) post-study Graduate Work Visa.",
      highlights: [
        "Confirmation of Acceptance for Studies (CAS) issuance guidance",
        "Medium of Instruction (MOI) English language waivers",
        "Graduate Route transition into sponsored Skilled Worker status",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Study in UK Higher Education and Graduate Route",
    },
    {
      title: "UK Standard Visitor Visa (2, 5 & 10 Years)",
      badge: "Multiple Entry Short-Stay",
      description:
        "Comprehensive visa application support for tourism, visiting family members, attending business meetings, or participating in short-term training courses in the UK.",
      highlights: [
        "Financial proof, tie to home country & bank statement auditing",
        "Detailed travel itinerary and invitation letter structuring",
        "Priority and Super Priority processing options",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "UK Standard Visitor Visa Services",
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
              <img src="https://flagcdn.com/w160/gb.png" alt="UK Flag" className="w-8 h-5 object-cover rounded shadow" />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              United Kingdom Visas & Permanent Residency (ILR) Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Build your career, education, or business in the United Kingdom with full UK Visas and Immigration (UKVI) compliance. ENI Consultants offers comprehensive assistance for Skilled Worker sponsorship, Student admissions, and long-term visitor applications.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess UK Visa Eligibility Free
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
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop"
                alt="UK Immigration Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">UKVI Compliance Experts</p>
                <p className="text-white font-bold text-sm">Strategic Visa Representation</p>
                <p className="text-slate-400 text-xs mt-0.5">Skilled Worker, Student CAS, Visitor & Health Visas</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF UK IMMIGRATION */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose the United Kingdom?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Core benefits available to qualified professionals, healthcare workers, and students in the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🏛️</span>
              <h3 className="text-white font-bold text-base">ILR in 5 Years</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Clear 5-year pathway from Skilled Worker status to Indefinite Leave to Remain (ILR) and British Citizenship.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🩺</span>
              <h3 className="text-white font-bold text-base">Free NHS Healthcare</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full access to the National Health Service (NHS) for visa holders and immediate family dependents.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🎓</span>
              <h3 className="text-white font-bold text-base">2-Year Post-Study Visa</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Graduate route allows international students to work in any role across the UK post-graduation without sponsorship.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💼</span>
              <h3 className="text-white font-bold text-base">Global Finance Hub</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Work in top global financial, tech, and engineering institutions located in London, Manchester, and Edinburgh.
              </p>
            </div>
          </div>
        </section>

        {/* UK IMMIGRATION PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary United Kingdom Visa Routes
            </h2>
          </div>

          <div className="space-y-12">
            {ukPathways.map((item, idx) => (
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
            Plan Your Move to the United Kingdom Today
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Get professional legal advice on CoS verification, ECCTIS credential assessments, and UKVI visa submission from senior consultant Muhammad Farooq Khan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate UK Eligibility Free
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