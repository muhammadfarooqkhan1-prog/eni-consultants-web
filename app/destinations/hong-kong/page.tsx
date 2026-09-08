import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  GraduationCap,
  Stethoscope,
  Banknote,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study & Work Opportunities in Hong Kong | ENI Consultants",
  description:
    "Explore top-ranked Hong Kong universities, post-study work visas (IANG), finance, tech & medical programs, and student visa pathways with ENI Consultants.",
};

export default function HongKongDestinationPage() {
  const hongKongPathways = [
    {
      title: "Higher Education & Degree Programs",
      badge: "Asia's Premier Education Hub",
      description:
        "Pursue globally ranked Bachelor's, Master's, and Doctoral degrees at prestigious institutions like HKU, CUHK, and HKUST across Business, Engineering, and Social Sciences.",
      highlights: [
        "World Top 50 universities operating in a fully English-medium teaching environment",
        "1-year intensive Taught Postgraduate (TPG) Master's programs for fast-track career entry",
        "Gateway to Asia's booming economy and multinational enterprise networks",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Hong Kong University Education Pathways",
    },
    {
      title: "Finance, AI & Global Business Excellence",
      badge: "Global Financial Capital",
      description:
        "Enroll in world-leading Fintech, Finance, Supply Chain, and Big Data programs designed alongside major global banks, investment firms, and tech hubs in Asia.",
      highlights: [
        "Direct networking with Asia-Pacific headquarters of top financial institutions",
        "Curriculum aligned with international financial markets, AI, and commercial law",
        "High graduate placement rates across global investment and consulting firms",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Hong Kong Finance and Business Programs",
    },
    {
      title: "Medical, Nursing & Life Sciences Programs",
      badge: "Advanced Healthcare Infrastructure",
      description:
        "Study Medicine, Dentistry, Nursing, and Biotechnology in Asia's leading medical faculties with world-renowned clinical research institutions.",
      highlights: [
        "Hands-on clinical training at top teaching hospitals and specialized research labs",
        "Strong global recognition and accreditation across international medical boards",
        "Promising career progression within Hong Kong's expanding healthcare and biotech sectors",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Hong Kong Medical and Life Sciences Education",
    },
    {
      title: "Student Visa & Post-Study Work Pathway (IANG)",
      badge: "2-Year Post-Study Work Visa",
      description:
        "Complete guidance covering university admissions, Student Visa sponsorship filing, financial proof preparation, and Immigration Arrangements for Non-local Graduates (IANG).",
      highlights: [
        "Unrestricted 2-year post-study work visa (IANG) for non-local university graduates",
        "Pathway towards permanent residency (HKPR) after 7 years of continuous residence",
        "Complete support for visa filing, financial documentation, and pre-departure preparation",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Hong Kong Student Visa Consultation",
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
              <div className="w-8 h-5 relative overflow-hidden rounded shadow">
                {/* FIX 1: Added unoptimized to bypass flagcdn.com host check */}
                <Image
                  src="https://flagcdn.com/w160/hk.png"
                  alt="Hong Kong Flag"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study & Work in Hong Kong: Higher Education & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Discover top Hong Kong universities, leading finance & tech programs, and the profitable 2-year IANG post-study work visa. ENI Consultants provides step-by-step guidance for admissions and visa processing.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Hong Kong Eligibility</span>
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
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group h-80 sm:h-96">
              {/* FIX 2: Added unoptimized to external image */}
              <Image
                src="https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=1000&auto=format&fit=crop"
                alt="Hong Kong Education Services"
                fill
                priority
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl z-10">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Hong Kong Admissions & Visas</p>
                <p className="text-white font-bold text-sm">Higher Education & Work Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">Degrees, Finance, Tech & IANG Visas</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF HONG KONG */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Hong Kong?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key highlights for international students, finance leaders, and healthcare candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <GraduationCap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">English-Medium Teaching</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                World-class universities using English as the primary medium of instruction and research.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Stethoscope className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Global Finance Hub</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Direct exposure to Fortune 500 Asia hubs, global banks, and thriving venture networks.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Banknote className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Part-Time Internship Rights</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Gain valuable experience with university-approved study-related internships and campus work.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Zap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">2-Year IANG Visa</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Stay and work unrestricted for up to 2 years post-graduation with PR pathways available.
              </p>
            </div>
          </div>
        </section>

        {/* HONG KONG PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Hong Kong Study & Visa Services
            </h2>
          </div>

          <div className="space-y-12">
            {hongKongPathways.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl hover:border-[#ff7027]/40 transition-all"
              >
                {/* Media Column */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-md h-64 sm:h-72">
                    {/* FIX 3: Added unoptimized to dynamic grid images */}
                    <Image
                      src={item.mediaUrl}
                      alt={item.mediaAlt}
                      fill
                      unoptimized
                      className="object-cover"
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
            Plan Your Academic & Career Journey to Hong Kong
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with Chief Consultant Muhammad Farooq Khan to evaluate university programs, financial requirements, and student visa pathways.
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