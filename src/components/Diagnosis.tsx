import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const comparisons = [
  { 
    before: "Menú en foto borrosa por WhatsApp", 
    after: "Menú QR interactivo en mesa y celular"
  },
  { 
    before: "Link BIO lleno de botones que no guían", 
    after: "Link BIO guiado hacia reservas y valor"
  },
  { 
    before: "Promociones perdidas en Historias de 24h", 
    after: "Landing Pages promocionales que venden solas"
  },
  { 
    before: "Catálogo desordenado con fotos sueltas", 
    after: "Catálogo digital con carrito a WhatsApp"
  },
  {
    before: "Atención manual caótica en DM",
    after: "Atención centralizada y estructurada"
  }
];

export default function Diagnosis() {
  return (
    <section id="problema" className="py-24 md:py-32 bg-[#F5F7FA] relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-sm font-medium tracking-widest text-red-500 uppercase">El Problema</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-[#111827] leading-tight tracking-tight mb-6"
          >
            Tu negocio puede perder ventas por detalles digitales simples.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#6B7280] font-sans leading-relaxed"
          >
            Menús en fotos borrosas, links confusos, promociones que desaparecen y WhatsApp saturado hacen que el cliente dude o compre en otro lugar.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Antes Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white border border-black/5 rounded-[32px] p-8 md:p-12 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-black/5">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <X size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#111827]">Desorden Digital</h3>
            </div>
            
            <ul className="space-y-8">
              {comparisons.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 text-red-400 shrink-0"><X size={20} /></div>
                  <p className="text-[#6B7280] text-lg leading-snug">{item.before}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Después Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#0066FF] border border-[#0047B8] rounded-[32px] p-8 md:p-12 shadow-2xl shadow-[#0066FF]/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/20 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0066FF] shadow-lg">
                <Check size={24} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Estructura NUVRO</h3>
            </div>
            
            <ul className="space-y-8 relative z-10">
              {comparisons.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 text-white shrink-0"><Check size={20} strokeWidth={3} /></div>
                  <p className="text-white text-lg font-medium leading-snug">{item.after}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
