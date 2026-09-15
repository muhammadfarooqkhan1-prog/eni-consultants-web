import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Column 1: Brand & Overview (Spans 2 cols on lg) */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              ENI<span className="text-[#ff7027]">Consultants</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Empowering professionals, students, and families with trusted, strategic guidance for global immigration, permanent residency, study abroad, and visit visas.
          </p>

          {/* Social Media & Official Profiles */}
          <div className="pt-2 space-y-3">
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Connect With Us
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* ENI Consultants Facebook Link */}
              <a
                href="https://facebook.com/eniconsultantspakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-[#1877F2] text-slate-300 hover:text-[#1877F2] text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200 group"
                aria-label="ENI Consultants Facebook Page"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              {/* ENI Consultants Company LinkedIn */}
              <a
                href="https://www.linkedin.com/company/education-and-immigration-consultants-pakistan-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-[#0A66C2] text-slate-300 hover:text-[#0A66C2] text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200 group"
                aria-label="ENI Consultants LinkedIn Page"
              >
                <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.64 1.64 0 1 0 1.64 1.64A1.65 1.65 0 0 0 7.86 6.6Z" />
                </svg>
                <span>ENI Consultants</span>
              </a>

              {/* Personal Profile LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-farooq-khan-5750b858/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-[#0A66C2] text-slate-300 hover:text-[#0A66C2] text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200 group"
                aria-label="Muhammad Farooq Khan LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.64 1.64 0 1 0 1.64 1.64A1.65 1.65 0 0 0 7.86 6.6Z" />
                </svg>
                <span>Farooq Khan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-base">Quick Links</h4>
          <ul className="space-y-2 list-none p-0 m-0">
            <li>
              <Link href="/about" className="hover:text-[#ff7027] transition-colors no-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#ff7027] transition-colors no-underline">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/check-eligibility" className="hover:text-[#ff7027] transition-colors no-underline">
                Check Eligibility
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-[#ff7027] transition-colors no-underline">
                Client Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ff7027] transition-colors no-underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Immigration & Visas */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-base">Top Destinations</h4>
          <ul className="space-y-2 list-none p-0 m-0">
            <li>
              <Link href="/destinations/canada" className="hover:text-[#ff7027] transition-colors no-underline">
                Canada PR & Study
              </Link>
            </li>
            <li>
              <Link href="/destinations/uk" className="hover:text-[#ff7027] transition-colors no-underline">
                United Kingdom
              </Link>
            </li>
            <li>
              <Link href="/destinations/turkey" className="hover:text-[#ff7027] transition-colors no-underline">
                Turkey
              </Link>
            </li>
            <li>
              <Link href="/destinations/usa" className="hover:text-[#ff7027] transition-colors no-underline">
                United States
              </Link>
            </li>
            <li>
              <Link href="/destinations/schengen" className="hover:text-[#ff7027] transition-colors no-underline">
                Schengen Visit Visas
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Consultations */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-base">Contact Us</h4>
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="flex items-center gap-2 text-slate-300">
              <span className="text-[#ff7027]">📍</span> Middle East & Global Support
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <span className="text-[#ff7027]">📧</span> info@eniconsultants.com  
            </p>
            <p className="flex items-center gap-2 text-slate-300">
              <span className="text-[#ff7027]">📞</span> +92 (333) 5911126, +92 (300) 5012299 
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-slate-900 border border-slate-800 hover:border-[#ff7027] text-[#ff7027] text-xs font-bold px-4 py-2 rounded-lg transition-all"
              >
                Book 48-Hr Consultation
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} ENI Consultants. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Legal Disclaimer
            </Link>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400 font-medium">
              Developed by: <span className="text-[#ff7027] font-semibold">SK Developers</span>
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}