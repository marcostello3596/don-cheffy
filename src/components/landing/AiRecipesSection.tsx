import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, Link2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Instagram, Link2, Sparkles];

const recipeVideos: string[] = [
  "/videos/recilist-instagram-recipe.mp4",
  "/videos/recilist-url-recipe.mp4",
  "/videos/recilist-ai-recipe.mp4",
];

const AiRecipesSection = () => {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const demos = t.aiRecipes.cards.map((card, index) => ({
    card,
    Icon: icons[index],
    video: recipeVideos[index],
  }));

  return (
    <section id="ai-recipes" className="bg-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            {t.aiRecipes.title[lang]}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.aiRecipes.text[lang]}
          </p>

          {/* Desktop Interactive Tabs */}
          <div className="mt-8 hidden lg:inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-md p-1.5 rounded-full border border-border/60 shadow-inner">
            {demos.map((demo, idx) => {
              const Icon = demo.Icon;
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-md scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{demo.card.title[lang]}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-3 lg:gap-8 items-stretch">
          {demos.map((demo, index) => {
            const isActive = isMobile || activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                onMouseEnter={() => !isMobile && setActiveIndex(index)}
                className={`group relative flex flex-col items-center text-center rounded-3xl p-6 sm:p-8 transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent border-2 border-primary/40 shadow-2xl shadow-primary/10 lg:scale-[1.04] z-20"
                    : "bg-background border border-border/60 lg:opacity-60 lg:scale-[0.97] hover:opacity-90 z-10"
                }`}
              >
                {/* Header info */}
                <div className="mb-6 flex flex-col items-center gap-3">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-brand-gradient text-white shadow-md shadow-primary/20 scale-110"
                        : "bg-primary/10 text-primary group-hover:scale-105"
                    }`}
                  >
                    <demo.Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
                    {demo.card.title[lang]}
                  </h3>

                  {demo.card.subtitle?.[lang] && (
                    <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {demo.card.subtitle[lang]}
                    </p>
                  )}

                  {/* Desktop Active Status Badge */}
                  <div className="hidden lg:flex items-center gap-1.5 mt-1 text-xs font-medium h-6">
                    {isActive ? (
                      <span className="inline-flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1 rounded-full animate-fade-in">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {lang === "es" ? "Reproduciendo demo" : "Playing demo"}
                      </span>
                    ) : (
                      <span className="text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                        {lang === "es" ? "Pasá el cursor para interactuar" : "Hover to preview"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Video Demo Display */}
                <div className="flex h-[55vh] max-h-[600px] min-h-[400px] w-full items-end justify-center relative overflow-hidden rounded-2xl">
                  <ManagedInteractiveVideo
                    src={demo.video}
                    label={demo.card.placeholder[lang]}
                    isActive={isActive}
                    isMobile={isMobile}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ManagedInteractiveVideoProps {
  src: string;
  label: string;
  isActive: boolean;
  isMobile: boolean;
}

const ManagedInteractiveVideo = ({
  src,
  label,
  isActive,
  isMobile,
}: ManagedInteractiveVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isMobile) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { rootMargin: "100px" }
      );
      observer.observe(video);
      return () => observer.disconnect();
    } else {
      if (isActive) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [isActive, isMobile]);

  return (
    <video
      ref={videoRef}
      className={`h-full w-auto max-w-full object-contain transition-all duration-500 ${
        isActive ? "filter-none scale-100" : "grayscale-[40%] opacity-75 scale-95"
      }`}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      aria-label={label}
    />
  );
};

export default AiRecipesSection;
