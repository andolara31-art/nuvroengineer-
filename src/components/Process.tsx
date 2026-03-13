import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Analizamos tu negocio, tu cliente ideal y tus objetivos comerciales para definir la estrategia.'
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Presentamos un plan de acción claro, con estructura, tiempos y presupuesto definido.'
  },
  {
    number: '03',
    title: 'Diseño UI/UX',
    description: 'Creamos la interfaz visual enfocada en la conversión y la experiencia del usuario.'
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Construimos el sitio o aplicación con código limpio, rápido y optimizado para SEO.'
  },
  {
    number: '05',
    title: 'Lanzamiento',
    description: 'Publicamos tu proyecto, verificamos que todo funcione perfecto y te enseñamos a usarlo.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-brand-black/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            04. Proceso
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight max-w-2xl mb-6">
            Cómo trabajamos.
          </h3>
          <p className="text-lg text-brand-platinum/60 max-w-2xl leading-relaxed font-light">
            Un método claro y estructurado para llevar tu proyecto de la idea a la realidad sin fricciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="text-5xl font-display font-bold text-white/5 mb-6">
                {step.number}
              </div>
              <h4 className="text-xl font-medium text-brand-white mb-4">{step.title}</h4>
              <p className="text-brand-platinum/60 leading-relaxed font-light text-sm">
                {step.description}
              </p>
              
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 right-0 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
