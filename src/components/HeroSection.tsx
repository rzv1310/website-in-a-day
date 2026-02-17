import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-base font-body tracking-[0.3em] uppercase text-primary mb-8">
            Premium Web Design
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
            Ești pregătit pentru aventura
            <br className="hidden md:block" />
            <span className="text-gradient-gold italic whitespace-nowrap">'website in one day' ?</span>
          </h1>
          <div className="divider-gold w-24 mx-auto my-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8"
        >
          <a
            href="#pregatire"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-light px-10 py-4 rounded-sm tracking-wider uppercase text-base hover:opacity-90 transition-opacity"
          >
            Știm că vrei să afli mai mult
            <span className="inline-block animate-bounce">↓</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 max-w-3xl mx-auto space-y-6"
        >
          <p className="text-base text-foreground font-body leading-relaxed">
            Tocmai ai pășit în locul unde site-urile premium prind viață repede.
          </p>
          <p className="text-base text-foreground font-body leading-relaxed">
            Știm că timpul înseamnă bani și vrem să te ajutăm să ai o imagine online de calitate,{" "}
            'la cheie', ca să te apuci de treabă cât mai curând!
          </p>
          <p className="text-base text-foreground font-body leading-relaxed">
            Prin procesul nostru optimizat de design, poți avea un site web complet personalizat în
            doar{" "}
            <span className="italic">o singură zi</span>.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
