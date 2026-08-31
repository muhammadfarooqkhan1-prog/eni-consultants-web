"use client";

import { useState } from "react";
import Link from "next/link";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  countryOfResidence: "Saudi Arabia",
  pathway: "Canada Express Entry / PR",
  ageGroup: "21 - 32 years (Max points)",
  educationLevel: "Master's Degree / Dual Bachelor's",
  workExperience: "3 - 5 Years",
  englishProficiency: "IELTS / PTE Completed",
  hasJobOffer: "No (Seeking Optimization)",
  notes: "",
};

export default function CheckEligibilityPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || "Transmission failed. Please check your details and try again.");
      }
    } catch (error) {
      setErrorMessage("Network connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResetForm = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen py-16 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#ff7027] font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#ff7027]/10 px-4 py-1.5 rounded-full border border-[#ff7027]/20">
            Free Point Grid & Visa Assessment
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            Check Your Eligibility Status
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Evaluate your points and qualifications for Skilled PR, Overseas Admission, or Profile Optimization across Canada, UK, Europe, and Asia.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl relative">
          
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-[#ff7027]/10 border border-[#ff7027] text-[#ff7027] rounded-full flex items-center justify-center text-4xl mx-auto">
                ✓
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Assessment Submitted Successfully!
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Senior consultant <strong className="text-white">Muhammad Farooq Khan</strong> and our technical evaluation team will review your point parameters and contact you within 24 to 48 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleResetForm}
                  className="bg-[#ff7027] hover:bg-[#e05a14] text-white font-bold px-8 py-3 rounded-xl transition-all text-sm border-0 cursor-pointer"
                >
                  Submit Another Profile
                </button>
                <Link
                  href="/"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-8 py-3 rounded-xl transition-all text-sm no-underline border border-slate-700 text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {errorMessage && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 p-4 rounded-xl text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Step 1: Profile & Pathway Details */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                  <span className="text-[#ff7027]">1.</span> Select Your Target Pathway & Contact Info
                </h3>

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
                      placeholder="e.g. Tariq Mehmood"
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
                      placeholder="e.g. tariq@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
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
                      Country of Residence
                    </label>
                    <select
                      name="countryOfResidence"
                      value={formData.countryOfResidence}
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
                      <option value="Other">Other Global Residence</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Target Destination / Service
                    </label>
                    <select
                      name="pathway"
                      value={formData.pathway}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="Canada Express Entry / PR">Canada Express Entry / PNP PR</option>
                      <option value="Schengen PhD Placement & Research Fellowships">Schengen PhD Placement & Research Fellowships</option>
                      <option value="UK Skilled Worker Route">UK Skilled Worker Route</option>
                      <option value="CV & LinkedIn Optimization (Middle East / Western)">CV & LinkedIn Optimization</option>
                      <option value="Study Abroad Admissions">Study Abroad & Student Visa</option>
                      <option value="Schengen / Visit Visas">Schengen / Tourist Visa</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Qualifications & Point Criteria */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                  <span className="text-[#ff7027]">2.</span> Credentials & Points Grid Parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Age Bracket
                    </label>
                    <select
                      name="ageGroup"
                      value={formData.ageGroup}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="18 - 20 years">18 - 20 years</option>
                      <option value="21 - 32 years (Max points)">21 - 32 years (Maximum Point Weightage)</option>
                      <option value="33 - 39 years">33 - 39 years</option>
                      <option value="40 - 44 years">40 - 44 years</option>
                      <option value="45+ years">45+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Highest Education Qualification
                    </label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="Master's Degree / Dual Bachelor's">Master's Degree / Post-Graduate Diploma</option>
                      <option value="Bachelor's Degree (4 Years)">Bachelor's Degree (4 Years)</option>
                      <option value="3-Year Diploma / Associate Degree">3-Year Higher Diploma</option>
                      <option value="PhD / Doctorate">PhD / Doctorate</option>
                      <option value="High School / Secondary">High School / Intermediate</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Total Relevant Work Experience
                    </label>
                    <select
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="Less than 1 Year">Less than 1 Year</option>
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="6+ Years (Maximum Points)">6+ Years (Maximum Points)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      English Language Proficiency
                    </label>
                    <select
                      name="englishProficiency"
                      value={formData.englishProficiency}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="IELTS / PTE Completed">IELTS / PTE Completed (Valid Band)</option>
                      <option value="Planning to take test">Planning to take test soon</option>
                      <option value="Need Language Coaching Guidance">Need Language Coaching Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                      Do You Have a Valid Overseas Job Offer?
                    </label>
                    <select
                      name="hasJobOffer"
                      value={formData.hasJobOffer}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm"
                    >
                      <option value="No (Seeking Optimization)">No (Need ATS Profile Optimization)</option>
                      <option value="Yes (Sponsorship Available)">Yes (Sponsorship Available)</option>
                      <option value="In Progress / Interviewing">In Progress / Currently Interviewing</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Additional Details */}
              <div>
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Specific Requirements or Questions (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Include details about your occupation title, target budget, or immigration timelines..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff7027] text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#ff7027] hover:bg-[#e05a14] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-base border-0 cursor-pointer"
              >
                {isLoading ? "Analyzing Eligibility Criteria..." : "Submit Profile for Evaluation"}
              </button>

            </form>
          )}

        </div>

      </div>
    </main>
  );
}