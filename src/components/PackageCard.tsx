import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PackageCardProps {
  tier: string;
  title: string;
  subtitle?: string;
  description: string;
  price: string;
  optional?: string;
  pages: string[];
  legalPages?: string[];
  included: string[];
  preRecap?: string[];
  recap: string;
  highlight?: boolean;
}

const PackageCard = ({
  tier,
  title,
  subtitle,
  description,
  price,
  optional,
  pages,
  legalPages,
  included,
  preRecap,
  recap,
  highlight = false,
}: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`rounded-sm border p-8 md:p-12 ${
        highlight
          ? "border-primary/50 shadow-gold bg-card"
          : "border-gold bg-card/50"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[17px] md:text-[19px] tracking-[0.15em] md:tracking-[0.3em] uppercase text-primary mb-2 font-body whitespace-nowrap">
          {tier}
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">{title}</h3>
        {subtitle && (
          <p className="text-muted-foreground text-[19px] italic">{subtitle}</p>
        )}
        <div className="divider-gold w-16 mx-auto my-6" />
        <p className="text-dark-gray md:text-foreground/80 font-light leading-relaxed max-w-xl mx-auto text-[19px] md:text-[21px] font-lora md:font-body">
          {description}
        </p>
      </div>

      {/* Pages */}
      {pages.length > 0 && (
        <div className="mb-8">
            <p className="text-[19px] tracking-[0.2em] uppercase text-primary mb-4 font-body">
            Pagini
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pages.map((page, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-dark-gray md:text-foreground/80 text-[19px] md:text-[21px] font-light font-lora md:font-body">{page}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Legal Pages */}
      {legalPages && legalPages.length > 0 && (
        <div className="mb-8">
            <p className="text-[19px] tracking-[0.2em] uppercase text-primary mb-4 font-body">
            Pagini Legale
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {legalPages.map((page, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-dark-gray md:text-foreground/80 text-[19px] md:text-[21px] font-light font-lora md:font-body">{page}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Included */}
      <div className="mb-10">
        <p className="text-[19px] tracking-[0.2em] uppercase text-primary mb-4 font-body">
          Inclus
        </p>
        <div className="space-y-2">
          {included.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className={`text-dark-gray md:text-foreground/80 text-[19px] md:text-[21px] font-lora md:font-body ${item.startsWith("Totul din") ? "font-bold" : "font-light"}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gold pt-8 text-center">
        {preRecap && preRecap.length > 0 && (
          <div className="mb-8 space-y-2">
            {preRecap.map((line, i) => (
              <p key={i} className={`font-light italic font-display leading-relaxed font-lora md:font-display ${line.startsWith("Ce primești aici este") ? "text-[20px] !mt-8" : "text-[19px]"} ${line.includes("vecin") ? "text-dark-gray md:text-foreground" : "text-dark-gray md:text-primary"}`}>
                {line}
              </p>
            ))}
          </div>
        )}
        <p className="text-foreground/80 font-light italic font-display leading-relaxed mb-8 max-w-lg mx-auto text-[19px]">
        </p>
        <div className="mb-2">
          <span className="text-[19px] text-muted-foreground uppercase tracking-wider font-body">
            Investiție
          </span>
        </div>
        <p className="text-gradient-gold font-display text-4xl md:text-5xl font-bold mb-4">
          {price}
        </p>
        {optional && (
          <p className="text-dark-gray md:text-muted-foreground text-[19px] md:text-[21px] font-light font-lora md:font-body max-w-sm mx-auto">
            {optional}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default PackageCard;
