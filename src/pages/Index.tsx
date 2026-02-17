import HeroSection from "@/components/HeroSection";
import RequirementsSection from "@/components/RequirementsSection";
import StepsSection from "@/components/StepsSection";
import PackagesSection from "@/components/PackagesSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <RequirementsSection />
      <StepsSection />
      <PackagesSection />
      <CtaSection />
    </div>
  );
};

export default Index;
