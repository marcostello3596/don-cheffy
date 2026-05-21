import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCtaSection = () => {
  const { lang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="final-cta" className="py-24 sm:py-32 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t.finalCta.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            {t.finalCta.subtitle[lang]}
          </p>
          <Button
            onClick={() => scrollTo("download")}
            size="lg"
            className="rounded-full px-10 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-shadow"
          >
            {t.finalCta.cta[lang]}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
