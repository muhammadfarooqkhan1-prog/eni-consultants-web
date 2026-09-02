import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skilled Immigration & Permanent Residency (PR) Services | ENI Consultants",
  description:
    "Expert immigration consultancy for Canada Express Entry, Australian Subclass 189/190, UK Skilled Worker, and European PR pathways.",
};

export default function SkilledImmigrationServicePage() {
  const pathways = [
    {
      country: "Canada",
      flag: "https://flagcdn.com/w160/ca.png",
      title: "Express Entry & Provincial Nominee Programs (PNP)",
      badge: "Highest PR Success Rate",
      description:
        "Direct Permanent Residency pathways through Federal Skilled Worker (FSWP), Canadian Experience Class (CEC), and Category-Based Selection draws for Healthcare, STEM, Trades, and French speakers.",
      features: [
        "CRS Score Calculation & Points Maximization Strategy",
        "WES & Credential Assessment (ECA) Guidance",
        "Provincial Nomination (PNP) Application Management",
      ],
      mediaType: "image",
      // Recommended Image: High-tech Canadian skyline or professional welcoming environment
      mediaUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop", 
      mediaAlt: "Canada Express Entry Permanent Residency Consultancy",
    },
    
    {
      country: "United Kingdom",
      flag: "https://flagcdn.com/w160/gb.png",
      title: "Skilled Worker & Health and Care Visas",
      badge: "Fast-Track Processing",
      description:
        "Direct work visa pathways for qualified professionals entering the UK employment market with designated Certificate of Sponsorship (CoS) employers.",
      features: [
        "Certificate of Sponsorship (CoS) Document Verification",
        "UK NARIC / ECCTIS Credential Verification Support",
        "Indefinite Leave to Remain (ILR) Strategic Planning",
      ],
      mediaType: "image",
      // Recommended Image: London skyline with iconic architecture
      mediaUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "UK Skilled Worker Visa Guidance",
    },
    {
      country: "Europe & Germany",
      flag: "https://flagcdn.com/w160/eu.png",
      title: "EU Opportunity Card & Skilled Worker Pathways",
      badge: "Chanceskarte & EU Blue Card",
      description:
        "Points-based job search visas and EU Blue Card pathways for skilled specialists seeking long-term European residency and career mobility.",
      features: [
        "German Opportunity Card (Chancenkarte) Points Grid Assessment",
        "EU Blue Card Qualification Matching",
        "Schengen Area Work & Mobility Advisory",
      ],
      mediaType: "image",
      // Recommended Image: European business hub or Frankfurt skyline
      mediaUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
      mediaAlt: "European EU Blue Card and Opportunity Card Services",
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HERO SECTION WITH HERO MEDIA RECOMMENDATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff7027] rounded-full blur-[140px] opacity-20 pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Core Expertise
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Skilled Immigration & Permanent Residency (PR) Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              We offer end to end strategic guidance to professionals, engineers, IT experts, medical practitioners, and other skilled workers seeking to gain permanent residency, work visas, and citizenship in first-world countries.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Check Your Eligibility
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book 1-on-1 Advisory
              </Link>
            </div>
          </div>

          {/* RECOMMENDED HERO MEDIA: Video / High Impact Image */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              
              {/* IMAGE / VIDEO PLACEHOLDER */}
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
                alt="ENI Consultants Skilled PR Advisory"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Senior Immigration Counsel</p>
                <p className="text-white font-bold text-sm">Led by Chief Immigration Officer Muhammad Farooq Khan</p>
                <p className="text-slate-400 text-xs mt-0.5">Custom points evaluation & legal documentation guidance</p>
              </div>
            </div>
            
            {/* Recommendation Note for Admin */}
            <p className="text-slate-500 text-[11px] mt-2 text-center italic">
              📸 Recommended: 30-sec promo video or high-res office consultation photo.
            </p>
          </div>
        </div>

        {/* PROPRIETARY PROCESS SECTION */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Our 4-Stage PR Advisory Roadmap
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              How we take your profile from preliminary points calculation to visa approval.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">01</span>
              <h3 className="text-white font-bold text-base">Points & Profile Audit</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Detailed assessment of your age, qualifications, NOC/ANZSCO code, and foreign points criteria.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">02</span>
              <h3 className="text-white font-bold text-base">Credential Assessment</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Guiding your degree verification through ECA bodies like WES, IQAS, ACS, or Engineers Australia.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">03</span>
              <h3 className="text-white font-bold text-base">EOI & Pool Filing</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Strategic submission into Express Entry pools, Provincial nomination streams, or SkillSelect portals.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-3xl font-extrabold text-[#ff7027]">04</span>
              <h3 className="text-white font-bold text-base">ITA & Visa Application</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full legal documentation, medical check guidance, police clearance, and final visa lodging.
              </p>
            </div>
          </div>
        </section>

        {/* DESTINATION PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Featured Skilled Migration Programs
            </h2>
          </div>

          <div className="space-y-12">
            {pathways.map((item, idx) => (
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
                      <span className="text-white font-bold text-sm">{item.country} Pathway</span>
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
                      Check Eligibility for {item.country} <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDED VIDEO PROMO / CLIENT TESTIMONIAL PLACEHOLDER */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[#ff7027] font-bold uppercase text-xs tracking-wider">Video Case Studies</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Real PR Success Stories & Consultations
            </h2>
            <p className="text-slate-400 text-sm">
              Watch how we helped professionals in the Gulf region and Asia secure permanent residency visas in Canada and Australia.
            </p>
          </div>

          {/* Video Container Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Video Recommendation 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden p-4 space-y-3">
              <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center group cursor-pointer border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Canada PR Case Study Video" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors" />
                <div className="w-12 h-12 rounded-full bg-[#ff7027] text-white flex items-center justify-center text-xl shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                  ▶
                </div>
              </div>
              <p className="text-white font-bold text-sm text-left">Canada Express Entry Success: Engineer Profile</p>
              <p className="text-slate-500 text-xs text-left">CRS Points boosted through PNP nomination</p>
            </div>

            {/* Video Recommendation 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden p-4 space-y-3">
              <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center group cursor-pointer border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Australia PR Case Study Video" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors" />
                <div className="w-12 h-12 rounded-full bg-[#ff7027] text-white flex items-center justify-center text-xl shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                  ▶
                </div>
              </div>
              <p className="text-white font-bold text-sm text-left">Australia Subclass 190 Direct PR Granted</p>
              <p className="text-slate-500 text-xs text-left">IT Specialist profile cleared via ACS Assessment</p>
            </div>

          </div>

          <p className="text-slate-500 text-xs italic">
            🎬 Recommended: Embed actual client testimonial videos (MP4 / YouTube embeds) or consultant video overviews.
          </p>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Begin Your Permanent Residency Journey?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a dedicated points review session with ENI Consultants to map out your immigration pathway.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-block"
            >
              Start Your Assessment Today
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}