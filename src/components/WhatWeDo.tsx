import { motion } from 'motion/react';
import { MousePointer2, Globe } from 'lucide-react';

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#0066FF] uppercase mb-6 block">
            01. QUÉ HACEMOS
          </span>
          <h2 className="text-4xl md:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-8 max-w-3xl">
            Sistemas digitales que multiplican resultados.
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl leading-relaxed">
            Construimos herramientas y webs que simplifican tu negocio y elevan tu posicionamiento.
          </p>
        </div>

        <div className="relative mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/5"
          >
            <img 
              src="/assets/nuvro/hero-command-center.png" 
              alt="System Mockup" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-12 hover:border-white/10 transition-colors group"
          >
            <div className="w-12 h-12 bg-[#111111]/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/20 transition-all">
              <MousePointer2 className="text-white group-hover:text-[#0066FF] transition-colors" size={24} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">Landing Pages</h3>
            <p className="text-white/50 font-light leading-relaxed">
              Diseño enfocado en conversión para captar leads o vender un servicio específico de forma directa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-12 hover:border-white/10 transition-colors group"
          >
            <div className="w-12 h-12 bg-[#111111]/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/20 transition-all">
              <Globe className="text-white group-hover:text-[#0066FF] transition-colors" size={24} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">Webs para Negocios</h3>
            <p className="text-white/50 font-light leading-relaxed">
              Sitios corporativos premium que transmiten autoridad y confianza a tus clientes potenciales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
