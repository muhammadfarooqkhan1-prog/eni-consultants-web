import Link from "next/link";

export default function TermsOfServicePage() {
  const lastUpdated = "August 5, 2026";

  return (
    <main className="bg-slate-950 text-slate-300 py-16 px-5 sm:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (<Link href="/" className="text-[#ff7027] underline">eniconsultants.com</Link>), booking a consultation, or engaging ENI Consultants for immigration, study abroad, visit visa, or CV/LinkedIn optimization services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              2. Scope of Services
            </h2>
            <p className="mb-3">
              ENI Consultants provides professional consultancy, guidance, and document preparation across the following service areas:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Skilled Immigration & PR:</strong> Point grid evaluations, credential assessment guidance, and profile submission for Canada Express Entry, Australian Skilled Migration, and UK pathways.</li>
              <li><strong className="text-white">CV & Career Profile Optimization:</strong> ATS-compliant resume formatting, custom cover letter design, and LinkedIn profile revamps targeted for Middle East and global job markets.</li>
              <li><strong className="text-white">Study Abroad & Admissions:</strong> Academic counseling, university application assistance, and overseas student visa processing.</li>
              <li><strong className="text-white">Visit & Holiday Visas:</strong> Tourist visa filing, document checks, and appointment scheduling for Schengen, UK, US, and other destinations.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              3. Client Responsibilities & Accuracy of Information
            </h2>
            <p>
              The client is solely responsible for providing truthful, accurate, and complete information and documentation. ENI Consultants is not liable for visa rejections, delays, or legal consequences resulting from fraudulent, incomplete, or altered documents submitted by the client.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              4. No Guarantee of Visa or Job Offer Approval
            </h2>
            <p className="mb-3">
              While ENI Consultants maintains a high success rate through expert evaluation:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Immigration & Visas:</strong> Final decisions regarding visa approvals, permanent residency grants, or university admissions rest solely with official government authorities, embassies, and academic bodies.</li>
              <li><strong className="text-white">Career Optimization:</strong> Our CV and LinkedIn optimization services are designed to maximize recruiter shortlisting. However, landing job interviews and receiving job offers depends on market demand, employer discretion, and applicant performance.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              5. Fees & Payments
            </h2>
            <p>
              Consultation and service fees must be paid in accordance with the agreed consultancy agreement or invoice terms. Government filing fees, credential evaluation charges (e.g., WES), language tests, and medical examination fees are separate and paid directly to respective authorities unless stated otherwise.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website—including text, graphics, branding, logos, layout, and customized CV templates—is the intellectual property of ENI Consultants and is protected by applicable intellectual property laws.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, ENI Consultants shall not be liable for any indirect, incidental, or consequential damages resulting from policy changes by foreign immigration departments, embassy processing backlogs, or unexpected travel regulations.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">
              8. Contact & Service Inquiries
            </h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="mt-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
              <p className="text-white font-bold">ENI Consultants Legal Team</p>
              <p>Email: <a href="mailto:info@eniconsultants.com" className="text-[#ff7027] underline">info@eniconsultants.com</a></p>
              <p>Website: <Link href="/contact" className="text-[#ff7027] underline">eniconsultants.com/contact</Link></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}