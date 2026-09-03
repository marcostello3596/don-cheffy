import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

// Links directos a las tiendas (actualizar con URLs definitivas cuando estén publicadas)
const IOS_APP_URL = "https://apps.apple.com";
const ANDROID_APP_URL = "https://play.google.com";

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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl shadow-md hover:shadow-lg"
              aria-label={t.download.appStore[lang]}
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-14 sm:h-16 w-auto object-contain rounded-2xl"
              />
            </a>

            <a
              href={ANDROID_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl shadow-md hover:shadow-lg"
              aria-label={t.download.playStore[lang]}
            >
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-14 sm:h-16 w-auto object-contain rounded-2xl"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
