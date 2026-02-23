import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { useState, useEffect } from "react";

const SpiralCtaSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SpiralAnimation />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <a
          href="https://wa.me/40742702982"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-white font-display text-2xl md:text-4xl tracking-[0.3em] uppercase
            transition-all duration-1000 ease-out cursor-pointer
            hover:tracking-[0.5em] hover:opacity-80
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Enter
        </a>
      </div>
    </section>
  );
};

export default SpiralCtaSection;
