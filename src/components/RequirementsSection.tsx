import { motion, useInView } from "framer-motion";
import { Camera, MapPin, Phone, Users, List, DollarSign, Building } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const items = [
  { icon: Building, text: "Nume Business (+ poze, dacă există)" },
  { icon: MapPin, text: "Adresa completă" },
  { icon: Phone, text: "Telefon" },
  { icon: Users, text: "Echipa (specializări + poze, dacă există)" },
  { icon: List, text: "Lista servicii (+ detalii)" },
  { icon: DollarSign, text: "Lista Prețuri" },
  { icon: Camera, text: "Detalii business (istoric, etc.)" },
];

const AnimatedCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const RequirementsSection = () => {
  return (
    <section id="pregatire" className="py-24 md:py-32 px-6 bg-section-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-base tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Pregătire
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Ce avem nevoie de la tine
          </h2>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-sm border border-gold bg-secondary/30"
            >
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground/90 font-light text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-display text-2xl md:text-3xl text-foreground"
        >
          Am construit <AnimatedCounter target={125} duration={2} />+ site-uri într-o zi!
        </motion.p>
      </div>
    </section>
  );
};

export default RequirementsSection;
