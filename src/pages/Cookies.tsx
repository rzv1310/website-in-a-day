import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto py-16 px-6">
        <Link
          to="/"
          title="Înapoi la pagina principală"
          className="inline-flex items-center gap-2 text-primary hover:opacity-70 transition-opacity mb-8 font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Politica de Cookies
        </h1>
        <div className="divider-gold w-16 mb-10" />

        <div className="space-y-8 font-body text-foreground/80 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">1. Ce sunt cookie-urile?</h2>
            <p>Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul dumneavoastră mobil atunci când vizitați un site web. Cookie-urile sunt utilizate pe scară largă pentru a face site-urile web să funcționeze mai eficient și pentru a furniza informații proprietarilor site-ului.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">2. Cookie-urile pe care le utilizăm</h2>
            <p>Site-ul nostru utilizează următoarele tipuri de cookie-uri:</p>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2 font-display">Cookie-uri esențiale</h3>
            <p>Aceste cookie-uri sunt necesare pentru funcționarea site-ului nostru. Includ, de exemplu, cookie-uri care vă permit să vă conectați în zonele securizate ale site-ului nostru sau să utilizați coșul de cumpărături.</p>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2 font-display">Cookie-uri de la terți</h3>
            <p>Utilizăm trei servicii terțe care pot seta cookie-uri:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li><strong>Stripe</strong> - pentru procesarea securizată a plăților. Stripe utilizează cookie-uri pentru a preveni fraudele și pentru a asigura securitatea tranzacțiilor dumneavoastră. Aceste cookie-uri sunt esențiale pentru procesarea plăților și nu pot fi dezactivate dacă doriți să efectuați o plată pe site-ul nostru.</li>
              <li><strong>Google Analytics</strong> - pentru a înțelege cum utilizatorii interacționează cu site-ul nostru. Aceste cookie-uri colectează informații în mod anonim, inclusiv numărul de vizitatori ai site-ului, de unde au venit vizitatorii și paginile pe care le-au vizitat.</li>
              <li><strong>Google Ads</strong> - pentru măsurarea conversiilor din campaniile publicitare și remarketing. Aceste cookie-uri ne permit să înțelegem eficiența campaniilor noastre publicitare și să vă afișăm reclame relevante pe alte site-uri din rețeaua Google.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">3. Utilizarea cookie-urilor de publicitate</h2>
            <p>Utilizăm Google Ads ca unic serviciu de publicitate pentru a măsura eficiența campaniilor noastre și pentru remarketing. <strong>Nu vindem și nu partajăm datele dumneavoastră cu alte companii.</strong> În afara serviciilor menționate mai sus (Stripe, Google Analytics și Google Ads), nu utilizăm niciun alt cookie de la terți.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">4. Gestionarea cookie-urilor</h2>
            <p>Majoritatea browser-elor web vă permit să controlați cookie-urile prin setările lor. Puteți seta browser-ul să vă avertizeze atunci când primiți cookie-uri sau să le refuze complet. Totuși, rețineți că:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Dacă dezactivați cookie-urile esențiale, este posibil să nu puteți utiliza anumite funcții ale site-ului nostru.</li>
              <li>Dacă dezactivați cookie-urile Stripe, nu veți putea efectua plăți pe site-ul nostru.</li>
              <li>Dacă dezactivați cookie-urile Google Analytics, nu vom putea înțelege cum să îmbunătățim experiența dumneavoastră pe site.</li>
              <li>Dacă dezactivați cookie-urile Google Ads, este posibil să vedeți în continuare reclame, dar acestea nu vor fi personalizate în funcție de interesele dumneavoastră.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">5. Mai multe informații</h2>
            <p>Pentru mai multe informații despre cookie-uri și cum să le gestionați, puteți vizita:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" title="Informații despre cookies" className="text-primary hover:underline">www.allaboutcookies.org</a></li>
              <li>Politica de confidențialitate Stripe</li>
              <li>Politica de confidențialitate Google</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">6. Contactați-ne</h2>
            <p>Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru, vă rugăm să ne contactați:</p>
            <p className="mt-2">Telefon: <a href="tel:+40742702982" title="Sună la SEO Doctor" className="text-primary hover:underline">+40 742 702 982</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
