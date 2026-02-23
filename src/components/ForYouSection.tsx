import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const UnderlinedText = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <motion.span
    className="relative inline"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {children}
    <motion.span
      className="absolute left-0 bottom-0 h-[2px] bg-orange-500 origin-left"
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1 }
      }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      style={{ width: "100%" }}
    />
  </motion.span>
);

const ForYouSection = () => {
  return (
    <section id="pentru-tine" className="py-24 md:py-32 px-6 bg-section-beige">
      <div className="max-w-5xl mx-auto">
        {/* Este pentru tine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Acest serviciu este pentru tine, dacă:
            </h2>
            <div className="divider-gold w-16 mx-auto mt-6" />
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                Ai nevoie de un <UnderlinedText delay={0.5}>site de prezentare</UnderlinedText>, funcțional, estetic și publicat rapid, fără să te pierzi în termeni tehnici sau luni de așteptare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                <UnderlinedText delay={2}>Ai o afacere locală care nu vinde produse fizice</UnderlinedText> (de ex.: cabinete medicale, avocați, contabili, psihologi, consultanți, designeri, profesori, instalatori, electricieni, artiști, saloane beauty).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                Ai o <UnderlinedText delay={3.5}>firmă nouă</UnderlinedText> și vrei să intri în piață cu un impact vizual puternic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                <UnderlinedText delay={5}>Ai deja un site, dar care nu-ți aduce clienți</UnderlinedText>
                {" "}(îl refacem complet în doar o zi și îl optimizăm ca să-ți aducă mai multe apeluri).
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="font-lora md:font-body text-[19px] md:text-[21px] text-dark-gray md:text-foreground font-light italic mb-6">
              Ești gata să fii online mâine? Rezervă-ți ziua acum.
            </p>
            <a
              href="https://wa.me/40742702982"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-gold text-primary-foreground font-light px-10 py-4 rounded-sm tracking-wider uppercase text-[18px] md:text-[17px] hover:opacity-90 transition-opacity"
            >
              Vreau site-ul meu în 24h!
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-4 text-sm text-muted-foreground font-light">
              <span>✓ Fără costuri ascunse.</span>
              <span>✓ Include optimizare mobil.</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="divider-gold w-24 mx-auto mb-20" />

        {/* Abordare diferită */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Această ofertă nu este pentru tine, dacă:
            </h2>
            <div className="divider-gold w-16 mx-auto mt-6" />
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <ArrowRight className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                Nu vrei să crești.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <ArrowRight className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                Ești mulțumit cu câți clienți ai acum.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <ArrowRight className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                Nu ți-ai dat seama că dacă nu apari online în 2026 - pur și simplu nu exiști.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <ArrowRight className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-[19px] text-dark-gray md:text-foreground font-light leading-relaxed intro-text">
                Ai nevoie de un magazin online de anvergură, o platformă cu mii de utilizatori sau integrări software personalizate (acestea necesită o etapă suplimentară de planificare și dezvoltare, pe care o putem aborda într-un proiect separat).
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://wa.me/40742702982"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-gold text-primary-foreground font-light px-10 py-4 rounded-sm tracking-wider uppercase text-[18px] md:text-[17px] hover:opacity-90 transition-opacity"
            >
              Vreau oferta pentru magazin online!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForYouSection;
