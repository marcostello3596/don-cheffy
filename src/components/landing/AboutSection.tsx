import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 sm:p-14 border border-border shadow-lg"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-6 block">
            {t.about.tag[lang]}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
            {t.about.title[lang]}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t.about.p1[lang] }} />
            <p>{t.about.p2[lang]}</p>
            <p className="text-foreground font-medium">{t.about.p3[lang]}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
