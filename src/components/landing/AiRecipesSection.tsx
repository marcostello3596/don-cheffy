import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Camera, Link2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Instagram, Camera, Link2, Sparkles];
const recipeVideos = [
  {
    src: "/videos/recilist-instagram-recipe.mov",
    scaleClass: "scale-[1.58] lg:scale-[1.72] xl:scale-[1.62]",
  },
  null,
  {
    src: "/videos/recilist-url-recipe.mov",
    scaleClass: "scale-[1.58] lg:scale-[1.72] xl:scale-[1.62]",
  },
  { src: "/videos/recilist-ai-recipe.mp4" },
];

const AiRecipesSection = () => {
  const { lang, t } = useLanguage();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const demos = t.aiRecipes.cards.map((card, index) => ({
    card,
    Icon: icons[index],
    video: recipeVideos[index],
  }));

  return (
    <section id="ai-recipes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
            {t.aiRecipes.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.aiRecipes.text[lang]}
          </p>
        </motion.div>

        {isDesktop ? (
          <div className="grid grid-cols-4 items-start gap-6">
            {demos.map((demo, index) => (
              <FeatureDemo
                key={demo.card.title.es}
                title={demo.card.title[lang]}
                placeholder={demo.card.placeholder[lang]}
                video={demo.video}
                Icon={demo.Icon}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory gap-6">
              {demos.map((demo, index) => (
                <FeatureDemo
                  key={demo.card.title.es}
                  title={demo.card.title[lang]}
                  placeholder={demo.card.placeholder[lang]}
                  video={demo.video}
                  Icon={demo.Icon}
                  index={index}
                  className="min-w-[82vw] max-w-[360px] snap-center"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

interface FeatureDemoProps {
  title: string;
  placeholder: string;
  video: { src: string; scaleClass?: string } | null;
  Icon: typeof Instagram;
  index: number;
  className?: string;
}

const FeatureDemo = ({ title, placeholder, video, Icon, index, className }: FeatureDemoProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className={`flex flex-col items-center ${className ?? ""}`.trim()}
  >
    <div className="mb-6 flex min-h-[64px] items-center justify-center gap-3 text-center">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="font-display text-xl font-bold leading-tight text-foreground lg:text-lg xl:text-xl">
        {title}
      </h3>
    </div>

    <div className="flex h-[590px] w-full items-start justify-center overflow-visible lg:h-[620px]">
      {video ? (
        <ManagedVideo
          className="h-auto max-h-[76vh] w-full max-w-[340px] origin-top object-contain lg:max-h-[620px] lg:max-w-[280px] xl:max-w-[310px]"
          scaleClass={video.scaleClass}
          src={video.src}
          label={placeholder}
        />
      ) : (
        <div className="flex h-[580px] w-full max-w-[300px] items-center justify-center rounded-[2rem] border border-dashed border-border bg-muted/20 px-6 text-center text-sm leading-relaxed text-muted-foreground lg:h-[560px] lg:max-w-[260px] xl:h-[610px] xl:max-w-[290px]">
          {placeholder}
        </div>
      )}
    </div>
  </motion.div>
);

interface ManagedVideoProps {
  src: string;
  label: string;
  className?: string;
  scaleClass?: string;
}

const ManagedVideo = ({ src, label, className, scaleClass }: ManagedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { rootMargin: "180px" },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`${className ?? ""} ${scaleClass ?? ""}`.trim()}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);

    return () => mediaQuery.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
};

export default AiRecipesSection;
