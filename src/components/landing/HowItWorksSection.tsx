import { motion } from "framer-motion";

const steps = [
  { num: "01", emoji: "💬", title: "Genera tu receta", desc: "Dile a la IA qué quieres cocinar o qué ingredientes tienes. En segundos tienes la receta." },
  { num: "02", emoji: "🛒", title: "Lista automática", desc: "Los ingredientes se agregan solos a tu lista de compras, organizados por categoría." },
  { num: "03", emoji: "✅", title: "Compra sin estrés", desc: "Ve al súper con todo listo. Tacha los productos mientras compras y no olvides nada." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 sm:py-32 bg-primary text-primary-foreground">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          Tres pasos. De la idea al carrito de compras.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/15"
          >
            <span className="text-5xl mb-4 block">{s.emoji}</span>
            <span className="text-xs font-mono opacity-50 tracking-widest">{s.num}</span>
            <h3 className="font-display text-xl font-bold mt-2 mb-3">{s.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
