import { motion } from "framer-motion";
import { Check, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import familyAccountImg from "@/assets/family_account.png";

const FamilyAccountSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="family-account" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
              <Users className="h-4 w-4" />
              <span>{t.familyAccount.badge[lang]}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] mb-6">
              {t.familyAccount.title[lang]}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {t.familyAccount.text[lang]}
            </p>

            <div className="space-y-4">
              {t.familyAccount.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base font-medium leading-normal">
                    {feature[lang]}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Illustration Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-gradient-to-b from-primary/5 to-transparent p-2 sm:p-4">
              <img
                src={familyAccountImg}
                alt={t.familyAccount.title[lang]}
                className="rounded-2xl w-full h-auto object-cover max-h-[520px] shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilyAccountSection;
