import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ShoppingListSection = () => {
  const { lang, t } = useLanguage();
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
    <section id="shopping-list" className="py-24 sm:py-32" style={{ backgroundColor: "#F2F1EE" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.shoppingList.title[lang]}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.shoppingList.text[lang]}
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <video
              ref={videoRef}
              className="h-[60vh] max-h-[640px] min-h-[420px] w-auto max-w-full object-contain"
              src="/videos/recilist-shopping-list.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={t.shoppingList.placeholder[lang]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingListSection;
