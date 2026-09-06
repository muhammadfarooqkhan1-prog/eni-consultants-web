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
  title: "Study & Work Opportunities in Ireland | ENI Consultants",
  description: "Explore top-ranked Irish universities, post-study work visas (Stamp 1G), tech & medical programs, and student visa pathways in Ireland with ENI Consultants.",
};

export default function IrelandDestinationPage() {
  const irelandPathways = [
    {
      title: "Higher Education & University Degree Programs",
      badge: "World-Class European Standard",
      description:
        "Pursue globally recognized Bachelor's and Master's degrees in Dublin, Cork, Galway, and Limerick across Engineering, Business, Data Science, and Humanities.",
      highlights: [
        "Top-ranked universities offering internationally respected qualification frameworks",
        "1-year intensive Master's options allowing faster entry into the workforce",
        "Full English-speaking European hub with extensive global career opportunities",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Ireland University Education Pathways",
    },
    {
      title: "Tech, AI, Data & Business Excellence Programs",
      badge: "Silicon Valley of Europe",
      description:
        "Enroll in specialized STEM programs backed by direct industry connections to top global tech giants headquartered in Ireland, including Google, Meta, Apple, and Microsoft.",
      highlights: [
        "Curriculum designed around industry demand in ICT, AI, and Big Data",
        "Strong university-industry placement partnerships and internship models",
        "High graduate employability rate across European innovation hubs",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Ireland Technology and Business Programs",
    },
    {
      title: "Medical, Nursing & Life Sciences Programs",
      badge: "Global Clinical Recognition",
      description:
        "Study Medicine, Nursing, Clinical Research, and Pharmaceutical Sciences in Ireland's world-renowned medical faculties and cutting-edge biotech research centers.",
      highlights: [
        "Hands-on clinical rotations in top Irish teaching hospitals",
        "Strong ties to Ireland's massive global pharmaceutical manufacturing sector",
        "Clear registration pathways for healthcare professionals upon graduation",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Ireland Medical and Life Sciences Education",
    },
    {
      title: "Student Visa & Post-Study Work Pathway (Stamp 1G)",
      badge: "2-Year Post-Study Work Visa",
      description:
        "Comprehensive end-to-end guidance including university application handling, Irish Student Visa (Stamp 2) filing, financial proofing, and Stamp 1G work permit conversion.",
      highlights: [
        "Up to 2-year post-study work permissions for Master's/PhD graduates",
        "In-depth support for financial documentation and Irish immigration compliance",
        "Pre-departure orientation, accommodation searching guidance, and arrival support",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Ireland Student Visa Consultation",
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
                src="https://flagcdn.com/w160/ie.png"
                alt="Ireland Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study & Work in Ireland: Higher Education & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Discover prestigious Irish universities, top-ranked tech & medical programs, and lucrative Stamp 1G post-study work visas. ENI Consultants guides your university selection, document filing, and student visa processing.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Ireland Eligibility</span>
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
                src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1000&auto=format&fit=crop"
                alt="Ireland Education Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Ireland Admissions & Visas</p>
                <p className="text-white font-bold text-sm">Higher Education & Work Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">Degrees, Tech, Medicine & Stamp 1G Visas</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF IRELAND */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Ireland?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key highlights for international students, tech professionals, and healthcare candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <GraduationCap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">English Native Hub</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                The primary English-speaking gateway inside the European Union for studies and employment.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Stethoscope className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Top Pharma & Tech</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                European headquarters for global giants offering unmatched career prospects post-graduation.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Banknote className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Part-Time Work Rights</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Work up to 20 hours per week during term time and 40 hours during official academic holidays.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Zap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Stamp 1G Work Visa</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Stay and work for up to 2 years post-graduation with straightforward career pathways.
              </p>
            </div>
          </div>
        </section>

        {/* IRELAND PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Ireland Study & Visa Services
            </h2>
          </div>

          <div className="space-y-12">
            {irelandPathways.map((item, idx) => (
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
            Plan Your Academic & Career Journey to Ireland
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