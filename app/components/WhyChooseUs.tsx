import Link from "next/link";
import { Globe, Zap, Search, ShieldCheck } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Globe,
      title: "GCC Region Specialization",
      description:
        "We have the expertise and insights to target your immigration needs if you are a resident of KSA, UAE, Qatar, Oman, Bahrain, and Kuwait.",
    },
    {
      icon: Zap,
      title: "Fast 48-Hour Consultations",
      description:
        "Schedule a call with us and have your application evaluated swiftly and transparently.",
    },
    {
      icon: Search,
      title: "Transparent Assessment",
      description:
        "Your eligibility is evaluated objectively according to points, education and genuine visa criteria.",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Guidance",
      description:
        "Preparation of documents, credential assessment, pre-departure orientation and visa application.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-5 sm:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* WHY CHOOSE US GRID */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#ff7027] font-bold uppercase tracking-wider text-sm mb-2">
            Why Choose ENI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Trusted Global Immigration & Visa Partner
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Offering comprehensive consultancy solutions for transparent, reliable and professional assistance to applicants from Pakistan, Gulf countries, and worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ff7027] transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 bg-[#ff7027]/10 border border-[#ff7027]/30 rounded-xl flex items-center justify-center text-[#ff7027] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CLIENT REVIEWS SLIDESHOW */}
        <div className="flex flex-col items-start mb-8">
          <span className="text-[#ff7027] font-bold uppercase tracking-wider text-sm mb-2">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            What Our Clients Say
          </h2>
        </div>

        {/* Swiper Slideshow */}
        <TestimonialSlider />

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-2xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Ready to start your success story?</h3>
            <p className="text-slate-400 text-sm">Check your eligibility or schedule a consultation with our experts today.</p>
          </div>
          <Link
            href="/check-eligibility"
            className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-6 py-3 rounded-lg no-underline transition-all whitespace-nowrap"
          >
            Check Eligibility Now
          </Link>
        </div>

      </div>
    </section>
  );
}