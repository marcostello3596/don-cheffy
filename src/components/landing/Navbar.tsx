import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ReciListLogo from "./ReciListLogo";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <ReciListLogo size={28} />
          <span className="font-display text-xl font-bold text-foreground">ReciList</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("features")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.features[lang]}</button>
          <button onClick={() => scrollTo("how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.howItWorks[lang]}</button>
          <button onClick={() => scrollTo("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.about[lang]}</button>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === "en" ? "ES" : "EN"}
          </button>
          <Button onClick={() => scrollTo("download")} size="sm" className="rounded-full px-6">
            {t.nav.join[lang]}
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <button onClick={() => scrollTo("features")} className="text-left text-muted-foreground hover:text-foreground">{t.nav.features[lang]}</button>
              <button onClick={() => scrollTo("how-it-works")} className="text-left text-muted-foreground hover:text-foreground">{t.nav.howItWorks[lang]}</button>
              <button onClick={() => scrollTo("about")} className="text-left text-muted-foreground hover:text-foreground">{t.nav.about[lang]}</button>
              <button onClick={toggleLang} className="text-left text-muted-foreground hover:text-foreground flex items-center gap-1.5">
                <Globe className="h-4 w-4" /> {lang === "en" ? "Español" : "English"}
              </button>
              <Button onClick={() => scrollTo("download")} className="rounded-full w-full">{t.nav.join[lang]}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
