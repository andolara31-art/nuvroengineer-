import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Idea o Brief',
    description: 'Entendemos tu negocio, tu oferta y el problema real que necesitas resolver con tu nueva presencia digital.'
  },
  {
    number: '02',
    title: 'Estructura y Diseño',
    description: 'Creamos la arquitectura de la información y el diseño visual premium, enfocado en claridad y conversión.'
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construimos la web con código limpio, rápido y escalable, asegurando un rendimiento óptimo en cualquier dispositivo.'
  },
  {
    number: '04',
    title: 'Revisión',
    description: 'Afinamos detalles, animaciones y flujos de usuario para garantizar una experiencia impecable.'
  },
  {
    number: '05',
    title: 'Entrega y Publicación',
    description: 'Lanzamos tu nuevo activo digital y lo conectamos con tus herramientas de negocio.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            08. Cómo trabajamos
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight max-w-2xl">
            Un proceso claro, sin sorpresas.
          </h3>
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
