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
    { en: "Am I missing something?", es: "¿Me estará faltando algo?" },
    { en: "I forgot that stuff! We have to go back", es: "¡Me olvidé de eso! Hay que volver" },
    { en: "Did I buy too much again?", es: "¿Otra vez compré de más?" },
    { en: "I don't know what to buy", es: "No sé qué comprar" },
  ],
  aiRecipes: {
    title: { en: "Add your recipes easily with AI", es: "Añadí tus recetas fácilmente con IA" },
    text: {
      en: "No more typing recipes by hand. Share an Instagram post, paste a URL, or just tell the AI what recipe you need.",
      es: "Nada de cargar recetas a mano. Compartí un post de Instagram, pegá una URL o simplemente decile a la IA qué receta necesitás.",
    },
    cards: [
      {
        title: { en: "From an Instagram post", es: "Desde un post de Instagram" },
        shortTitle: { en: "From Instagram", es: "Desde Instagram" },
        subtitle: { en: "Paste the link, get the recipe.", es: "Pegá el link, recibí la receta." },
        placeholder: { en: "Space for GIF: import recipe from Instagram", es: "Espacio para GIF: importar receta desde Instagram" },
      },
      {
        title: { en: "From a URL", es: "Desde una URL" },
        shortTitle: { en: "From a link", es: "Desde un enlace" },
        subtitle: { en: "Any blog or recipe site.", es: "Cualquier blog o sitio de recetas." },
        placeholder: { en: "Space for GIF: create recipe from a URL", es: "Espacio para GIF: crear receta desde una URL" },
      },
      {
        title: { en: "Let AI handle the rest!", es: "O simplemente describe lo que quieras" },
        shortTitle: { en: "Generate with AI", es: "Generala con IA" },
        subtitle: { en: "Just tell the AI what you want.", es: "Decile a la IA lo que querés cocinar." },
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
  familyAccount: {
    badge: { en: "Built for sharing", es: "Pensado para compartir" },
    title: { en: "One account for your whole home", es: "Una sola cuenta para todo el hogar" },
    text: {
      en: "Share the same account with your partner or family so all your household recipes and grocery lists stay in one place. If you eat together, there's no need to pay double.",
      es: "Compartí la misma cuenta con tu pareja o familia para centralizar todas las recetas de la casa en un solo lugar. Si comen lo mismo, no hace falta pagar dos suscripciones.",
    },
    features: [
      { en: "All household recipes organized in one shared library.", es: "Todas las recetas de la casa organizadas en una biblioteca compartida." },
      { en: "Instant list updates so whoever goes to the store has the exact items.", es: "Lista actualizada al instante para que quien vaya al súper tenga todo a mano." },
      { en: "Save money with a single account for the entire household.", es: "Ahorrá pagando una sola cuenta para todo el hogar." },
    ],
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
      en: "While many similar apps cost more than USD 5/month, ReciList starts from USD 1.99.",
      es: "Mientras muchas apps similares cuestan más de USD 5 por mes, ReciList arranca desde USD 1,99.",
    },
    others: { en: "Similar apps", es: "Apps similares" },
    othersPrice: { en: "+USD 5/month", es: "+USD 5/mes" },
    us: { en: "ReciList", es: "ReciList" },
    usPrice: { en: "From USD 1.99/month", es: "Desde USD 1,99/mes" },
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
    subtitle: {
      en: "Available for iOS and Android. Download the app today.",
      es: "Disponible para iOS y Android. Descargá la app hoy.",
    },
    appStore: { en: "App Store", es: "App Store" },
    playStore: { en: "Google Play", es: "Google Play" },
  },
  support: {
    title: { en: "Customer Support", es: "Soporte al Cliente" },
    subtitle: { en: "We are here to help you. Send us an email and we will get back to you as soon as possible.", es: "Estamos para ayudarte. Envianos un mail y te responderemos a la brevedad." },
    emailLabel: { en: "Email us at", es: "Escribinos a" },
    copyEmail: { en: "Copy Email", es: "Copiar Correo" },
    copied: { en: "Copied!", es: "¡Copiado!" },
    sendEmail: { en: "Send Email", es: "Enviar Correo" },
    backHome: { en: "Back to Home", es: "Volver al Inicio" },
    faqTitle: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
    faq1Q: { en: "How do I import a recipe?", es: "¿Cómo importo una receta?" },
    faq1A: { en: "You can import recipes using our AI by sharing an Instagram post, pasting a website URL, or simply describing what you want.", es: "Podés importar recetas usando nuestra IA compartiendo un post de Instagram, pegando una URL de un sitio web, o simplemente describiendo lo que quieras." },
    faq2Q: { en: "Is my shopping list updated automatically?", es: "¿Mi lista de compras se actualiza sola?" },
    faq2A: { en: "Yes! When you add recipes or change the number of servings, all ingredients are aggregated and organized by category automatically.", es: "¡Sí! Al agregar recetas o cambiar la cantidad de porciones, todos los ingredientes se unifican y organizan por categoría automáticamente." },
    faq3Q: { en: "Where can I download the app?", es: "¿Desde dónde puedo descargar la app?" },
    faq3A: {
      en: "You can download ReciList for iOS from the App Store and for Android from Google Play using the store buttons in the download section.",
      es: "Podés descargar ReciList para iOS desde la App Store y para Android desde Google Play a través de los enlaces en la sección de descarga.",
    }
  },
  footer: {
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
    support: { en: "Customer Support", es: "Soporte al Cliente" },
    privacy: { en: "Privacy Policy", es: "Política de Privacidad" },
    terms: { en: "Terms of Use", es: "Términos de Uso" },
    accountDeletion: { en: "Delete Account", es: "Eliminar Cuenta" },
  },
} as const;

type Translations = typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
