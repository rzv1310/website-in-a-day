import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-gold py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="font-display text-lg font-semibold text-primary-foreground tracking-wide">
            Website <span className="italic">într-o zi</span>
          </p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4 font-body text-sm text-primary-foreground/80">
              <Link
                to="/termeni-si-conditii"
                title="Termeni și condiții"
                className="hover:text-white transition-colors"
              >
                Termeni și condiții
              </Link>
              <span className="text-primary-foreground/40">•</span>
              <Link
                to="/gdpr"
                title="Politica GDPR"
                className="hover:text-white transition-colors"
              >
                GDPR
              </Link>
              <span className="text-primary-foreground/40">•</span>
              <Link
                to="/cookies"
                title="Politica de Cookies"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
            <p className="font-body text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} SEO Doctor SRL. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
