import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schengen PhD Admissions & Research Fellowships | ENI Consultants",
  description:
    "Pakistan's exclusive consultancy for PhD admissions, fully funded MSCA fellowships, supervisor matching, and Type D researcher visas across the Schengen area.",
};

export default function SchengenPhDPage() {
  const phdPathways = [
    {
      title: "Salaried PhD Positions & University Employment",
      badge: "Fully Funded Contracts",
      description:
        "In countries like Germany, the Netherlands, Norway, and Sweden, PhD candidates are hired as university research staff with standard employment benefits.",
      highlights: [
        "Monthly salaried compensation (ranging from €2,000 to €3,500/month after tax)",
        "Social security, health insurance, and paid vacation benefits included",
        "Direct pathway to Permanent Residency (PR) after 2–4 years of employment",
      ],
      icon: "💶",
    },
    {
      title: "Marie Skłodowska-Curie Actions (MSCA) Fellowships",
      badge: "Prestigious EU Grants",
      description:
        "Highly competitive flagship EU research fellowships designed for exceptional international researchers pursuing doctoral training across European consortia.",
      highlights: [
        "Full tuition waiver plus generous living and mobility allowances",
        "Intersectoral mobility (academic research combined with industrial placements)",
        "International networking across top EU research institutions",
      ],
      icon: "🇪🇺",
    },
    {
      title: "Supervisor Matchmaking & Proposal Alignment",
      badge: "Strategic Academic Outreach",
      description:
        "Navigating cold outreach to European professors requires a tailored approach. We refine your research proposal to match active departmental projects.",
      highlights: [
        "1-on-1 proposal drafting and formatting to European academic standards",
        "Identification of active university funding calls and professor vacancies",
        "Interview preparation for academic selection committee panels",
      ],
      icon: "🔬",
    },
    {
      title: "Type D National Researcher Visa & Family Relocation",
      badge: "Immigration Support",
      description:
        "Complete visa advisory for principal researchers and accompanying family members under European Scientific Visa regulations.",
      highlights: [
        "Fast-track Type D Schengen National Visa processing for researchers",
        "Full work rights for accompanying spouse/dependents",
        "No embassy interview delays under scientific host agreement protocols",
      ],
      icon: "📜",
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
                Exclusive in Pakistan
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Schengen PhD Admissions & Research Fellowships
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              ENI Consultants is the <span className="text-[#ff7027] font-semibold">only agency in Pakistan</span> providing direct advisory, research supervisor matching, fully funded fellowship guidance, and Type D researcher visas across top European universities.
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
                <p className="text-slate-400 text-xs mt-0.5">MSCA, Salaried Contracts & Supervisor Matching</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHY ENI CONSULTANTS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why We Are Pakistan's Exclusive PhD Consultancy
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Unlike standard student visa agencies, we specialize in academic research matching and scientific immigration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🎯</span>
              <h3 className="text-white font-bold text-base">Direct Supervisor Outreach</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We assist you in crafting targeted emails and proposals that capture European professors' attention.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💰</span>
              <h3 className="text-white font-bold text-base">Fully Funded Positions</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We focus on positions where you are paid a salary, eliminating the need for bank statement proofs.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">👨‍👩‍👧</span>
              <h3 className="text-white font-bold text-base">Immediate Family Accompanying</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                European scientific visa rules allow your spouse to relocate with you and work full-time.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🇪🇺</span>
              <h3 className="text-white font-bold text-base">Fast-Track Residency</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Doctoral research years count directly toward permanent residency and EU citizenship.
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
            {phdPathways.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-5 hover:border-[#ff7027]/40 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

                <ul className="space-y-2.5 pt-2">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-[#ff7027] font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Begin Your European Research Career
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book an advisory session with lead consultant Muhammad Farooq Khan to assess your academic profile and target European research vacancies.
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