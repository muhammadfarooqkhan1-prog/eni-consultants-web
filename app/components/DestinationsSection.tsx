import Link from "next/link";

export default function DestinationsSection() {
  const destinations = [
    {
      country: "Canada",
      title: "Express Entry & PNP Pathways",
      flagUrl: "https://flagcdn.com/w640/ca.png",
      tag: "Top PR Choice",
      highlights: [
        "Express Entry (FSWP / CEC)",
        "Provincial Nominee Programs (PNPs)",
        "Direct Permanent Residency (PR)",
      ],
      link: "destinations/canada",
    },
    {
      country: "United Kingdom",
      title: "Skilled Worker & Study Routes",
      flagUrl: "https://flagcdn.com/w640/gb.png",
      tag: "High Job Demand",
      highlights: [
        "UK Skilled Worker Visa",
        "Student Visas & Post-Study Work Permits",
        "Fast-Track Healthcare Visa",
      ],
      link: "destinations/uk",
    },
    {
      country: "United States",
      title: "B1/B2 Visitor, Student & Work Visas",
      flagUrl: "https://flagcdn.com/w640/us.png",
      tag: "Global Powerhouse",
      highlights: [
        "B1/B2 Tourism & Business Visas",
        "F-1 Student Visa & OPT Guidance",
        "Comprehensive Interview Preparation",
      ],
      link: "destinations/usa",
    },
    {
      country: "New Zealand",
      title: "Skilled Migration & Study Visas",
      flagUrl: "https://flagcdn.com/w640/nz.png",
      tag: "High Quality of Life",
      highlights: [
        "Skilled Resident Pathway",
        "Higher Education & Post-Study Work",
        "Visitor & Family Immigration",
      ],
      link: "destinations/new-zealand",
    },
    {
      country: "Schengen Europe",
      title: "Visit, Business & Work Mobility",
      flagUrl: "https://flagcdn.com/w640/eu.png",
      tag: "29 European Nations",
      highlights: [
        "Short & Long Stay Tourist Visas",
        "Business & Trade Delegations",
        "European Higher Education Admissions",
      ],
      link: "destinations/schengen",
    },
    {
      country: "Malaysia",
      title: "Higher Education & Visit Visas",
      flagUrl: "https://flagcdn.com/w640/my.png",
      tag: "Global Edu Hub",
      highlights: [
        "Degree & Foreign Branch Campuses",
        "EMGS Visa Approval Letter (VAL)",
        "Tourism & eVISA Processing",
      ],
      link: "destinations/malaysia",
    },
    {
      country: "Thailand",
      title: "Tourist, Elite & Business Visas",
      flagUrl: "https://flagcdn.com/w640/th.png",
      tag: "Popular Destination",
      highlights: [
        "Tourist & Destination Thailand Visa (DTV)",
        "Business & Trade Delegation Filing",
        "Fast-Track Travel Documentation",
      ],
      link: "destinations/thailand",
    },
    {
      country: "Turkey",
      title: "Holiday, Visit & Student Visas",
      flagUrl: "https://flagcdn.com/w640/tr.png",
      tag: "Fast Processing",
      highlights: [
        "Hassle-Free Family Visit Visas",
        "Business Visit & Trade Visas",
        "Overseas Academic Enrolments",
      ],
      link: "destinations/turkey",
    },
    {
      country: "Maldives",
      title: "Resort Tourism & Business Travel",
      flagUrl: "https://flagcdn.com/w640/mv.png",
      tag: "Island Paradise",
      highlights: [
        "Pre-Arrival Visa Assistance",
        "Luxury Resort & Honeymoon Packages",
        "Corporate & Business Delegations",
      ],
      link: "destinations/maldives",
    },
    {
      country: "Indonesia",
      title: "Visit, Business & Tourism Visas",
      flagUrl: "https://flagcdn.com/w640/id.png",
      tag: "SE Asia Hub",
      highlights: [
        "eVISA & On-Arrival Guidance",
        "Bali Tourism & Long-Stay Visas",
        "Trade & Investment Permits",
      ],
      link: "destinations/indonesia",
    },
    {
      country: "Azerbaijan",
      title: "e-Visa & Commercial Travel",
      flagUrl: "https://flagcdn.com/w640/az.png",
      tag: "Eurasian Gateway",
      highlights: [
        "ASAN e-Visa Fast Processing",
        "Baku Leisure & Tour Packages",
        "Commercial & Corporate Travel",
      ],
      link: "destinations/azerbaijan",
    },
    {
      country: "Sri Lanka",
      title: "ETA & Academic Opportunities",
      flagUrl: "https://flagcdn.com/w640/lk.png",
      tag: "Tropical Hub",
      highlights: [
        "Electronic Travel Authorization (ETA)",
        "University Exchange Programs",
        "Leisure & Heritage Tourism",
      ],
      link: "destinations/sri-lanka",
    },
    {
      country: "Mauritius",
      title: "Tourism, Premium Visa & Business",
      flagUrl: "https://flagcdn.com/w640/mu.png",
      tag: "Indian Ocean Gem",
      highlights: [
        "Tourist & Premium Long-Stay Visas",
        "Honeymoon & Leisure Packages",
        "Business & Offshore Setup Travel",
      ],
      link: "destinations/mauritius",
    },
    {
      country: "Zimbabwe",
      title: "Tourism, Business & Safari Travel",
      flagUrl: "https://flagcdn.com/w640/zw.png",
      tag: "African Wonder",
      highlights: [
        "e-Visa Application Processing",
        "Victoria Falls & Safari Packages",
        "Trade & Business Delegations",
      ],
      link: "destinations/zimbabwe",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-20 px-5 sm:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff7027] font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#ff7027]/10 px-4 py-1.5 rounded-full border border-[#ff7027]/20">
            Global Destinations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            Top World Regions We Serve
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore dedicated immigration, study, and career opportunities across premier global destinations.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-[#ff7027]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              
              {/* BACKGROUND FLAG IMAGE OVERLAY */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none filter blur-[1px] group-hover:blur-0 scale-110 group-hover:scale-100 transition-transform duration-700"
                style={{ backgroundImage: `url(${item.flagUrl})` }}
              />

              {/* GRADIENT OVERLAY FOR BETTER CONTRAST */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none" />

              {/* CARD CONTENT */}
              <div className="relative z-10">
                
                {/* Header Tag + Country */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#ff7027] bg-[#ff7027]/10 border border-[#ff7027]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                  
                  {/* Small Flag Badge Top Right */}
                  <img
                    src={item.flagUrl}
                    alt={`${item.country} Flag`}
                    className="w-8 h-5 object-cover rounded shadow-md border border-slate-700/80"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff7027] transition-colors">
                  {item.country}
                </h3>
                <p className="text-slate-300 font-semibold text-sm mb-6">
                  {item.title}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-5">
                  {item.highlights.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-[#ff7027] font-bold">✓</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Link */}
              <div className="relative z-10 pt-2">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#ff7027] font-bold text-sm group-hover:translate-x-1 transition-transform no-underline"
                >
                  Explore Destination <span>→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}