import { useRef } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import aiGeneratorImg from "@/assets/ai_generator.png";
import shoppingListImg from "@/assets/shopping_list.png";
import homeScreenImg from "@/assets/home_screen.png";

const bubbles = [
  { text: "¿Qué cocino hoy?", emoji: "🤔", x: -320, y: -180 },
  { text: "¿Qué me falta en el súper?", emoji: "🛒", x: 300, y: -200 },
  { text: "¿Qué desayuno?", emoji: "🥞", x: -350, y: 80 },
  { text: "¿Algo rápido para cenar?", emoji: "⏱️", x: 330, y: 100 },
  { text: "¿Qué hago con lo que tengo?", emoji: "🥕", x: -280, y: -40 },
  { text: "No sé qué comprar", emoji: "😩", x: 260, y: -60 },
];

const features = [
  {
    title: "Recetas generadas con IA",
    description:
      "Describe lo que quieres comer o los ingredientes que tienes, y la IA crea recetas perfectas para ti. Personaliza porciones, restricciones alimentarias y más.",
    img: aiGeneratorImg,
    alt: "Pantalla de generador de recetas con IA de Don Cheffy",
    emoji: "🤖",
  },
  {
    title: "Tu lista de compras, automática",
    description:
      "Agrega recetas y Don Cheffy construye tu lista de compras automáticamente. Los ingredientes se agrupan por categoría y puedes tacharlos mientras compras.",
    img: shoppingListImg,
    alt: "Pantalla de lista de compras inteligente de Don Cheffy",
    emoji: "🛒",
  },
  {
    title: "Organiza tus comidas por categoría",
    description:
      "Desayunos, almuerzos, cenas, postres... todo organizado para que encuentres inspiración al instante. Explora recetas por tipo de comida.",
    img: homeScreenImg,
    alt: "Pantalla principal de Don Cheffy con categorías de comida",
    emoji: "📂",
  },
];

/* ─── Single bubble with scroll-driven converge ─── */
function Bubble({
  text,
  emoji,
  x,
  y,
  index,
  scrollProgress,
}: {
  text: string;
  emoji: string;
  x: number;
  y: number;
  index: number;
  scrollProgress: ReturnType<typeof useTransform>;
}) {
  // Bubbles converge from 0→0.15 of total scroll
  const bx = useTransform(scrollProgress, [0, 0.12], [x, 0]);
  const by = useTransform(scrollProgress, [0, 0.12], [y, 0]);
  const opacity = useTransform(scrollProgress, [0, 0.08, 0.13, 0.16], [1, 1, 0.6, 0]);
  const scale = useTransform(scrollProgress, [0, 0.1, 0.14], [1, 0.8, 0.4]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
      style={{ x: bx, y: by, opacity, scale }}
      className="absolute flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-full px-4 py-2.5 shadow-lg pointer-events-none z-20"
    >
      <span className="text-lg">{emoji}</span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {text}
      </span>
    </motion.div>
  );
}

