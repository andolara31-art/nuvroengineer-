import { motion } from 'motion/react';
import { Database, Zap, Laptop, ArrowRight, Settings, Cpu } from 'lucide-react';

const customServices = [
  {
    icon: <Laptop size={20} />,
    title: "Webs Premium",
    desc: "Plataformas web construidas a medida. Diseño exclusivo, alto rendimiento y arquitecturas escalables."
  },
  {
    icon: <Database size={20} />,
    title: "CRM / Dashboards",
    desc: "Visualización de datos en tiempo real, tableros de control y gestión centralizada de negocio."
  },
  {
    icon: <Zap size={20} />,
    title: "Automatización",
    desc: "Integración de flujos de trabajo. Conectamos software para que opere de manera fluida y sin error humano."
  },
  {
    icon: <Settings size={20} />,
    title: "Sistemas Internos",
    desc: "Herramientas operativas privadas. Software hecho exactamente como tu equipo trabaja."
  },
  {
    icon: <Cpu size={20} />,
    title: "IA Aplicada",
    desc: "Modelos de inteligencia artificial integrados en tu negocio para análisis, soporte u optimización."
  }
];

export default function NuvroCustom() {
  return (
    <section id="custom" className="py-24 md:py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#0066FF]/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <span className="text-sm font-medium tracking-widest text-white/40 uppercase">Nuvro Custom</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Cuando necesitás algo más grande, lo construimos a medida.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 font-sans leading-relaxed mb-10"
          >
            Webs premium, CRM, dashboards, automatización, IA aplicada y sistemas internos diseñados según tu operación.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://wa.me/50671757171?text=Hola NUVRO, necesito un sistema custom"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all"
            >
              Hablar de un proyecto custom <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Technical Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-[#0A0A0A] border border-white/5 p-8 rounded-[32px] group hover:border-[#0066FF]/30 transition-all duration-300 relative ${idx === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[32px]" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-[#0066FF] transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{service.title}</h3>
                </div>
                
                <p className="text-white/50 font-sans leading-relaxed text-base">
                  {service.desc}
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/5 w-full flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase">Custom Solution</span>
                  <ArrowRight size={16} className="text-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
