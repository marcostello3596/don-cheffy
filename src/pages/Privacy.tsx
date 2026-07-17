import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { privacyPolicy } from "./legal/legalContents";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = ({ lang }: { lang: "en" | "es" }) => {
  const { setLang } = useLanguage();

  // Sync language context state with current route language
  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  const doc = privacyPolicy[lang];
  const pageTitle = lang === "es" ? "Política de Privacidad | ReciList" : "Privacy Policy | ReciList";
  const pageDescription = lang === "es"
    ? "Conoce cómo recopilamos, utilizamos y protegemos tu información personal al usar ReciList."
    : "Learn how we collect, use, and protect your personal data when using ReciList.";
  const canonicalUrl = `https://recilist.app${lang === "es" ? "/es" : ""}/privacy`;

  useSEO({
    title: pageTitle,
    description: pageDescription,
    canonicalUrl,
    lang,
    path: "privacy",
  });

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {lang === "es" ? "Volver al Inicio" : "Back to Home"}
          </Link>

          {/* Document Container */}
          <div className="bg-background border border-border rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {doc.title}
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {doc.effectiveDate}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {doc.subtitle}
            </p>

            {/* Sections */}
            <div className="space-y-10 border-t border-border pt-10">
              {doc.sections.map((section, idx) => (
                <section key={idx} className="scroll-mt-24">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {Array.isArray(section.content) ? (
                      section.content.map((p, pIdx) => {
                        if (p.startsWith("• ")) {
                          return (
                            <div key={pIdx} className="pl-4 py-0.5 font-medium text-foreground/90">
                              {p}
                            </div>
                          );
                        }
                        return <p key={pIdx}>{p}</p>;
                      })
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                </section>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
