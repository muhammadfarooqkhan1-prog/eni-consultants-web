import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study, Work & Visit Maldives | ENI Consultants",
  description:
    "Explore higher education, hospitality certification, work permit pathways, and tourist visa guidance for Maldives with ENI Consultants.",
};

export default function MaldivesDestinationPage() {
  const maldivesPathways = [
    {
      title: "Hospitality & Tourism Management Degrees",
      badge: "Industry-Integrated Training",
      description:
        "Enroll in specialized diplomas, Bachelor's, and Master's programs in International Hospitality, Resort Management, and Culinary Arts. Gain hands-on exposure in world-renowned luxury resorts.",
      highlights: [
        "Globally recognized hospitality qualifications instructed in English",
        "Direct internship placements with luxury island resorts and chains",
        "High post-graduation employment rates in the global tourism sector",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Maldives Tourism and Hospitality Education",
    },
    {
      title: "Resort Employment & Work Permit Advisory",
      badge: "Skilled Professional Pathways",
      description:
        "Comprehensive processing guidance for professionals seeking employment in Maldives' thriving hospitality, healthcare, marine biology, and construction sectors.",
      highlights: [
        "Work quota clearance and employment approval assistance",
        "Complete document attestation and medical check coordination",
        "Full support through foreign employment visa processing",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Maldives Work Permit and Employment Guidance",
    },
    {
      title: "Tourist & Business Visit Entry",
      badge: "Free On-Arrival Visa",
      description:
        "Hassle-free documentation and travel clearance support for tourists, corporate guests, and families exploring the Maldivian islands.",
      highlights: [
        "Guidance for 30-day free tourist visa on arrival requirements",
        "IMUGA (Immigration Declaration) filing and hotel voucher support",
        "Business visit clearance and fast-track immigration setup",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Maldives Tourist and Travel Visa",
    },
    {
      title: "Student Visa & Arrival Assistance",
      badge: "Complete Onboarding",
      description:
        "End-to-end relocation support including institute application submission, student visa processing, and airport welcome in Malé.",
      highlights: [
        "Step-by-step guidance on institution admissions and fee clearance",
        "Student visa approval processing via Maldives Immigration",
        "Pre-departure briefing and local accommodation arrangements",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Maldives Student Visa Consultation",
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
              <img
                src="https://flagcdn.com/w160/mv.png"
                alt="Maldives Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study, Work & Visit Maldives: Pathways & Visa Advisory
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Discover world-class hospitality education, resort career opportunities, and tourist visa guidance in the Maldives. ENI Consultants handles your admissions, work permits, and travel documentation with expert care.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Maldives Eligibility Free
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
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop"
                alt="Maldives Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Maldives Guidance</p>
                <p className="text-white font-bold text-sm">Higher Education & Work Permits</p>
                <p className="text-slate-400 text-xs mt-0.5">Hospitality, Work Visas & Travel Clearance</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF MALDIVES */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose the Maldives?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key highlights for international students, hospitality professionals, and visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🏨</span>
              <h3 className="text-white font-bold text-base">Hospitality Hub</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Direct exposure to world-class luxury resort chains and international standards.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💼</span>
              <h3 className="text-white font-bold text-base">Work Opportunities</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                High demand for foreign expertise in hotel management, marine biology, and health.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🗣️</span>
              <h3 className="text-white font-bold text-base">English Environment</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                English is widely spoken across business, education, and hospitality sectors.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">✈️</span>
              <h3 className="text-white font-bold text-base">Easy Entry Process</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Streamlined visa-on-arrival procedures and swift student permit processing.
              </p>
            </div>
          </div>
        </section>

        {/* MALDIVES PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Maldives Education & Visa Services
            </h2>
          </div>

          <div className="space-y-12">
            {maldivesPathways.map((item, idx) => (
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
            Plan Your Opportunities in Maldives
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with senior consultant Muhammad Farooq Khan to assess hospital/resort education options, work permits, and entry visa requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate Eligibility Free
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