import Link from "next/link";
import { Metadata } from "next";
import { 
  GraduationCap, 
  Award, 
  FileText, 
  Globe, 
  Building2, 
  Users, 
  CheckCircle2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "European Schengen PhD & Doctorate Advisory | ENI Consultants",
  description:
    "First Company in Pakistan offering European Schengen Countries PhD/Doctorate services since 2017. Guidance for suitable PhD positions in top world-ranking universities.",
};

export default function SchengenPhDPage() {
  const phdPathways = [
    {
      title: "PhD Positions in Top Schengen Universities",
      badge: "World-Ranking Universities",
      description:
        "Access to research doctorate opportunities at leading European economic bloc universities in Germany, France, Netherlands, Sweden, Italy, and other regional countries.",
      highlights: [
        "Placement guidance for top world-ranking European research faculties",
        "Thorough academic credential evaluation and university shortlisting",
        "A structured pathway towards obtaining long-term European research qualifications",
      ],
      icon: GraduationCap,
    },
    {
      title: "Marie Skłodowska-Curie Actions (MSCA) Fellowships",
      badge: "Prestigious EU Grants",
      description:
        "The EU’s flagship research fellowships open to excellent researchers from around the globe who want to pursue a PhD in European Higher Education institutions.",
      highlights: [
        "Full tuition fee coverage as well as research mobility allowances",
        "Intersectoral mobility between academic and industrial research sectors",
        "International academic networking across top EU research institutes",
      ],
      icon: Award,
    },
    {
      title: "Research Proposal & Profile Optimization",
      badge: "Academic Advisory",
      description:
        "Aligning your academic achievements and research interests with European university standards to enhance your candidature appeal.",
      highlights: [
        "1-on-1 advisory on research proposal formatting and structuring",
        "Optimization of your academic CV and motivation letters",
        "Preparing you for university selection board interactions",
      ],
      icon: FileText,
    },
    {
      title: "Complete Application & Visa Advisory",
      badge: "End-to-End Support",
      description:
        "Complete guidance through university registration, document authentication, and national visa filing protocols for scholars and dependents.",
      highlights: [
        "Step-by-step guidance on filing the Schengen national student/scholar visa",
        "Family relocation advisory in line with standard European immigration laws",
        "Document verification and embassy interview preparation support",
      ],
      icon: Globe,
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
              <span className="text-xl">🇵🇰</span>
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Exclusive Founder in Pakistan
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Schengen PhD Admissions & Research Fellowships
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              ENI Consultants is the <span className="text-[#ff7027] font-semibold">First Company in Pakistan</span> offering European Schengen Countries PhD/Doctorate services since 2017.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Submit Profile for PhD Evaluation
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book 1-on-1 Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Schengen Research Laboratories"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Doctoral Excellence</p>
                <p className="text-white font-bold text-sm">European Research Opportunities</p>
                <p className="text-slate-400 text-xs mt-0.5">Top World-Ranking European Universities & MSCA</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHY ENI CONSULTANTS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why We Are Pakistan's Founder PhD Consultancy
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Assisting scholars with structured academic guidance and European doctorate placements since 2017.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-[#ff7027]/10 rounded-xl flex items-center justify-center text-[#ff7027]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base">Top University Placements</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We assist you in identifying suitable PhD positions in top European Schengen Universities.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-[#ff7027]/10 rounded-xl flex items-center justify-center text-[#ff7027]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base">European Grant Advisory</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Expert support for prestigious European research calls and Marie Skłodowska-Curie fellowship applications.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-[#ff7027]/10 rounded-xl flex items-center justify-center text-[#ff7027]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base">Family Relocation Guidance</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Comprehensive visa advice for accompanying family members under official European regulations.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS DETAILED LIST */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Our Comprehensive PhD Placement Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phdPathways.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-5 hover:border-[#ff7027]/40 transition-all shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-[#ff7027]/10 rounded-2xl flex items-center justify-center text-[#ff7027]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

                  <ul className="space-y-2.5 pt-2">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ff7027] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Begin Your European Doctorate Journey
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book an advisory session with Chief Consultant Muhammad Farooq Khan to assess your academic credentials and target European research programs.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate PhD Profile Free
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