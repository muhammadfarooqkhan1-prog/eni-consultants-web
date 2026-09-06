import DestinationsSection from "./components/DestinationsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import SchengenPhdBanner from "./components/SchengenPhdBanner"; 
import FloatingReviewToast from "./components/FloatingReviewToast";

export default function HomePage() {
  return (
    <main>
      {/* Hero section with video & overlay text */}
      <Hero />
      <ServicesSection />
      <SchengenPhdBanner />
      <DestinationsSection />
      <WhyChooseUs />
      <FloatingReviewToast />
      <Footer />

      {/* You can add more homepage sections below here later */}
    </main>
  );
}