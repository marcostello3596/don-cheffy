import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import aiGeneratorImg from "@/assets/ai_generator.png";
import shoppingListImg from "@/assets/shopping_list.png";
import homeScreenImg from "@/assets/home_screen.png";
import { useLanguage } from "@/contexts/LanguageContext";

const featureData = [
  { img: aiGeneratorImg, emoji: "🤖", reverse: false },
  { img: shoppingListImg, emoji: "🛒", reverse: true },
  { img: homeScreenImg, emoji: "📂", reverse: false },
];

const FeaturesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-center mb-20">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">{t.featuresSection.title[lang]}</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.featuresSection.subtitle[lang]}</p>
        </motion.div>

        <div className="space-y-32">
          {featureData.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className={`flex flex-col ${f.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
              <div className="flex-1">
                <PhoneMockup src={f.img} alt={t.features[i].alt[lang]} />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <span className="text-4xl mb-4 block">{f.emoji}</span>
                <h3 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-4">{t.features[i].title[lang]}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.features[i].description[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
