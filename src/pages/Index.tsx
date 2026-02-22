import HeroSection from "@/components/HeroSection";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import RequirementsSection from "@/components/RequirementsSection";
import StepsSection from "@/components/StepsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoFeedSection from "@/components/VideoFeedSection";
import PackagesSection from "@/components/PackagesSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="bg-background min-h-screen select-none">
      <HeroSection />
      <RequirementsSection />
      <StepsSection />
      <TeamSection />
      <TestimonialsSection />
      <VideoFeedSection />
      <PackagesSection />
      <FaqSection />
      <CtaSection />
      <AccessibilityWidget />
      <CookieConsent />
    </div>
  );
};

export default Index;
