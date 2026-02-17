import { motion } from "framer-motion";
import { Camera, MapPin, Phone, Users, List, DollarSign, Building } from "lucide-react";

const items = [
  { icon: Building, text: "Nume Business (+ poze, dacă există)" },
  { icon: MapPin, text: "Adresa completă" },
  { icon: Phone, text: "Telefon" },
  { icon: Users, text: "Echipa (specializări + poze, dacă există)" },
  { icon: List, text: "Lista servicii (+ detalii)" },
  { icon: DollarSign, text: "Lista Prețuri" },
  { icon: Camera, text: "Detalii business (istoric, etc.)" },
];

const RequirementsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
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
              <span className="text-foreground/90 font-light">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
