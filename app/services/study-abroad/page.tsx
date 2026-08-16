import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad & Overseas Admissions Consultancy | ENI Consultants",
  description:
    "Get admitted to top universities in Canada, UK, Germany, and USA. End-to-end guidance for university selection, SOPs, scholarships, and student visas.",
};

export default function StudyAbroadServicePage() {
  const studyDestinations = [
    {
      country: "Canada",
      flag: "https://flagcdn.com/w160/ca.png",
      title: "Designated Learning Institutions (DLIs) & PGWP",
      badge: "Post-Study Work Visa up to 3 Years",
      description:
        "Gain access to public colleges and universities offering direct eligibility for the Post-Graduation Work Permit (PGWP), paving a clear pathway toward Canadian Permanent Residency through Express Entry (CEC).",
      features: [
        "DLI-Approved Public College & University Admissions",
        "Study Permit & Provincial Attestation Letter (PAL) Guidance",
        "Spouse Open Work Permit (SOWP) Strategy for Master's Applicants",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Study Abroad in Canada Universities",
    },
    {
      country: "United Kingdom",
      flag: "https://flagcdn.com/w160/gb.png",
      title: "Russell Group Universities & Graduate Route",
      badge: "2-Year Graduate Post-Study Visa",
      description:
        "Fast-track your higher education with 1-Year Master's degrees from world-renowned UK institutions, followed by the 2-Year Graduate Visa route for career building.",
      features: [
        "CAS Letter Processing & Interview Preparation",
        "MOI (Medium of Instruction) English Waiver Eligibility",
        "Part-Time Work Permit (20 Hours/Week) Assistance",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Study in UK Higher Education",
    },
    
    {
      country: "Germany & Europe",
      flag: "https://flagcdn.com/w160/de.png",
      title: "Tuition-Free Public Universities & EU Mobility",
      badge: "18-Month Jobseeker Visa",
      description:
        "Study tuition-free or at low cost in English-taught Bachelor's and Master's programs across public universities in Germany, Ireland, and Scandinavia.",
      features: [
        "APS Certificate & Uni-Assist Portal Filing",
        "Blocked Bank Account Setup Assistance",
        "EU Blue Card Transition Pathways for Graduates",
      ],
      mediaUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Germany Public University Admissions",
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff7027] rounded-full blur-[140px] opacity-20 pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Academic & Career Mobility
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study Abroad & Global University Admissions Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Transform your academic ambitions into international career success. From institution selection and compelling Statement of Purpose (SOP) drafting to visa filing and scholarship acquisition, ENI Consultants manages your complete overseas education journey.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Study Eligibility Free
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book 1-on-1 Student Advisory
              </Link>
            </div>
          </div>

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                alt="Global University Admissions Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">End-to-End Student Support</p>
                <p className="text-white font-bold text-sm">Admissions & Visa Filing</p>
                <p className="text-slate-400 text-xs mt-0.5">High approval rates across Canada, UK, Australia & EU</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-STEP ADMISSIONS PROCESS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Our 4-Stage Admissions & Visa Framework
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              A structured roadmap ensuring smooth admission offers and visa grant success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">01</span>
              <h3 className="text-white font-bold text-base">Course & University Selection</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Shortlisting accredited universities aligned with your career goals, budget, and post-study work visa eligibility.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">02</span>
              <h3 className="text-white font-bold text-base">SOP & Application Portfolio</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Professional drafting of custom Statements of Purpose (SOP), LORs, CVs, and application submission.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">03</span>
              <h3 className="text-white font-bold text-base">Offer Letter & Financial Guidance</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Securing Offer Letters, CAS, or I-20 forms, along with bank statement, proof of funds, and scholarship support.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">04</span>
              <h3 className="text-white font-bold text-base">Student Visa & Departure Prep</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Strict visa documentation filing, embassy interview coaching, medical insurance, and pre-departure orientation.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED STUDY DESTINATIONS */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Premier Global Academic Destinations
            </h2>
          </div>

          <div className="space-y-12">
            {studyDestinations.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl hover:border-[#ff7027]/40 transition-all"
              >
                {/* Media Column (5 Cols) */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-md h-64 sm:h-72">
                    <img
                      src={item.mediaUrl}
                      alt={item.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <img src={item.flag} alt={`${item.country} Flag`} className="w-7 h-4 object-cover rounded shadow" />
                      <span className="text-white font-bold text-sm">{item.country} Study Programs</span>
                    </div>
                  </div>
                </div>

                {/* Content Column (7 Cols) */}
                <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-[#ff7027] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href="/check-eligibility"
                      className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm hover:underline"
                    >
                      Apply for {item.country} Admissions <span>→</span>
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
            Start Your International Degree Journey Today
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Speak directly with senior educational advisors at ENI Consultants to choose the right university and maximize your student visa success.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Book a Student Consultation
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}