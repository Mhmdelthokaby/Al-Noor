import { HeroSection } from "@/components/home/hero";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { TeachersSection } from "@/components/home/teachers-section";
import { PricingPreview } from "@/components/home/pricing-preview";
import { Testimonials } from "@/components/home/testimonials";
import { FAQSection } from "@/components/home/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCourses />
      <TeachersSection />
      <PricingPreview />
      <Testimonials />
      <FAQSection />
    </>
  );
}
