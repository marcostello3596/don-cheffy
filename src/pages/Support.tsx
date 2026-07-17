import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, ChevronDown, ArrowLeft, HelpCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl bg-white overflow-hidden transition-shadow hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-foreground gap-4"
      >
        <span className="text-base sm:text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border/50 pt-4 bg-muted/20">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const restorePurchasesText = {
  en: {
    title: "Restore Plus Subscription Purchases",
    subtitle: "If you changed your device, reinstalled the app, or upgraded, follow these steps to restore your ReciList Plus access:",
    step1: "Open the ReciList app on your device.",
    step2: "Navigate to the Settings screen or tap any premium feature to show the Subscription screen.",
    step3: "Tap the \"Restore Purchases\" or \"Restaurar compras\" button at the bottom of the paywall.",
    step4: "Ensure you are signed in on your device with the same Apple ID used to make the original purchase.",
    step5: "If your Plus entitlement is not recovered, please contact support below with your account email and Firebase UID.",
    techNote: "Note: The RevenueCat paywall in the app must have a native 'Restore Purchases' action button, not a link to this URL."
  },
  es: {
    title: "Restaurar Compras de Suscripción Plus",
    subtitle: "Si cambiaste de dispositivo, reinstalaste la app o actualizaste, sigue estos pasos para recuperar tu acceso a ReciList Plus:",
    step1: "Abrí la app ReciList en tu dispositivo.",
    step2: "Navegá a la pantalla de Configuración o intentá acceder a una función premium para abrir la pantalla de Suscripción.",
    step3: "Tocá el botón “Restaurar compras” o “Restore Purchases” en la parte inferior de la pantalla de suscripción.",
    step4: "Asegurate de estar usando el mismo Apple ID con el que realizaste la compra original.",
    step5: "Si tu entitlement “plus” no se recupera, contactá a soporte enviando tu email y Firebase UID.",
    techNote: "Nota técnica: El paywall de RevenueCat en la app móvil debe tener un botón con la acción nativa “Restore Purchases”, no una redirección URL."
  }
};

const Support = ({ lang = "es" }: { lang?: "en" | "es" }) => {
  const { setLang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "support@recilist.app";

  // Sync language context with route lang
  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  const pageTitle = lang === "es" ? "Soporte al Cliente | ReciList" : "Customer Support | ReciList";
  const pageDescription = lang === "es"
    ? "Estamos para ayudarte. Contactá al soporte de ReciList o aprendé cómo restaurar tus compras de la suscripción Plus."
    : "We are here to help you. Contact ReciList customer support or learn how to restore your Plus subscription purchases.";
  const canonicalUrl = `https://recilist.app${lang === "es" ? "/es" : ""}/support`;

  useSEO({
    title: pageTitle,
    description: pageDescription,
    canonicalUrl,
    lang,
    path: "support",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rp = restorePurchasesText[lang];

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.support.backHome[lang]}
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              {t.support.title[lang]}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.support.subtitle[lang]}
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-background border border-border rounded-3xl p-8 sm:p-10 shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    {t.support.emailLabel[lang]}
                  </h2>
                  <a
                    href={`mailto:${email}`}
                    className="text-2xl font-extrabold text-primary hover:underline tracking-tight break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold px-6 py-3.5 rounded-full hover:bg-secondary/80 active:scale-95 transition-all text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600 animate-in zoom-in" />
                      <span className="text-emerald-600">{t.support.copied[lang]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>{t.support.copyEmail[lang]}</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover:bg-primary/95 shadow-lg shadow-primary/20 active:scale-95 transition-all text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>{t.support.sendEmail[lang]}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Restore Purchases Card */}
          <div className="bg-background border border-border rounded-3xl p-8 sm:p-10 shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5FD38D]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="h-6 w-6 text-primary shrink-0" />
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                {rp.title}
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
              {rp.subtitle}
            </p>

            <ol className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed pl-4 list-decimal marker:text-primary marker:font-bold mb-8">
              <li>{rp.step1}</li>
              <li>{rp.step2}</li>
              <li><strong>{rp.step3}</strong></li>
              <li>{rp.step4}</li>
              <li>{rp.step5}</li>
            </ol>

            {/* Note technical inside code context */}
            {/* Technical Note: The RevenueCat paywall in the app must have a native "Restore Purchases" action, not a web link. */}
            <div className="mt-4 p-4 rounded-xl border border-muted bg-muted/30 text-muted-foreground text-xs font-mono">
              {rp.techNote}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                {t.support.faqTitle[lang]}
              </h2>
            </div>

            <div className="space-y-4">
              <FAQItem
                question={t.support.faq1Q[lang]}
                answer={t.support.faq1A[lang]}
              />
              <FAQItem
                question={t.support.faq2Q[lang]}
                answer={t.support.faq2A[lang]}
              />
              <FAQItem
                question={t.support.faq3Q[lang]}
                answer={t.support.faq3A[lang]}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
