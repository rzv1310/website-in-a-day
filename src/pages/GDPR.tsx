import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const GDPR = () => {
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
          GDPR - Protecția Datelor
        </h1>
        <div className="divider-gold w-16 mb-10" />

        <div className="space-y-8 font-body text-foreground/80 leading-relaxed text-[17px]">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">1. Conformitate GDPR</h2>
            <p>SEO Doctor SRL respectă Regulamentul General privind Protecția Datelor (GDPR) al Uniunii Europene, care a intrat în vigoare la 25 mai 2018. Această secțiune GDPR face parte din Politica noastră de Confidențialitate și explică drepturile dumneavoastră în ceea ce privește datele dumneavoastră personale și modul în care ne conformăm acestor reglementări.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">2. Operatorul de date</h2>
            <p>SEO Doctor SRL acționează în calitate de "operator de date" pentru orice date personale colectate prin Serviciul nostru. Acest lucru înseamnă că determinăm scopurile și mijloacele de prelucrare a datelor dumneavoastră personale.</p>
            <div className="mt-4 p-4 rounded-lg bg-card border border-primary/10">
              <p className="font-semibold text-foreground mb-2">Date de contact ale Operatorului:</p>
              <p>Nume: SEO Doctor SRL</p>
              <p>Cod Unic de Înregistrare: 49345207</p>
              <p>Adresă: Str. Campia Libertății 33, sector 3, București</p>
              <p>Telefon: <a href="tel:+40742702982" className="text-primary hover:underline">+40 742 702 982</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">3. Temeiurile juridice pentru prelucrare</h2>
            <p>Prelucrăm datele dumneavoastră personale numai atunci când avem un temei juridic valid pentru a face acest lucru. Temeiurile juridice pe care ne bazăm includ:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Consimțământul:</strong> Când ne-ați dat permisiunea explicită de a prelucra datele dumneavoastră personale pentru un scop specific.</li>
              <li><strong>Executarea unui contract:</strong> Când prelucrarea este necesară pentru îndeplinirea unui contract la care sunteți parte sau pentru a lua măsuri la cererea dumneavoastră înainte de încheierea unui contract.</li>
              <li><strong>Obligație legală:</strong> Când prelucrarea este necesară pentru a respecta o obligație legală la care suntem supuși.</li>
              <li><strong>Interese legitime:</strong> Când prelucrarea este necesară pentru interesele noastre legitime sau ale unei terțe părți, cu excepția cazului în care prevalează interesele sau drepturile și libertățile dumneavoastră fundamentale care necesită protecția datelor personale.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">4. Drepturile dumneavoastră GDPR</h2>
            <p>Conform GDPR, aveți următoarele drepturi în ceea ce privește datele dumneavoastră personale:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Dreptul de a fi informat:</strong> Aveți dreptul de a primi informații clare, transparente, ușor de înțeles și ușor accesibile despre modul în care utilizăm datele dumneavoastră personale.</li>
              <li><strong>Dreptul de acces:</strong> Aveți dreptul de a obține confirmarea dacă prelucrăm datele dumneavoastră personale și de a accesa aceste date personale.</li>
              <li><strong>Dreptul la rectificare:</strong> Aveți dreptul de a solicita corectarea datelor personale inexacte sau completarea datelor personale incomplete.</li>
              <li><strong>Dreptul la ștergere ('dreptul de a fi uitat'):</strong> Aveți dreptul de a solicita ștergerea datelor dumneavoastră personale în anumite circumstanțe.</li>
              <li><strong>Dreptul la restricționarea prelucrării:</strong> Aveți dreptul de a solicita restricționarea prelucrării datelor dumneavoastră personale în anumite circumstanțe.</li>
              <li><strong>Dreptul la portabilitatea datelor:</strong> Aveți dreptul de a primi datele personale pe care ni le-ați furnizat într-un format structurat, utilizat în mod obișnuit și care poate fi citit automat, și de a transmite aceste date altui operator de date.</li>
              <li><strong>Dreptul la opoziție:</strong> Aveți dreptul de a vă opune prelucrării datelor dumneavoastră personale în anumite circumstanțe, inclusiv prelucrării pentru marketing direct.</li>
              <li><strong>Drepturi legate de luarea deciziilor automatizate și de profilare:</strong> Aveți dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automatizată, inclusiv profilarea, care produce efecte juridice asupra dumneavoastră sau vă afectează în mod similar în mod semnificativ.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">5. Exercitarea drepturilor dumneavoastră</h2>
            <p>Pentru a vă exercita drepturile GDPR, vă rugăm să ne contactați utilizând detaliile de contact furnizate mai sus. Vom răspunde la solicitarea dumneavoastră în termen de o lună de la primirea acesteia. Acest termen poate fi prelungit cu două luni suplimentare dacă este necesar, ținând cont de complexitatea și numărul solicitărilor.</p>
            <p className="mt-2">Dacă solicitarea este evident nefondată sau excesivă, în special din cauza caracterului său repetitiv, putem:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Să percepem o taxă rezonabilă, ținând cont de costurile administrative;</li>
              <li>Să refuzăm să dăm curs cererii.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">6. Transfer de date în afara UE/SEE</h2>
            <p>Dacă transferăm datele dumneavoastră personale în afara Uniunii Europene sau Spațiului Economic European, ne asigurăm că transferul este efectuat în conformitate cu GDPR. Aceasta poate include transferul către țări care au fost recunoscute de Comisia Europeană ca oferind un nivel adecvat de protecție a datelor sau utilizarea clauzelor contractuale standard aprobate de Comisia Europeană.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">7. Încălcări ale securității datelor</h2>
            <p>În cazul unei încălcări a securității datelor care prezintă un risc pentru drepturile și libertățile dumneavoastră, vom notifica autoritatea competentă de protecție a datelor fără întârzieri nejustificate și, dacă este posibil, în termen de 72 de ore după ce am luat cunoștință de încălcare.</p>
            <p className="mt-2">Dacă încălcarea este susceptibilă de a duce la un risc ridicat pentru drepturile și libertățile dumneavoastră, vă vom notifica, de asemenea, direct și fără întârzieri nejustificate.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">8. Autoritatea de supraveghere</h2>
            <p>Dacă considerați că prelucrarea datelor dumneavoastră personale încalcă prevederile GDPR, aveți dreptul de a depune o plângere la o autoritate de supraveghere.</p>
            <div className="mt-4 p-4 rounded-lg bg-card border border-primary/10">
              <p className="font-semibold text-foreground mb-2">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</p>
              <p>Adresă: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod poștal 010336, București, România</p>
              <p>Website: <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dataprotection.ro</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">10. Datele personale pe care le colectăm</h2>
            <p>Putem colecta și prelucra următoarele categorii de date personale:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Nume și prenume</li>
              <li>Adresă de e-mail</li>
              <li>Număr de telefon</li>
              <li>Adresa IP</li>
              <li>Date de navigare (pagini vizitate, durata vizitei, tipul browserului și al dispozitivului)</li>
              <li>Date de facturare (nume, adresă, CUI – în cazul persoanelor juridice)</li>
              <li>Orice alte date pe care ni le furnizați voluntar prin formulare de contact sau prin comunicarea directă cu noi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">11. Scopurile prelucrării datelor</h2>
            <p>Prelucrăm datele dumneavoastră personale pentru următoarele scopuri:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Furnizarea și îmbunătățirea serviciilor noastre de SEO și marketing digital</li>
              <li>Comunicarea cu dumneavoastră în legătură cu serviciile contractate</li>
              <li>Emiterea facturilor și gestionarea plăților</li>
              <li>Analiza traficului pe site pentru îmbunătățirea experienței utilizatorilor (prin Google Analytics)</li>
              <li>Măsurarea eficienței campaniilor publicitare și remarketing (prin Google Ads)</li>
              <li>Respectarea obligațiilor legale și fiscale</li>
              <li>Protecția împotriva fraudei în procesarea plăților (prin Stripe)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">12. Servicii terțe care prelucrează date</h2>
            <p>Pentru funcționarea site-ului și furnizarea serviciilor noastre, utilizăm următoarele servicii terțe care pot prelucra datele dumneavoastră personale:</p>
            <ul className="mt-3 space-y-3 list-disc list-inside">
              <li><strong>Google Analytics</strong> – colectează date anonimizate despre traficul pe site (adresa IP, pagini vizitate, durata sesiunii, tipul dispozitivului). Temeiul juridic: interes legitim. Politica de confidențialitate Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
              <li><strong>Google Ads</strong> – utilizează cookie-uri pentru măsurarea conversiilor din campaniile publicitare și pentru remarketing. Temeiul juridic: consimțământ. Politica de confidențialitate Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
              <li><strong>Stripe</strong> – procesează datele de plată (număr card, adresă de facturare) pentru efectuarea tranzacțiilor. Stripe acționează ca procesator independent de date. Temeiul juridic: executarea contractului. Politica de confidențialitate Stripe: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://stripe.com/privacy</a></li>
            </ul>
            <p className="mt-3">Nu vindem și nu partajăm datele dumneavoastră personale cu alte terțe părți în afara celor menționate mai sus.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">13. Perioada de retenție a datelor</h2>
            <p>Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru scopurile pentru care au fost colectate:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Datele de cont și de facturare: pe durata relației contractuale și încă 5 ani după încetarea acesteia (conform obligațiilor fiscale din legislația română)</li>
              <li>Datele de navigare și analytics: maximum 26 de luni (conform setărilor Google Analytics)</li>
              <li>Datele de marketing (Google Ads): până la retragerea consimțământului sau maximum 540 de zile</li>
              <li>Datele din formulare de contact: maximum 12 luni de la ultima comunicare, dacă nu se încheie un contract</li>
            </ul>
            <p className="mt-3">La expirarea perioadei de retenție, datele sunt șterse sau anonimizate definitiv.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">14. Legătura cu alte politici</h2>
            <p>Prezenta Politică de Confidențialitate (GDPR) trebuie citită împreună cu următoarele documente, care fac parte integrantă din acordul dintre dumneavoastră și SEO Doctor SRL:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li><Link to="/cookies" title="Politica de Cookies" className="text-primary hover:underline">Politica de Cookies</Link></li>
              <li><Link to="/termeni-si-conditii" title="Termeni și condiții" className="text-primary hover:underline">Termenii și Condițiile</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 font-display">15. Contactați-ne</h2>
            <p>Dacă aveți întrebări sau preocupări despre modul în care prelucrăm datele dumneavoastră personale sau doriți să vă exercitați drepturile GDPR, vă rugăm să ne contactați:</p>
            <p className="mt-2">Telefon: <a href="tel:+40742702982" title="Sună la SEO Doctor" className="text-primary hover:underline">+40 742 702 982</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GDPR;
