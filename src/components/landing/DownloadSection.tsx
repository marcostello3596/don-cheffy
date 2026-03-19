import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DownloadSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="download" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center gap-2 text-3xl sm:text-4xl mb-8">
            {["🥑", "🍕", "🥗", "🍜", "🧁"].map((e, i) => (
              <span key={i} className="inline-block" style={{ animation: `float ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite` }}>{e}</span>
            ))}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            {t.download.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
            {t.download.subtitle[lang]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {/* App Store QR */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-background rounded-2xl p-4 shadow-lg border border-border">
                <div className="w-40 h-40 bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Apple className="h-8 w-8 mx-auto mb-2 text-foreground" />
                    <span className="text-xs text-muted-foreground">QR Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Apple className="h-5 w-5 text-foreground" />
                <span className="font-semibold text-foreground">{t.download.appStore[lang]}</span>
              </div>
              <span className="text-xs text-muted-foreground">{t.download.scanLabel[lang]}</span>
            </div>

            {/* Play Store QR */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-background rounded-2xl p-4 shadow-lg border border-border">
                <div className="w-40 h-40 bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-8 w-8 mx-auto mb-2 text-foreground" />
                    <span className="text-xs text-muted-foreground">QR Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-foreground" />
                <span className="font-semibold text-foreground">{t.download.playStore[lang]}</span>
              </div>
              <span className="text-xs text-muted-foreground">{t.download.scanLabel[lang]}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
