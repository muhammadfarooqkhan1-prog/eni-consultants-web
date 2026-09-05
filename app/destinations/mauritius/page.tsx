import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap,
  Palmtree,
  Briefcase,
  Languages,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study, Work & Relocate to Mauritius | ENI Consultants",
  description:
    "Explore higher education degrees, bilingual university programs, Premium Visa options, and work permits in Mauritius with ENI Consultants.",
};

export default function MauritiusDestinationPage() {
  const mauritiusPathways = [
    {
      title: "Higher Education & International Branch Campuses",
      badge: "UK & French Accredited Degrees",
      description:
        "Enroll in globally recognized Bachelor's and Master's programs at premier Mauritian public universities and prestigious UK/French international branch campuses.",
      highlights: [
        "Dual-degree options with UK, Australian, and French universities",
        "Bilingual instruction environment (English and French)",
        "Post-study work permit opportunities for international graduates",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Mauritius Higher Education Pathways",
    },
    {
      title: "Premium Visa & Remote Work Residence",
      badge: "1-Year Renewable Visa",
      description:
        "Comprehensive guidance for remote professionals, digital nomads, and retirees looking to stay and work remotely from Mauritius for up to one year.",
      highlights: [
        "Zero foreign-sourced income tax requirements for long-term stays",
        "Fast-track processing through the Economic Development Board (EDB)",
        "Family inclusion and stress-free renewal permissions",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Mauritius Premium Visa and Remote Work",
    },
    {
      title: "Occupation Permit (Work & Professional Stay)",
      badge: "Skilled Career Pathways",
      description:
        "Professional assistance for foreign talent, investors, and self-employed individuals securing combined work and residence permits.",
      highlights: [
        "Strategic career options in IT, financial services, hospitality, and engineering",
        "Clear transition routes from student visa to professional occupation permits",
        "Corporate sponsorship and compliance documentation support",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Mauritius Work Permit and Professional Visas",
    },
    {
      title: "Student Visa & Complete Relocation Service",
      badge: "Complete Onboarding",
      description:
        "Complete relocation management including university admission, passport clearance, student visa processing, and airport welcome in Port Louis.",
      highlights: [
        "Direct university application filing and document evaluation",
        "Passport & immigration approval with Mauritius Passport Office",
        "Accommodation search and pre-departure briefing",
      ],
      mediaUrl:
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Mauritius Student Visa Consultation",
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
                src="https://flagcdn.com/w160/mu.png"
                alt="Mauritius Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study, Work & Relocate to Mauritius: Visa & Career Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Discover UK/French branch campus degrees, remote work Premium Visas, and career entry pathways in an emerging financial and education hub. ENI Consultants manages your university applications, occupation permits, and entry visas seamlessly.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Mauritius Eligibility</span>
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
                src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Mauritius Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Mauritius Admissions & Visas</p>
                <p className="text-white font-bold text-sm">Strategic Academic & Career Advisory</p>
                <p className="text-slate-400 text-xs mt-0.5">Dual Degrees, Premium Visas & Work Permits</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES OF MAURITIUS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Mauritius?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages for students, digital nomads, and global professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <GraduationCap className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Global Degrees</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Study at UK, Australian, and European university campuses based in Mauritius.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Palmtree className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Premium Nomad Visa</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Enjoy 1-year renewable remote work residency with tax-free foreign earnings.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Briefcase className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Financial Hub</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Growing tech, banking, and hospitality sectors offering strong career opportunities.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Languages className="w-8 h-8 text-[#ff7027]" />
              <h3 className="text-white font-bold text-base">Bilingual Advantage</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Dual English and French environment enriching academic and cultural immersion.
              </p>
            </div>
          </div>
        </section>

        {/* MAURITIUS PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Mauritius Education & Visa Pathways
            </h2>
          </div>

          <div className="space-y-12">
            {mauritiusPathways.map((item, idx) => (
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
            Start Your Mauritius Application Today
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with Chief Consultant Muhammad Farooq Khan to assess university entry, Premium Visas, and occupation permit eligibility.
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