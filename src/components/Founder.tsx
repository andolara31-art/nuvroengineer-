import { motion } from 'motion/react';

export default function Founder() {
  return (
    <section className="py-24 md:py-32 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-brand-dark relative">
              {/* Placeholder for Founder Image */}
              <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/20 font-mono text-sm">
                [ Foto del Fundador ]
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12">
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              09. Sobre el Fundador
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-brand-white leading-tight mb-8">
              Anderson Agüero Lara
            </h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-platinum/80 leading-relaxed font-light mb-6"
            >
              Constructor digital enfocado en la ejecución y el criterio técnico. Mi objetivo es ayudar a negocios a verse y operar mejor a través de sistemas web premium.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-platinum/60 leading-relaxed font-light mb-8"
            >
              NUVRO ENGINEER nace de la necesidad de ofrecer soluciones digitales que no solo sean estéticamente superiores, sino que realmente resuelvan problemas comerciales y mejoren la percepción de valor de las marcas.
            </motion.p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-brand-platinum/80">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Basado en Costa Rica
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
