import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Overseas Education, Skilled Migration & Visit Visas | ENI Consultants",
  description:
    "Comprehensive immigration and education advisory services: Study Visas, Permanent Residency (Canada, NZ), Schengen, and Asian Tourist Visas.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "student-visas",
      badge: "Overseas Education",
      title: "Study Abroad & Student Visa Pathways",
      description:
        "Comprehensive academic counseling, university application processing, SOP writing, and student visa filing for top international education destinations.",
      destinations: [
        { name: "United Kingdom", desc: "Undergraduate & Master's degrees with Post-Study Work Visas (Graduate Route)." },
        { name: "Canada", desc: "Designated Learning Institution (DLI) admissions with Post-Graduation Work Permit (PGWP)." },
        { name: "Australia", desc: "CRICOS registered course admissions with Subclass 500 Student Visa processing." },
        { name: "New Zealand", desc: "NZQA Level 7+ degree admissions leading to 3-year Post-Study Work Visas (PSWV)." },
        { name: "USA & Europe", desc: "F-1 Student Visa coaching & public university admissions across Germany/Schengen." },
      ],
      mediaUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Global Overseas Education and Student Visas",
    },
    {
      id: "permanent-residency",
      badge: "Skilled Migration",
      title: "Permanent Residency & Skilled Immigration",
      description:
        "Points-based migration strategy, qualification assessments, and direct residency filing for qualified professionals seeking long-term settlement.",
      destinations: [
        { name: "Canada Express Entry & PNP", desc: "Category-Based Selection (STEM, Healthcare, Trades) and Provincial Nominations." },
        { name: "New Zealand SMC 6-Points", desc: "Skilled Migrant Category 6-Points calculation & Green List Tier 1/2 fast-tracks." },
      ],
      mediaUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Permanent Residency and Skilled Migration Advisory",
    },
    {
      id: "visit-visas",
      badge: "Leisure & Business Travel",
      title: "Global Visit, Tourist & Holiday Visas",
      description:
        "Precision file structuring, financial proof verification, VFS/TLS appointment scheduling, and custom cover letter drafting for minimal refusal risk.",
      destinations: [
        { name: "Schengen Area (29 Nations)", desc: "France, Germany, Italy, Switzerland short-stay visitor visas with €30k insurance." },
        { name: "UK, USA & Canada Visitor", desc: "Standard Visitor 6-month to 10-year visas, DS-160 filing, and interview prep." },
        { name: "Turkey, Japan & East Asia", desc: "Turkey e-Visa/sticker visas, Japan 'Schedule of Stay' itineraries, and Singapore PAR." },
        { name: "Thailand, Malaysia & Indonesia", desc: "Malaysia MDAC/eVisa, Thai 60-day e-Visas, and Bali E-VOA / B211A extended visas." },
        { name: "Silk Road & South Africa", desc: "Azerbaijan ASAN 30-day e-Visas, Uzbekistan digital visas, and South Africa safari visas." },
      ],
      mediaUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "Global Tourist and Holiday Visas",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Profile Assessment",
      desc: "In-depth review of academic history, work experience, financial readiness, and personal migration goals.",
    },
    {
      step: "02",
      title: "Document & File Structuring",
      desc: "Auditing bank statements, drafting custom SOPs/cover letters, and gathering credential evaluations (WES/NZQA/VETASSESS).",
    },
    {
      step: "03",
      title: "Official Portal Submission",
      desc: "Accurate filing on official government portals (Express Entry, UKVI, DS-160, VFS/TLS biometrics, e-Visas).",
    },
    {
      step: "04",
      title: "Pre-Departure & Post-Visa Support",
      desc: "Embassy interview practice, flight/hotel booking guidance, and orientation for arrival at your target destination.",
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
              Our Comprehensive Offerings
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Immigration, Overseas Education & Visit Visa Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              ENI Consultants provides transparent, end-to-end guidance for students, professionals, and families. Whether you are aiming for higher education, direct permanent residency, or worldwide holiday travel, our experienced team delivers structured solutions.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Free Eligibility
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book Advisory Session
              </Link>
            </div>
          </div>

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="ENI Immigration Services & Consultancy"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Authorized Immigration Advisors</p>
                <p className="text-white font-bold text-sm">25+ Years of Proven Excellence</p>
                <p className="text-slate-400 text-xs mt-0.5">Study Visas, PR & Global Tourist Applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* CORE SERVICES CATEGORIES */}
        <div className="space-y-16">
          {serviceCategories.map((cat, idx) => (
            <div
              key={idx}
              id={cat.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl hover:border-[#ff7027]/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {cat.badge}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white">{cat.title}</h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{cat.description}</p>
                </div>
                
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-56 sm:h-64 shadow-md">
                    <img src={cat.mediaUrl} alt={cat.mediaAlt} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* DESTINATIONS GRID */}
              <div className="border-t border-slate-800 pt-6">
                <h3 className="text-white font-bold text-lg mb-4">Key Pathways & Coverage:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.destinations.map((dest, dIdx) => (
                    <div key={dIdx} className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-1.5">
                      <h4 className="text-[#ff7027] font-bold text-sm">{dest.name}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{dest.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/check-eligibility"
                  className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm hover:underline"
                >
                  Check Your Eligibility for {cat.title.split(" ")[0]} <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4-STAGE PROCESS */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[#ff7027] font-bold text-xs uppercase tracking-wider">Our Methodology</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">How We Manage Your File</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A structured, step-by-step framework to maximize visa success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((pStep, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3">
                <span className="text-3xl font-extrabold text-[#ff7027]">{pStep.step}</span>
                <h3 className="text-white font-bold text-base">{pStep.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{pStep.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Begin Your Application?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a private 1-on-1 advisory session with our senior migration counselors to discuss your credentials, university options, or visit visa plans.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Free Assessment
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book Priority Consultation
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}