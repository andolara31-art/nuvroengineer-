import { motion } from 'motion/react';
import { Layout, Smartphone, Database, Zap, Bot, Code } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-brand-accent" />,
    title: 'Landing Pages Pro',
    description: 'Páginas diseñadas exclusivamente para convertir visitantes en clientes. Estructura de ventas agresiva.',
    price: 'Desde $350'
  },
  {
    icon: <Code className="text-indigo-400" />,
    title: 'Webs Corporativas',
    description: 'Sitios completos con secciones ilimitadas, blog, integración de servicios y diseño editorial premium.',
    price: 'Desde $600'
  },
  {
    icon: <Smartphone className="text-emerald-400" />,
    title: 'Mini SaaS / MVP',
    description: 'Desarrollamos la primera versión funcional de tu idea tecnológica en tiempo récord.',
    price: 'Desde $1200'
  },
  {
    icon: <Database className="text-orange-400" />,
    title: 'Sistemas Internos',
    description: 'Gestión de inventarios, CRMs a medida y herramientas que automatizan lo aburrido de tu oficina.',
    price: 'Desde $800'
  },
  {
    icon: <Bot className="text-brand-blue" />,
    title: 'Agentes IA',
    description: 'Chatbots inteligentes que responden por vos, agendan citas y filtran prospectos 24/7.',
    price: 'Desde $500'
  },
  {
    icon: <Zap className="text-brand-accent" />,
    title: 'Automatizaciones',
    description: 'Conectamos tus herramientas (Slack, Gmail, WhatsApp, Docs) para que trabajen solas.',
    price: 'Cotización a medida'
  }
];

export default function NuvroCustom() {
  const whatsappUrl = (msg: string) => `https://wa.me/506XXXXXXXX?text=${encodeURIComponent(msg)}`;

  return (
    <section id="custom" className="py-24 md:py-32 bg-brand-dark/20 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4 block">
            NUVRO CUSTOM
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-white mb-6">
            Cuando necesitás algo más grande.
          </h2>
          <p className="text-brand-platinum/60 max-w-2xl mx-auto font-light">
             Si tu negocio ya necesita una estructura más seria y robusta, NUVRO desarrolla experiencias digitales a medida de clase mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card hover:bg-white/[0.08] transition-all duration-300 p-8 rounded-3xl group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-white mb-4">
                {service.title}
              </h3>
              <p className="text-brand-platinum/60 leading-relaxed font-light mb-8 text-sm">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                 <span className="text-brand-accent font-mono text-xs font-bold uppercase tracking-wider">{service.price}</span>
                 <a 
                   href={whatsappUrl(`Hola NUVRO, quiero cotizar un proyecto custom: ${service.title}.`)}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-brand-white opacity-40 hover:opacity-100 transition-opacity"
                 >
                   <Zap size={20} />
                 </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <a
              href={whatsappUrl("Hola NUVRO, quiero cotizar un proyecto grande a medida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-brand-accent text-brand-white font-bold hover:scale-105 transition-all text-lg"
           >
              Cotizar proyecto grande
           </a>
        </div>
      </div>
    </section>
  );
}
