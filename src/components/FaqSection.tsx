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
    answer: `Câteodată! Știm că e o investiție importantă și vrem să fie cât mai ușor să spui „da" și să începem. De aceea oferim opțiuni de plată în 2 rate la pachetul Platinum.`,
  },
  {
    question: "Mai aveți și alte pachete de website?",
    answer: `Da! Avem și proiecte custom, pentru business-uri care au nevoie de un site mai amplu, cu impact mai mare și funcționalități avansate. Spune-ne ce ai în minte și îți propunem un plan potrivit. Deschide aici whatsapp.`,
  },
  {
    question: "Cu cât timp înainte ar trebui să-mi programez ziua lansării?",
    answer: `În ziua progamării vom avea împreună o conversație telefonică și vom stabili atunci.\n\nRecomandăm, de obicei, să rezervi cu cel aprox. 2 săptămâni înainte, ca să avem timp să strângem textele și materialele necesare. Dacă ai deadline strâns, spune-ne și vedem cum te putem „strecura" în program.`,
  },
  {
    question: "Scrieți voi textele pentru site?",
    answer: `Da, serviciile de copywriting sunt incluse. Dar evident că avem nevoie de ajutorul tău. Stabilim împreună structura și conținutul și va trebui să-ți dai acordul în prealabil.`,
  },
];

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
            Cele mai frecvente întrebări
          </h2>
          <div className="divider-gold w-16 mx-auto mb-6" />
          <p className="text-foreground/80 font-light text-base leading-relaxed">
            Mai jos găsești cele mai întâlnite întrebări. Dacă nu vezi răspunsul pe care îl cauți,{" "}
            <a href="#" className="underline text-primary font-medium">
              scrie-ne în whatsapp aici
            </a>{" "}
            și îți răspundem cu drag!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-sm shadow-sm p-6"
            >
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-foreground/80 font-body text-base leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
