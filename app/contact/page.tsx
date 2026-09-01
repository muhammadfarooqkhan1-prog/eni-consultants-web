"use client";

import { useState } from "react";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "Saudi Arabia",
  service: "Skilled Immigration (PR)",
  message: "",
};

const faqs = [
  {
    question: "How long does an eligibility evaluation take?",
    answer:
      "Once you submit your details or documents, our team conducts a preliminary points evaluation within 24 to 48 hours and guides you on the best immigration pathways available.",
  },
  {
    question: "Can ENI Consultants assist GCC residents remotely?",
    answer:
      "Yes! We specialize in managing cases remotely for professionals residing across Saudi Arabia, UAE, Qatar, Oman, Bahrain, and Kuwait using secure digital channels.",
  },
  {
    question: "How does the CV & LinkedIn Optimization service work?",
    answer:
      "We review your current resume and target job role, then reframe and format your document to be ATS-compliant while crafting a targeted cover letter and updating your LinkedIn profile for recruiters in the Middle East and First World countries.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff7027] font-bold uppercase tracking-wider text-sm bg-[#ff7027]/10 px-4 py-1.5 rounded-full border border-[#ff7027]/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-4">
            Start Your Journey With Us
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Have questions about immigration, study visas, or optimizing your
            CV for global job offers? Book a 48-hour consultation or drop us a
            message below.
          </p>
        </div>

        {/* MAIN SECTION: FORM + CONTACT INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* LEFT: Contact Information Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Direct Channels
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl text-[#ff7027] flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@eniconsultants.com"
                      className="text-white font-bold text-base mt-1 block hover:text-[#ff7027] transition-colors"
                    >
                      info@eniconsultants.com
                    </a>
                    <a
                      href="mailto:muhammadfarooq@eniconsultants.com"
                      className="text-white font-bold text-base mt-0.5 block hover:text-[#ff7027] transition-colors"
                    >
                      muhammadfarooq@eniconsultants.com
                    </a>
                    <p className="text-slate-500 text-xs mt-1">
                      Fast responses within 48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl text-[#ff7027] flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                      WhatsApp & Call
                    </h3>
                    <a
                      href="https://wa.me/923335911126"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold text-base mt-1 block hover:text-[#ff7027] transition-colors"
                    >
                      +92 (333) 5911126
                    </a>
                    <a
                      href="https://wa.me/923005012299"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold text-base mt-0.5 block hover:text-[#ff7027] transition-colors"
                    >
                      +92 (300) 5012299
                    </a>
                    <p className="text-slate-500 text-xs mt-1">
                      Mon - Sat, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl text-[#ff7027] flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                      Regional Reach
                    </h3>
                    <p className="text-white font-bold text-base mt-1">
                      GCC & Global Support
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Serving KSA, UAE, Qatar, Oman, Pakistan & Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Callout Box */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-[#ff7027]/40 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7027] rounded-full blur-[100px] opacity-20" />
              <h3 className="text-xl font-bold mb-2 text-white">
                Fast 48-Hour Consultations
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Schedule a priority evaluation session directly with senior
                consultant Muhammad Farooq Khan.
              </p>
              <span className="text-[#ff7027] text-xs font-bold uppercase tracking-wider">
                ✓ Confidential & Direct Guidance
              </span>
            </div>
          </div>

          {/* RIGHT: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-white">
                  Thank You for Contacting Us!
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  We have received your message. One of our senior immigration
                  experts will review your details and reach out within 48 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-6 py-2.5 rounded-xl transition-all text-sm border-0 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Book a Free Assessment / Query
                </h2>

                {errorMessage && (
                  <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 p-4 rounded-xl text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 / +971 / +92..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Country of Residence
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Other">Other Global Location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                  >
                    <option value="Skilled Immigration (PR)">
                      Skilled Immigration (Canada, Australia, UK)
                    </option>
                    <option value="CV & LinkedIn Optimization">
                      CV, Cover Letter & LinkedIn Optimization
                    </option>
                    <option value="Study Abroad">
                      Study Abroad / Foreign Admission
                    </option>
                    <option value="Visit & Holiday Visa">
                      Visit / Tourist Visa (Schengen, UK, US)
                    </option>
                    <option value="Other Inquiry">Other Specific Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                    Message / Profile Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your education, work experience, or specific visa goals..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#ff7027] hover:bg-[#e05a14] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-base border-0 cursor-pointer"
                >
                  {isLoading ? "Sending Message..." : "Submit Inquiry Now"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <div className="max-w-4xl mx-auto border-t border-slate-800 pt-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <h3 className="text-white font-bold text-lg">{faq.question}</h3>
                  <span className="text-[#ff7027] text-xl font-bold ml-4">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}