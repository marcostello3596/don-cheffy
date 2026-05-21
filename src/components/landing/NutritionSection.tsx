import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Placeholder from "./Placeholder";

const NutritionSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
            {t.nutrition.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.nutrition.text[lang]}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Placeholder text={t.nutrition.placeholder1[lang]} className="aspect-square" />
          <Placeholder text={t.nutrition.placeholder2[lang]} className="aspect-square" />
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
