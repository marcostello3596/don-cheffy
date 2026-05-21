import { motion } from "framer-motion";
import { Instagram, Camera, Link2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Placeholder from "./Placeholder";

const icons = [Instagram, Camera, Link2, Sparkles];

const AiRecipesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="ai-recipes" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
            {t.aiRecipes.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.aiRecipes.text[lang]}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.aiRecipes.cards.map((c, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card border border-border rounded-3xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {c.title[lang]}
                  </h3>
                </div>
                <Placeholder text={c.placeholder[lang]} className="aspect-video" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AiRecipesSection;
