import { motion } from 'motion/react';

export default function AboutBrand() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              01. Qué es NUVRO ENGINEER
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-brand-white leading-tight">
              Una firma digital para negocios serios.
            </h3>
          </div>
          
          <div className="lg:col-span-8 lg:pl-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl text-brand-platinum/80 leading-relaxed font-light text-balance"
            >
              NUVRO ENGINEER es una firma digital enfocada en construir páginas web premium, mini SaaS y sistemas digitales útiles para negocios que necesitan verse más claros, modernos y profesionales.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg text-brand-platinum/50 leading-relaxed max-w-3xl"
            >
              No somos solo un estudio de diseño. Somos constructores de activos digitales que mejoran la percepción de valor de tu marca y optimizan tus procesos comerciales.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
