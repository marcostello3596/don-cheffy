## Objetivo

Reestructurar la landing de ReciList: nuevo copy en español rioplatense, eliminar secciones que prometen features no disponibles, agregar secciones nuevas (IA multi-fuente, nutrición, precio) y dejar placeholders visuales donde después irán GIFs/imágenes. Se mantiene la identidad visual: tipografía Plus Jakarta Sans, verde primario, blanco, componentes shadcn, animaciones Framer Motion y estilo general de tarjetas.

## Cambios por archivo

### 1. `src/contexts/LanguageContext.tsx`
Reemplazar todas las cadenas afectadas por el nuevo copy (mantengo `en`/`es` aunque foco es ES rioplatense; EN será traducción equivalente). Agregar nuevas claves:

- `hero.title` → "Dejá de improvisar en el súper" / subtitle nuevo / cta "Probar ReciList" / placeholder "Espacio para GIF: selección de recetas y generación automática de lista"
- Nueva sección `aiRecipes` con título, texto y 4 cards (Instagram, Foto, URL, Texto libre) cada una con placeholder de GIF
- `shoppingList` (reemplaza features actual) con nuevo título, texto y placeholder de imagen
- Nueva sección `categories` (fondo verde) con título, texto y placeholder grande
- Nueva sección `nutrition` con título, texto y 2 placeholders
- `cookConfidence` ("Cociná con confianza") — copy simple y directo
- `problem` — reforzar 4 beneficios (no pensar, no olvidar, no comprar de más, lista clara)
- Nueva sección `pricing` con título, texto y 2 cards comparativas
- `finalCta` con título, subtítulo y botón "Probar ReciList"

Eliminar/deprecar: `howItWorks`, `about`, `features` (planificación semanal), `featuresSection`.

### 2. `src/components/landing/ScrollHero.tsx`
- Actualizar título, subtítulo y CTA del hero (Phase 1) con nuevas keys.
- El scroll de 500vh con 3 mockups muestra hoy las 3 features (incluyendo planificación semanal). Reducir a un hero más simple: mantener Phase 1 (headline + bubbles), eliminar Phase 2 (FeaturePanel + PhoneWithScroll) y bajar la altura a `100vh` o `150vh`. Debajo del headline, agregar un **placeholder visual** (div con borde dashed, fondo `bg-muted/40`, texto "Espacio para GIF: selección de recetas y generación automática de lista").
- Esto evita prometer la feature de planificación semanal y simplifica el hero según el nuevo enfoque.

### 3. Nuevos componentes en `src/components/landing/`

- **`AiRecipesSection.tsx`** — título + texto + grid de 4 cards (usando `Card` de shadcn). Cada card: título + placeholder (div dashed con texto "Espacio para GIF: ..."). Estilo coherente con `FeaturesSection` actual.
- **`ShoppingListSection.tsx`** — layout 2 columnas: texto + placeholder grande de mockup (estilo `PhoneMockup` pero con div dashed).
- **`CategoriesSection.tsx`** — reutiliza el fondo verde de `HowItWorksSection` (`bg-primary text-primary-foreground`). Título + texto + placeholder grande centrado.
- **`NutritionSection.tsx`** — título + texto + 2 placeholders lado a lado.
- **`CookConfidenceSection.tsx`** — reaprovecha estructura simple de texto centrado. (Si el copy de "Cociná con confianza" no existe aún en la landing, lo creamos nuevo con tono directo).
- **`PricingSection.tsx`** — título + 2 cards comparativas (Apps similares +USD 3/mes vs ReciList desde USD 0,93/mes). Card de ReciList destacada con borde primary.
- **`FinalCtaSection.tsx`** — título, subtítulo, botón primary "Probar ReciList" que scrollea al download o link directo.

### 4. `src/components/landing/ProblemSection.tsx`
Actualizar copy para listar los 4 beneficios como bullet list dentro del texto (mantener el componente, solo cambia el contenido vía LanguageContext).

### 5. `src/pages/Index.tsx`
Nuevo orden:

```text
Navbar
ScrollHero (hero simplificado + placeholder GIF)
AiRecipesSection
ShoppingListSection
CategoriesSection (fondo verde)
NutritionSection
CookConfidenceSection
ProblemSection ("Para los que odian improvisar...")
PricingSection
FinalCtaSection (o DownloadSection actualizado)
Footer
```

Eliminar imports y uso de: `HowItWorksSection`, `AboutSection`.

### 6. Archivos a borrar
- `src/components/landing/HowItWorksSection.tsx`
- `src/components/landing/AboutSection.tsx`
- `src/components/landing/FeaturesSection.tsx` (si está en uso) y `PhoneMockup.tsx` si queda huérfano (verificar usos antes de eliminar).
- Quitar de `Navbar.tsx` el link a "Cómo funciona" y "Nosotros" si existen.

## Detalles visuales de los placeholders

Todos los placeholders comparten estilo:
- `rounded-2xl border-2 border-dashed border-border bg-muted/40`
- Aspecto: cards de IA → `aspect-video`; mockup lista → `aspect-[9/16] max-w-xs`; categorías verde → `aspect-[4/3] max-w-2xl`; macros → `aspect-square`
- Texto centrado en `text-sm text-muted-foreground` con ícono opcional (`ImageIcon` o `Film` de lucide-react)

## Lo que NO se toca

- Tipografía Plus Jakarta Sans, paleta de colores, navbar, logo, footer, sistema de i18n, animaciones Framer Motion, tokens en `index.css`.
- DownloadSection se mantiene pero puede ir después del FinalCta (o el FinalCta enlaza a download). Lo confirmo en implementación: dejo `DownloadSection` justo después del FinalCta como ancla para QR codes, ya que el botón "Probar ReciList" scrollea ahí.
