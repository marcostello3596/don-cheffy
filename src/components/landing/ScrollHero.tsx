import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const bubbleData = [
  { emoji: "🤔", top: "14%", position: "left" },
  { emoji: "😩", top: "20%", position: "right" },
  { emoji: "💸", top: "56%", position: "left" },
  { emoji: "🤷", top: "62%", position: "right" },
];

const ScrollHero = () => {
  const { lang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-8 text-sm font-medium">
            {t.hero.badge[lang]}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            {t.hero.title[lang]}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle[lang]}
          </p>

          <div className="flex items-center justify-center mb-14">
            <Button
              onClick={() => scrollTo("download")}
              size="lg"
              className="rounded-full px-10 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-shadow"
            >
              {t.hero.cta[lang]}
            </Button>
          </div>
        </motion.div>

        {/* Phone wrapper with bubbles positioned around it */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block max-w-full mx-auto"
        >
          {bubbleData.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className="absolute hidden md:flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-border rounded-full px-4 py-2.5 shadow-xl pointer-events-none z-20"
              style={{
                top: b.top,
                ...(b.position === "left"
                  ? { left: "calc(50% - 190px)", transform: "translateX(-100%)" }
                  : { left: "calc(50% + 190px)" }),
              }}
            >
              <span className="text-lg">{b.emoji}</span>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {t.bubbles[i][lang]}
              </span>
            </motion.div>
          ))}

          <video
            className="block h-auto max-h-[72vh] max-w-[82vw] object-contain relative z-10 mx-auto"
            src="/videos/recilist-phone-white-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={t.hero.placeholder[lang]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollHero;
