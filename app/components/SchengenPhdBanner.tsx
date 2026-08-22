import Link from "next/link";

export default function SchengenPhdBanner() {
  return (
    <section className="w-full bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-[#ff7027]/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff7027] rounded-full blur-[150px] opacity-15 pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              <span>🇵🇰</span> Exclusive Service in Pakistan
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Schengen PhD Placement & Research Fellowships
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              ENI Consultants is the <span className="text-[#ff7027] font-semibold">only agency in Pakistan</span> offering direct placement services for doctoral research positions, supervisor matching, and Marie Skłodowska-Curie / Erasmus Mundus fellowships across the Schengen Area.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
                <div className="text-2xl mb-2">🧬</div>
                <h3 className="text-white font-bold text-sm">Supervisor Matching</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Targeted academic outreach, proposal alignment, and faculty communication.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
                <div className="text-2xl mb-2">💶</div>
                <h3 className="text-white font-bold text-sm">Salaried PhD Positions</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Access fully funded university employment contracts and MSCA research grants.
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
                <div className="text-2xl mb-2">🇪🇺</div>
                <h3 className="text-white font-bold text-sm">Type D Researcher Visa</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  End-to-end national researcher visa clearance with family work permit privileges.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services/schengen-phd"
                className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Learn More About PhD Service →
              </Link>
              <Link
                href="/check-eligibility"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Submit PhD Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}