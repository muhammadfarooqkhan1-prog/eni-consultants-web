import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Skilled Immigration",
      icon: "🌐",
      description: "Direct PR & Work pathways for qualified professionals in KSA, UAE, Qatar, and across the Gulf.",
      features: ["Canada Express Entry & PNP", "Europe", "UK Skilled Worker"],
      link: "/services/skilled-immigration",
      highlight: false,
    },
    {
      title: "Study Abroad",
      icon: "🎓",
      description: "Complete university admission & visa assistance for students targeting top global institutions.",
      features: ["100% Admission Support", "Scholarship Guidance", "Post-Study Work Permits"],
      link: "/services/study-abroad",
      highlight: true, // Featured Card
    },
    {
      title: "Holiday & Visit Visas",
      icon: "✈️",
      description: "Hassle-free tourist and family visit visa processing for overseas Pakistani passport holders.",
      features: ["Maldives & Mauritius", "Azerbaijan & Turkey", "Thailand & Malaysia"],
      link: "/services/holiday-destinations",
      highlight: false,
    },
    {
      title: "CV & LinkedIn Optimization",
      icon: "📄",
      description: "Stand out to global recruiters with ATS-optimized CVs, customized cover letters, and high-impact LinkedIn profiles redesigned for successful job offers in the Middle East & First World countries.",
      features: ["ATS-Compliant CV Formatting", "Tailored Cover Letter Design", "LinkedIn Profile Optimization", "Tailored for Middle East & Global Job Markets"],
      link: "/services/cv-optimization",
      highlight: false, 
    },
  ];
  

  return (
    
    <section className="bg-slate-900 text-white py-16 px-5 sm:px-8">
      
      
      {/* 1. Quick Stats & Trust Banner */}
      <div className="max-w-7xl mx-auto mb-20 bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ff7027]">9+</h3>
          <p className="text-slate-300 text-sm mt-1">Years Experience</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ff7027]">98%</h3>
          <p className="text-slate-300 text-sm mt-1">Visa Success Rate</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ff7027]">GCC Wide</h3>
          <p className="text-slate-300 text-sm mt-1">KSA, UAE, Qatar, Oman</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ff7027]">48 Hours</h3>
          <p className="text-slate-300 text-sm mt-1">Fast Consultation</p>
        </div>
      </div>

      {/* 2. Core Services Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-[#ff7027] font-bold uppercase tracking-wider text-sm">Our Expertise</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
          Tailored Immigration & Career Development Services
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
          From immigration pathways and career profile optimization to university admissions and travel visas, ENI Consultants is your trusted partner.
        </p>
      </div>

      {/* 3. Services Cards Grid (Responsive 2x2 layout on desktop) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 transition-all flex flex-col justify-between border ${
              service.highlight
                ? "bg-slate-800 border-[#ff7027] shadow-2xl shadow-orange-500/10 scale-105"
                : "bg-slate-850 border-slate-800 hover:border-slate-700"
            }`}
          >
            <div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8 border-t border-slate-700/60 pt-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-[#ff7027] font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={service.link}
              className={`w-full text-center py-2.5 rounded-lg text-sm font-bold transition-all no-underline ${
                service.highlight
                  ? "bg-[#ff7027] hover:bg-[#e05a14] text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-white"
              }`}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}