import { motion } from "framer-motion";

const phases = [
  {
    label: "Faza 1",
    subtitle: "Astăzi",
    steps: [
      "Apel telefonic în care stabilim strategia (30 min).",
      "Programăm ziua lansării.",
      "Semnăm contractul și achiți investiția.",
    ],
  },
  {
    label: "Faza 2",
    subtitle: "Pregătire",
    steps: [
      "Începem munca de pregătire (texte, poze, info, îți analizăm concurența).",
    ],
  },
  {
    label: "Faza 3",
    subtitle: "Ziua cea mare",
    steps: [
      "Website design day: 08:00 – 15:00",
      "Revizii design: 15:00 – 17:00",
      "Îți lansăm site-ul și începi să te lauzi cu noua ta imagine!",
    ],
  },
];

const StepsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-section-beige">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[19px] tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Procesul
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Care sunt pașii
          </h2>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {/* Glowing dot traveling down the line */}
          <motion.div
            className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
            style={{
              background: "white",
              boxShadow: "0 0 8px 4px rgba(255,255,255,0.8), 0 0 20px 8px rgba(255,255,255,0.4)",
            }}
            initial={{ top: "0%" }}
            whileInView={{ top: ["0%", "100%"] }}
            viewport={{ once: true }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          />

          <div className="space-y-16">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-gradient-gold shadow-gold" />

                <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <p className="text-primary text-[19px] tracking-[0.2em] uppercase font-body mb-1">
                    {phase.label}
                  </p>
                  <h3 className="font-display text-2xl text-foreground mb-4">{phase.subtitle}</h3>
                  <ul className="space-y-2">
                    {phase.steps.map((step, j) => (
                      <li
                        key={j}
                        className={`font-light text-[19px] leading-relaxed ${
                          step.startsWith("Îți lansăm")
                            ? "text-foreground font-bold"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
