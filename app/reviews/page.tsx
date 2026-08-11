import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Success Stories | ENI Consultants Pakistan",
  description:
    "Read authentic reviews and success stories from our clients across Pakistan and abroad for study abroad visas, Canada Express Entry, New Zealand SMC, Australia PR, Schengen, and GCC visas.",
};

export default function ReviewsPage() {
  const overallStats = [
    { label: "Client Satisfaction", value: "98.5%" },
    { label: "Google Review Rating", value: "4.9 ★" },
    { label: "Visas Approved", value: "10,000+" },
    { label: "Years of Trust", value: "25+" },
  ];

  const testimonials = [
    {
      name: "Muhammad Usman",
      location: "Lahore, Pakistan",
      visaType: "New Zealand Skilled Migrant Category (SMC) PR",
      rating: 5,
      date: "May 2026",
      review:
        "ENI Consultants guided me through the new 6-Points New Zealand SMC pathway seamlessly. From obtaining my NZQA qualification assessment to filing the residence application, Mr. Farooq and his team provided accurate advice at every stage. Received my resident visa approved without any hassle!",
      flag: "🇳🇿",
    },
    {
      name: "Dr. Ayesha Malik",
      location: "Islamabad, Pakistan",
      visaType: "Canada Express Entry (Healthcare Draw)",
      rating: 5,
      date: "April 2026",
      review:
        "As a medical professional, navigating Category-Based Express Entry draws felt overwhelming. The advisors at ENI structured my WES evaluation, IELTS documentation, and work history perfectly. Got my COPR within 5 months of ITA!",
      flag: "🇨🇦",
    },
    {
      name: "Hassan Raza",
      location: "Karachi, Pakistan",
      visaType: "UK Higher Education & Student Visa",
      rating: 5,
      date: "March 2026",
      review:
        "Secured admission into a top-tier UK University for my Master's in Data Science along with a partial scholarship. ENI Consultants handled my university application, CAS issuance, and student visa file with zero stress. Highly recommended for students!",
      flag: "🇬🇧",
    },
    {
      name: "Syed Bilal Ahmed",
      location: "Riyadh, Saudi Arabia",
      visaType: "Saudi Arabia Premium Residency (Gold Visa)",
      rating: 5,
      date: "February 2026",
      review:
        "Being an expatriate in the GCC, I needed expert advice on long-term self-sponsored options. ENI Consultants prepared my Special Skilled Premium Residency file for KSA flawlessly. Professional, transparent, and prompt response times.",
      flag: "🇸🇦",
    },
    {
      name: "Zainab Chaudhry",
      location: "Rawalpindi, Pakistan",
      visaType: "Schengen France Tourist Visa",
      rating: 5,
      date: "January 2026",
      review:
        "Applying for a Schengen visit visa for a family vacation seemed risky due to high refusal rates. ENI drafted our travel itinerary, managed VFS slot booking, and audited our bank statements. All 4 family visas were approved for 1 year multi-entry!",
      flag: "🇪🇺",
    },
    {
      name: "Tariq Mahmood",
      location: "Faisalabad, Pakistan",
      visaType: "Australia Subclass 190 PR Visa",
      rating: 5,
      date: "December 2025",
      review:
        "Got my Australia Subclass 190 State Nominated Permanent Residency! The ACS skills assessment and state nomination application prepared by ENI were rock-solid. Best migration consultants in Pakistan.",
      flag: "🇦🇺",
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
              Client Satisfaction & Trust
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Real Stories. Proven Visa Approvals.
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Discover how Education & Immigration Consultants Pakistan Pvt Ltd (ENI Consultants) has empowered thousands of students, professionals, and families to achieve their study abroad, residency, and travel goals worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Join Our Success Stories
              </Link>
              <Link
                href="/book-appointment"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-sm no-underline"
              >
                Book Advisory Consultation
              </Link>
            </div>
          </div>

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#ff7027]/20 border border-[#ff7027] rounded-full flex items-center justify-center text-2xl font-bold text-[#ff7027]">
                  4.9
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Top-Rated Consultancy</p>
                  <p className="text-amber-400 text-sm">★★★★★ (500+ Verified Reviews)</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed border-t border-slate-800 pt-4">
                "Our commitment to transparent profile evaluation and document perfection ensures high success rates across complex student, skilled migration, and visit visa applications."
              </p>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {overallStats.map((st, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#ff7027]">{st.value}</p>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">{st.label}</p>
            </div>
          ))}
        </section>

        {/* TESTIMONIALS GRID */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Recent Success Testimonials
              </h2>
              <p className="text-slate-400 text-sm mt-1">Verified feedback from our successful visa applicants.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-[#ff7027]/40 transition-all shadow-xl"
              >
                <div className="space-y-4">
                  {/* Rating & Flag Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-sm">{"★".repeat(item.rating)}</span>
                    <span className="text-2xl">{item.flag}</span>
                  </div>

                  {/* Visa Type Badge */}
                  <span className="inline-block bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 text-xs font-bold px-3 py-1 rounded-full">
                    {item.visaType}
                  </span>

                  {/* Review Text */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-slate-800 pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-white font-bold text-sm">{item.name}</p>
                    <p className="text-slate-400 text-xs">{item.location}</p>
                  </div>
                  <span className="text-slate-500 text-[10px]">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Write Your Success Story?
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