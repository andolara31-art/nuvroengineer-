import { motion } from 'motion/react';
import { Layout, Smartphone, Database, Zap, Bot, Code, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-brand-accent" />,
    title: 'Landing Pages Pro',
    description: 'Diseñadas para convertir visitantes en clientes. No son informativas, son comerciales.',
    price: 'Desde $350'
  },
  {
    icon: <Code className="text-indigo-400" />,
    title: 'Webs Corporativas',
    description: 'Sitios robustos, secciones ilimitadas y diseño editorial premium para empresas serias.',
    price: 'Desde $600'
  },
  {
    icon: <Database className="text-orange-400" />,
    title: 'Sistemas a Medida',
    description: 'Gestión de inventarios, CRMs y herramientas que automatizan lo aburrido de tu oficina.',
    price: 'Desde $800'
  }
];

export default function NuvroCustom() {
  const whatsappUrl = (msg: string) => `https://wa.me/50671757171?text=${encodeURIComponent(msg)}`;

  return (
    <section id="custom" className="py-24 md:py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[10px] font-mono tracking-[0.3em] text-brand-accent uppercase mb-6 border border-brand-accent/30 px-3 py-1 rounded-full">
            SERVICIOS CUSTOM
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-medium text-brand-white mb-8 uppercase tracking-tighter leading-[0.9]">
            Proyectos <br/> <span className="text-brand-accent italic">de otra liga.</span>
          </h2>
          <p className="text-xl text-brand-platinum/50 max-w-2xl mx-auto font-light leading-relaxed">
             Si tu negocio superó los micro-productos y necesita una estructura robusta, NUVRO desarrolla sistemas de clase mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card bg-white/[0.02] hover:bg-white/[0.05] border-white/5 transition-all duration-700 p-10 rounded-[40px] group flex flex-col h-full"
            >
              <div className="mb-10 p-5 bg-white/5 rounded-3xl w-fit group-hover:bg-brand-accent/10 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-white mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-brand-platinum/40 leading-relaxed font-light mb-12 text-base">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                 <div className="flex flex-col">
                   <span className="text-[10px] font-mono text-brand-platinum/30 uppercase tracking-widest mb-1">Inversión</span>
                   <span className="text-brand-white font-display text-xl font-black">{service.price}</span>
                 </div>
                 <a 
                   href={whatsappUrl(`Hola NUVRO, quiero una consultoría para un proyecto de: ${service.title}.`)}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-brand-accent text-brand-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-brand-accent/20"
                 >
                   <ArrowUpRight size={24} />
                 </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[50px] bg-brand-accent text-brand-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000" />
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter mb-2">¿Tu proyecto no entra en estas cajas?</h4>
            <p className="text-brand-white/80 font-light">Agendamos una llamada de consultoría gratuita para analizar tu caso.</p>
          </div>
          <a
             href={whatsappUrl("Hola NUVRO, quiero agendar una consultoría para un proyecto especial.")}
             target="_blank"
             rel="noopener noreferrer"
             className="relative z-10 px-12 py-6 rounded-2xl bg-brand-black text-brand-white font-black uppercase tracking-tighter hover:bg-brand-white hover:text-brand-black transition-all shadow-xl"
          >
             Agendar Consultoría
          </a>
        </div>
      </div>
    </section>
  );
}
