import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-32 md:py-40 px-6 text-center bg-section-beige">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          Ești gata pentru{" "}
          <span className="text-primary italic">noua ta imagine digitală</span>?
        </h2>
        <div className="divider-gold w-16 mx-auto my-8" />
        <p className="text-foreground font-light mb-10 text-[19px]">
          Hai să vorbim. Primul pas e un simplu apel.
        </p>
        <a
          href="https://wa.me/40742702982"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-gold text-primary-foreground font-light px-12 py-4 rounded-sm tracking-wider uppercase text-base hover:opacity-90 transition-opacity"
        >
          Programează un apel
        </a>
      </motion.div>
    </section>
  );
};

export default CtaSection;
