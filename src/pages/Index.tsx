import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import RequirementsSection from "@/components/RequirementsSection";
import StepsSection from "@/components/StepsSection";
import TeamSection from "@/components/TeamSection";
import PackagesSection from "@/components/PackagesSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <RequirementsSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 text-center bg-background"
      >
        <p className="text-primary font-display text-2xl md:text-3xl">
          Am construit <span className="font-bold">125+</span> site-uri într-o zi!
        </p>
      </motion.div>
      <StepsSection />
      <TeamSection />
      <PackagesSection />
      <CtaSection />
    </div>
  );
};

export default Index;
