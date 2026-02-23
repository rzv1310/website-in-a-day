import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

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
                Ai nevoie de un site de prezentare, funcțional, estetic și publicat rapid, fără să te pierzi în termeni tehnici sau luni de așteptare.
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
                <span className="font-semibold">Ai o afacere locală care nu vinde produse fizice</span> (de ex.: cabinete medicale, avocați, contabili, psihologi, consultanți, designeri, profesori, instalatori, electricieni, artiști, saloane beauty) sau firme noi care vor să intre în piață cu un impact vizual puternic.
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
                Vrei un magazin online de anvergură, o platformă cu mii de utilizatori sau integrări software personalizate.
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
                Acestea necesită o etapă suplimentară de planificare și dezvoltare, pe care o putem aborda într-un proiect separat.
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
