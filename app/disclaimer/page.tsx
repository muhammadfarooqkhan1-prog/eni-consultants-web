import Link from "next/link";

export default function DisclaimerPage() {
  const lastUpdated = "August 5, 2026";

  return (
    <main className="bg-slate-950 text-slate-300 py-16 px-5 sm:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Legal Disclaimer
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          
          {/* 1. General Consultancy Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              1. General Information & Consultancy Nature
            </h2>
            <p>
              The information provided on <Link href="/" className="text-[#ff7027] underline">eniconsultants.com</Link> is for general informational and educational purposes only. ENI Consultants operates as a private immigration, education, and professional development consultancy. We are <strong>not a government agency</strong>, official embassy representative, or affiliated with any government department (such as IRCC Canada, UK Home Office, or Australian Department of Home Affairs).
            </p>
          </section>

          {/* 2. No Guarantee of Visa or PR Approval */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              2. No Guarantee of Visa or Permanent Residency Approvals
            </h2>
            <p>
              While ENI Consultants provides expert file preparation, points assessment, and strategic guidance:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The sole authority to grant or refuse visas, work permits, permanent residency (PR), or entry clearance rests with the respective foreign government authorities and consular officers.</li>
              <li>Past client success stories, reviews, and testimonials featured on this website do not constitute a promise or guarantee of similar results for future applicants. Every profile is evaluated independently by relevant immigration authorities.</li>
            </ul>
          </section>

          {/* 3. Job Offer & Career Services Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              3. CV, LinkedIn & Job Offer Disclaimer
            </h2>
            <p>
              Our CV optimization, cover letter design, and LinkedIn profile editing services are designed to align your professional profile with international ATS (Applicant Tracking Systems) and recruiter standards:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>ENI Consultants does <strong>not guarantee job placements, employment contracts, or shortlistings</strong>.</li>
              <li>Landing job offers in the Middle East, First World countries, or globally depends on macroeconomic factors, industry demand, individual applicant interview performance, and employer discretion.</li>
            </ul>
          </section>

          {/* 4. University Admissions & Scholarships */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              4. Educational Admissions & Scholarships
            </h2>
            <p>
              Assistance with study abroad programs, university selection, and application preparation does not guarantee admission or financial scholarship awards. Final decisions regarding student admissions and scholarships are made exclusively by the academic institutions applied to.
            </p>
          </section>

          {/* 5. Policy & Law Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              5. Changes in Foreign Immigration Laws
            </h2>
            <p>
              Immigration laws, visa point thresholds, processing times, and eligibility criteria are subject to frequent changes by foreign governments without prior notice. While we strive to keep our website content updated, ENI Consultants is not liable for sudden legislative or policy modifications enacted by foreign authorities.
            </p>
          </section>

          {/* 6. External Links Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              6. External Website Links
            </h2>
            <p>
              This website may contain links to external third-party websites (such as credential evaluation services like WES, official government portals, or language test providers). ENI Consultants holds no control over and assumes no responsibility for the accuracy, privacy policies, or practices of external websites.
            </p>
          </section>

          {/* 7. Contact Information */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              7. Contact Us
            </h2>
            <p>
              For further clarification regarding this Legal Disclaimer or our consultancy services, please reach out to us:
            </p>
            <div className="mt-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
              <p className="text-white font-bold">ENI Consultants Legal & Compliance</p>
              <p>Email: <a href="mailto:info@eniconsultants.com" className="text-[#ff7027] underline">info@eniconsultants.com</a></p>
              <p>Contact Page: <Link href="/contact" className="text-[#ff7027] underline">eniconsultants.com/contact</Link></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}