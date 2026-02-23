import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_KEY = "cookie_consent";

const loadGTM = () => {
  if (document.getElementById("gtm-script")) return;
  const script = document.createElement("script");
  script.id = "gtm-script";
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5FFHH8D3');`;
  document.head.appendChild(script);
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      loadGTM();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGTM();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  🍪 Folosim cookies
                </h3>
                <p className="font-body text-base sm:text-sm text-muted-foreground leading-relaxed">
                  Acest site folosește cookies pentru a îmbunătăți experiența ta și pentru analiză de trafic. 
                  Prin acceptare, ești de acord cu utilizarea acestora.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-body font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Refuz
                </button>
                <button
                  onClick={handleAccept}
                  className="rounded-lg bg-primary px-5 py-2 text-sm font-body font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
