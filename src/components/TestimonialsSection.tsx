import { motion } from "framer-motion";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Mihai D.",
    profession: "Antreprenor, Cluj",
    rating: 5,
    description:
      "Site-ul meu a fost gata în 18 ore! Designul e elegant, se încarcă rapid și deja primesc mesaje de la clienți noi. Cea mai bună investiție făcută.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-2",
    name: "Andreea P.",
    profession: "Consultant Financiar, București",
    rating: 5,
    description:
      "Sincer, nu credeam că e posibil un site profesional în 24 de ore. M-am înșelat. Totul arată exact cum mi-am dorit și funcționează perfect pe mobil.",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-3",
    name: "Radu T.",
    profession: "Proprietar Salon, Iași",
    rating: 5,
    description:
      "Am avut site la altă firmă ani de zile. Acum, după un singur zi cu echipa asta, am un site de 10 ori mai bun. Clienții mă întreabă cine mi l-a făcut.",
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

        <ContainerScroll className="h-[160vh]">
          <div className="sticky top-[15vh] h-[70vh] flex items-start justify-center">
            <CardsContainer className="relative w-full max-w-lg h-[420px] mx-auto">
              {TESTIMONIALS.map((testimonial, index) => (
                <CardTransformed
                  key={testimonial.id}
                  arrayLength={TESTIMONIALS.length}
                  index={index}
                  variant="light"
                  incrementY={14}
                  incrementZ={8}
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
