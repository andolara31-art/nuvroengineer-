import { motion } from 'motion/react';
import { LayoutTemplate, Globe, Code2 } from 'lucide-react';
import { SplitText } from './ui/SplitText';

const services = [
  {
    icon: <LayoutTemplate size={48} className="text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500" />,
    title: 'Landing Pages',
    description: 'Diseño enfocado en conversión para captar leads o vender un servicio específico de forma directa.',
    ref: 'REF-001',
    coords: '[X:120 Y:450]'
  },
  {
    icon: <Globe size={48} className="text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500" />,
    title: 'Webs para Negocios',
    description: 'Sitios corporativos premium que transmiten autoridad y confianza a tus clientes potenciales.',
    ref: 'REF-002',
    coords: '[X:340 Y:120]'
  },
  {
    icon: <Code2 size={48} className="text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500" />,
    title: 'Mini SaaS / MVPs',
    description: 'Aplicaciones a medida para automatizar procesos o lanzar tu propia herramienta digital al mercado.',
    ref: 'REF-003',
    coords: '[X:560 Y:890]'
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            01. Qué hacemos
          </h2>
          <SplitText 
            text="Sistemas digitales que multiplican resultados." 
            className="text-4xl md:text-5xl font-serif italic text-brand-white leading-tight max-w-2xl mb-6"
          />
          <p className="text-lg md:text-xl text-brand-platinum/60 max-w-2xl leading-relaxed font-light">
            Construimos herramientas y webs que simplifican tu negocio y elevan tu posicionamiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 bg-[#050505] border border-brand-accent/20 transition-all group overflow-hidden"
            >
              {/* Guides */}
              <div className="absolute top-0 left-8 w-px h-full bg-brand-accent/10" />
              <div className="absolute top-16 left-0 w-full h-px bg-brand-accent/10" />

              <div className="absolute top-4 left-4 text-[10px] font-mono text-brand-white/80 group-hover:text-brand-accent transition-colors z-10">
                {service.ref}
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-brand-platinum/40 z-10">
                {service.coords}
              </div>

              <div className="mt-12 mb-8 relative z-10">
                {service.icon}
              </div>
              <h4 className="text-xl font-medium text-brand-white mb-3 relative z-10">{service.title}</h4>
              <p className="text-brand-platinum/60 leading-relaxed font-light relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
