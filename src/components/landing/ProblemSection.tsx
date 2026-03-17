import { motion } from "framer-motion";

const ProblemSection = () => (
  <section className="py-24 sm:py-32 bg-secondary/50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-4xl mb-6 block">😩</span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6">
          Para los que odian pensar qué cocinar
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Todos los días la misma historia: &ldquo;¿Qué hago de comer?&rdquo;, la lista del súper incompleta, 
          ingredientes que se te olvidan, recetas que nunca repites. <strong className="text-foreground">Don Cheffy termina con eso.</strong>
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
