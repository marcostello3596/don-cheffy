import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo-white.svg";

const Footer = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHero = () => {
    if (location.pathname !== "/") {
      navigate("/#hero");
    } else {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-brand-gradient text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full border-b border-white/20 pb-8 mb-4">
            <button onClick={scrollToHero} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img src={logoImg} alt="ReciList" className="h-16 w-auto translate-y-1" />
              <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                ReciList
              </span>
            </button>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              <Link to={lang === "es" ? "/es/support" : "/support"} className="text-sm text-white/80 hover:text-white transition-colors">
                {t.footer.support[lang]}
              </Link>
              <Link to={lang === "es" ? "/es/privacy" : "/privacy"} className="text-sm text-white/80 hover:text-white transition-colors">
                {t.footer.privacy[lang]}
              </Link>
              <Link to={lang === "es" ? "/es/terms" : "/terms"} className="text-sm text-white/80 hover:text-white transition-colors">
                {t.footer.terms[lang]}
              </Link>
              <Link to={lang === "es" ? "/es/account-deletion" : "/account-deletion"} className="text-sm text-white/80 hover:text-white transition-colors">
                {t.footer.accountDeletion[lang]}
              </Link>
            </div>
          </div>
          <div className="w-full text-center md:text-left text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} ReciList. {t.footer.rights[lang]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

