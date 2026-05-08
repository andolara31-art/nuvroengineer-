import { motion } from 'motion/react';
import { ArrowRight, Instagram, Globe } from 'lucide-react';

export default function Landings() {
  return (
    <section id="landings" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#0066FF]/5 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-sm font-medium tracking-widest text-[#0066FF] uppercase">Landing Pages</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Una promoción en redes dura horas. <br className="hidden md:block"/>Una landing puede vender todos los días.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 font-sans leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Creamos landing pages para explicar una oferta, eliminar dudas y llevar al cliente a escribir, reservar o comprar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://wa.me/50671757171?text=Hola NUVRO, quiero una landing"
              target="_blank"
              rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0066FF] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#0066FF] transition-all shadow-xl shadow-[#0066FF]/20"
            >
              Quiero una landing <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Visual Split Screen */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch max-w-5xl mx-auto">
          
          {/* Before: Instagram Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-[rgba(220,38,38,0.3)] rounded-[40px] p-8 md:p-12 flex flex-col items-center justify-start text-center relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-8 w-full justify-center">
              <Instagram size={20} className="text-[#DC2626]" />
              <span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Antes</span>
            </div>
            
            <div className="w-[200px] h-[360px] bg-[#111111] rounded-[24px] border border-white/10 relative overflow-hidden flex flex-col">
              <div className="p-4 flex items-center gap-3 border-b border-white/5">
                <div className="w-8 h-8 rounded-full bg-[#111111]" />
                <div className="h-2 w-16 bg-[#111111] rounded-full" />
              </div>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <span className="text-white/20 font-bold text-2xl mb-4">OFERTA LIMITADA</span>
                <div className="h-2 w-24 bg-[#111111]/10 rounded-full mb-2" />
                <div className="h-2 w-16 bg-[#111111]/10 rounded-full mb-6" />
                <div className="px-6 py-2 bg-[#111111] rounded-full text-[10px] text-white/40">LINK EN BIO</div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-[#DC2626] font-bold tracking-widest">EXPIRA EN 24H</div>
            </div>
            
            <p className="mt-8 text-white/40 font-sans">Publicación perdida. Flyer sin CTA claro. Mensaje disperso.</p>
          </motion.div>

          {/* After: Landing Page */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0D1B3E] border border-[rgba(0,102,255,0.4)] rounded-[40px] p-8 md:p-12 flex flex-col items-center justify-start text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-8 w-full justify-center relative z-10">
              <Globe size={20} className="text-[#0066FF]" />
              <span className="text-[#0066FF] font-bold uppercase tracking-widest text-sm">Estructura NUVRO</span>
            </div>
            
            <div className="w-[220px] h-[400px] bg-[#0A0A0A] rounded-[32px] border-2 border-[#111111] relative overflow-hidden flex flex-col shadow-2xl z-10">
              {/* Fake web header */}
              <div className="h-10 w-full bg-[#111111] flex items-center px-4 border-b border-white/5">
                <div className="h-2 w-12 bg-[#111111]/20 rounded-full" />
              </div>
              
              <div className="flex-1 overflow-hidden relative">
                {/* Hero */}
                <div className="p-6 text-center border-b border-white/5 pb-8 relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-[#0066FF]/20 blur-[20px] rounded-full" />
                   <div className="h-3 w-16 bg-[#0066FF] rounded-full mx-auto mb-4" />
                   <div className="h-4 w-full bg-[#111111]/80 rounded-full mb-2" />
                   <div className="h-4 w-3/4 bg-[#111111]/80 rounded-full mx-auto mb-6" />
                   <div className="px-5 py-2.5 bg-[#0066FF] rounded-full w-full mx-auto shadow-lg shadow-[#0066FF]/30">
                     <div className="h-2 w-16 bg-[#111111] rounded-full mx-auto" />
                   </div>
                </div>
                {/* Benefits */}
                <div className="p-4 space-y-3">
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#16A34A]/20 border border-[#16A34A]" />
                     <div className="h-1.5 w-20 bg-[#111111]/60 rounded-full" />
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#16A34A]/20 border border-[#16A34A]" />
                     <div className="h-1.5 w-16 bg-[#111111]/60 rounded-full" />
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#16A34A]/20 border border-[#16A34A]" />
                     <div className="h-1.5 w-24 bg-[#111111]/60 rounded-full" />
                   </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-white font-medium font-sans relative z-10">Beneficios, prueba visual y CTA de WhatsApp siempre disponible.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
