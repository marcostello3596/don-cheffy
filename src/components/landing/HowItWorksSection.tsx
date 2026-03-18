import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { lang, t } = useLanguage();
  const emojis = ["💬", "🛒", "✅"];
  const nums = ["01", "02", "03"];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">{t.howItWorks.title[lang]}</h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto">{t.howItWorks.subtitle[lang]}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/15">
              <span className="text-5xl mb-4 block">{emojis[i]}</span>
              <span className="text-xs font-mono opacity-50 tracking-widest">{nums[i]}</span>
              <h3 className="font-display text-xl font-bold mt-2 mb-3">{s.title[lang]}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{s.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
