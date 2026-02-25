import { motion } from "framer-motion";
import { useShaderBackground } from "@/components/hero-animation/shaders";
import heroBg from "@/assets/hero-bg.jpg";


const HeroSection = () => {
  const canvasRef = useShaderBackground();

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-contain touch-none"
      />
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
          <p className="text-[19px] font-body tracking-[0.3em] uppercase text-primary mb-8">
            Premium Web Design
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-foreground px-2">
            <span className="font-normal">Ești pregătit pentru
            <br />
            experiența</span>
            <br />
            <span className="text-primary italic">
              {"'website intr-o zi' ?".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * (1.5 / 22), duration: 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
          <div className="divider-gold w-24 mx-auto my-8" />
          <p className="text-[19px] text-dark-gray md:text-foreground leading-relaxed intro-text mt-4 font-bold">
            Ai nevoie de un site rapid? Îl ai în 24 de ore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8"
        >
          <a
            href="#pentru-tine"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pentru-tine')?.scrollIntoView({ behavior: 'smooth' });
            }}
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
            <p className="text-[19px] text-dark-gray md:text-foreground leading-relaxed intro-text">
            Știm că timpul înseamnă bani și vrem să te ajutăm să ai o imagine online de calitate,{" "}
            'la cheie', ca să te apuci de treabă cât mai curând!
          </p>
          <p className="text-[19px] text-dark-gray md:text-foreground leading-relaxed intro-text">
            Prin procesul nostru optimizat de design, poți avea un site web complet personalizat în
            doar{" "}
            <span className="italic font-bold">o singură zi</span>.
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

  </>
  );
};

export default HeroSection;