/* ─── Feature text panel ─── */
function FeaturePanel({
  feature,
  index,
  scrollProgress,
}: {
  feature: (typeof features)[0];
  index: number;
  scrollProgress: ReturnType<typeof useTransform>;
}) {
  const totalFeatures = features.length;
  const featureStart = 0.2 + (index / totalFeatures) * 0.65;
  const featureMid = featureStart + 0.65 / totalFeatures / 3;
  const featureEnd = 0.2 + ((index + 1) / totalFeatures) * 0.65;

  const opacity = useTransform(
    scrollProgress,
    [
      featureStart,
      featureMid,
      featureEnd - 0.65 / totalFeatures / 3,
      featureEnd,
    ],
    [0, 1, 1, index === totalFeatures - 1 ? 1 : 0]
  );
  const y = useTransform(
    scrollProgress,
    [featureStart, featureMid],
    [60, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className="text-4xl mb-4 block">{feature.emoji}</span>
      <h3 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-4">
        {feature.title}
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
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

  // Phone: appears after bubbles converge
  const phoneOpacity = useTransform(scrollYProgress, [0.1, 0.18], [0, 1]);
  const phoneScale = useTransform(scrollYProgress, [0.1, 0.18], [0.8, 1]);

  // Hero text fades out as scroll begins
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.08], [0, -40]);

  // Phone image index based on scroll
  const imageIndex = useTransform(scrollYProgress, (v) => {
    if (v < 0.38) return 0;
    if (v < 0.6) return 1;
    return 2;
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative"
      // 5 viewport heights = enough scroll room for the animation
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "var(--hero-gradient)" }}
      >
        {/* ── Hero headline (fades out on scroll) ── */}
        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="absolute z-30 text-center max-w-4xl mx-auto px-4"
        >
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
              <span className="text-primary">Don Cheffy</span> lo resuelve.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              La IA genera recetas personalizadas y arma tu lista de compras
              automáticamente. Deja de improvisar y empieza a disfrutar.
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
        </motion.div>

        {/* ── Floating bubbles (converge on scroll) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative hidden lg:block">
            {bubbles.map((b, i) => (
              <Bubble
                key={i}
                {...b}
                index={i}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* ── Phone mockup (appears after converge) ── */}
        <motion.div
          style={{ opacity: phoneOpacity, scale: phoneScale }}
          className="absolute z-20 flex items-center gap-8 lg:gap-20 px-4"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="flex-shrink-0">
              <PhoneWithScroll
                scrollProgress={scrollYProgress}
                imageIndex={imageIndex}
              />
            </div>

            {/* Feature text panels */}
            <div className="flex-1 text-center lg:text-left relative min-h-[220px] hidden lg:block">
              {features.map((f, i) => (
                <FeaturePanel
                  key={i}
                  feature={f}
                  index={i}
                  scrollProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: feature text below phone ── */}
        <motion.div
          style={{ opacity: phoneOpacity }}
          className="absolute bottom-8 left-0 right-0 px-6 text-center lg:hidden z-20"
        >
          <MobileFeatureText scrollProgress={scrollYProgress} />
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

/* ─── Phone with animated image swap ─── */
function PhoneWithScroll({
  scrollProgress,
  imageIndex,
}: {
  scrollProgress: ReturnType<typeof useTransform>;
  imageIndex: ReturnType<typeof useTransform>;
}) {
  const images = [aiGeneratorImg, shoppingListImg, homeScreenImg];
  const alts = [
    "Generador de recetas IA",
    "Lista de compras inteligente",
    "Categorías de comida",
  ];

  return (
    <div className="relative mx-auto" style={{ maxWidth: 280 }}>
      <div className="relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground/90 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />
        {images.map((src, i) => (
          <PhoneImage
            key={i}
            src={src}
            alt={alts[i]}
            index={i}
            imageIndex={imageIndex}
          />
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
  imageIndex: ReturnType<typeof useTransform>;
}) {
  const opacity = useTransform(imageIndex, (v: number) =>
    v === index ? 1 : 0
  );

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

function MobileFeatureText({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useTransform>;
}) {
  return (
    <div className="relative min-h-[100px]">
      {features.map((f, i) => {
        const totalFeatures = features.length;
        const featureStart = 0.2 + (i / totalFeatures) * 0.65;
        const featureMid = featureStart + 0.65 / totalFeatures / 3;
        const featureEnd = 0.2 + ((i + 1) / totalFeatures) * 0.65;

        return (
          <MobileFeatureItem
            key={i}
            feature={f}
            scrollProgress={scrollProgress}
            start={featureStart}
            mid={featureMid}
            end={featureEnd}
            isLast={i === totalFeatures - 1}
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
  mid,
  end,
  isLast,
}: {
  feature: (typeof features)[0];
  scrollProgress: ReturnType<typeof useTransform>;
  start: number;
  mid: number;
  end: number;
  isLast: boolean;
}) {
  const opacity = useTransform(
    scrollProgress,
    [start, mid, end - 0.08, end],
    [0, 1, 1, isLast ? 1 : 0]
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col justify-center items-center">
      <span className="text-2xl mb-2">{feature.emoji}</span>
      <h3 className="font-display text-xl font-bold text-foreground mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default ScrollHero;
