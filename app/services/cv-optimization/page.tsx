import Link from "next/link";
import { Metadata } from "next";
import {
  XCircle,
  SearchX,
  Clock,
  Cpu,
  MailCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Your Global Job Applications Are Getting Rejected | ENI Consultants",
  description:
    "Discover why standard CVs fail AI ATS algorithms and recruiter searches in Canada, UK, Australia, and the Gulf—and how ENI Consultants turns profiles into job offers.",
};

export default function CvOptimizationArticlePage() {
  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen py-16 px-5 sm:px-8">
      <article className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl">
        
        {/* Article Header */}
        <header className="mb-10 text-center sm:text-left border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-4">
            <span className="bg-[#ff7027]/10 text-[#ff7027] border border-[#ff7027]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Executive Career Insights
            </span>
            <span className="text-slate-500 text-xs flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 5 min read
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Why 95% of Overseas Job Applicants Get Silently Rejected (And How We Fix It)
          </h1>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Applying abroad without professional profile optimization means your application gets lost in automated systems. Discover why DIY approaches fail and how our specialized engineering unlocks direct shortlists.
          </p>
        </header>

        {/* Article Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          
          <p>
            Every day, thousands of qualified professionals apply for high-paying roles across <strong className="text-white">Saudi Arabia, UAE, Qatar, Canada, the UK, and Australia</strong>. Yet, despite having impressive qualifications and years of solid work experience, over 95% never receive a single call for an interview.
          </p>

          <p>
            The reason isn't a lack of talent—it's that modern international hiring relies on complex <strong className="text-white">AI-driven Systems</strong> and recruiter algorithms designed to filter out applications instantly.
          </p>

          <div className="bg-slate-950 border-l-4 border-[#ff7027] p-5 rounded-r-2xl my-6">
            <p className="text-slate-200 italic font-medium">
              "Without professional alignment, standard resumes are routinely misread, miscategorized, or discarded by automated screeners before a human recruiter ever sees them."
            </p>
          </div>

          <hr className="border-slate-800 my-8" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-[#ff7027]">01.</span> The Cost of an Unoptimized Profile
            </h2>
            <p>
              Attempting to format your own CV or relying on generic templates often backfires in global job markets. Overseas employers use strict filtering standards built specifically for their local job sectors:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div className="text-white font-bold text-base pt-1">Silent System Drop-Off</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Minor formatting quirks or missing industry-specific indexing tags cause AI screeners to rank your CV at the bottom of applicant lists.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-400">
                  <SearchX className="w-5 h-5" />
                </div>
                <div className="text-white font-bold text-base pt-1">Missed Recruiter Searches</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Global headhunters search LinkedIn using precise algorithms. Standard profiles remain completely invisible to overseas recruiters.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-white font-bold text-base pt-1">Delayed PR Pathways</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A missed job offer means losing out on critical work permits, extra points on immigration point grids, and pathways to permanent residency.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-[#ff7027]">02.</span> Why You Need ENI Consultants’ Expert Execution
            </h2>
            <p>
              Crafting an AI System compliant, high-converting career profile requires insider market intelligence, strategic keyword engineering, and exact regional positioning. At <strong className="text-white">ENI Consultants</strong>, we handle the entire process for you:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027] shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Specialized CV Engineering & AI System Optimization
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We rebuild your CV to ensure it seamlessly passes through AI screening software and lands directly on top of human recruiter desks for Gulf and Western job markets.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027] shrink-0">
                  <MailCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    High-Impact Cover Letter Customization
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We craft a persuasive cover letter tailored to your domain that establishes your international readiness and leadership potential.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027] shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.38-2.58 2.01-2.58 1.6 0 1.64 1.5 1.64 2.67v4.84h2.9zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    LinkedIn Headhunter Magnetization
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We overhaul your LinkedIn headline, bio summary, and skill indices so international hiring managers actively discover and reach out to you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-800 my-8" />

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-[#ff7027]">03.</span> From Job Offers to Permanent Residency & Passport
            </h2>
            <p>
              A successful foreign job offer isn't just about a bigger salary—it is often the single most powerful key to unlocking permanent immigration:
            </p>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 my-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#ff7027] shrink-0 mt-0.5" />
                <span><strong className="text-white">Express Entry & PR Points:</strong> Valid foreign job offers add massive scores to Canada Express Entry CRS points and Australia Skilled Migration grids.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#ff7027] shrink-0 mt-0.5" />
                <span><strong className="text-white">Tax-Free GCC Earnings:</strong> Senior executive positions in UAE, KSA, and Qatar provide life-changing compensation packages.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#ff7027] shrink-0 mt-0.5" />
                <span><strong className="text-white">Second Citizenship:</strong> Overseas work permits pave the fastest, most reliable legal path to permanent residency and second passport eligibility.</span>
              </div>
            </div>
          </section>

          {/* Strong Sales CTA Box */}
          <div className="mt-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7027] rounded-full blur-[100px] opacity-20" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Stop Losing Job Opportunities to AI Filters
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Don't leave your international career to chance. Partner with ENI Consultants to transform your profile into a recruiter-ready asset.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center justify-center gap-2"
              >
                <span>Get Your Professional Profile Optimized Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </article>
    </main>
  );
}