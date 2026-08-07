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
          <div className="pt-2 flex items-center gap-3">
            {/* Social Media Links / Icons */}
            <a
              href="https://www.linkedin.com/company/education-and-immigration-consultants-pakistan-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#ff7027] hover:border-[#ff7027] transition-colors"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#ff7027] hover:border-[#ff7027] transition-colors"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#ff7027] hover:border-[#ff7027] transition-colors"
              aria-label="Instagram"
            >
              ig
            </a>
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
              <Link href="/destinations/australia" className="hover:text-[#ff7027] transition-colors no-underline">
                Australia Express Entry
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
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}