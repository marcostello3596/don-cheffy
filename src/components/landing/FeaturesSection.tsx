import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import aiGeneratorImg from "@/assets/ai_generator.png";
import shoppingListImg from "@/assets/shopping_list.png";
import homeScreenImg from "@/assets/home_screen.png";

const features = [
  {
    title: "Recetas generadas con IA",
    description: "Describe lo que quieres comer o los ingredientes que tienes, y la IA crea recetas perfectas para ti. Personaliza porciones, restricciones alimentarias y más.",
    img: aiGeneratorImg,
    alt: "Pantalla de generador de recetas con IA de Don Cheffy",
    emoji: "🤖",
    reverse: false,
  },
  {
    title: "Tu lista de compras, automática",
    description: "Agrega recetas y Don Cheffy construye tu lista de compras automáticamente. Los ingredientes se agrupan por categoría y puedes tacharlos mientras compras.",
    img: shoppingListImg,
    alt: "Pantalla de lista de compras inteligente de Don Cheffy",
    emoji: "🛒",
    reverse: true,
  },
  {
    title: "Organiza tus comidas por categoría",
    description: "Desayunos, almuerzos, cenas, postres... todo organizado para que encuentres inspiración al instante. Explora recetas por tipo de comida.",
    img: homeScreenImg,
    alt: "Pantalla principal de Don Cheffy con categorías de comida",
    emoji: "📂",
    reverse: false,
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Todo lo que necesitas para cocinar mejor
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Desde la idea hasta la lista del súper, Don Cheffy te acompaña en cada paso.
        </p>
      </motion.div>

      <div className="space-y-32">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${f.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
          >
            <div className="flex-1">
              <PhoneMockup src={f.img} alt={f.alt} />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <span className="text-4xl mb-4 block">{f.emoji}</span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-4">
                {f.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
