import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoriesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            {t.categories.title[lang]}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            {t.categories.text[lang]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl rounded-2xl border-2 border-dashed border-primary-foreground/40 bg-primary-foreground/10 aspect-[4/3] flex items-center justify-center p-6 text-center"
        >
          <div className="flex flex-col items-center gap-3 text-primary-foreground/90">
            <ImageIcon className="h-10 w-10 opacity-80" />
            <span className="text-sm max-w-md leading-relaxed">
              {t.categories.placeholder[lang]}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
