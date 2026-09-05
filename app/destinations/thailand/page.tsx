import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  Laptop,
  Coins,
  Plane,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study, Work & Visit Opportunities in Thailand | ENI Consultants",
  description:
    "Explore higher education, university transfer pathways, DTV remote work visas, and travel options in Thailand with ENI Consultants.",
};

export default function ThailandDestinationPage() {
  const thailandPathways = [
    {
      title: "International Higher Education & Degree Programs",
      badge: "Global Campus Pathways",
      description:
        "Enroll in top-ranked public and private Thai universities offering fully English-taught Bachelor's and Master's degrees in Business, IT, Hospitality, and International Relations.",
      highlights: [
        "Western-accredited degrees and dual-degree university options",
        "Cost-effective tuition fees paired with low living costs",
        "Seamless transfer pathways to partner universities in Australia & Europe",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Thailand Higher Education Pathways",
    },
    {
      title: "Destination Thailand Visa (DTV) & Long-Term Visas",
      badge: "Remote Work & Long Stay",
      description:
        "Guidance for digital migrants, remote workers, and professionals applying for 5-year multiple-entry visas (DTV) or Long-Term Resident (LTR) options.",
      highlights: [
        "Multiple-entry access with stays up to 180 days per entry",
        "Coverage for remote workers, freelancers, and soft power activities",
        "Comprehensive eligibility and financial documentation review",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Thailand DTV and Remote Work Visa Guidance",
    },
    {
      title: "Tourist & Business Entry Assistance",
      badge: "Fast-Track Entry",
      description:
        "Stress-free tourist visa (TR), visa-on-arrival, and corporate visit clearance for individuals and families traveling to Bangkok, Phuket, and Chiang Mai.",
      highlights: [
        "Fast-track single and multiple-entry tourist visa processing",
        "Flight ticket, hotel reservation, and travel insurance assistance",
        "Business visit clearance and visa extension support",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Thailand Travel and Tourism Visa",
    },
    {
      title: "Student Non-Immigrant ED Visa Advisory",
      badge: "Complete Onboarding",
      description:
        "Complete relocation support including university enrollment, Ministry of Education authorization letters, and Non-Immigrant ED visa filing.",
      highlights: [
        "Direct coordination with university admissions departments",
        "Ministry clearance and official ED visa application processing",
        "Pre-departure orientation and local housing setup in Thailand",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Thailand Student Visa Consultation",
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
                src="https://flagcdn.com/w160/th.png"
                alt="Thailand Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study, Work & Visit Thailand: Education & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore internationally recognized degrees, DTV remote work visas, and fast tourist entry pathways in Southeast Asia. ENI Consultants manages your university admissions, Ministry clearances, and visa applications step-by-step.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Thailand Eligibility</span>
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
                src="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Thailand Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Thailand Admissions & Visas</p>
                <p className="text-white font-bold text-sm">Strategic Education & Travel Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">English Degrees, DTV Visas & Tourist Clearance</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF THAILAND */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Thailand?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages for international students, digital nomads, and holiday travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Globe className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Global Campuses</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Study in accredited international branch campuses and dual-degree programs.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Laptop className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">DTV Remote Work</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Long-term 5-year visa options for digital nomads and remote professionals.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Coins className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Affordable Quality</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                High standards of education paired with exceptionally low living costs.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Plane className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Travel Gateway</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Strategic location offering easy travel across the entire Southeast Asian region.
              </p>
            </div>
          </div>
        </section>

        {/* THAILAND PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Thailand Education & Visa Pathways
            </h2>
          </div>

          <div className="space-y-12">
            {thailandPathways.map((item, idx) => (
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
            Plan Your Journey to Thailand
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with Chief Consultant Muhammad Farooq Khan to assess university entry, DTV remote visas, and tourist travel approvals.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center justify-center gap-2"
            >
              <span>Evaluate Eligibility</span>
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