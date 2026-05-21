import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CookConfidenceSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl mb-5 block">👩‍🍳</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
            {t.cookConfidence.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.cookConfidence.text[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CookConfidenceSection;
