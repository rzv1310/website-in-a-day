import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { useState, useEffect } from "react";

const SpiralCtaSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Spiral background */}
      <div className="absolute inset-0 z-0">
        <SpiralAnimation />
      </div>

      {/* CTA overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <a
          href="https://wa.me/40742702982"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-white font-display text-2xl md:text-4xl tracking-[0.15em] uppercase
            px-12 py-5 border border-white/30 rounded-sm
            backdrop-blur-sm bg-white/5
            hover:bg-white/10 hover:border-white/50
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionProperty: "opacity, transform, background-color, border-color" }}
        >
          Programează un apel
        </a>
      </div>
    </section>
  );
};

export default SpiralCtaSection;
