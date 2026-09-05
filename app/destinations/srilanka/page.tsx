import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  Coins,
  Globe,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study & Migration Opportunities in Sri Lanka | ENI Consultants",
  description:
    "Explore higher education, university transfer pathways, medical programs, and travel opportunities in Sri Lanka with ENI Consultants.",
};

export default function SriLankaDestinationPage() {
  const sriLankaPathways = [
    {
      title: "Medical & Health Sciences Degree Programs",
      badge: "Globally Accredited Medical Degree",
      description:
        "Pursue recognized MBBS, Dentistry, and Nursing programs in Sri Lanka. Complete clinical rotations and training with state-of-the-art medical university faculties.",
      highlights: [
        "Globally recognized medical degrees with clinical practice",
        "English-medium instruction across top institutes",
        "Affordable tuition fees compared to Western universities",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Sri Lanka Medical Education Pathways",
    },
    {
      title: "Business & IT International Degree Pathways",
      badge: "UK & Australian University Transfers",
      description:
        "Enroll in Bachelor's and Master's programs in Information Technology, Software Engineering, and Business Management with options to transfer to UK or Australian campuses.",
      highlights: [
        "1+2 or 2+1 university transfer options to UK, Australia, and Canada",
        "Cutting-edge IT, Data Science, and Management curricula",
        "Cost-effective path to international qualification degrees",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Sri Lanka Business and IT Higher Education",
    },
    {
      title: "Tourist & Visit Visa Assistance",
      badge: "Fast Entry Approvals",
      description:
        "Simplified Electronic Travel Authorization (ETA) and short-stay visa guidance for families, tourists, and business visitors exploring Sri Lanka.",
      highlights: [
        "Fast-track ETA application filing and instant updates",
        "Complete hotel booking and itinerary documentation support",
        "Hassle-free entry processing for short-term visits",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Sri Lanka Travel and Tourism Visa",
    },
    {
      title: "Student Visa & Relocation Support",
      badge: "Complete Onboarding",
      description:
        "Comprehensive counseling on university admissions, document attestation, visa clearance, and pre-departure accommodation booking.",
      highlights: [
        "Step-by-step document verification and university application filing",
        "Direct assistance with Immigration Department approvals",
        "Pre-departure briefing and local airport pickup setup",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Sri Lanka Student Visa Consultation",
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
                src="https://flagcdn.com/w160/lk.png"
                alt="Sri Lanka Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study & Visit Sri Lanka: Higher Education & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore affordable medical and business degrees, international transfer programs, and fast-track tourist visa pathways in South Asia. ENI Consultants manages your university admissions, document verification, and entry visa processing.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Sri Lanka Eligibility</span>
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
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000&auto=format&fit=crop"
                alt="Sri Lanka Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Sri Lanka Admissions & Visa</p>
                <p className="text-white font-bold text-sm">Strategic Student & Tourist Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">MBBS, IT Degrees, ETA Visas & Transfers</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF SRI LANKA */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Sri Lanka?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages offered to international students and travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <BookOpen className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">English-Medium Studies</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Study in accredited universities offering programs instructed completely in English.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Coins className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Affordable Expenses</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Enjoy low tuition costs along with highly affordable living and housing expenses.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Globe className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Global Transfer Options</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Easily shifting to universities in the UK, Australia, or Canada after foundational years.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Zap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Fast Visa Approvals</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Streamlined student and visitor visa procedures with high visa success rates.
              </p>
            </div>
          </div>
        </section>

        {/* SRI LANKA PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Sri Lanka Study & Travel Programs
            </h2>
          </div>

          <div className="space-y-12">
            {sriLankaPathways.map((item, idx) => (
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
            Plan Your Journey to Sri Lanka
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with Chief Consultant Muhammad Farooq Khan to assess university entry options, document preparation, and entry visa requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center justify-center gap-2"
            >
              <span>Evaluate Admissions Free</span>
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