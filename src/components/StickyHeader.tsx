import { useIsMobile } from "@/hooks/use-mobile";
import { Phone } from "lucide-react";

const StickyHeader = () => {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass =
    "text-[13px] tracking-[0.15em] uppercase font-body text-foreground/80 hover:text-primary transition-colors cursor-pointer";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="max-w-5xl mx-auto flex items-center justify-center gap-6 md:gap-10 h-12 px-4">
        {!isMobile && (
          <button onClick={() => scrollTo("echipa")} className={linkClass}>
            Echipa
          </button>
        )}
        {isMobile ? (
          <>
            <button onClick={() => scrollTo("testimoniale")} className={linkClass}>
              Recenzii
            </button>
            <button onClick={() => scrollTo("pachete")} className={linkClass}>
              Prețuri
            </button>
            <button onClick={() => scrollTo("faq")} className={linkClass}>
              FAQs
            </button>
            <a
              href="https://wa.me/40742702982"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Contact WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
          </>
        ) : (
          <>
            <button onClick={() => scrollTo("pachete")} className={linkClass}>
              Prețuri
            </button>
            <button onClick={() => scrollTo("testimoniale")} className={linkClass}>
              Recenzii
            </button>
            <button onClick={() => scrollTo("faq")} className={linkClass}>
              FAQs
            </button>
            <a
              href="https://wa.me/40742702982"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Contact
            </a>
          </>
        )}
      </nav>
    </header>
  );
};

export default StickyHeader;
