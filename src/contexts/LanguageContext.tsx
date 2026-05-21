import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "es";

const translations = {
  nav: {
    aiRecipes: { en: "AI Recipes", es: "Recetas con IA" },
    list: { en: "Shopping list", es: "Lista" },
    pricing: { en: "Pricing", es: "Precio" },
    join: { en: "Try ReciList", es: "Probar ReciList" },
  },
  hero: {
    badge: { en: "🚀 Available now", es: "🚀 Disponible ahora" },
    title: { en: "Stop improvising at the store", es: "Dejá de improvisar en el súper" },
    subtitle: {
      en: "Select multiple recipes and generate your shopping list automatically.",
      es: "Seleccioná múltiples recetas y generá tu lista de compras automáticamente.",
    },
    cta: { en: "Try ReciList", es: "Probar ReciList" },
    placeholder: {
      en: "Space for GIF: selecting recipes and auto-generating list",
      es: "Espacio para GIF: selección de recetas y generación automática de lista",
    },
  },
  bubbles: [
    { en: "What am I missing at the store?", es: "¿Qué me falta en el súper?" },
    { en: "I always forget something", es: "Siempre olvido algo" },
    { en: "How much will I spend?", es: "¿Cuánto voy a gastar?" },
    { en: "I don't know what to buy", es: "No sé qué comprar" },
    { en: "The list is somewhere else", es: "La lista está en otro lado" },
    { en: "What do I need for dinner?", es: "¿Qué necesito para la cena?" },
  ],
  aiRecipes: {
    title: { en: "Add your recipes easily with AI", es: "Añadí tus recetas fácilmente con IA" },
    text: {
      en: "No more typing recipes by hand. Share an Instagram post, upload a photo, paste a URL, or just tell the AI what recipe you need.",
      es: "Nada de cargar recetas a mano. Compartí un post de Instagram, subí una foto, pegá una URL o simplemente decile a la IA qué receta necesitás.",
    },
    cards: [
      {
        title: { en: "From an Instagram post", es: "Desde un post de Instagram" },
        placeholder: { en: "Space for GIF: import recipe from Instagram", es: "Espacio para GIF: importar receta desde Instagram" },
      },
      {
        title: { en: "From a photo", es: "Desde una foto" },
        placeholder: { en: "Space for GIF: create recipe from a photo", es: "Espacio para GIF: crear receta desde una foto" },
      },
      {
        title: { en: "From a URL", es: "Desde una URL" },
        placeholder: { en: "Space for GIF: create recipe from a URL", es: "Espacio para GIF: crear receta desde una URL" },
      },
      {
        title: { en: "From free text", es: "Desde texto libre" },
        placeholder: { en: "Space for GIF: create a recipe by writing to the AI", es: "Espacio para GIF: crear receta escribiéndole a la IA" },
      },
    ],
  },
  shoppingList: {
    title: { en: "Your shopping list, organized and effortless", es: "Tu lista de compras organizada y sin esfuerzo" },
    text: {
      en: "All ingredients grouped by category so you walk the store just once, ready to check off as you shop. Add more servings and the list updates itself. Never overbuy or forget anything again.",
      es: "Todos los ingredientes agrupados por categoría para que recorras el súper solo una vez, listos para tachar mientras comprás. Añadí más porciones y la lista se actualiza sola. Nunca más compres de más ni te olvides algo en el súper.",
    },
    placeholder: {
      en: "Space for image: shopping list organized by categories",
      es: "Espacio para imagen: lista de compras organizada por categorías",
    },
  },
  categories: {
    title: { en: "The grocery list organizes itself by category", es: "La lista del súper se organiza sola por categorías" },
    text: {
      en: "ReciList groups your ingredients so you cross the store once, without bouncing between aisles.",
      es: "ReciList agrupa tus ingredientes para que atravieses el súper una sola vez, sin ir y venir entre pasillos.",
    },
    placeholder: {
      en: "Space for image: list with categories like Produce, Meats, Dairy, Pantry and Frozen",
      es: "Espacio para imagen: lista con categorías como Verdulería, Carnes, Lácteos, Almacén y Congelados",
    },
  },
  nutrition: {
    title: { en: "Know the macros of your recipes and shopping", es: "Conocé los macros de tus recetas y compras" },
    text: {
      en: "Get the total macronutrients of your shopping list or each recipe to help you hit your goals.",
      es: "Obtené el total de macronutrientes de tu lista de compras o de cada receta para que te ayude a cumplir tus objetivos.",
    },
    placeholder1: { en: "Space for image: total macros of a shopping list", es: "Espacio para imagen: macros totales de una compra" },
    placeholder2: { en: "Space for image: macros of a single recipe", es: "Espacio para imagen: macros de una receta individual" },
  },
  cookConfidence: {
    title: { en: "Cook with confidence", es: "Cociná con confianza" },
    text: {
      en: "Clear recipes, exact ingredients, and steps that are easy to follow. No surprises while you cook.",
      es: "Recetas claras, ingredientes justos y pasos fáciles de seguir. Sin sorpresas mientras cocinás.",
    },
  },
  problem: {
    title: { en: "For those who hate improvising at the store", es: "Para los que odian improvisar en el súper" },
    intro: {
      en: "Going to the store without a list, forgetting ingredients, buying too much, not knowing what to cook... ReciList automates all that so your week flows.",
      es: "Ir al súper sin lista, olvidar ingredientes, comprar de más, no saber qué hacer de comer... ReciList automatiza todo eso para que tu semana fluya.",
    },
    benefits: [
      { en: "No more thinking what to buy last minute.", es: "No pensar qué comprar a último momento." },
      { en: "No more forgetting ingredients.", es: "No olvidarse ingredientes." },
      { en: "No more overbuying.", es: "No comprar de más." },
      { en: "Get to the store with a clear list.", es: "Llegar al súper con una lista clara." },
    ],
  },
  pricing: {
    title: { en: "A useful app, at a sensible price", es: "Una app útil, a un precio lógico" },
    text: {
      en: "While many similar apps cost more than USD 3/month, ReciList starts from USD 0.93.",
      es: "Mientras muchas apps similares cuestan más de USD 3 por mes, ReciList arranca desde USD 0,93.",
    },
    others: { en: "Similar apps", es: "Apps similares" },
    othersPrice: { en: "+USD 3/month", es: "+USD 3/mes" },
    us: { en: "ReciList", es: "ReciList" },
    usPrice: { en: "From USD 0.93/month", es: "Desde USD 0,93/mes" },
  },
  finalCta: {
    title: { en: "Stop improvising your next grocery run", es: "Dejá de improvisar tu próxima compra" },
    subtitle: {
      en: "Pick your recipes, generate your list and buy only what you need.",
      es: "Elegí tus recetas, generá tu lista y comprá solo lo que necesitás.",
    },
    cta: { en: "Try ReciList", es: "Probar ReciList" },
  },
  download: {
    title: { en: "Download ReciList now", es: "Descarga ReciList ahora" },
    subtitle: { en: "Scan the QR code with your phone to get the app.", es: "Escaneá el código QR con tu teléfono para obtener la app." },
    appStore: { en: "App Store", es: "App Store" },
    playStore: { en: "Google Play", es: "Google Play" },
    scanLabel: { en: "Scan to download", es: "Escaneá para descargar" },
  },
  footer: {
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
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
  const [lang, setLang] = useState<Lang>("es");
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
