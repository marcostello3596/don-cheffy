import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <span className="font-display text-lg font-bold text-foreground">ReciList</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ReciList. {t.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
