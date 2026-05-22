import { useEffect, useRef } from "react";
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
  const demos = t.aiRecipes.cards.map((card, index) => ({
    card,
    Icon: icons[index],
    video: recipeVideos[index],
  }));

  return (
    <section id="ai-recipes" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            {t.aiRecipes.title[lang]}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.aiRecipes.text[lang]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 sm:gap-20 lg:grid-cols-3 lg:gap-10">
          {demos.map((demo, index) => (
            <FeatureDemo
              key={demo.card.title.es}
              title={demo.card.title[lang]}
              subtitle={demo.card.subtitle?.[lang] ?? ""}
              placeholder={demo.card.placeholder[lang]}
              video={demo.video}
              Icon={demo.Icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureDemoProps {
  title: string;
  subtitle: string;
  placeholder: string;
  video: string;
  Icon: typeof Instagram;
  index: number;
}

const FeatureDemo = ({ title, subtitle, placeholder, video, Icon, index }: FeatureDemoProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: index * 0.1, duration: 0.55 }}
    className="flex flex-col items-center text-center"
  >
    <div className="mb-6 flex flex-col items-center gap-3">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
        {title}
      </h3>
      {subtitle && (
        <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>

    <div className="flex h-[60vh] max-h-[640px] min-h-[420px] w-full items-end justify-center">
      <ManagedVideo src={video} label={placeholder} />
    </div>
  </motion.div>
);

interface ManagedVideoProps {
  src: string;
  label: string;
}

const ManagedVideo = ({ src, label }: ManagedVideoProps) => {
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
      className="h-full w-auto max-w-full object-contain [mix-blend-mode:multiply]"
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
};

export default AiRecipesSection;
