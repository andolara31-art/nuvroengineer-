import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Comparison() {
  return (
    <section className="py-24 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-white mb-6 uppercase tracking-tight">
            De "te mando las fotos" <br className="hidden md:block" /> a "entrás, ves y pedís".
          </h2>
          <p className="text-brand-platinum/60 max-w-2xl mx-auto font-light">
            No pierdas ventas por procesos lentos o diseños improvisados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0 border border-white/10 rounded-3xl overflow-hidden">
          {/* ANTES */}
          <div className="p-8 md:p-12 bg-white/[0.02] relative border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                <X size={20} />
              </div>
              <span className="text-xl font-display font-bold text-red-500 uppercase tracking-widest">ANTES</span>
            </div>
            
            <ul className="space-y-6">
              {[
                'Fotos sueltas de baja calidad',
                'PDF pesado que nadie descarga',
                'Menú borroso en una foto de cámara',
                'Link vacío en Instagram (solo texto)',
                'Promociones que se pierden en historias',
                'WhatsApp desordenado con mil preguntas'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-brand-platinum/40 line-through decoration-red-500/30"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/30 shrink-0" />
                  <span className="font-light">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 p-6 rounded-2xl border border-white/5 bg-brand-black/40 grayscale opacity-40">
               <div className="h-4 w-32 bg-white/10 rounded mb-4" />
               <div className="h-24 w-full bg-white/5 rounded" />
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="p-8 md:p-12 bg-brand-accent/5 relative">
            <div className="absolute top-0 right-0 p-8">
               <div className="w-12 h-12 rounded-full bg-brand-accent animate-pulse blur-2xl opacity-20" />
            </div>

            <div className="flex items-center gap-2 mb-8 uppercase tracking-widest">
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-brand-white">
                <Check size={20} />
              </div>
              <span className="text-xl font-display font-bold text-brand-accent">DESPUÉS</span>
            </div>

            <ul className="space-y-6">
              {[
                'Link único, rápido y compartible',
                'QR claro y estético de alta resolución',
                'Llamados a la acción directos al grano',
                'WhatsApp conectado y automatizado',
                'Diseño visual profesional y moderno',
                'Producto fácil de entender y pedir'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-brand-white"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 shadow-[0_0_8px_rgba(0,102,255,1)]" />
                  <span className="font-light">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 p-6 rounded-2xl border border-brand-accent/30 bg-brand-accent/10 shadow-2xl shadow-brand-accent/10">
               <div className="h-4 w-40 bg-brand-accent/40 rounded mb-4" />
               <div className="flex gap-2">
                 <div className="h-12 w-12 bg-brand-accent/20 rounded-lg" />
                 <div className="flex-1 space-y-2">
                   <div className="h-4 w-full bg-white/10 rounded" />
                   <div className="h-4 w-24 bg-white/10 rounded" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
