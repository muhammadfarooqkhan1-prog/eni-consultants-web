export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-950 text-slate-300 py-16 px-5 sm:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Effective Date: January 1, 2026 | Last Updated: August 5, 2026
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <p>
              At <strong className="text-white">ENI Consultants</strong>, protecting the privacy and security of your personal data is one of our highest priorities. This Privacy Policy outlines how we collect, use, store, share, and safeguard your personal information when you visit our website, use our immigration services, or engage with our CV and career optimization solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">1. Information We Collect</h2>
            <p className="mb-3">We collect information necessary to evaluate your eligibility, process visa applications, provide educational counseling, and optimize your professional documents:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Personal Identification Data:</strong> Name, contact details, passport information, CNIC/SNIC, and residency permits (GCC Iqama/EIDA).</li>
              <li><strong className="text-white">Educational & Career Information:</strong> Degrees, transcripts, language scores (IELTS/PTE), resumes, cover letters, and LinkedIn profile details.</li>
              <li><strong className="text-white">Financial Records:</strong> Bank statements and tax documentation required strictly for visa proof-of-funds evaluation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Filing PR and visa applications with immigration authorities (IRCC Canada, Home Office UK, Australia Home Affairs).</li>
              <li>Formatting ATS-compliant CVs, cover letters, and LinkedIn profiles for job shortlisting in the Middle East & Western markets.</li>
              <li>Processing university admissions and scheduling consultation appointments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">3. Data Protection & Sharing</h2>
            <p>
              We <strong className="text-white">never</strong> sell or trade your data. Information is shared strictly with official government bodies, embassies, credential evaluation services (e.g., WES), or universities essential to your application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#ff7027]">4. Contact Us</h2>
            <p>
              For privacy requests or concerns, contact us at <a href="mailto:info@eniconsultants.com" className="text-[#ff7027] underline">info@eniconsultants.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}