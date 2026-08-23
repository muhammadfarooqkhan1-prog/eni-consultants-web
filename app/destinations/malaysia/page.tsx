import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study & Visit Opportunities in Malaysia | ENI Consultants",
  description:
    "Explore higher education, UK/Australian branch campus transfers, student visas, and tourist pathways in Malaysia with ENI Consultants.",
};

export default function MalaysiaDestinationPage() {
  const malaysiaPathways = [
    {
      title: "Bachelor's & Master's Degree Programs",
      badge: "Global Education Hub",
      description:
        "Enroll in top-ranked public and private Malaysian universities offering dual-degree programs, affordable tuition, and internationally recognized qualifications in Business, Engineering, Computer Science, and Healthcare.",
      highlights: [
        "Affordable tuition starting from $2,500/year",
        "Dual-degree options with UK, Australian, and US universities",
        "Streamlined English proficiency pathways and internal tests",
      ],
      mediaUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Malaysia Higher Education and University Campus",
    },
    {
      title: "UK & Australian University Credit Transfer",
      badge: "Cost-Effective Pathway",
      description:
        "Study at top foreign branch campuses in Malaysia (such as Monash, Nottingham, or Southampton) or complete 1-2 years in Malaysia before transferring directly to the UK or Australia.",
      highlights: [
        "Save up to 60% on total degree costs compared to direct UK/Australia study",
        "Seamless credit transfers with partner institutions",
        "Direct graduation degrees awarded by parent western universities",
      ],
      mediaUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Malaysia Branch Campus and Transfer Pathways",
    },
    {
      title: "EMGS Student Visa Approval & VAL Support",
      badge: "High Approval Rate",
      description:
        "End-to-end guidance for processing your Visa Approval Letter (VAL) through Education Malaysia Global Services (EMGS), medical screenings, and single-entry visa stamping.",
      highlights: [
        "Complete file audit before EMGS submission to prevent delays",
        "Guidance for medical health checks and insurance registration",
        "Single Entry Visa (SEV) application and post-arrival endorsement",
      ],
      mediaUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "EMGS Visa Approval and Student Assistance",
    },
    {
      title: "Tourist & Visit Visa Processing",
      badge: "eVISA & Social Visit",
      description:
        "Hassle-free eVISA filing, Social Visit Visa file preparation, and travel documentation for families, business professionals, and tourists visiting Malaysia.",
      highlights: [
        "Fast-track eVISA processing with full documentation support",
        "Complete hotel booking, flight itinerary, and financial proof planning",
        "Guidance for Malaysia Digital Arrival Card (MDAC) registration",
      ],
      mediaUrl: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Malaysia Tourism and Visit Visa",
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
                src="https://flagcdn.com/w160/my.png"
                alt="Malaysia Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study & Visit Malaysia: Education, Admissions & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Experience world-class Asian and Western degrees at a fraction of the cost. ENI Consultants simplifies your university admission, EMGS Visa Approval Letter (VAL) processing, credit transfers, and visit visas.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Malaysia Eligibility Free
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
                src="https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Malaysia Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Malaysia Admissions & Visa</p>
                <p className="text-white font-bold text-sm">Western Branch Campuses & High Success Rates</p>
                <p className="text-slate-400 text-xs mt-0.5">Undergraduate, Master's, Transfers & eVISAs</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF MALAYSIA */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Malaysia?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages offered to international students, transfer seekers, and travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🇲🇾</span>
              <h3 className="text-white font-bold text-base">Global Branch Campuses</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Graduate with genuine UK, Australian, or US degrees right in Kuala Lumpur or Johor.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💵</span>
              <h3 className="text-white font-bold text-base">Low Cost of Living</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                High standard of modern living paired with significantly lower tuition and rental fees.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">✈️</span>
              <h3 className="text-white font-bold text-base">Easy Credit Transfers</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Use Malaysia as a stepping stone to transfer seamlessly into UK/Australian main campuses.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">📋</span>
              <h3 className="text-white font-bold text-base">Streamlined EMGS Visa</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Transparent and centralized student visa tracking system through EMGS.
              </p>
            </div>
          </div>
        </section>

        {/* MALAYSIA PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Malaysia Study & Travel Programs
            </h2>
          </div>

          <div className="space-y-12">
            {malaysiaPathways.map((item, idx) => (
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
            Plan Your Journey to Malaysia
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with senior consultant Muhammad Farooq Khan to assess university placement options, EMGS student visa approvals, and travel document requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate Admissions Free
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