import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const bubbles = [
  { text: "¿Qué cocino hoy?", emoji: "🤔", top: "18%", left: "5%", delay: 0 },
  { text: "¿Qué me falta en el súper?", emoji: "🛒", top: "12%", right: "4%", delay: 0.5 },
  { text: "¿Qué desayuno?", emoji: "🥞", bottom: "28%", left: "2%", delay: 1 },
  { text: "¿Algo rápido para cenar?", emoji: "⏱️", bottom: "22%", right: "3%", delay: 1.5 },
  { text: "¿Qué hago con lo que tengo?", emoji: "🥕", top: "40%", left: "1%", delay: 0.8 },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Floating question bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: b.delay + 0.5, duration: 0.6 }}
          className="absolute hidden lg:flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-full px-4 py-2.5 shadow-lg"
          style={{
            top: b.top, left: b.left, right: b.right, bottom: b.bottom,
            animation: `float ${4 + i * 0.5}s ease-in-out ${b.delay}s infinite`,
          }}
        >
          <span className="text-lg">{b.emoji}</span>
          <span className="text-sm font-medium text-foreground whitespace-nowrap">{b.text}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-8 text-sm font-medium">
            <span>🚀</span> Próximamente disponible
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Cocina sin complicaciones.{" "}
            <span className="text-primary">ReciList</span>{" "}
            lo resuelve.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            La IA genera recetas personalizadas y arma tu lista de compras automáticamente. 
            Deja de improvisar y empieza a disfrutar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollTo("waitlist")}
              size="lg"
              className="rounded-full px-10 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-shadow"
            >
              Únete a la lista de espera
            </Button>
            <Button
              onClick={() => scrollTo("features")}
              variant="ghost"
              size="lg"
              className="rounded-full px-8 py-6 text-base gap-2"
            >
              Descubre más <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Emoji strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex justify-center gap-3 text-3xl sm:text-4xl"
        >
          {["🥑", "🍝", "🥗", "🍜", "🥘", "🧁", "🍳", "🥐"].map((e, i) => (
            <span
              key={i}
              className="inline-block"
              style={{ animation: `float ${3 + i * 0.4}s ease-in-out ${i * 0.2}s infinite` }}
            >
              {e}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
