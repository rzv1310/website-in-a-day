import PackageCard from "./PackageCard";

const PackagesSection = () => {
  return (
    <section id="pachete" className="py-24 md:py-32 px-6 bg-section-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Gold */}
        <PackageCard
          tier="Pachet Gold"
          title="Ce Primești"
          description="Un site web complet funcțional, cu design premium, cu până la 8 pagini personalizate, care arată perfect pe orice ecran (laptop, tabletă, mobil) și care e gata să-ți producă bani până la sfârșitul zilei."
          price="497 €"
          optional="Opțional, zero stress: Nume domeniu + Găzduire + suport tehnic + security updates = 100 lei/lună."
          pages={[
            "Pagina 'Acasă'",
            "Pagina 'Servicii'",
            "Pagina 'Despre noi'",
            "Pagina 'Tarife'",
            "Pagina 'Contact'",
          ]}
          legalPages={[
            "Termeni și Condiții",
            "Politica Cookies",
            "GDPR",
            "Link ANPC SOL / SAL",
          ]}
          included={[
            "Apel telefonic (30 min) în care pregătim totul pentru ziua lansării.",
            "Logo design.",
            "Brand colors, brand fonts.",
            "Hero Images.",
            "Research + Content writing.",
            "Buton WhatsApp.",
            "Map embed în footer (harta cu adresa ta).",
            "Optimizare Mobil.",
            "Configurare e-mail personalizat.",
            "Formular programare online.",
            "Robots.txt",
            "Sitemap.xml",
            "Structură linkuri interne.",
            "Favicon.",
            "3 revizii incluse.",
            "Suport tehnic 30 zile.",
          ]}
          recap="Ca să recapitulăm, acesta este un site personalizat, făcut de la zero pentru tine, construit pentru a-ți transforma businessul și care va fi gata să-ți aducă clienți începând chiar de a doua zi."
        />

        {/* CTA between packages */}
        <div className="text-center">
          <a
            href="#"
              className="inline-block bg-gradient-gold text-primary-foreground font-light px-12 py-4 rounded-sm tracking-wider uppercase text-base hover:opacity-90 transition-opacity"
          >
            Vreau Să Mă Programez !
          </a>
        </div>

        {/* Platinum */}
        <div className="pt-8" />
        <PackageCard
          highlight
          tier="Pachet Platinum (+1 zi)"
          title="Ce Primești"
          description=""
          price="1.297 €"
          optional="* se poate achita în max. 2 rate lunare"
          pages={[]}
          included={[
            "Totul din Pachetul Gold +",
            "Pagină Blog (cu 4 articole optimizate SEO incluse).",
            "Pagini dedicate Servicii în website (4-10).",
            "Creare și optimizare completă Google Business Profile (maps).",
            "Creare profil social media (Facebook / Instagram) + covers.",
            "Local Schema Mark-up + Organization + FAQ + AggregateReviews.",
            "Optimizare SEO on-page (meta-titles + meta-descriptions + structură headings).",
            "Optimizare Core Web Vitals (viteză, accesibilitate).",
            "LLM.txt (pentru a putea fi descoperit de ChatGPT, Google AI Overviews).",
            "OpenGraph cards (pentru share WhatsApp/Facebook/Twitter).",
            "Banner (pop-up) Cookies (consimțământ user).",
            "Basic widget pt persoane cu dizabilități.",
            "Nume domeniu (1 an).",
            "Găzduire domeniu (1 an).",
            "Mentenanță tehnică (1 an).",
          ]}
          preRecap={[
            "Ce primești aici NU e doar 'un site frumos'.",
            "Și NU e din categoria 'ai un vecin care știe un băiat care face site-uri'!",
            "Ce primești aici este top local SEO, tehnic impecabil, desenat de la zero pentru businessul tău și focusat pe apeluri și programări - pentru a converti vizitatorii în clienți.",
          ]}
          recap="Ești gata pentru noua ta imagine digitală?"
        />

        {/* CTA after Platinum */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-gradient-gold text-primary-foreground font-light px-12 py-4 rounded-sm tracking-wider uppercase text-base hover:opacity-90 transition-opacity"
          >
            Vreau Experiența Platinum !
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
