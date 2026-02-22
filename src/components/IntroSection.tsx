import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const IntroSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-[21px] md:text-xl text-foreground font-light leading-relaxed intro-text"
        >
          Tocmai ai pășit în locul unde site-urile premium prind viață repede.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-foreground leading-relaxed intro-text"
        >
          Știm că timpul înseamnă bani și vrem să te ajutăm să ai o imagine online de calitate,{" "}
          <span className="text-primary italic">'la cheie'</span>, ca să te apuci de treabă cât
          mai curând!
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-foreground intro-text intro-text-display text-xl md:text-2xl italic"
        >
          Prin procesul nostru optimizat de design, poți avea un site web complet personalizat în
          doar{" "}
          <span className="text-gradient-gold font-bold not-italic uppercase">o singură zi</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
