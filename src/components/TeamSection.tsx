import { motion } from "framer-motion";
import oanaImg from "@/assets/Oana.png";
import andreeaImg from "@/assets/Andreea.png";
import johnImg from "@/assets/john.png";
import echipaImg from "@/assets/echipa_seo_doctor.png";

const team = [
  { name: "Oana", role: "Head Designer", img: oanaImg },
  { name: "Andreea", role: "Creative Director", img: andreeaImg },
  { name: "John", role: "Web Developer", img: johnImg },
];

const TeamSection = () => {
  return (
    <section id="echipa" className="py-24 md:py-32 px-6 bg-section-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-base tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Echipa
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Cine suntem noi
          </h2>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </motion.div>

        {/* Team photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <img
            src={echipaImg}
            alt="Echipa Website in One Day"
            className="w-full md:max-w-md max-w-2xl mx-auto rounded-sm shadow-gold"
          />
        </motion.div>

        {/* First paragraph - under team photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-foreground/80 font-light font-body text-base leading-relaxed">
            Când lucrăm împreună, business-ul tău devine și „copilul" nostru și îl facem să arate fix cum trebuie în cel mai scurt timp posibil.
          </p>
        </motion.div>

        {/* Individual photos - desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full max-w-xs mx-auto rounded-sm shadow-gold"
              />
            </motion.div>
          ))}
        </div>

        {/* Individual photos - mobile stacked with text after 3rd */}
        <div className="md:hidden space-y-8 mb-16">
          {team.map((member, i) => (
            <div key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full max-w-xs mx-auto rounded-sm shadow-gold"
                />
              </motion.div>
              {i === 1 && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-foreground/80 font-light font-body text-base leading-relaxed text-center max-w-3xl mx-auto mt-8"
                >
                  Cu background-ul nostru în Marketing, Administrarea Afacerilor și IT, știm ce anume face ca un design să vândă pe bune și cum îl adaptăm ca să vorbească perfect pe limba publicului tău țintă.
                </motion.p>
              )}
            </div>
          ))}
        </div>

        {/* "Cu background-ul..." - desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block max-w-3xl mx-auto text-center mb-8"
        >
          <p className="text-foreground/80 font-light font-body text-base leading-relaxed">
            Cu background-ul nostru în Marketing, Administrarea Afacerilor și IT, știm ce anume face ca un design să vândă pe bune și cum îl adaptăm ca să vorbească perfect pe limba publicului tău țintă.
          </p>
        </motion.div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-foreground/80 font-light font-body text-xl md:text-2xl leading-relaxed italic font-display">
            Noi nu facem doar „să arate frumos". Facem să-ți aducă bani.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
