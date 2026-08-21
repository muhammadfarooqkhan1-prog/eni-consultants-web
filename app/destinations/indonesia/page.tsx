import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study, Remote Work & Relocate to Indonesia | ENI Consultants",
  description:
    "Explore higher education, B211A digital nomad pathways, Second Home & Golden Visas, and Student KITAS options in Indonesia with ENI Consultants.",
};

export default function IndonesiaDestinationPage() {
  const indonesiaPathways = [
    {
      title: "Higher Education & Dual-Degree Programs",
      badge: "International Campuses & Exchange",
      description:
        "Enroll in top-ranked Indonesian universities and international branch campuses in Jakarta, Bandung, and Bali, offering English-taught degrees in Business, IT, Engineering, and Hospitality.",
      highlights: [
        "Dual-degree & exchange partnerships with top Australian & European universities",
        "Highly affordable tuition fees combined with low cost of living",
        "English-medium instruction across private and public partner institutes",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Indonesia Higher Education Pathways",
    },
    {
      title: "B211A Social & Digital Nomad Residence",
      badge: "Remote Work & Extended Stays",
      description:
        "Seamless guidance for digital nomads and remote professionals utilizing the popular B211A pathway for initial 60-day stays, extendable up to 180 days.",
      highlights: [
        "Multiple 30-day extensions without leaving the country",
        "Ideal for remote workers, creative freelancers, and cultural visitors",
        "Full support with licensed Indonesian sponsor letters and extension filings",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Indonesia Digital Nomad B211A Visa Guidance",
    },
    {
      title: "Second Home & Golden Visa Residency (E28C)",
      badge: "5 to 10-Year Long-Term Stay",
      description:
        "Premium long-term residency options for high-net-worth individuals, property investors, and retirees seeking 5-year or 10-year residency in Bali or Jakarta.",
      highlights: [
        "Second Home Visa (5–10 years) via qualifying bank deposits or property",
        "E28C Golden Visa routes for real estate buyers and business investors",
        "Multiple-entry privileges and fast-track airport customs processing",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Indonesia Golden Visa and Second Home Residency",
    },
    {
      title: "Student KITAS & Full Relocation Assistance",
      badge: "Complete Onboarding",
      description:
        "Complete advisory covering university admissions, Ministry of Education clearance, Student KITAS (C316 stay permit) issuance, and local arrival setup.",
      highlights: [
        "Direct coordination with university international student offices",
        "Immigration portal (Molina) filing and conversion to Student KITAS",
        "Housing orientation in Bali, Jakarta, or Yogyakarta upon arrival",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Indonesia Student KITAS Visa Advisory",
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
                src="https://flagcdn.com/w160/id.png"
                alt="Indonesia Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study, Remote Work & Relocate to Indonesia: Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore international degree programs, B211A digital nomad stays, and 5–10 year Golden Visa routes in Southeast Asia’s largest economy. ENI Consultants manages your university admissions, sponsor clearances, and visa filings end-to-end.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Indonesia Eligibility Free
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
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Indonesia Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Indonesia Admissions & Visas</p>
                <p className="text-white font-bold text-sm">Strategic Academic & Remote Work Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">B211A, Student KITAS & Long-Term Residency</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF INDONESIA */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Indonesia?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages for students, digital nomads, and long-term investors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🌴</span>
              <h3 className="text-white font-bold text-base">Global Nomad Hub</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                World-class coworking infrastructure and lifestyle in Bali, Jakarta, and Yogyakarta.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🎓</span>
              <h3 className="text-white font-bold text-base">Affordable Degrees</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                English-taught degree options paired with exceptionally low student living expenses.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🏛️</span>
              <h3 className="text-white font-bold text-base">Golden Visa Routes</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Flexible 5 to 10-year residency pathways for investors and property buyers.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">📈</span>
              <h3 className="text-white font-bold text-base">Booming Economy</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Southeast Asia's largest economy with expanding tech, tourism, and startup hubs.
              </p>
            </div>
          </div>
        </section>

        {/* INDONESIA PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Indonesia Education & Visa Pathways
            </h2>
          </div>

          <div className="space-y-12">
            {indonesiaPathways.map((item, idx) => (
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
            Plan Your Move to Indonesia
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with senior consultant Muhammad Farooq Khan to assess university entry, B211A digital nomad stays, and Golden Visa options.
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