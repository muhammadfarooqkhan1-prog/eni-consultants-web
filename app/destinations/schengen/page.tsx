import Link from "next/link";
import { Metadata } from "next";
import {
  Clock,
  Landmark,
  Check,
  X,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Schengen Europe Visit & Business Visa Advisory | 29 Countries | ENI Consultants",
  description:
    "Comprehensive Schengen visa advisory. Learn about member states, 90/180 day rules, VFS/TLS/BLS appointment scheduling, insurance requirements, and refusal prevention.",
};

export default function SchengenDestinationPage() {
  const memberRegions = [
    {
      region: "Central & Western Europe",
      countries: "France, Germany, Netherlands, Belgium, Luxembourg, Switzerland, Austria, Liechtenstein",
    },
    {
      region: "Southern Europe",
      countries: "Italy, Spain, Portugal, Greece, Malta, Croatia, Slovenia",
    },
    {
      region: "Nordic & Baltic States",
      countries: "Sweden, Norway, Denmark, Finland, Iceland, Estonia, Latvia, Lithuania",
    },
    {
      region: "Eastern Europe",
      countries: "Poland, Czech Republic, Slovakia, Hungary, Romania, Bulgaria",
    },
  ];

  const documentChecklist = [
    {
      title: "Schengen Travel Insurance",
      detail: "Must provide minimum medical & repatriation coverage of €30,000 valid across all 29 member states.",
    },
    {
      title: "Proof of Financial Solvency",
      detail: "3 to 6 months of official bank statements demonstrating regular income and sufficient daily balance.",
    },
    {
      title: "Flight & Accommodation Vouchers",
      detail: "Verified round-trip flight reservations and hotel bookings aligned with your travel itinerary.",
    },
    {
      title: "Custom Cover Letter & Travel Plan",
      detail: "A clear, day-by-day travel breakdown explaining your trip purpose, sponsorship, and entry/exit dates.",
    },
    {
      title: "Proof of Home Country Ties",
      detail: "Employment contracts, NOC letters, business registration, or property deeds proving intent to return.",
    },
  ];

  const applicationStages = [
    {
      step: "01",
      title: "Jurisdiction & Embassy Selection",
      desc: "Guidance on identifying the appropriate consulate based on main destination length of stay or first port of entry requirements.",
    },
    {
      step: "02",
      title: "File Structuring & Drafting",
      desc: "Auditing bank statements, drafting custom cover letters, and issuing compliant insurance & itinerary vouchers.",
    },
    {
      step: "03",
      title: "VFS / TLS / BLS Slot Booking",
      desc: "Booking of biometric submission appointments at authorized visa application centers in your region.",
    },
    {
      step: "04",
      title: "Biometrics & Passport Tracking",
      desc: "Guidance for biometric collection, embassy interview preparation (if needed), and status tracking.",
    },
  ];

  const refusalTriggers = [
    "Unclear or generic travel purpose without verifiable daily plans",
    "Irregular bank transactions or sudden unexplained cash deposits",
    "Insufficient proof of economic or family ties to your home country",
    "Non-compliant insurance policy (below €30k coverage or limited country scope)",
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
                src="https://flagcdn.com/w160/eu.png"
                alt="European Union Flag"
                className="w-8 h-5 object-cover rounded shadow"
              />
              <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Schengen Zone Advisory
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Schengen Visa: Your Gateway to 29 European Nations
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Travel across 29 European countries under a single short-stay visa. ENI Consultants handles complete file preparation, VFS/TLS/BLS appointment scheduling, compliant insurance issuance, and cover letter drafting to ensure maximum success.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/check-eligibility"
                className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center gap-2"
              >
                <span>Assess Schengen Eligibility</span>
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

          {/* HERO MEDIA */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000&auto=format&fit=crop"
                alt="Schengen European Union Visit Visa Consultancy"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <p className="text-xs font-bold text-[#ff7027] uppercase">Short-Stay Type C Visa</p>
                <p className="text-white font-bold text-sm">Up to 90 Days in Any 180-Day Period</p>
                <p className="text-slate-400 text-xs mt-0.5">VFS / TLS / BLS Biometrics & File Audit</p>
              </div>
            </div>
          </div>
        </div>

        {/* UNDERSTANDING SCHENGEN & 90/180 RULE */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-[#ff7027] font-bold text-xs uppercase tracking-wider">Immigration Framework</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Understanding the Schengen Area & Jurisdiction Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ff7027]" />
                <span>The 90 / 180-Day Rule</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A standard Type C Schengen short-stay visa permits non-EU travelers to remain within the member states for up to <strong>90 days within any rolling 180-day window</strong> for tourism, business trips, or short-term family visits.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#ff7027]" />
                <span>Where to File Your File</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You must apply at the embassy/consulate of your <strong>Main Destination</strong> (where you spend the highest number of days). If stay durations are identical, apply at your <strong>First Port of Entry</strong> into Europe.
              </p>
            </div>
          </div>
        </section>

        {/* 29 MEMBER STATES BREAKDOWN */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              The 29 Schengen Member States Covered
            </h2>
            <p className="text-slate-400 text-sm mt-1">A single visa approval grants access to all member states listed below.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberRegions.map((reg, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                <h3 className="text-[#ff7027] font-bold text-base">{reg.region}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{reg.countries}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MANDATORY DOCUMENTATION CHECKLIST */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Essential Document Checklist for High Approval
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentChecklist.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#ff7027] font-bold">
                  <Check className="w-5 h-5 text-[#ff7027] shrink-0" />
                  <h3 className="text-white font-bold text-base">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SUBMISSION PROCESS & REFUSAL PREVENTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 4 STAGES */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
              Our 4-Stage Submission Process
            </h2>

            <div className="space-y-6">
              {applicationStages.map((st, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/20 font-bold text-sm h-10 w-10 rounded-xl flex items-center justify-center shrink-0">
                    {st.step}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-base">{st.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REFUSAL TRIGGERS */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
              Avoid Common Embassy Refusal Reasons
            </h2>

            <p className="text-slate-400 text-xs leading-relaxed">
              Consulates follow strict refusal criteria. Our file reviewers eliminate these risks before your VFS/TLS biometrics appointment:
            </p>

            <ul className="space-y-3">
              {refusalTriggers.map((trig, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{trig}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/check-eligibility"
                className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm hover:underline"
              >
                <span>Audit Your Schengen File Before Applying</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* CALL TO ACTION */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Plan Your Trip Across Europe?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Book a 1-on-1 consultation with Chief Consultant Muhammad Farooq Khan to secure your VFS/TLS/BLS appointment slot and draft your cover letter.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center justify-center gap-2"
            >
              <span>Check Schengen Eligibility</span>
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