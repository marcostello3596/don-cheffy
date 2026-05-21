import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl mb-6 block">😩</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6">
            {t.problem.title[lang]}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {t.problem.intro[lang]}
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 text-left">
            {t.problem.benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-2xl p-4"
              >
                <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground font-medium">{b[lang]}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
