import { motion } from 'motion/react';

export default function ValueProposition() {
  return (
    <section className="py-32 md:py-48 bg-brand-black/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,229,255,0.05)_0%,rgba(10,10,10,1)_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-8">
            03. Por qué Nuvro
          </h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-brand-white leading-[1.1] tracking-tight text-balance mb-8"
          >
            No vendemos páginas web. Construimos <span className="text-brand-accent italic font-light">activos comerciales</span>.
          </motion.h3>
          
          <p className="text-lg md:text-xl text-brand-platinum/60 max-w-2xl mx-auto leading-relaxed font-light mb-20">
            La mayoría de agencias entregan plantillas genéricas que no convierten. Nosotros diseñamos con estrategia.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 text-left mt-12">
            {[
              { title: 'Claridad absoluta', desc: 'Tu cliente entenderá qué vendés y por qué comprarte en los primeros 5 segundos.' },
              { title: 'Estética premium', desc: 'Elevamos la percepción de tu marca. Si cobrás caro, tu presencia digital debe verse cara.' },
              { title: 'Rendimiento técnico', desc: 'Sitios rápidos, optimizados y construidos con código moderno. Cero fricción para el usuario.' }
            ].map((item, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                <h4 className="text-lg font-medium text-brand-white mb-2">{item.title}</h4>
                <p className="text-brand-platinum/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
