import BestSellingSection from "@/components/homapage-components/best-selling-section";
import ExperienceSection from "@/components/homapage-components/experience-section";
import FooterSection from "@/components/homapage-components/footer-section";
import HeroSection from "@/components/homapage-components/hero-section";
import MaterialSection from "@/components/homapage-components/material-section";
import TestimonialSection from "@/components/homapage-components/testimonial-section";
import WhySection from "@/components/homapage-components/why-section";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />

      <WhySection />

      <BestSellingSection />

      <ExperienceSection />

      <MaterialSection />

      <TestimonialSection />
    </main>
  );
}
