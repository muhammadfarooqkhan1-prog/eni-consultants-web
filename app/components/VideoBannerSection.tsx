import { Globe2 } from "lucide-react";

export default function VideoBannerSection() {
  return (
    <section className="py-8 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-72 sm:h-96 flex items-center justify-center group">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
        >
          <source src="/videos/Canada Immigration.mp4" type="video/mp4" />
        </video>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        {/* Floating Text Overlay */}
        <div className="relative z-10 text-center max-w-2xl px-6 space-y-3">
          <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 text-[#ff7027] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md">
            <Globe2 className="w-4 h-4" />
            <span>Global Opportunities Await</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Explore Admissions, Career Growth & Permanent Residency
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            Turn your study and work aspirations into a seamless reality with expert immigration strategy.
          </p>
        </div>

      </div>
    </section>
  );
}