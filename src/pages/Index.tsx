import HeroSection from "@/components/HeroSection";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import RequirementsSection from "@/components/RequirementsSection";
import StepsSection from "@/components/StepsSection";
import TeamSection from "@/components/TeamSection";
import PackagesSection from "@/components/PackagesSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <RequirementsSection />
      <StepsSection />
      <TeamSection />
      <PackagesSection />
      <FaqSection />
      <CtaSection />
      <AccessibilityWidget />
    </div>
  );
};

export default Index;
