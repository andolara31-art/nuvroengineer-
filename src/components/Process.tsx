import { motion } from 'motion/react';
import { SplitText } from './ui/SplitText';

const steps = [
  {
    title: 'Idea y Contenido',
    description: 'Alineamos objetivos comerciales y recolectamos el material base de tu negocio.',
    svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-brand-accent mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="24" height="24" rx="2" />
        <path d="M12 16h16M12 20h10M12 24h14" />
        <circle cx="28" cy="28" r="6" fill="#0A0A0A" />
        <path d="M26 28l1.5 1.5 3-3" strokeWidth="2" />
      </svg>
    ),
    tag: 'F01-ALIGN'
  },
  {
    title: 'Creación',
    description: 'Ingeniería y diseño premium en iteraciones rápidas y precisas.',
    svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-brand-accent mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 20h28" strokeDasharray="4 4" />
        <path d="M20 6v28" strokeDasharray="4 4" />
        <circle cx="20" cy="20" r="10" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <path d="M27 13l5-5M13 27l-5 5" />
      </svg>
    ),
    tag: 'F02-BUILD'
  },
  {
    title: 'Entrega / Deploy',
    description: 'Sistema desplegado y listo para convertir prospectos en clientes.',
    svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-brand-accent mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 4v8M20 28v8M4 20h8M28 20h8" />
        <rect x="14" y="14" width="12" height="12" rx="2" />
        <path d="M14 14l12 12M26 14L14 26" opacity="0.3" />
        <circle cx="20" cy="20" r="18" strokeDasharray="2 6" />
      </svg>
    ),
    tag: 'F03-LAUNCH'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-brand-black relative border-t border-brand-accent/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-platinum/50 uppercase mb-4 block">
              04. Metodología
            </span>
            <SplitText 
              text="De idea a sistema en producción." 
              className="text-4xl md:text-5xl font-serif italic text-brand-white leading-tight mb-4"
            />
          </div>
          <p className="text-brand-platinum/60 max-w-md font-light text-lg">
            Proceso blindado para asegurar resultados estéticos y funcionales de alto nivel, sin perder tiempo.
          </p>
        </div>
      </div>

      <div className="w-full relative">
        <div className="absolute top-[88px] left-0 w-full h-[1px] bg-brand-accent/30 hidden md:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Scroll snap container for desktop timeline */}
          <div className="flex flex-col md:flex-row md:overflow-x-auto snap-x snap-mandatory md:pb-12 gap-12 md:gap-8 hide-scrollbar">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative snap-center shrink-0 w-full md:w-[350px] bg-[#050505] border border-brand-accent/20 p-8 rounded-[4px] group"
              >
                {/* Connection points for desktop line */}
                <div className="absolute -top-[1.5rem] left-1/2 w-3 h-3 bg-[#050505] border-2 border-brand-accent rounded-full -translate-x-1/2 hidden md:block z-10" />
                <div className="absolute -top-[1.5rem] left-1/2 w-3 h-12 bg-transparent -translate-x-1/2 hidden md:block border-l border-brand-accent/30" />

                {/* Grid guides inside card */}
                <div className="absolute inset-x-0 top-16 h-px bg-brand-accent/10" />
                <div className="absolute inset-y-0 left-8 w-px bg-brand-accent/10" />

                <div className="absolute top-4 left-4 text-[10px] font-mono text-brand-platinum/40">
                  {step.tag}
                </div>

                <div className="pt-8 pb-4 relative z-10">
                  {step.svg}
                </div>
                <h4 className="text-xl font-medium text-brand-white mb-4 text-center relative z-10">{step.title}</h4>
                <p className="text-brand-platinum/60 leading-relaxed font-light text-sm text-center relative z-10">
                  {step.description}
                </p>
                
                {/* Flow indicator in mobile */}
                {index < steps.length - 1 && (
                   <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-brand-accent/50 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

