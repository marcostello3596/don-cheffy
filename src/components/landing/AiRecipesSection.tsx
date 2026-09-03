import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Link2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Instagram, Link2, Sparkles];

const recipeVideos: string[] = [
  "/videos/Desde IG.mp4",
  "/videos/URLimport.mp4",
  "/videos/AIrecipe.mp4",
];

const AiRecipesSection = () => {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const demos = t.aiRecipes.cards.map((card, index) => ({
    card,
    Icon: icons[index],
    video: recipeVideos[index],
  }));

  const activeDemo = demos[activeIndex];
  const ActiveIcon = activeDemo.Icon;

  return (
    <section id="ai-recipes" className="bg-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-10 max-w-2xl"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            {t.aiRecipes.title[lang]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.aiRecipes.text[lang]}
          </p>
        </motion.div>

        {/* Interactive Selector Tabs Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center w-full px-1"
        >
          {/* Mobile Selector Bar (No scroll, 3 equal columns, short titles) */}
          <div className="w-full grid grid-cols-3 gap-1 p-1 bg-secondary/80 backdrop-blur-md rounded-2xl border border-border/60 shadow-inner sm:hidden max-w-md mx-auto">
            {demos.map((demo, idx) => {
              const Icon = demo.Icon;
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-center gap-1 px-2 py-2.5 rounded-xl text-[11px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">
                    {demo.card.shortTitle?.[lang] || demo.card.title[lang]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop Selector Bar (Natural flex pills, full titles) */}
          <div className="hidden sm:inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-md p-1.5 rounded-full border border-border/60 shadow-inner">
            {demos.map((demo, idx) => {
              const Icon = demo.Icon;
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-lg shadow-primary/20 scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{demo.card.title[lang]}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Single Video Showcase Stage */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {/* Feature Subtitle Badge */}
              {activeDemo.card.subtitle?.[lang] && (
                <p className="text-sm sm:text-base font-medium text-primary mb-8 bg-primary/10 px-5 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
                  <ActiveIcon className="h-4 w-4" />
                  <span>{activeDemo.card.subtitle[lang]}</span>
                </p>
              )}

              {/* Single Video Showcase Window */}
              <div className="relative flex h-[60vh] max-h-[620px] min-h-[400px] w-full justify-center items-center bg-white">
                <SingleShowcaseVideo
                  src={activeDemo.video}
                  label={activeDemo.card.placeholder[lang]}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface SingleShowcaseVideoProps {
  src: string;
  label: string;
}

const SingleShowcaseVideo = ({ src, label }: SingleShowcaseVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    void video.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="h-full w-auto max-w-full object-contain relative z-10"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={label}
    />
  );
};

export default AiRecipesSection;
