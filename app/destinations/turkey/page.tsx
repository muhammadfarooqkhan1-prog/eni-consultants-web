import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study & Visit Opportunities in Turkey | ENI Consultants",
  description:
    "Explore higher education, English-medium degree programs, visit visas, and tourist pathways in Turkey with ENI Consultants.",
};

export default function TurkeyDestinationPage() {
  const turkeyPathways = [
    {
      title: "Bachelor's & Master's Degree Programs",
      badge: "English-Medium Programs",
      description:
        "Enroll in top-ranked public and private Turkish universities offering globally accredited degrees in Engineering, Business, IT, and International Relations.",
      highlights: [
        "No IELTS/TOEFL required for selected partner universities",
        "Affordable tuition starting from $1,500/year",
        "European Bologna Process compliance with ECTS credit transfer",
      ],
      mediaUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Turkey Higher Education and University Campus",
    },
    {
      title: "PhD Admissions & Research Pathways",
      badge: "Scholarship & Doctoral Support",
      description:
        "Comprehensive assistance for prospective doctoral candidates, including university placement, supervisor matching, and Türkiye Bursları scholarship applications.",
      highlights: [
        "Full support for research proposals and academic CV alignment",
        "Direct supervisor reaching out and faculty matching",
        "Assistance with full and partial tuition waiver grants",
      ],
      mediaUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Turkey PhD and Academic Research Pathways",
    },
    {
      title: "Tourist & Visit Visa Processing",
      badge: "Fast Entry & e-Visa",
      description:
        "Hassle-free e-Visa filing and sticker visit visa file preparation for families, solo travelers, and business representatives visiting Turkey.",
      highlights: [
        "Fast-track e-Visa filing for eligible nationalities",
        "Complete embassy file preparation, flight, and hotel bookings",
        "Schengen/UK/US visa holder fast-track tourist processing",
      ],
      mediaUrl: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Turkey Tourism and Visit Visa",
    },
    {
      title: "Student Residence Permit (Ikamet) Support",
      badge: "Complete Onboarding",
      description:
        "End-to-end relocation guidance including student residence permit (Ikamet) processing, health insurance setup, and pre-departure accommodation arrangements.",
      highlights: [
        "Step-by-step document attestation and tax ID generation",
        "Local Turkish health insurance setup and appointment booking",
        "Pre-departure briefing and airport reception assistance",
      ],
      mediaUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1000",
      mediaAlt: "Turkey Student Visa and Relocation Assistance",
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
                src="https://flagcdn.com/w160/tr.png"
                alt="Turkey Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Destination Guide
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Study & Visit Turkey: Education, Admissions & Visa Pathways
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Unlock affordable European-standard education, PhD scholarships, and fast-track visit visa pathways in Turkey. ENI Consultants manages your university applications, document verification, scholarship files, and entry visas.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
              >
                Assess Turkey Eligibility
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
                alt="Turkey Consultancy Services"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Turkey Admissions & Visa</p>
                <p className="text-white font-bold text-sm">Strategic Higher Education & Tourist Guidance</p>
                <p className="text-slate-400 text-xs mt-0.5">Undergraduate, Master's, PhD & e-Visas</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY ADVANTAGES */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Turkey?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Key advantages offered to international students, researchers, and travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🇹🇷</span>
              <h3 className="text-white font-bold text-base">English-Medium Studies</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Study in accredited universities offering programs instructed completely in English.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">💰</span>
              <h3 className="text-white font-bold text-base">Affordable Expenses</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Enjoy low tuition costs paired with highly affordable living and housing expenses.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">🎓</span>
              <h3 className="text-white font-bold text-base">Bologna Process Recognized</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Degrees earned in Turkey are fully recognized across Europe and North America.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-3xl">⚡</span>
              <h3 className="text-white font-bold text-base">Fast Visa Approvals</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Streamlined student and visitor visa procedures with high visa success rates.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS DETAILED GRID */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Primary Turkey Study & Travel Programs
            </h2>
          </div>

          <div className="space-y-12">
            {turkeyPathways.map((item, idx) => (
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
            Plan Your Journey to Turkey
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a consultation with senior consultant Muhammad Farooq Khan to assess university entry options, document preparation, and entry visa requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline"
            >
              Evaluate Admissions
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