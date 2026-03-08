import { motion } from 'motion/react';

export default function ValueProposition() {
  return (
    <section className="py-32 md:py-48 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(242,125,38,0.05)_0%,rgba(5,5,5,1)_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-8">
            03. Qué vendemos realmente
          </h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-brand-white leading-[1.1] tracking-tight text-balance mb-12"
          >
            No vendemos solo diseño. Vendemos <span className="text-brand-accent italic font-light">claridad comercial</span>.
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-20">
            {[
              { title: 'Presencia Premium', desc: 'Tu marca se verá como una empresa establecida, no como un proyecto amateur.' },
              { title: 'Claridad Comercial', desc: 'Tus clientes entenderán exactamente qué haces y cómo puedes ayudarles.' },
              { title: 'Percepción de Valor', desc: 'Un diseño superior te permite cobrar lo que realmente vale tu servicio.' },
              { title: 'Sistemas Útiles', desc: 'Herramientas que trabajan por ti 24/7, captando y organizando prospectos.' }
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
