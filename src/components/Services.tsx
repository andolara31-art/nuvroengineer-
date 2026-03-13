import { motion } from 'motion/react';
import { Users, Zap, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Users size={24} />,
    title: 'Gestión de Prospectos',
    description: 'Centraliza todos tus leads en un solo lugar. Asigna, etiqueta y da seguimiento sin perder ninguna oportunidad.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Automatización Comercial',
    description: 'Crea flujos de trabajo que envían correos, asignan tareas y mueven prospectos automáticamente según su comportamiento.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Métricas y Reportes',
    description: 'Visualiza el rendimiento de tu equipo en tiempo real. Descubre qué canales convierten más y dónde se estancan las ventas.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-dark/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            02. Qué hacemos
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight max-w-2xl mb-6">
            Todo lo que necesitas para vender más.
          </h3>
          <p className="text-lg md:text-xl text-brand-platinum/60 max-w-2xl leading-relaxed font-light">
            Herramientas diseñadas para equipos comerciales que buscan eficiencia y resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl glass-card transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-platinum mb-6 group-hover:bg-brand-accent group-hover:text-brand-black transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-medium text-brand-white mb-3">{service.title}</h4>
              <p className="text-brand-platinum/60 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
