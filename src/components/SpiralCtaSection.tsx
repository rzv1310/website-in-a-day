import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { useState, useEffect } from "react";

const SpiralCtaSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full mt-0 bg-white z-10" style={{ height: 'calc(25vh - 30px)', minHeight: 'unset' }}>
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <SpiralAnimation />
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
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
