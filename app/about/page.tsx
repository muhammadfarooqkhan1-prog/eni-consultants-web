import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Education & Immigration Consultants Pakistan (ENI Consultants)",
  description:
    "Learn about Education & Immigration Consultants Pakistan Pvt Ltd (ENI Consultants). Trusted advisors for study visas, global migration, residency, and visit visa services.",
};

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "25+" },
    { label: "Global Destinations", value: "15+" },
    { label: "Successful Visas", value: "10,000+" },
    { label: "Partner Universities", value: "500+" },
  ];

  const coreValues = [
    {
      icon: "🎯",
      title: "Integrity & Transparency",
      desc: "We provide honest, transparent profile evaluations without false promises, ensuring full clarity on costs, timelines, and visa odds.",
    },
    {
      icon: "🌐",
      title: "Global Reach & Partnerships",
      desc: "Direct partnerships with accredited universities and institutions across Canada, UK, USA, New Zealand, Europe, and the GCC.",
    },
    {
      icon: "⚡",
      title: "End-to-End File Structuring",
      desc: "From initial profile assessment to cover letters, financial proof verification, and post-visa arrival assistance, we handle every detail.",
    },
    {
      icon: "🤝",
      title: "Client-Centric Dedication",
      desc: "Every applicant is assigned dedicated advisors who tailor immigration and study plans to meet personal and career aspirations.",
    },
  ];

  const servicePillars = [
    {
      badge: "Student Migration",
      title: "Global Study Abroad Pathways",
      desc: "Comprehensive counseling for higher education, university admissions, scholarship assistance, and student visa processing across top study abroad hubs.",
      list: [
        "University & Course Selection",
        "SOP & Personal Statement Drafting",
        "Offer Letter & Admission Processing",
        "Student Visa File Preparation & Mock Interviews",
      ],
    },
    {
      badge: "Residency & Skilled Migration",
      title: "Permanent Residency & Skilled Migration",
      desc: "Points-based skilled immigration and direct residency programs for qualified professionals and families looking to settle overseas.",
      list: [
        "Canada Express Entry & Provincial Nominee Programs (PNP)",
        "New Zealand Skilled Migrant Category (SMC) & Green List",
        "Middle East & GCC Golden Visas and Investor Residencies",
      ],
    },
    {
      badge: "Visit & Business Visas",
      title: "Tourist, Holiday & Corporate Travel Visas",
      desc: "Fast-track processing for leisure, family visits, business delegations, and global tourism.",
      list: [
        "Schengen Area 29-Nation Visit Visas",
        "USA B1/B2 & UK Standard Visitor Visas",
        "Turkey, Malaysia, Thailand, Indonesia (Bali) & Japan Visas",
        "Gulf Cooperation Council (GCC) Tourist & Business Clearances",
      ],
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
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                About ENI Consultants
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Education & Immigration Consultants Pakistan Pvt Ltd
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              For over two decades, ENI Consultants has been a trusted pioneer in global educational counseling, skilled migration, permanent residency, and international travel visas. We bridge the gap between ambitious students, professionals, families, and world-class opportunities.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Your Eligibility
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book Advisory Session
              </Link>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="ENI Education and Immigration Consultants Pakistan Team"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Official Corporate Portal</p>
                <p className="text-white font-bold text-sm">ENI Consultants (Pvt) Ltd</p>
                <p className="text-slate-400 text-xs mt-0.5">Premier Immigration & Overseas Education Firm</p>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS & STATS */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center space-y-2">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#ff7027]">{stat.value}</p>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* MISSION & VISION */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-2xl">
                🎯
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To empower individuals, students, and working professionals with ethical, accurate, and structured global mobility solutions. We aim to make international education, career advancement, and residency migration accessible through complete legal compliance and meticulous document structuring.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-2xl">
                🚀
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To stand as the most trusted and reliable overseas education and immigration consultancy in the region, recognized globally for high visa success rates, transparent business ethics, and strategic client advocacy.
              </p>
            </div>
          </div>
        </section>

        {/* CORE SERVICES PILLARS */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              What We Do Best
            </h2>
            <p className="text-slate-400 text-sm mt-1">Our core operational divisions designed to meet diverse client aspirations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[#ff7027]/40 transition-all">
                <div className="space-y-4">
                  <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{pillar.desc}</p>
                  
                  <ul className="space-y-2 pt-2">
                    {pillar.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-[#ff7027] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href="/services"
                    className="text-[#ff7027] font-bold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Explore Services <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE ENI CONSULTANTS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose ENI Consultants?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Our core principles ensure every applicant receives world-class advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                <span className="text-3xl">{val.icon}</span>
                <h3 className="text-white font-bold text-base">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Start Your International Journey Today
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a private advisory appointment with our senior consultants to review your academic credentials, work history, or travel itinerary.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Assess Your Profile Free
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book Priority Appointment
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}