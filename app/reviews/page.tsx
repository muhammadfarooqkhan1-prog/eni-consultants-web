import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Star,
  Quote,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Reviews & Verified Success Stories | ENI Consultants",
  description:
    "Read real success stories and reviews from clients who secured study visas, scholarships, and immigration pathways through ENI Consultants.",
};

export default function ClientReviewsPage() {
  const stats = [
    { label: "Visa Approval Rate", value: "98.4%" },
    { label: "Successful Clients", value: "1,000+" },
    { label: "Scholarships Secured", value: "£6,000+" },
    { label: "Average Review Rating", value: "4.9/5" },
  ];

  const clientReviews = [
    // --- WITH PICTURES ---
    {
      id: "shoaib-irfan",
      name: "Shoaib Irfan",
      country: "Canada",
      flagCode: "ca",
      highlight: "Canada Success Story",
      imageSrc: "/images/reviews/shoaib-irfan.jpeg",
      comment:
        "Met Farooq Khan in 2017 regarding Canadian Skilled Immigration. I got an ITA in the same year and finally moved to Canada in 2019. Today, I am a Canadian citizen.",
      rating: 5,
      year: "2019",
    },
    {
      id: "abdullah-shakeel",
      name: "Abdullah Shakeel",
      country: "United Kingdom",
      flagCode: "gb",
      highlight: "6000 GBP Scholarship UK",
      imageSrc: "/images/reviews/abdullah-shakeel.jpeg",
      comment:
        "I got an admission to a Masters Degree in Business Analytics from a top university in London with a massive 6000 GBP scholarship. I would recommend ENI Consultants to anyone looking for expert guidance in securing scholarships and admissions abroad.",
      rating: 5,
      year: "2026",
    },
    {
      id: "hassaan-zahid",
      name: "Hassaan Zahid (Pilot)",
      country: "Canada",
      flagCode: "ca",
      highlight: "Canada Success Story",
      imageSrc: "/images/reviews/hassaan-zahid.jpeg",
      comment:
        "A family relative recommended us with high hopes as we wanted to move to canada under PR for skilled professional (Pilot) and we are glad we made a nice decision. Soon in the future, we will be applying for the canadian passport.",
      rating: 5,
      year: "2025",
    },
    {
      id: "hammad-khattak",
      name: "Hammad Khattak",
      country: "Finland",
      flagCode: "fi",
      highlight: "Finland Success Story",
      imageSrc: "/images/reviews/hammad-khattak.jpeg",
      comment:
        "Did Software Engineering from COMSATS University. After working in Pakistan for ten years, I wanted to explore the world for education and career growth. I met Farooq Khan and currently, I am in completion of my Masters degree in Software Engineering. I would like to persue a PHD from Finland soon.",
      rating: 5,
      year: "2025",
    },
    {
      id: "danish-mahmood",
      name: "Danish Mahmood",
      country: "USA",
      flagCode: "us",
      highlight: "USA Success Story",
      imageSrc: "/images/reviews/danish-mahmood.jpeg",
      comment:
        "Outstanding counseling for my US visa application! Their interview preparation and document structuring were key factors in getting my approval.",
      rating: 5,
      year: "2026",
    },
    {
      id: "hira-azan",
      name: "Hira Azan",
      country: "Canada",
      flagCode: "ca",
      highlight: "Canada Success Story",
      imageSrc: "/images/reviews/Hira_Azan.jpeg",
      comment:
        "As a LUMS graduate, I needed expert guidance. Working with Muhammad Farooq Khan provided precise, step-by-step support. I successfully transitioned to Canada PR and achieved my goal of becoming a Canadian Citizen! Highly recommended.",
      rating: 5,
      year: "2020",
    },
    {
      id: "daniyal-khan",
      name: "Muhammad Daniyal Khan",
      country: "USA",
      flagCode: "us",
      highlight: "USA Success Story",
      imageSrc: "/images/reviews/Daniyal_Khan.jpeg",
      comment:
        "ENI Consultants handled our family's US Green Card application back in 2018. Thanks to their expert guidance, our entire family received Green Cards, relocated smoothly to the USA, and today we are proud American citizens! I highly recommend their team for reliable, complete immigration support.",
      rating: 5,
      year: "2018",
    },
    {
      id: "ashan-hussain-khan",
      name: "Ashan Hussain Khan",
      country: "Instanbul, Turkey",
      flagCode: "tr",
      highlight: "Turkey Success Story",
      imageSrc: "/images/reviews/male_client.png",
      comment:
        "As a civil engineer from Karachi, Pakistan, I met Muhammad Farooq Khan in 2020. I was admitted to a MS Civil Engineering program. After completion of the degree, I did another Masters Degree in AI based on recommendation. Today I have my own company, providing AI services for Turkey, Middle East and Europe.",
      rating: 5,
      year: "2020",
    },

    // --- WITHOUT PICTURES ---
    {
      id: "syeda-fatima",
      name: "Syeda Fatima",
      country: "Joensuu, Finland",
      flagCode: "fi",
      highlight: "Bachelors AI",
      imageSrc: "/images/reviews/Client.png",
      comment:
        "For a trusted company like ENI Consultants Pakistan, decision was easy, got admitted in Bachelor's degree in top university of Finland with maximum scholarship.",
      rating: 5,
      year: "2025",
    },
    {
      id: "syed-ali",
      name: "Syed Ali Hassan",
      country: "Japan",
      flagCode: "jp",
      highlight: "Japan Visit Visa",
      imageSrc: "/images/reviews/male_client.png",
      comment:
        "As an autmotive business person, i was fascinated by the Japan and wanted to explore it. I got visit visa of Japan. Thanks to ENI Consultants Pakistan for their professional services.",
      rating: 5,
      year: "2020",
    },
    {
      id: "mussyeb-ali-khan",
      name: "Mussyeb Ali Khan",
      country: "United Kingdom",
      flagCode: "gb",
      highlight: "UK Visit Visa Success",
      imageSrc: "/images/reviews/male_client.png",
      comment:
        "As a business person, it was time consuming for me to apply for a UK visit visa for short duration. So having known Muhammad Farooq Khan for several years, i got a 5 year UK visit visa.",
      rating: 5,
      year: "2025",
    },
    {
      id: "muhammad-ahmed",
      name: "Muhammad Ahmed",
      country: "Canada",
      flagCode: "ca",
      highlight: "Canada Success Story",
      imageSrc: "/images/reviews/male_client.png",
      comment:
        "I graduated with a Bachelors Degree in Mechanical Engineering from NUST. Eni Consultants not only guided me and did not take any fee, helped me in landing a full scholarship in Masters of Applied Sciences in Civil Engineering from one of the prestigious universities in Canada. Not only I successfully completed this Masters, I also successfully landed a job in one of the world's top most energy company in Canada.",
      rating: 5,
      year: "2020",
    },
    {
      id: "fazal-ur-rehman",
      name: "Fazal ur Rehman",
      country: "Sweden",
      flagCode: "se",
      highlight: "Master's Degree Admission",
      imageSrc: "/images/reviews/male_client.png",
      comment:
        "As a business person from Minerals processing industry, I wanted to buy minerals processing machinery but no company was offering any services. Only ENI Consultants brought an invitation from that company in Chine, but also ensured, I got successful approval of short term trade visit visa.",
      rating: 5,
      year: "2017",
    },
    {
      id: "muhammad-wasi",
      name: "Muhammad Wasi",
      country: "Europe",
      flagCode: "eu",
      highlight: "PHD Admission & Scholarship",
      imageSrc: "/images/reviews/male_client.png",
      comment:
        "Met Muhammad Farooq Khan and he helped me in securing a scholarship PHD position in Telecommunication Engineering in one of the world's top 300 univerisities of the world in Europe. For anyone confused about PHD or career growth, ENI Consultants is the right platform. Wish them all the best.",
      rating: 5,
      year: "2020",
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 bg-[#ff7027]/10 border border-[#ff7027]/30 text-[#ff7027] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Client Success Stories</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Real Clients. Proven Results. Global Pathways.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore authentic success stories and testimonials from candidates who achieved their international education, scholarship, and visa goals with ENI Consultants Pakistan.
          </p>
        </div>

        {/* TRUST STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2 shadow-lg"
            >
              <p className="text-2xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* REVIEWS & SUCCESS CARDS GRID */}
        <div className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-[#ff7027]" />
              Recent Visa & Scholarship Successes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientReviews.map((review) => (
              <div
                key={review.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#ff7027]/50 transition-all duration-300 group"
              >
                {/* CONDITIONAL TOP SECTION: IMAGE VS AVATAR BANNER */}
                {review.imageSrc ? (
                  <div className="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800">
                    <Image
                      src={review.imageSrc}
                      alt={`${review.name} - ${review.country}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top Badge Overlay */}
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Success</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                        <User className="w-5 h-5 text-[#ff7027]" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base">
                          {review.name}
                        </h3>
                        <p className="text-slate-500 text-xs">Verified Client</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                )}

                {/* REVIEW CONTENT BELOW IMAGE / AVATAR */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Country & Highlight Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-4 relative rounded overflow-hidden border border-slate-700 shrink-0">
                          <Image
                            src={`https://flagcdn.com/w160/${review.flagCode}.png`}
                            alt={`${review.country} Flag`}
                            fill
                            unoptimized
                            sizes="24px"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-300">
                          {review.country}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-[#ff7027] bg-[#ff7027]/10 px-2.5 py-1 rounded-md border border-[#ff7027]/20">
                        {review.highlight}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Client Review Text */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-slate-800 absolute -top-2 -left-2 -z-0 opacity-50" />
                      <p className="text-slate-300 text-sm leading-relaxed italic relative z-10 pt-1">
                        "{review.comment}"
                      </p>
                    </div>
                  </div>

                  {/* Client Info Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base">
                        {review.name}
                      </h3>
                      <p className="text-slate-500 text-xs">ENI Consultants Client</p>
                    </div>
                    <span className="text-slate-500 text-xs font-medium">
                      {review.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION BOX */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Start Your Own Success Story
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Book an eligibility evaluation with Chief Consultant Muhammad Farooq Khan to assess your profile for study visas, scholarships, and international migration.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="w-full sm:w-auto bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-sm no-underline inline-flex items-center justify-center gap-2"
            >
              <span>Assess Your Case Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 text-sm no-underline"
            >
              Book Advisory Consultation
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}