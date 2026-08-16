"use client";

import { useState } from "react";

export default function BookAppointmentSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "Saudi Arabia",
    service: "Skilled PR & Immigration",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 12:00 PM)",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-slate-950 text-white py-20 px-5 sm:px-8 border-t border-slate-800 relative overflow-hidden" id="book-appointment">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff7027]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff7027] font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#ff7027]/10 px-4 py-1.5 rounded-full border border-[#ff7027]/20">
            Priority Advisory
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            Book a 1-on-1 Consultation
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Schedule a confidential 48-hour assessment session with Chief Immigration consultant <strong className="text-white">Muhammad Farooq Khan</strong> to evaluate your profile for global visas or career optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Value Proposition Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
                What to Expect
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff7027]/10 border border-[#ff7027]/30 flex items-center justify-center text-[#ff7027] font-bold flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">48-Hour Priority Response</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Fast turnaround time to review your eligibility points, CV, or visa requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff7027]/10 border border-[#ff7027]/30 flex items-center justify-center text-[#ff7027] font-bold flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Targeted Strategy & Roadmap</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Direct assessment of Express Entry CRS points, university pathways, or ATS job readiness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff7027]/10 border border-[#ff7027]/30 flex items-center justify-center text-[#ff7027] font-bold flex-shrink-0">
                  🔒
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">100% Confidential & Professional</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Your personal documents, employment records, and identity remain strictly confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Callout */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-slate-400 text-xs">Need urgent assistance?</p>
                <p className="text-white font-bold text-sm mt-0.5">info@eniconsultants.com
                    muhammadfarooq@eniconsultants.com
                </p>
              </div>
              <a
                href="https://wa.me/923335911126"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all no-underline"
              >
                WhatsApp Us
              </a>
            </div>

          </div>

          {/* RIGHT: Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#ff7027]/10 border border-[#ff7027] text-[#ff7027] rounded-full flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Appointment Request Received!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Our team will review your preferred date (<span className="text-[#ff7027]">{formData.preferredDate}</span>) and confirm your schedule within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm border-0 cursor-pointer"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h3 className="text-2xl font-bold text-white">Reserve Your Slot</h3>
                  <span className="text-xs text-slate-500">* All fields required</span>
                </div>

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
                      placeholder="e.g. Hassan Zahid"
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
                      placeholder="e.g. hassan@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Phone / WhatsApp *
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
                      Current Residence
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Other">Other Global Location</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Consultation Topic
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="Skilled PR & Immigration">Skilled PR (Canada, Australia, UK)</option>
                      <option value="CV & LinkedIn Optimization">CV & LinkedIn Optimization</option>
                      <option value="Study Visa & Admissions">Study Visa & Overseas Admission</option>
                      <option value="Visit & Holiday Visas">Visit / Tourist Visa (Schengen, UK, US)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm text-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM GST/PKT)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM GST/PKT)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM GST/PKT)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                    Brief Summary of Your Background / Goal
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Mention your target country, degree, work experience, or specific visa goals..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-base border-0 cursor-pointer mt-2"
                >
                  Confirm Appointment Booking
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}