import { motion } from "framer-motion";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import bogdanPhoto from "@/assets/bogdan_lamatic.webp";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Bogdan L.",
    profession: "Avocat, București",
    rating: 5,
    description:
      "Site-ul meu e senzațional! Designul e foarte elegant, se încarcă rapid, iar colegii mei avocați sunt invidioși. Cea mai bună investiție făcută.",
    avatarUrl: bogdanPhoto,
  },
  {
    id: "testimonial-2",
    name: "Mihaela P.",
    profession: "Proprietar Clinică Medicală",
    rating: 5,
    description:
      "Sincer, nu credeam că e posibil așa un site profi în 24 de ore. M-am înșelat. Totul arată exact cum mi-am dorit și funcționează perfect pe mobil. Mulțumesc Oana ❤️❤️❤️",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-3",
    name: "Matei R.",
    profession: "Medic Stomatolog",
    rating: 5,
    description:
      "Am avut site la cabinet ani de zile. Acum, după o singură zi, am unul de 10 ori mai bun, mai frumos și mai intuitiv pentru pacienții mei. O recomand cu drag pe Andreea, dar toată echipa e de nota 10 !!",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-4",
    name: "Elena M.",
    profession: "Coach & Trainer, Timișoara",
    rating: 5,
    description:
      "Prețul e corect, livrarea e rapidă și rezultatul e wow. Am recomandat deja 3 prieteni. Dacă vrei un site care aduce clienți, aceasta e alegerea.",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=200&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimoniale" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[19px] tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Testimoniale
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Ce spun clienții noștri
          </h2>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </motion.div>

        <ContainerScroll className="h-[80vh]">
          <div className="sticky top-[10vh] h-[60vh] flex items-start justify-center overflow-visible">
            <CardsContainer className="relative w-full max-w-lg h-[400px] mx-auto overflow-visible">
              {TESTIMONIALS.map((testimonial, index) => (
                <CardTransformed
                  key={testimonial.id}
                  arrayLength={TESTIMONIALS.length}
                  index={index}
                  variant="light"
                  incrementY={12}
                  incrementZ={10}
                  className="border-border/60 bg-card/90 shadow-gold"
                >
                  <div className="flex flex-col gap-4 w-full">
                    <ReviewStars rating={testimonial.rating} />
                    <p className="font-body text-[17px] leading-relaxed text-foreground/80 italic">
                      „{testimonial.description}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full pt-2 border-t border-border/40">
                    <Avatar className="size-11 border border-border">
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                      <AvatarFallback className="bg-secondary text-primary font-body text-sm">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
