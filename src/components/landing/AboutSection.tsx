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
          Creamos Don Cheffy porque estábamos cansados de improvisar en la cocina
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Todo empezó con una pregunta que todos nos hacemos a diario: <em>&ldquo;¿Qué cocino hoy?&rdquo;</em>. 
            Entre la falta de ideas, las listas de compras incompletas y los ingredientes olvidados, 
            cocinar se sentía más como un problema que como un placer.
          </p>
          <p>
            Con Don Cheffy queremos que cocinar vuelva a ser simple y divertido. La inteligencia artificial 
            se encarga de lo aburrido — pensar qué hacer, calcular ingredientes, armar la lista del súper — 
            para que tú solo te preocupes por disfrutar.
          </p>
          <p className="text-foreground font-medium">
            🍳 Nuestro objetivo: que nunca más llegues al súper sin saber qué comprar.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
