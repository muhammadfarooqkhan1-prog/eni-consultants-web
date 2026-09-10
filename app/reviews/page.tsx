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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Reviews & Verified Success Stories | ENI Consultants",
  description:
    "Read real success stories and reviews from clients who secured study visas, scholarships, and immigration pathways through ENI Consultants.",
};

export default function ClientReviewsPage() {
  const stats = [
    { label: "Visa Approval Rate", value: "98.4%" },
    { label: "Successful Clients", value: "1,200+" },
    { label: "Scholarships Secured", value: "£6,000+" },
    { label: "Average Review Rating", value: "4.9/5" },
  ];

  const clientReviews = [
    {
      id: "shoaib-irfan",
      name: "Shoaib Irfan",
      country: "Canada",
      flagCode: "ca",
      highlight: "Canada Success Story",
      imageSrc: "/images/reviews/shoaib-irfan.jpeg",
      comment:
        "ENI Consultants made my Canadian immigration process seamless. From profile evaluation to document preparation and final visa approval, their guidance was accurate and professional throughout.",
      rating: 5,
      year: "2026",
    },
    {
      id: "abdullah-shakeel",
      name: "Abdullah Shakeel",
      country: "United Kingdom",
      flagCode: "gb",
      highlight: "6000 GBP Scholarship UK",
      imageSrc: "/images/reviews/abdullah-shakeel.jpeg",
      comment:
        "Secured a £6,000 scholarship alongside my UK study visa approval! The team at ENI Consultants expertly structured my university application and visa documentation without any delays.",
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
        "Navigating European visa requirements was smooth thanks to ENI Consultants. They guided me step-by-step through university admission and Finnish residence permit filing.",
      rating: 5,
      year: "2026",
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
                {/* SUCCESS STORY IMAGE DISPLAY */}
                <div className="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800">
                  <Image
                    src={review.imageSrc}
                    alt={`${review.name} - ${review.country}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Success</span>
                  </div>
                </div>

                {/* REVIEW CONTENT BELOW IMAGE */}
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