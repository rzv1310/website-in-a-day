import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { useState, useEffect } from "react";

const SpiralCtaSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden mt-0 bg-white">
      <div className="absolute inset-0 z-0">
        <SpiralAnimation />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <a
          href="https://wa.me/40742702982"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-primary font-display text-sm md:text-lg tracking-[0.3em] uppercase text-center leading-relaxed
            transition-all duration-1000 ease-out cursor-pointer
            hover:tracking-[0.5em] hover:opacity-80
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Vreau<br />Site
        </a>
      </div>
    </section>
  );
};

export default SpiralCtaSection;
