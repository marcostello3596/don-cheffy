import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
            {t.pricing.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.pricing.text[lang]}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-8 text-center opacity-80"
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              {t.pricing.others[lang]}
            </p>
            <p className="font-display text-3xl sm:text-4xl font-bold text-muted-foreground line-through decoration-muted-foreground/40">
              {t.pricing.othersPrice[lang]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border-2 border-primary bg-card p-8 text-center shadow-xl relative"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold tracking-wide rounded-full px-3 py-1 inline-flex items-center gap-1">
              <Check className="h-3 w-3" />
              ReciList
            </span>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">
              {t.pricing.us[lang]}
            </p>
            <p className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              {t.pricing.usPrice[lang]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
