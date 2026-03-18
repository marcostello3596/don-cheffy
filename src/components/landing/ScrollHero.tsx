import { useRef } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import aiGeneratorImg from "@/assets/ai_generator.png";
import shoppingListImg from "@/assets/shopping_list.png";
import homeScreenImg from "@/assets/home_screen.png";

/* ─── Bubble data: positions as % from center of viewport ─── */
const bubbles = [
  { text: "¿Qué me falta en el súper?", emoji: "🛒", left: "4%", top: "18%" },
  { text: "Siempre olvido algo", emoji: "😩", right: "4%", top: "15%" },
  { text: "¿Cuánto voy a gastar?", emoji: "💸", left: "3%", top: "48%" },
  { text: "No sé qué comprar", emoji: "🤷", right: "3%", top: "52%" },
  { text: "La lista está en otro lado", emoji: "📝", left: "6%", top: "78%" },
  { text: "¿Qué necesito para la cena?", emoji: "🍽️", right: "6%", top: "80%" },
];

const features = [
  {
    title: "Genera recetas y arma tu lista al instante",
    description:
      "Dile a la IA qué quieres cocinar y genera la receta completa. Los ingredientes se agregan automáticamente a tu lista de compras — sin pensar, sin olvidar nada.",
    img: aiGeneratorImg,
    alt: "Generador de recetas con IA que arma tu lista de compras",
    emoji: "⚡",
  },
  {
    title: "Tu lista de compras, organizada y sin esfuerzo",
    description:
      "Todos los ingredientes agrupados por categoría, listos para tachar mientras compras. Agrega varias recetas y la lista se actualiza sola. Nunca más olvides algo en el súper.",
    img: shoppingListImg,
    alt: "Lista de compras inteligente organizada por categoría",
    emoji: "✅",
  },
  {
    title: "Planifica tu semana en minutos",
    description:
      "Organiza desayunos, almuerzos y cenas por categoría. Planifica toda la semana de un vistazo y genera la lista de compras completa con un solo toque.",
    img: homeScreenImg,
    alt: "Planificador semanal de comidas con categorías",
    emoji: "📋",
  },
];

/* ─── Floating bubble ─── */
function Bubble({
  text,
  emoji,
  style,
  index,
  scrollProgress,
}: {
  text: string;
  emoji: string;
  style: React.CSSProperties;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollProgress, [0.04, 0.1, 0.14], [1, 0.5, 0]);
  const scale = useTransform(scrollProgress, [0.04, 0.14], [1, 0.3]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + index * 0.12, duration: 0.5 }}
      style={{ ...style, opacity, scale }}
      className="absolute hidden lg:flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-full px-4 py-2.5 shadow-lg pointer-events-none z-10"
    >
      <span className="text-lg">{emoji}</span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{text}</span>
    </motion.div>
  );
}

