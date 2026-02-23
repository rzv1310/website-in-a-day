import HeroSection from "@/components/HeroSection";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ForYouSection from "@/components/ForYouSection";
import RequirementsSection from "@/components/RequirementsSection";
import StepsSection from "@/components/StepsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoFeedSection from "@/components/VideoFeedSection";
import SpiralCtaSection from "@/components/SpiralCtaSection";
import PackagesSection from "@/components/PackagesSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="bg-background min-h-screen select-none" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <ForYouSection />
      <RequirementsSection />
      <StepsSection />
      <TeamSection />
      <TestimonialsSection />
      <VideoFeedSection />
      <SpiralCtaSection />
      <PackagesSection />
      <FaqSection />
      <CtaSection />
      <AccessibilityWidget />
      <CookieConsent />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
