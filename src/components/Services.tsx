import { motion } from 'motion/react';
import { Layout, Globe, Code2, Zap, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Layout size={24} />,
    title: 'Landing Pages',
    description: 'Páginas de alta conversión diseñadas para captar leads y vender servicios con una estética premium.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Webs para Negocios',
    description: 'Sitios corporativos modernos que elevan la percepción de tu marca y comunican tu valor claramente.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Mini SaaS / MVPs',
    description: 'Desarrollo de aplicaciones web a medida para validar ideas o sistematizar procesos internos.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Automatizaciones',
    description: 'Conectamos tus herramientas para ahorrar horas de trabajo manual y evitar errores humanos.',
  },
  {
    icon: <BarChart size={24} />,
    title: 'Sistemas de Captación',
    description: 'Embudos digitales y seguimiento automatizado para no perder ninguna oportunidad de venta.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            02. Qué hacemos
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight max-w-2xl">
            Soluciones digitales que funcionan.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-brand-black border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-platinum mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
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
