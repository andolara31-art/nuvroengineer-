import { motion } from 'motion/react';

const steps = [
  {
    num: "01",
    title: "Descubrimiento",
    desc: "Analizamos tu negocio, tu cliente ideal y tus objetivos comerciales para definir la estrategia."
  },
  {
    num: "02",
    title: "Propuesta",
    desc: "Presentamos un plan de acción claro, con estructura, tiempos y presupuesto definido."
  },
  {
    num: "03",
    title: "Diseño UI/UX",
    desc: "Creamos la interfaz visual enfocada en la conversión y la experiencia del usuario."
  },
  {
    num: "04",
    title: "Desarrollo",
    desc: "Construimos el sitio o aplicación con código limpio, rápido y optimizado para SEO."
  },
  {
    num: "05",
    title: "Lanzamiento",
    desc: "Publicamos tu proyecto asegurando que todo funcione perfecto y te enseñamos a usarlo."
  }
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden" id="metodo">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <span className="text-xs font-mono tracking-[0.3em] text-[#0066FF] uppercase mb-6 block">
            04. PROCESO
          </span>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">
            Cómo trabajamos.
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl leading-relaxed">
            Un método claro y estructurado para llevar tu proyecto de la idea a la realidad sin fricciones.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center gap-8 py-12 border-b border-white/5 last:border-0"
            >
              <div className="text-6xl md:text-8xl font-display font-bold text-white/5 transition-colors group-hover:text-[#0066FF]/20 md:w-48">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 transition-colors group-hover:text-[#0066FF]">
                  {step.title}
                </h3>
                <p className="text-white/50 font-light max-w-xl leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
