import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Camera, MapPin, Phone, Users, List, DollarSign, Building } from "lucide-react";
import echipaImg from "@/assets/echipa_seo_doctor.webp";

const items = [
  { icon: Building, text: "Nume Business (+ poze)" },
  { icon: MapPin, text: "Adresa completă" },
  { icon: Phone, text: "Telefon" },
  { icon: Users, text: "Echipa (specializări + poze)" },
  { icon: List, text: "Lista servicii (+ detalii)" },
  { icon: DollarSign, text: "Lista Prețuri" },
  { icon: Camera, text: "Detalii business (istoric, etc.)" },
];

const RequirementsSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="pregatire" className="py-24 md:py-32 px-6 bg-section-white">
      <div className="max-w-6xl mx-auto">
        {/* Desktop: side by side / Mobile: stacked */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:items-start">
          {/* Left: Team photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex-shrink-0"
          >
            <img
              src={echipaImg}
              alt="Echipa Website in One Day"
              className="w-full max-w-md mx-auto md:mx-0 rounded-sm shadow-gold pointer-events-none"
            />
          </motion.div>

          {/* Right: Pregătire content */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left mb-12"
            >
              <p className="text-[19px] tracking-[0.3em] uppercase text-primary mb-4 font-body">
                Pregătire
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Ce avem nevoie de la tine
              </h2>
              <div className="divider-gold w-16 mx-auto md:mx-0 mt-6" />
            </motion.div>

            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-sm border border-gold"
                  style={{ backgroundColor: "#ffebce" }}
                >
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-light text-[21px]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee - full width below both */}
        <div className="overflow-hidden mt-16">
          <div
            className="whitespace-nowrap inline-flex gap-12"
            style={{
              animation: `marquee ${isMobile ? "20s" : "30s"} linear infinite`,
            }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl italic text-primary shrink-0">
                🤍🤍🤍 Am construit de 125 de ori 125 de site-uri într-o zi!
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
