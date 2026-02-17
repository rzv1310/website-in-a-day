import { motion } from "framer-motion";

const faqs = [
  {
    question: "Trebuie să fiu disponibil(ă) în ziua lansării?",
    answer: `Da, va trebui să fii disponibil(ă) în ziua respectivă. Nu trebuie să stai lipit(ă) de laptop toată ziua, dar e important să ai telefonul aproape ca să poți răspunde rapid dacă apar întrebări sau avem nevoie de feedback.\n\nTe rugăm să-ți rezervi o fereastră liberă spre finalul zilei, după ora 15:00 (când îți prezentăm site-ul și facem reviziile).`,
  },
  {
    question: "Există costuri suplimentare?",
    answer: `Da. Ai nevoie de un domeniu și de găzduire (hosting). Dacă nu vrei stress, ne ocupăm noi de tot, inclusiv suport tehnic permanent, pentru doar 100 lei pe lună.`,
  },
  {
    question: "Oferiți plata în rate?",
    answer: `Câteodată! Știm că e o investiție importantă și vrem să fie cât mai ușor să spui „da" și să începem. De aceea oferim opțiuni de plată în 2 rate lunare la pachetul Platinum.`,
  },
  {
    question: "Mai aveți și alte pachete de website?",
    answer: `Da! Avem și proiecte custom, pentru business-uri care au nevoie de un site mai amplu, cu impact mai mare și funcționalități avansate. Spune-ne ce ai în minte și îți propunem un plan potrivit.`,
    hasWhatsappLink: true,
  },
  {
    question: "Cu cât timp înainte ar trebui să-mi programez ziua lansării?",
    answer: `În ziua progamării vom avea împreună o conversație telefonică și vom stabili atunci.\n\nRecomandăm, de obicei, să rezervi cu aprox. 2 săptămâni înainte, ca să avem timp să strângem textele și materialele necesare. Dacă ai deadline strâns, spune-ne și vedem cum te putem „strecura" în program.`,
  },
  {
    question: "Scrieți voi textele pentru site?",
    answer: `Da, serviciile de copywriting sunt incluse. Dar evident că avem nevoie de ajutorul tău. Stabilim împreună structura și conținutul și va trebui să-ți dai acordul în prealabil.`,
  },
];

const clipPaths = [
  "polygon(0% 2%, 98% 0%, 100% 97%, 1% 100%)",
  "polygon(1% 0%, 100% 1%, 99% 100%, 0% 98%)",
  "polygon(0% 1%, 99% 0%, 100% 99%, 2% 100%)",
  "polygon(2% 0%, 100% 2%, 98% 100%, 0% 99%)",
  "polygon(0% 0%, 97% 1%, 100% 100%, 1% 98%)",
  "polygon(1% 1%, 100% 0%, 99% 98%, 0% 100%)",
];

const rotations = ["-0.8deg", "0.6deg", "0.5deg", "-0.7deg", "0.4deg", "-0.5deg"];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 px-6" style={{ backgroundColor: "#ffebce" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            FAQs
          </h2>
          <div className="divider-gold w-16 mx-auto mb-6" />
          <p className="text-foreground/80 font-light text-[19px] leading-relaxed">
            Mai jos găsești cele mai întâlnite întrebări. Dacă nu vezi răspunsul pe care îl cauți,{" "}
            <a href="https://wa.me/40742702982" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white font-medium px-3 py-1 rounded-md no-underline hover:opacity-90 transition-opacity text-[16px]">
              scrie-ne în whatsapp aici
            </a>{" "}
            și îți răspundem cu drag!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white shadow-md p-7 flex flex-col justify-start h-full"
              style={{
                clipPath: clipPaths[i % clipPaths.length],
                transform: `rotate(${rotations[i % rotations.length]})`,
              }}
            >
              <h3 className="font-display text-[19px] md:text-[19px] font-semibold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-primary font-body text-[19px] leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
              {(faq as any).hasWhatsappLink && (
                <a href="https://wa.me/40742702982" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white font-medium px-3 py-1 rounded-md no-underline hover:opacity-90 transition-opacity text-[16px] mt-2 self-start">
                  Deschide WhatsApp
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
