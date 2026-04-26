import { motion } from 'motion/react';
import { ExternalLink, ShoppingCart, MessageSquare, Zap, ArrowRight } from 'lucide-react';

const demos = [
  {
    title: 'Menú Burger Pro',
    type: 'Menú Digital',
    price: '$35',
    color: 'bg-orange-600',
    content: (
      <div className="p-4 space-y-4 text-white">
        <div className="flex justify-between items-center px-1">
          <div className="h-4 w-16 bg-white/20 rounded-full" />
          <ShoppingCart size={14} className="opacity-40" />
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-black/20 overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center text-4xl">🍔</div>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-brand-accent/80 backdrop-blur-sm flex items-center justify-center text-[8px] font-black uppercase tracking-widest text-white">Lo más pedido</div>
        </div>
        <div className="space-y-2 px-1">
          <div className="h-2.5 w-full bg-white/20 rounded" />
          <div className="h-2.5 w-2/3 bg-white/10 rounded" />
        </div>
      </div>
    )
  },
  {
    title: 'Estetica Links',
    type: 'Link in Bio',
    price: '$35',
    color: 'bg-rose-400',
    content: (
      <div className="p-4 flex flex-col items-center gap-6 text-white">
        <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 ring-4 ring-white/5 mt-2" />
        <div className="w-full space-y-2.5">
           {[1, 2, 3].map(i => (
             <div key={i} className="h-9 w-full bg-white/10 border border-white/20 rounded-xl flex items-center px-4 justify-between">
               <span className="text-[8px] font-black uppercase tracking-widest">Opción {i}</span>
               <div className="w-4 h-4 rounded-full bg-white/20" />
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    title: 'Boda Invitación',
    type: 'Invitación Web',
    price: '$25',
    color: 'bg-stone-800',
    content: (
      <div className="p-4 flex flex-col items-center text-center text-stone-200">
        <div className="aspect-[1/1] w-full bg-stone-700/50 rounded-2xl mb-5 flex items-center justify-center text-4xl grayscale opacity-60">💍</div>
        <div className="h-2 w-32 bg-stone-500/30 rounded mb-2" />
        <div className="h-1.5 w-24 bg-stone-500/20 rounded mb-6" />
        <div className="w-full py-3 bg-stone-200 text-stone-900 rounded-lg text-[8px] font-black uppercase tracking-widest">Nuestra Historia</div>
      </div>
    )
  },
  {
    title: 'Zapateria Express',
    type: 'Catálogo QR',
    price: '$55',
    color: 'bg-zinc-900',
    content: (
      <div className="p-4 bg-zinc-800/80 h-full text-zinc-400">
        <div className="h-3 w-20 bg-zinc-700 rounded mb-5" />
        <div className="grid grid-cols-2 gap-3">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="aspect-square bg-zinc-700/50 rounded-xl p-2 flex flex-col border border-white/5">
                <div className="text-xl opacity-30 mt-1">👟</div>
                <div className="mt-auto flex justify-between items-center">
                  <div className="h-1.5 w-1/2 bg-zinc-500 rounded" />
                  <div className="w-3 h-3 bg-emerald-500/40 rounded-sm" />
                </div>
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    title: 'Black Friday',
    type: 'Promo Page',
    price: '$75',
    color: 'bg-black',
    content: (
      <div className="p-4 flex flex-col justify-center h-full text-white border border-white/10 rounded-2xl m-2 bg-gradient-to-br from-zinc-900 to-black">
        <div className="text-[10px] font-mono text-brand-accent uppercase italic mb-2 tracking-widest font-black">SOLO HOY</div>
        <div className="text-[32px] font-display font-black leading-[0.8] mb-6 tracking-tighter uppercase italic">80% OFF</div>
        <div className="h-12 w-full bg-brand-accent text-white rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(0,102,255,0.3)]">Comprar</div>
      </div>
    )
  },
  {
    title: 'Google Review',
    type: 'Escaneo QR',
    price: '$10',
    color: 'bg-blue-600',
    content: (
      <div className="flex flex-col items-center justify-center h-full p-4 text-white">
        <div className="aspect-square w-28 bg-white rounded-[32px] p-5 shadow-2xl relative overflow-hidden flex items-center justify-center">
           <Zap size={40} className="text-blue-600 animate-pulse" />
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent" />
        </div>
        <div className="mt-6 h-2 w-20 bg-white/20 rounded-full" />
      </div>
    )
  }
];

export default function DemoWall() {
  const whatsappUrl = (msg: string) => `https://wa.me/50671757171?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-24 relative overflow-hidden bg-brand-black border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4 block">
              CATÁLOGO VISUAL
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-medium text-brand-white leading-[0.9] uppercase tracking-tighter">
              Demos <span className="text-brand-accent italic">vivos.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-platinum/40 max-w-sm font-light leading-snug">
             No imaginés cómo se verá tu negocio. Miralo en acción ahora mismo y empezá a vender.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {demos.map((demo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[9/16] rounded-[48px] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:shadow-brand-accent/20 group-hover:-translate-y-2 border border-white/5 bg-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                 <div className={`absolute inset-0 opacity-95 ${demo.color}`} />
                 <div className="absolute inset-0">
                    {demo.content}
                 </div>
                 
                 {/* Detail view overlay */}
                 <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-all duration-500" />
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-brand-black/90 via-transparent to-transparent pointer-events-none" />
                 
                 <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-brand-black/95 backdrop-blur-3xl border-t border-white/10">
                    <a 
                      href={whatsappUrl(`Hola NUVRO, me interesa este demo de "${demo.title}" para mi negocio.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 bg-brand-accent text-brand-white text-[10px] font-black uppercase tracking-[0.2em] rounded-3xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                    >
                       Lo quiero <ArrowRight size={14} />
                    </a>
                 </div>
              </div>
              <div className="px-4">
                 <div className="text-[9px] font-mono text-brand-platinum/20 uppercase tracking-[0.4em] mb-2">{demo.type}</div>
                 <h4 className="text-brand-white font-black text-xs uppercase tracking-tighter group-hover:text-brand-accent transition-colors mb-2 leading-none">{demo.title}</h4>
                 <div className="text-brand-accent text-sm font-black italic tracking-tighter">Desde {demo.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 lg:p-20 rounded-[60px] bg-white/[0.015] border border-white/5 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
           <div className="flex-1">
              <h3 className="text-3xl md:text-5xl font-display font-medium text-brand-white leading-tight uppercase tracking-tighter mb-6">
                Tu negocio merece una <br/> <span className="text-brand-accent italic">experiencia signature.</span>
              </h3>
              <p className="text-lg text-brand-platinum/40 font-light">
                No somos una agencia web tradicional. Somos una tienda de herramientas digitales diseñadas para vender. Sin vueltas, sin mareo técnico.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-8 py-5 border border-white/5 rounded-2xl bg-white/[0.02] flex flex-col justify-center">
                 <span className="text-[10px] font-mono text-brand-platinum/30 uppercase tracking-[0.2em]">Más de</span>
                 <span className="text-4xl font-display font-black text-brand-white leading-none mt-1">150+</span>
                 <span className="text-[9px] font-mono text-brand-platinum/30 uppercase tracking-[0.2em] mt-2">Links activos</span>
              </div>
              <div className="px-8 py-5 border border-white/5 rounded-2xl bg-white/[0.02] flex flex-col justify-center">
                 <span className="text-[10px] font-mono text-brand-platinum/30 uppercase tracking-[0.2em]">Entrega en</span>
                 <span className="text-4xl font-display font-black text-brand-accent leading-none mt-1">72hs</span>
                 <span className="text-[9px] font-mono text-brand-platinum/30 uppercase tracking-[0.2em] mt-2">O menos</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
