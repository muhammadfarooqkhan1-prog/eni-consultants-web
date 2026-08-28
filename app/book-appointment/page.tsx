"use client";

import { useState } from "react";
import { submitAppointmentForm } from "@/app/actions/bookAppointment";

export default function BookAppointmentSection() {
  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    country: "Saudi Arabia",
    service: "Skilled PR & Immigration",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 12:00 PM)",
    notes: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitAppointmentForm(formData);

    setIsSubmitting(false);

    if (res.success) {
      setIsSubmitted(true);
    } else {
      setErrorMessage(res.message || "Failed to submit request.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setIsSubmitted(false);
    setErrorMessage("");
  };

  return (
    <section
      className="bg-slate-950 text-white py-20 px-5 sm:px-8 border-t border-slate-800 relative overflow-hidden"
      id="book-appointment"
    >
      {/* Background Accent Glow */}
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
            Schedule a confidential assessment session with Chief
            Immigration consultant{" "}
            <strong className="text-white">Muhammad Farooq Khan</strong> to
            evaluate your profile for global visas or career optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: Value Proposition */}
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
                  <h4 className="text-white font-bold text-base">
                    48-Hour Priority Response
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Fast turnaround time to review your eligibility points, CV,
                    or visa requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff7027]/10 border border-[#ff7027]/30 flex items-center justify-center text-[#ff7027] font-bold flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    Targeted Strategy & Roadmap
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Direct assessment of Express Entry CRS points, university
                    pathways, or ATS job readiness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff7027]/10 border border-[#ff7027]/30 flex items-center justify-center text-[#ff7027] font-bold flex-shrink-0">
                  🔒
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    100% Confidential & Professional
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    Your personal documents, employment records, and identity
                    remain strictly confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Callout */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-medium">
                  Need urgent assistance?
                </p>
                <div className="flex flex-col text-xs sm:text-sm font-semibold">
                  <a
                    href="mailto:info@eniconsultants.com"
                    className="text-slate-200 hover:text-[#ff7027] transition-colors"
                  >
                    info@eniconsultants.com
                  </a>
                  <a
                    href="mailto:muhammadfarooq@eniconsultants.com"
                    className="text-slate-200 hover:text-[#ff7027] transition-colors"
                  >
                    muhammadfarooq@eniconsultants.com
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/923335911126"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-xl transition-all shadow-lg shadow-emerald-600/20 shrink-0 text-sm font-semibold"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.333 5.001L2 22l5.133-1.339c1.464.798 3.111 1.22 4.872 1.22 5.508 0 9.99-4.478 9.99-9.984 0-2.668-1.039-5.176-2.927-7.063C17.18 2.946 14.672 2 12.012 2zM12.01 3.82c2.181 0 4.232.848 5.772 2.389a8.125 8.125 0 0 1 2.392 5.777c0 4.502-3.662 8.163-8.164 8.163-1.444 0-2.852-.383-4.086-1.111l-.293-.173-3.038.793.81-2.956-.19-.303A8.136 8.136 0 0 1 3.847 12c0-4.503 3.662-8.18 8.163-8.18z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Booking Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#ff7027]/10 border border-[#ff7027] text-[#ff7027] rounded-full flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Appointment Request Received!
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you,{" "}
                  <strong className="text-white">{formData.fullName}</strong>.
                  Our team will review your preferred date (
                  <span className="text-[#ff7027]">
                    {formData.preferredDate}
                  </span>
                  ) and contact you within <strong>48 hours</strong> to confirm your schedule.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm cursor-pointer"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Reserve Your Slot
                  </h3>
                  <span className="text-xs text-slate-500">
                    * Required fields
                  </span>
                </div>

                {errorMessage && (
                  <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-3 rounded-xl text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
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
                    <label
                      htmlFor="email"
                      className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
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
                    <label
                      htmlFor="phone"
                      className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
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
                    <label
                      htmlFor="country"
                      className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Current Residence
                    </label>
                    <select
                      id="country"
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
                    <label
                      htmlFor="service"
                      className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Consultation Topic
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="Skilled PR & Immigration">
                        Skilled PR (Canada, Europe, UK)
                      </option>
                      <option value="CV & LinkedIn Optimization">
                        CV & LinkedIn Optimization
                      </option>
                      <option value="Study Visa & Admissions">
                        Study Visa & Overseas Admission
                      </option>
                      <option value="Visit & Holiday Visas">
                        Visit / Tourist Visa (Schengen, UK, US)
                      </option>
                      <option value="Schengen PhD Placement">
                        Schengen PhD Placement & Fellowships
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                  >
                    Preferred Time Slot
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">
                      Morning (9:00 AM - 12:00 PM GST/PKT)
                    </option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">
                      Afternoon (12:00 PM - 4:00 PM GST/PKT)
                    </option>
                    <option value="Evening (4:00 PM - 8:00 PM)">
                      Evening (4:00 PM - 8:00 PM GST/PKT)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2"
                  >
                    Brief Summary of Your Background / Goal
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Mention your target country, degree, work experience, or specific visa goals..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ff7027] hover:bg-[#e05a14] disabled:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-base cursor-pointer mt-2"
                >
                  {isSubmitting ? "Sending Request..." : "Confirm Appointment Booking"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}