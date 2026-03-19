import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "es";

const translations = {
  nav: {
    features: { en: "Features", es: "Funciones" },
    howItWorks: { en: "How it works", es: "Cómo funciona" },
    about: { en: "About us", es: "Nosotros" },
    join: { en: "Download", es: "Descargar" },
  },
  hero: {
    badge: { en: "🚀 Available now", es: "🚀 Disponible ahora" },
    title1: { en: "Grocery shopping solved. ", es: "Tu súper resuelto. " },
    title2: { en: " handles it.", es: " lo organiza." },
    subtitle: {
      en: "Generate recipes with AI and your shopping list builds itself. Stop improvising at the store and save time every week.",
      es: "Genera recetas con IA y tu lista de compras se arma sola. Deja de improvisar en el súper y ahorra tiempo cada semana.",
    },
    cta: { en: "Download the app", es: "Descarga la app" },
    discover: { en: "Discover more", es: "Descubre más" },
  },
  bubbles: [
    { en: "What am I missing at the store?", es: "¿Qué me falta en el súper?" },
    { en: "I always forget something", es: "Siempre olvido algo" },
    { en: "How much will I spend?", es: "¿Cuánto voy a gastar?" },
    { en: "I don't know what to buy", es: "No sé qué comprar" },
    { en: "The list is somewhere else", es: "La lista está en otro lado" },
    { en: "What do I need for dinner?", es: "¿Qué necesito para la cena?" },
  ],
  features: [
    {
      title: { en: "Generate recipes with AI and build your list instantly", es: "Genera recetas con IA y arma tu lista al instante" },
      description: {
        en: "Tell the AI what you want to cook and get the full recipe. Ingredients are automatically added to your shopping list — no thinking, no forgetting.",
        es: "Dile a la IA qué quieres cocinar y genera la receta completa. Los ingredientes se agregan automáticamente a tu lista de compras — sin pensar, sin olvidar nada.",
      },
      alt: { en: "AI recipe generator that builds your shopping list", es: "Generador de recetas con IA que arma tu lista de compras" },
    },
    {
      title: { en: "Your shopping list, organized effortlessly", es: "Tu lista de compras, organizada y sin esfuerzo" },
      description: {
        en: "All ingredients grouped by category, ready to check off while you shop. Add multiple recipes and the list updates itself. Never forget anything at the store again.",
        es: "Todos los ingredientes agrupados por categoría, listos para tachar mientras compras. Agrega varias recetas y la lista se actualiza sola. Nunca más olvides algo en el súper.",
      },
      alt: { en: "Smart shopping list organized by category", es: "Lista de compras inteligente organizada por categoría" },
    },
    {
      title: { en: "Plan your week in minutes", es: "Planifica tu semana en minutos" },
      description: {
        en: "Organize breakfasts, lunches, and dinners by category. Plan your entire week at a glance and generate the complete shopping list with a single tap.",
        es: "Organiza desayunos, almuerzos y cenas por categoría. Planifica toda la semana de un vistazo y genera la lista de compras completa con un solo toque.",
      },
      alt: { en: "Weekly meal planner with categories", es: "Planificador semanal de comidas con categorías" },
    },
  ],
  problem: {
    title: { en: "For those who hate improvising at the store", es: "Para los que odian improvisar en el súper" },
    description: {
      en: 'Going to the store without a list, forgetting ingredients, buying too much, not knowing what to cook... sound familiar? <strong class="text-foreground">Don Cheffy automates all that so your week flows smoothly.</strong>',
      es: 'Ir al súper sin lista, olvidar ingredientes, comprar de más, no saber qué hacer de comer... suena familiar. <strong class="text-foreground">Don Cheffy automatiza todo eso para que tu semana fluya.</strong>',
    },
  },
  howItWorks: {
    title: { en: "How does it work?", es: "¿Cómo funciona?" },
    subtitle: { en: "Three steps. From idea to shopping cart.", es: "Tres pasos. De la idea al carrito de compras." },
    steps: [
      { title: { en: "Generate your recipe", es: "Genera tu receta" }, desc: { en: "Tell the AI what you want to cook or what ingredients you have. In seconds you have the recipe.", es: "Dile a la IA qué quieres cocinar o qué ingredientes tienes. En segundos tienes la receta." } },
      { title: { en: "Automatic list", es: "Lista automática" }, desc: { en: "Ingredients are added to your shopping list automatically, organized by category.", es: "Los ingredientes se agregan solos a tu lista de compras, organizados por categoría." } },
      { title: { en: "Shop stress-free", es: "Compra sin estrés" }, desc: { en: "Go to the store with everything ready. Check off products as you shop and don't forget anything.", es: "Ve al súper con todo listo. Tacha los productos mientras compras y no olvides nada." } },
    ],
  },
  about: {
    tag: { en: "From the creators", es: "De los creadores" },
    title: { en: "We created Don Cheffy because grocery shopping shouldn't be this complicated", es: "Creamos Don Cheffy porque ir al súper no debería ser tan complicado" },
    p1: {
      en: "Incomplete lists, forgotten ingredients, extra trips to the store... it happened to us every week. We realized the problem wasn't cooking, it was <em>planning and shopping</em>.",
      es: "Listas a medias, ingredientes olvidados, viajes extra al súper... nos pasaba cada semana. Nos dimos cuenta de que el problema no era cocinar, sino <em>planificar y comprar</em>.",
    },
    p2: {
      en: "Don Cheffy uses artificial intelligence to solve that: it generates recipes, automatically builds your shopping list, and organizes everything so you go to the store once with everything you need.",
      es: "Don Cheffy usa inteligencia artificial para resolver eso: genera recetas, arma tu lista de compras automáticamente y organiza todo para que vayas al súper una vez y con todo lo que necesitas.",
    },
    p3: {
      en: "🎯 Our goal: make every grocery trip fast, complete, and stress-free.",
      es: "🎯 Nuestro objetivo: que cada ida al súper sea rápida, completa y sin estrés.",
    },
  },
  waitlist: {
    title: { en: "Stop improvising at the store", es: "Deja de improvisar en el súper" },
    subtitle: { en: "Be one of the first to try Don Cheffy. Sign up and we'll let you know when it's ready.", es: "Sé de los primeros en probar Don Cheffy. Regístrate y te avisamos cuando esté listo." },
    placeholder: { en: "you@email.com", es: "tu@email.com" },
    button: { en: "Join 🚀", es: "Unirme 🚀" },
    sending: { en: "Sending...", es: "Enviando..." },
    success: { en: "You've joined the waitlist! 🎉", es: "¡Te has unido a la lista de espera! 🎉" },
    spam: { en: "No spam. We'll only notify you when we launch. 🤞", es: "Sin spam. Solo te avisaremos cuando lancemos. 🤞" },
  },
  footer: {
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
  },
  featuresSection: {
    title: { en: "Everything you need to cook better", es: "Todo lo que necesitas para cocinar mejor" },
    subtitle: { en: "From the idea to the grocery list, Don Cheffy is with you every step.", es: "Desde la idea hasta la lista del súper, Don Cheffy te acompaña en cada paso." },
  },
} as const;

type Translations = typeof translations;

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
