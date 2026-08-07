"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  const reviews = [
    {
      img: "/Hira_Azan.jpeg",
      quote: "As a LUMS graduate, I needed expert guidance. Working with Muhammad Farooq Khan provided precise, step-by-step support. I successfully transitioned to Canada PR and achieved my goal of becoming a Canadian Citizen! Highly recommended.",
      name: "Hira Azaan",
      location: "Lahore 2020",
      service: "Canada PR",
      rating: "★★★★★",
    },
    {
      img: "/Daniyal_Khan.jpeg",
      quote: "ENI Consultants handled our family's US Green Card application back in 2018. Thanks to their expert guidance, our entire family received Green Cards, relocated smoothly to the USA, and today we are proud American citizens! I highly recommend their team for reliable, end-to-end immigration support.",
      name: "Muhammad Daniyal Khan",
      location: "USA 2018",
      service: "USA Immigration",
      rating: "★★★★★",
    },
    {
      img: null,
      quote: "When we decided to immigrate to Canada under the Express Entry Skilled Professional pathway for pilots, a family relative recommended ENI Consultants with high expectations. Their deep knowledge of specialized professional categories and end-to-end guidance exceeded all our hopes. We are deeply grateful to their team for handling our file with complete precision.",
      name: "Hassaan Zahid",
      location: "Lahore, Pakistan 2025",
      service: "Canada PR",
      rating: "★★★★★",
    },
    {
      img: null,
      quote: "As a business person with a busy schedule, applying for short-duration UK visit visas was becoming far too time-consuming. Having known Muhammad Farooq Khan for several years, I trusted his expertise to handle my profile. Thanks to his strategic guidance, I secured a 5-year long-term UK visit visa, giving me the flexibility I need for business travel without recurring visa hassles.",
      name: "Mussyeb Ali Khan",
      location: "Pakistan 2025",
      service: "UK Visit Visa",
      rating: "★★★★★",
    },
    {
      img: null,
      quote: "After completing my Software Engineering degree at COMSATS Pakistan and working in the industry for ten years, I felt it was time to explore global opportunities for higher education and career growth. Meeting Muhammad Farooq Khan was a turning point. With his professional guidance, I successfully completed my Master's degree in Software Engineering abroad, and I am now confidently pursuing my PhD degree in Finland.",
      name: "Hammad Khattak",
      location: "Helsinki, Finland 2025",
      service: "Study Visa Finland",
      rating: "★★★★★",
    },
  ];

  return (
    <div className="w-full relative px-2">
      <Swiper
        // Responsive breakpoints for card width
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 }, // Mobile: 1 card
          768: { slidesPerView: 2, spaceBetween: 25 }, // Tablet: 2 cards
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop: 3 cards
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="testimonial-swiper !pb-16"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-[380px] hover:border-[#ff7027] transition-all duration-300 shadow-xl group">
              
              {/* Star Rating & Quote */}
              <div>
                <div className="text-[#ff7027] text-sm mb-3 font-bold">{review.rating}</div>
                <div className="relative">
                  <span className="text-4xl text-slate-800 absolute -top-4 -left-2 font-serif opacity-50">“</span>
                  <p className="text-slate-300 text-sm italic leading-relaxed mb-6 relative z-10">
                    {review.quote}
                  </p>
                </div>
              </div>

              {/* Client Info (Bottom) */}
              <div className="border-t border-slate-800 pt-5 flex items-center gap-3">
                {review.img ? (
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src={review.img}
                      alt={review.name}
                      fill
                      className="rounded-full object-cover border-2 border-slate-800"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-[#ff7027] font-bold text-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                )}
                
                <div className="overflow-hidden">
                  <h4 className="text-white font-bold text-sm truncate">{review.name}</h4>
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider">{review.location}</p>
                  <span className="text-[#ff7027] text-[10px] font-bold mt-1 block">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modern Slim Styling */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #475569;
          opacity: 0.5;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #ff7027 !important;
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #ff7027 !important;
          transform: scale(0.4);
          background: rgba(15, 23, 42, 0.8);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #1e293b;
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}