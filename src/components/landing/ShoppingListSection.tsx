import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Placeholder from "./Placeholder";

const ShoppingListSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="shopping-list" className="py-24 sm:py-32 bg-secondary/40">
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
            <Placeholder
              text={t.shoppingList.placeholder[lang]}
              className="aspect-[9/16] w-full max-w-[280px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingListSection;