/* ─── Feature text panel (desktop) ─── */
function FeaturePanel({
  feature,
  index,
  scrollProgress,
}: {
  feature: (typeof features)[0];
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const n = features.length;
  const start = 0.2 + (index / n) * 0.6;
  const peak = start + 0.06;
  const end = 0.2 + ((index + 1) / n) * 0.6;

  const opacity = useTransform(
    scrollProgress,
    [start, peak, end - 0.06, end],
    [0, 1, 1, index === n - 1 ? 1 : 0]
  );
  const y = useTransform(scrollProgress, [start, peak], [50, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className="text-5xl mb-5 block">{feature.emoji}</span>
      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
        {feature.title}
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
        {feature.description}
      </p>
    </motion.div>
  );
}

/* ─── Main scroll hero ─── */
const ScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phase transitions
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.08], [0, -60]);

  const phoneOpacity = useTransform(scrollYProgress, [0.1, 0.18], [0, 1]);
  const phoneScale = useTransform(scrollYProgress, [0.1, 0.18], [0.85, 1]);

  const imageIndex = useTransform(scrollYProgress, (v) => {
    if (v < 0.38) return 0;
    if (v < 0.58) return 1;
    return 2;
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} id="hero" className="relative" style={{ height: "500vh" }}>
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        {/* ── Phase 1: Hero headline (centered, fades out) ── */}
        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="absolute inset-0 z-30 flex items-center justify-center"
        >
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-8 text-sm font-medium">
                <span>🚀</span> Próximamente disponible
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
                Tu súper resuelto.{" "}
                <span className="text-primary">Don Cheffy</span> lo organiza.
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Genera recetas con IA y tu lista de compras se arma sola.
                Deja de improvisar en el súper y ahorra tiempo cada semana.
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
                  onClick={() => scrollTo("how-it-works")}
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base gap-2"
                >
                  Descubre más <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Floating bubbles (absolute positioned, fade on scroll) ── */}
        {bubbles.map((b, i) => (
          <Bubble
            key={i}
            text={b.text}
            emoji={b.emoji}
            style={{ top: b.top, left: b.left, right: b.right }}
            index={i}
            scrollProgress={scrollYProgress}
          />
        ))}

        {/* ── Phase 2: Phone + Feature text (two-column layout like Luffu) ── */}
        <motion.div
          style={{ opacity: phoneOpacity, scale: phoneScale }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">
            {/* Desktop: text left, phone right */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left: text */}
              <div className="relative min-h-[320px]">
                {features.map((f, i) => (
                  <FeaturePanel
                    key={i}
                    feature={f}
                    index={i}
                    scrollProgress={scrollYProgress}
                  />
                ))}
              </div>

              {/* Right: phone */}
              <div className="flex justify-center">
                <PhoneWithScroll imageIndex={imageIndex} />
              </div>
            </div>

            {/* Mobile: phone centered, text below */}
            <div className="lg:hidden flex flex-col items-center gap-4 pt-8">
              <div className="scale-[0.85]">
                <PhoneWithScroll imageIndex={imageIndex} />
              </div>
              <div className="relative min-h-[140px] w-full text-center">
                <MobileFeatureText scrollProgress={scrollYProgress} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: heroTextOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-muted-foreground"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Phone mockup with animated image swap ─── */
function PhoneWithScroll({ imageIndex }: { imageIndex: MotionValue<number> }) {
  const images = [aiGeneratorImg, shoppingListImg, homeScreenImg];
  const alts = ["Generador de recetas IA", "Lista de compras inteligente", "Categorías de comida"];

  return (
    <div className="relative mx-auto" style={{ maxWidth: 280 }}>
      <div className="relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground/90 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />
        {images.map((src, i) => (
          <PhoneImage key={i} src={src} alt={alts[i]} index={i} imageIndex={imageIndex} />
        ))}
      </div>
    </div>
  );
}

function PhoneImage({
  src,
  alt,
  index,
  imageIndex,
}: {
  src: string;
  alt: string;
  index: number;
  imageIndex: MotionValue<number>;
}) {
  const opacity = useTransform(imageIndex, (v: number) => (v === index ? 1 : 0));

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`w-full block ${index > 0 ? "absolute inset-0" : ""}`}
      style={{ opacity }}
      loading={index === 0 ? "eager" : "lazy"}
    />
  );
}

function MobileFeatureText({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <div className="relative min-h-[100px]">
      {features.map((f, i) => {
        const n = features.length;
        const start = 0.2 + (i / n) * 0.6;
        const peak = start + 0.06;
        const end = 0.2 + ((i + 1) / n) * 0.6;

        return (
          <MobileFeatureItem
            key={i}
            feature={f}
            scrollProgress={scrollProgress}
            start={start}
            peak={peak}
            end={end}
            isLast={i === n - 1}
          />
        );
      })}
    </div>
  );
}

function MobileFeatureItem({
  feature,
  scrollProgress,
  start,
  peak,
  end,
  isLast,
}: {
  feature: (typeof features)[0];
  scrollProgress: MotionValue<number>;
  start: number;
  peak: number;
  end: number;
  isLast: boolean;
}) {
  const opacity = useTransform(
    scrollProgress,
    [start, peak, end - 0.06, end],
    [0, 1, 1, isLast ? 1 : 0]
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col justify-start items-center">
      <h3 className="font-display text-lg font-bold text-foreground mb-1">
        <span className="mr-1.5">{feature.emoji}</span>{feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{feature.description}</p>
    </motion.div>
  );
}

export default ScrollHero;
