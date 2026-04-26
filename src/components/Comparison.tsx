import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Comparison() {
  return (
    <section className="py-24 bg-brand-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-mono tracking-[0.3em] text-brand-platinum/30 uppercase mb-6">
            EL CAMBIO DE NIVEL
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-brand-white mb-6 uppercase tracking-tighter leading-none">
            De mandar fotos <br className="hidden md:block" /> a <span className="text-brand-accent italic">vender de verdad.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-[40px] overflow-hidden border border-white/10">
          {/* ANTES */}
          <div className="p-10 md:p-20 bg-brand-black/40 backdrop-blur-xl relative group">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                <ShieldAlert size={24} />
              </div>
              <span className="text-2xl font-display font-black text-red-500 uppercase tracking-tight italic">Status Quo</span>
            </div>
            
            <ul className="space-y-8">
              {[
                'Mandar un PDF gigante que nadie abre',
                'Un link de Instagram que no lleva a nada',
                'Menú en una foto borrosa y poco apetecible',
                'Perder 20 minutos explicando precios por chat',
                'Tu negocio se ve "pequeño" o improvisado',
                'Proceso de compra lento y frustrante'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-brand-platinum/30 decoration-red-500/30 group-hover:text-brand-platinum/50 transition-colors"
                >
                  <X className="text-red-500/40 shrink-0 mt-1" size={18} />
                  <span className="font-light text-lg leading-tight italic line-through decoration-1">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* DESPUÉS */}
          <div className="p-10 md:p-20 bg-brand-white relative group">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <ShieldCheck size={24} />
              </div>
              <span className="text-2xl font-display font-black text-brand-black uppercase tracking-tight italic">Impacto Nuvro</span>
            </div>

            <ul className="space-y-8">
              {[
                'Link único diseñado para vender rápido',
                'QR de alta resolución que refleja calidad',
                'Experiencia fluida, visual y mobile-first',
                'WhatsApp automatizado listo para el pedido',
                'Tu marca se percibe como de otra liga',
                'Cero fricción: el cliente ve, elige y paga'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-brand-black"
                >
                  <Check className="text-brand-accent shrink-0 mt-1" size={20} />
                  <span className="font-bold text-lg leading-tight">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-16 p-8 rounded-3xl bg-brand-black text-brand-white shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center justify-between mb-4">
                 <div className="h-2 w-12 bg-brand-accent rounded-full" />
                 <div className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">Resultado Real</div>
               </div>
               <p className="text-xl font-display font-medium tracking-tight">"Pasamos de explicar por chat a solo recibir pedidos."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
