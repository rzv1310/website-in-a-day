import { useIsMobile } from "@/hooks/use-mobile";
import { Phone, Home } from "lucide-react";

const StickyHeader = () => {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const linkClass =
    "text-[13px] tracking-[0.15em] uppercase font-body text-foreground/80 hover:text-primary transition-colors cursor-pointer";

  const mobileLinkClass =
    "text-[13px] tracking-[0.15em] uppercase font-body font-bold text-foreground/80 hover:text-primary transition-colors cursor-pointer";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="max-w-5xl mx-auto flex items-center h-12 px-4">
        {isMobile ? (
          <>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-foreground/80 hover:text-primary transition-colors mr-auto"
              aria-label="Acasă"
            >
              <Home className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-5">
              <button onClick={() => scrollTo("testimoniale")} className={mobileLinkClass}>
                Recenzii
              </button>
              <button onClick={() => scrollTo("pachete")} className={mobileLinkClass}>
                Prețuri
              </button>
              <button onClick={() => scrollTo("faq")} className={mobileLinkClass}>
                FAQs
              </button>
            </div>
            <a
              href="https://wa.me/40742702982"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors ml-auto"
              aria-label="Contact WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
          </>
        ) : (
          <div className="flex items-center justify-center gap-10 w-full">
            <button onClick={() => scrollTo("echipa")} className={linkClass}>
              Echipa
            </button>
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default StickyHeader;
