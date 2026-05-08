import { motion } from 'motion/react';
import { ArrowRight, Instagram, Globe } from 'lucide-react';

export default function Landings() {
  return (
    <section id="landings" className="py-[clamp(80px,10vw,140px)] bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#2B6CB0]/5 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#2B6CB0]" />
            <span className="text-sm font-medium tracking-widest text-[#2B6CB0] uppercase">Landing Pages</span>
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
            className="inline-flex items-center gap-3 border border-white px-8 py-4 bg-[#FFFFFF] text-[#0A0A0A] font-bold uppercase tracking-wider text-sm hover:bg-[#2B6CB0] hover:text-white transition-all shadow-xl shadow-[#2B6CB0]/20"
            >
              Quiero una landing <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Visual Split Screen */}
        <div className="mx-auto grid max-w-6xl items-stretch gap-5 md:grid-cols-[0.92fr_1.08fr]">
          
          {/* Before: Instagram Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="precision-card relative flex flex-col items-center justify-start overflow-hidden border border-white/10 bg-[#111111] p-8 text-center md:p-12"
          >
            <div className="matrix-strip mb-8 w-full">
              <span>post</span>
              <span>wait</span>
              <span>expire</span>
              <span>lost</span>
            </div>
            <div className="flex items-center gap-3 mb-8 w-full justify-center">
              <Instagram size={20} className="text-[#6B7280]" />
              <span className="text-[#6B7280] font-bold uppercase tracking-widest text-sm">Antes</span>
            </div>
            
            <div className="relative flex h-[360px] w-[200px] flex-col overflow-hidden border border-white/10 bg-[#111111]">
              <div className="p-4 flex items-center gap-3 border-b border-white/5">
                <div className="w-8 h-8 bg-[#111111]" />
                <div className="h-2 w-16 bg-[#111111]" />
              </div>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <span className="text-white/20 font-bold text-2xl mb-4">OFERTA LIMITADA</span>
                <div className="h-2 w-24 bg-[#111111]/10 mb-2" />
                <div className="h-2 w-16 bg-[#111111]/10 mb-6" />
                <div className="px-6 py-2 bg-[#111111] text-[10px] text-white/40">LINK EN BIO</div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-[#6B7280] font-bold tracking-widest">EXPIRA EN 24H</div>
            </div>
            
            <p className="mt-8 text-white/40 font-sans">Publicación perdida. Flyer sin CTA claro. Mensaje disperso.</p>
          </motion.div>

          {/* After: Landing Page */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="precision-card relative flex flex-col items-center justify-start overflow-hidden border border-[rgba(43,108,176,0.4)] bg-[#111111] p-8 text-center shadow-2xl md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2B6CB0]/5 to-transparent pointer-events-none" />
            <div className="matrix-strip relative z-10 mb-8 w-full">
              <span>offer</span>
              <span>proof</span>
              <span>cta</span>
              <span>sell</span>
            </div>
            
            <div className="flex items-center gap-3 mb-8 w-full justify-center relative z-10">
              <Globe size={20} className="text-[#2B6CB0]" />
              <span className="text-[#2B6CB0] font-bold uppercase tracking-widest text-sm">Estructura NUVRO</span>
            </div>
            
            <div className="relative z-10 flex h-[400px] w-[220px] flex-col overflow-hidden border-2 border-[#111111] bg-[#0A0A0A] shadow-2xl">
              {/* Fake web header */}
              <div className="h-10 w-full bg-[#111111] flex items-center px-4 border-b border-white/5">
                <div className="h-2 w-12 bg-[#111111]/20" />
              </div>
              
              <div className="flex-1 overflow-hidden relative">
                {/* Hero */}
                <div className="p-6 text-center border-b border-white/5 pb-8 relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-[20px] rounded-full" />
                   <div className="h-3 w-16 bg-[#FFFFFF] mx-auto mb-4" />
                   <div className="h-4 w-full bg-[#111111]/80 mb-2" />
                   <div className="h-4 w-3/4 bg-[#111111]/80 mx-auto mb-6" />
                   <div className="px-5 py-2.5 bg-[#FFFFFF] w-full mx-auto shadow-lg shadow-black/30">
                     <div className="h-2 w-16 bg-[#111111] mx-auto" />
                   </div>
                </div>
                {/* Benefits */}
                <div className="p-4 space-y-3">
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-white/10 border border-white/30" />
                     <div className="h-1.5 w-20 bg-[#111111]/60" />
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-white/10 border border-white/30" />
                     <div className="h-1.5 w-16 bg-[#111111]/60" />
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-white/10 border border-white/30" />
                     <div className="h-1.5 w-24 bg-[#111111]/60" />
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
