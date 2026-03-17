import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-3xl p-8 sm:p-14 border border-border shadow-lg"
      >
        <span className="text-sm font-medium text-primary tracking-widest uppercase mb-6 block">
          De los creadores
        </span>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
          Creamos Don Cheffy porque ir al súper no debería ser tan complicado
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Listas a medias, ingredientes olvidados, viajes extra al súper... nos pasaba cada semana.
            Nos dimos cuenta de que el problema no era cocinar, sino <em>planificar y comprar</em>.
          </p>
          <p>
            Don Cheffy usa inteligencia artificial para resolver eso: genera recetas, arma tu lista de compras 
            automáticamente y organiza todo para que vayas al súper una vez y con todo lo que necesitas.
          </p>
          <p className="text-foreground font-medium">
            🎯 Nuestro objetivo: que cada ida al súper sea rápida, completa y sin estrés.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
