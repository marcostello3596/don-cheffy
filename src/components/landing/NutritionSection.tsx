import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import macrosListImg from "@/assets/macros_list.png";
import macrosRecipeImg from "@/assets/macros_recipe.png";

const NutritionSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-brand-gradient text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            {t.nutrition.title[lang]}
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            {t.nutrition.text[lang]}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto items-center justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full flex justify-center"
          >
            <img
              src={macrosListImg}
              alt={t.nutrition.placeholder1[lang]}
              className="h-[55vh] max-h-[580px] min-h-[380px] w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <img
              src={macrosRecipeImg}
              alt={t.nutrition.placeholder2[lang]}
              className="h-[55vh] max-h-[580px] min-h-[380px] w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
