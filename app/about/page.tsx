import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Target,
  Globe2,
  Zap,
  Handshake,
  CheckCircle2,
  Rocket,
  Award,
  GraduationCap,
  Briefcase,
  Plane,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Education & Immigration Consultants Pakistan (ENI Consultants)",
  description:
    "Learn about Education & Immigration Consultants Pakistan Pvt Ltd (ENI Consultants). Trusted advisors for study visas, global migration, residency, and visit visa services.",
};

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "9+", icon: Award },
    { label: "Global Destinations", value: "15+", icon: Globe2 },
    { label: "Successful Visas", value: "5,000+", icon: CheckCircle2 },
    { label: "Partner Universities", value: "500+", icon: GraduationCap },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Integrity & Transparency",
      desc: "We provide honest, transparent profile evaluations without false promises, ensuring full clarity on costs, timelines, and visa odds.",
    },
    {
      icon: Globe2,
      title: "Global Reach & Partnerships",
      desc: "Direct partnerships with accredited universities and institutions across Canada, UK, USA, New Zealand, Europe, and the GCC.",
    },
    {
      icon: Zap,
      title: "End-to-End File Structuring",
      desc: "From initial profile assessment to cover letters, financial proof verification, and post-visa arrival assistance, we handle every detail.",
    },
    {
      icon: Handshake,
      title: "Client-Centric Dedication",
      desc: "Every applicant is assigned their own advisors catering to their immigration and study plans according to their personal and career needs.",
    },
  ];

  const servicePillars = [
    {
      badge: "Student Migration",
      badgeIcon: GraduationCap,
      title: "Global Study Abroad Pathways",
      desc: "All round guidance for higher studies, admissions in universities, scholarships & student visa assistance across top study abroad destinations.",
      list: [
        "University & Course Selection",
        "SOP & Personal Statement Drafting",
        "Offer Letter & Admission Processing",
        "Student Visa File Preparation & Mock Interviews",
      ],
    },
    {
      badge: "Residency & Skilled Migration",
      badgeIcon: Briefcase,
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
      badgeIcon: Plane,
      title: "Tourist, Holiday & Corporate Travel Visas",
      desc: "Fast-track processing for free-time, family visits, business delegations, and global tourism.",
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
              Since 2017, ENI Consultants has been a trusted founder in global educational counseling, skilled immigration, permanent residency, and international travel visas. We bridge the gap between ambitious students, professionals, families, and world-class opportunities.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Your Eligibility</span>
                <ArrowRight className="w-4 h-4" />
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
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group h-80 sm:h-96">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="ENI Education and Immigration Consultants Pakistan Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
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
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center space-y-3">
                <div className="w-10 h-10 mx-auto bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-3xl sm:text-5xl font-extrabold text-white">{stat.value}</p>
                <p className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</p>
              </div>
            );
          })}
        </section>

        {/* MISSION & VISION */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To strengthen individuals, students, and working professionals with ethical, accurate, and structured global mobility solutions. We enable international education, career advancement, and residency migration with complete legal compliance and meticulous document structuring.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                <Rocket className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To be an overseas education and immigration consultancy that is most trusted and reliable in the region, known worldwide for its high visa grant success ratio, ethical business practices, and strong advocacy on behalf of clients.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDER'S SPOTLIGHT & ALUMNI FEATURE (UPDATED WITH IMAGE & HIGHLIGHTS) */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 rounded-full text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                Featured UK Alumni Success Story
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
                Meet Our Founder: Muhammad Farooq Khan
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                ENI Consultants was established by <strong className="text-white">Muhammad Farooq Khan</strong> to provide transparent, and firsthand guidance for international applicants. Having successfully completed his education in the United Kingdom, his own journey was highlighted globally by the <strong className="text-white">University of Sunderland Alumni Association</strong> in their official <em>"Where Are They Now?"</em> feature.
              </p>

              <div className="space-y-3 pt-1">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Key Success Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7027] shrink-0 mt-0.5" />
                    <span><strong>UK Alumni Credibility:</strong> University of Sunderland graduate with firsthand personal experience in overseas student visa processing.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7027] shrink-0 mt-0.5" />
                    <span><strong>Global Recognition:</strong> Officially featured in the University of Sunderland&apos;s 2010–2019 global alumni spotlight series.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7027] shrink-0 mt-0.5" />
                    <span><strong>Proven Leadership:</strong> Scaled ENI Consultants into a top-rated consultancy firm in Pakistan with over 5,000 successful visa applications.</span>
                  </li>
                </ul>
              </div>

              <blockquote className="border-l-2 border-[#ff7027] pl-4 italic text-slate-400 text-xs sm:text-sm my-2">
                &quot;Having walked the path of an international student in the UK, I ensure our clients receive real, transparent, and accurate guidance every step of the way.&quot;
              </blockquote>

              <div className="pt-2">
                <a
                  href="https://alumni.sunderland.ac.uk/Keep-Informed/WAYN/2010-2019/Muhammad-Farooq-Khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#ff7027] hover:text-[#e05a14] transition-colors group"
                >
                  <span>Read full story on University of Sunderland Portal</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group w-full max-w-md h-[400px]">
                <Image
                  src="/images/Muhammad-Farooq-Khan.jpg"
                  alt="Muhammad Farooq Khan - Founder of ENI Consultants"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                  <p className="text-white font-bold text-base">Muhammad Farooq Khan</p>
                  <p className="text-[#ff7027] text-xs font-semibold">Founder & Chief Consultant</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">University of Sunderland Alumni (UK)</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CORE SERVICES PILLARS */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              What We Do Best
            </h2>
            <p className="text-slate-400 text-sm mt-1">Our key departments designed to meet various client needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePillars.map((pillar, idx) => {
              const BadgeIcon = pillar.badgeIcon;
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[#ff7027]/40 transition-all">
                  <div className="space-y-4">
                    <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5">
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {pillar.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{pillar.desc}</p>
                    
                    <ul className="space-y-2 pt-2">
                      {pillar.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#ff7027] shrink-0 mt-0.5" />
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
                      <span>Explore Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE ENI CONSULTANTS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose ENI Consultants?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Our key principles ensure every applicant receives best-in-class advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold text-base">{val.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Start Your International Journey Today
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a private advisory appointment with our Chief Immigration Consultant Muhammad Farooq Khan to review your academic credentials, work history, or travel itinerary.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center justify-center gap-2"
            >
              <span>Assess Your Profile</span>
              <ArrowRight className="w-4 h-4" />
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