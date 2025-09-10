import HeroSection from "@/components/hero-section";
import WhySection from "@/components/why-section";
import BestSellingSection from "@/components/best-selling-section";
import ExperienceSection from "@/components/experience-section";
import MaterialSection from "@/components/material-section";
import TestimonialSection from "@/components/testimonial-section";
import FooterSection from "@/components/footer-section";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />

      <WhySection />

      <BestSellingSection />

      <ExperienceSection />

      <MaterialSection />

      <TestimonialSection />

      <FooterSection />
    </main>
  );
}
