import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study & Migration Opportunities in Zimbabwe | ENI Consultants",
  description:
    "Explore higher education in medicine, engineering, mining technology, and tourism visa advisory for Zimbabwe with ENI Consultants.",
};

export default function ZimbabweDestinationPage() {
  const zimbabwePathways = [
    {
      title: "Higher Education & Specialized University Degree Programs",
      badge: "State & Private Universities",
      description:
        "Enroll in recognized undergraduate and postgraduate programs across Zimbabwe in specialized disciplines such as Mining Engineering, Agriculture, Business, and Medicine.",
      highlights: [
        "Programs taught entirely in English",
        "Affordable tuition structure with rich field experience",
        "Strong focus on natural resource management, geology, and medicine",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Zimbabwe Higher Education Pathways",
    },
    {
      title: "Business, Investor & Commercial Visas",
      badge: "Emerging Market Opportunities",
      description:
        "Comprehensive guidance for entrepreneurs and corporate professionals seeking business entry permits and investment opportunities in southern Africa.",
      highlights: [
        "Support for business permits and corporate registrations",
        "Strategic entry into mining, renewable energy, and eco-tourism",
        "Complete compliance and documentation processing",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Zimbabwe Commercial and Business Visa",
    },
    {
      title: "Tourist & eVisa Assistance",
      badge: "Fast-Track Travel Approval",
      description:
        "Hassle-free electronic visa (eVisa) processing for leisure travelers, eco-tourists, and families visiting Victoria Falls and national parks.",
      highlights: [
        "Online eVisa application filing with high approval rates",
        "Complete itinerary, flight, and accommodation document support",
        "Short-term entry permits for conferences and leisure",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Zimbabwe Tourism and eVisa Support",
    },
    {
      title: "Student Visa & Relocation Support",
      badge: "Complete Onboarding",
      description:
        "End-to-end relocation services including university admission processing, student permit applications, and pre-departure briefings.",
      highlights: [
        "Document evaluation and direct university submission",
        "Student permit filing through Zimbabwean Immigration",
        "Pre-departure support and airport arrival guidance",
      ],
      mediaUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Zimbabwe Student Visa Consultation",
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
                src="https://flagcdn.com/w160/zw.png"
                alt="Zimbabwe Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study & Visit Zimbabwe: Higher Education & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore specialized university education, emerging market business visas, and tourist eVisas in Zimbabwe. ENI Consultants manages your academic admissions, business permits, and visa processing from start to finish.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Zimbabwe Eligibility Free
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
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop"
                alt="Zimbabwe Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Zimbabwe Admissions & Visas</p>
                <p className="text-white font-bold text-sm">Strategic Academic & Travel Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">Degrees, eVisas, Business & Permits</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF ZIMBABWE */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Zimbabwe?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key benefits for international students, business owners, and travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🇿🇼</span>
              <h3 className="text-white font-bold text-base">English Medium</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                English is the primary language of instruction across all higher education institutions.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">⛏️</span>
              <h3 className="text-white font-bold text-base">Specialized Fields</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Renowned programs in Mining Engineering, Geology, Agriculture, and Environmental Sciences.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💵</span>
              <h3 className="text-white font-bold text-base">Affordable Costs</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Extremely competitive tuition fees and low cost of living for international students.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🌐</span>
              <h3 className="text-white font-bold text-base">Simple eVisa</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Streamlined electronic visa processing for visits, conferences, and tours.
              </p>
            </div>
          </div>
        </section>

        {/* ZIMBABWE PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Zimbabwe Study & Travel Programs
            </h2>
          </div>

          <div className="space-y-12">
            {zimbabwePathways.map((item, idx) => (
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
            Plan Your Journey to Zimbabwe
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with senior consultant Muhammad Farooq Khan to assess university entry options, business permits, and electronic visa requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate Your Eligibility
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book 1-on-1 Consultation
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}