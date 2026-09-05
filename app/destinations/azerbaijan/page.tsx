import Link from "next/link";
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
  title: "Study & Visit Opportunities in Azerbaijan | ENI Consultants",
  description:
    "Explore accredited medical programs, engineering degrees, electronic visitor visas, and student relocation pathways in Azerbaijan with ENI Consultants.",
};

export default function AzerbaijanDestinationPage() {
  const azerbaijanPathways = [
    {
      title: "Medical & Health Sciences Degree Programs",
      badge: "WFME Accredited MBBS",
      description:
        "Pursue recognized General Medicine (MBBS), Dentistry, and Pharmacy programs in Baku. Study in modern university clinical hospitals with full instruction in English.",
      highlights: [
        "WFME-accredited medical degrees with global clinical recognition",
        "Full English-medium curriculum across medical faculties",
        "Significantly lower tuition fees compared to European institutes",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Azerbaijan Medical Education Pathways",
    },
    {
      title: "Engineering, IT & Business Degree Programs",
      badge: "European University Standards",
      description:
        "Enroll in Bachelor's and Master's degrees in Petroleum Engineering, Computer Science, Data Analytics, and Business Administration at top state and private universities.",
      highlights: [
        "Degrees aligned with the European Bologna education process",
        "Strong focus on energy technology, oil & gas, and computer engineering",
        "Affordable annual tuition and low living expenses in Baku",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Azerbaijan Engineering and Business Degrees",
    },
    {
      title: "ASAN Tourist & Business eVisa Assistance",
      badge: "Fast 3-Day Processing",
      description:
        "Fast-track electronic visa (ASAN Visa) applications for tourists, corporate travelers, and family visitors traveling to Baku and regional destinations.",
      highlights: [
        "Simple online filing with 3 to 5 business days approval window",
        "Comprehensive hotel reservation and travel document verification",
        "Urgent 3-hour expedited processing options available",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Azerbaijan ASAN Visa and Tourism Support",
    },
    {
      title: "Student Visa & Temporary Residency Advisory",
      badge: "Complete Onboarding",
      description:
        "End-to-end support including university acceptance, Ministry of Education document clearance, student visa filing, and Baku residency card processing.",
      highlights: [
        "University offer letter and document attestation support",
        "Guidance on State Migration Service residence permit procedures",
        "Pre-departure orientation, housing lookup, and airport reception",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Azerbaijan Student Visa Consultation",
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
                src="https://flagcdn.com/w160/az.png"
                alt="Azerbaijan Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study & Visit Azerbaijan: Education & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore accredited medical and engineering degrees, European-standard university curriculum, and rapid ASAN tourist eVisas in Baku. ENI Consultants manages your university admissions, migration registration, and visa clearance.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Azerbaijan Eligibility</span>
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
                src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop"
                alt="Azerbaijan Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Azerbaijan Admissions & Visas</p>
                <p className="text-white font-bold text-sm">Higher Education & Travel Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">MBBS, Engineering, ASAN Visas & Permits</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF AZERBAIJAN */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Azerbaijan?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key highlights for international students, medical candidates, and travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <GraduationCap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Bologna Standard</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Degrees structured according to the European Credit Transfer System (ECTS).
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Stethoscope className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Accredited Medical Degrees</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                World-recognized MBBS programs with hands-on experience in teaching hospitals.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Banknote className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Cost-Effective Living</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Low accommodation and living costs in Baku compared to EU capital cities.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Zap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Rapid ASAN eVisa</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Streamlined electronic entry visas approved online in as little as 3 days.
              </p>
            </div>
          </div>
        </section>

        {/* AZERBAIJAN PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Azerbaijan Study & Visa Services
            </h2>
          </div>

          <div className="space-y-12">
            {azerbaijanPathways.map((item, idx) => (
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
            Plan Your Academic Journey to Azerbaijan
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with Chief Consultant Muhammad Farooq Khan to assess university entry, medical admissions, and visa requirements.
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