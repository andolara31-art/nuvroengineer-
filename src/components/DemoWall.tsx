import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const demos = [
  {
    title: 'Menú para soda',
    type: 'Menú QR',
    price: 'Desde $25',
    color: 'bg-orange-500',
    content: (
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-4 w-20 bg-black/20 rounded" />
          <div className="h-4 w-4 bg-black/20 rounded-full" />
        </div>
        <div className="aspect-[4/3] rounded-lg bg-black/10 overflow-hidden relative">
          <div className="absolute inset-x-2 bottom-2 h-6 bg-orange-600 rounded flex items-center justify-center text-[8px] font-bold text-white uppercase tracking-tighter">Pedido Express</div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full bg-black/10 rounded" />
          <div className="h-2 w-2/3 bg-black/10 rounded" />
        </div>
      </div>
    )
  },
  {
    title: 'Link Bio Estilista',
    type: 'Link Bio',
    price: 'Desde $25',
    color: 'bg-pink-400',
    content: (
      <div className="p-4 flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-black/10 mt-4" />
        <div className="h-2 w-24 bg-black/10 rounded" />
        <div className="w-full space-y-2 flex flex-col items-center">
           {[1, 2, 3].map(i => (
             <div key={i} className="h-8 w-full border border-black/10 rounded-full flex items-center justify-center text-[8px] text-black/40 font-bold uppercase tracking-wider">Servicio {i}</div>
           ))}
        </div>
      </div>
    )
  },
  {
    title: 'Baby Shower',
    type: 'Invitación',
    price: 'Desde $10',
    color: 'bg-indigo-300',
    content: (
      <div className="p-4 flex flex-col items-center text-center">
        <div className="aspect-[1/1] w-full bg-white/40 rounded-xl mb-4 relative overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center text-[40px] opacity-20">🍼</div>
        </div>
        <div className="h-3 w-32 bg-black/10 rounded mb-2" />
        <div className="h-2 w-24 bg-black/10 rounded mb-6" />
        <div className="h-8 w-full bg-indigo-500 rounded flex items-center justify-center text-[8px] font-bold text-white uppercase">Confirmar Asistencia</div>
      </div>
    )
  },
  {
    title: 'Catálogo Zapatos',
    type: 'Catálogo',
    price: 'Desde $35',
    color: 'bg-zinc-100',
    content: (
      <div className="p-4 bg-white/40 h-full">
        <div className="h-4 w-24 bg-black/20 rounded mb-4" />
        <div className="grid grid-cols-2 gap-2">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="aspect-square bg-black/5 rounded relative flex flex-col p-1">
                <div className="mt-auto h-2 w-full bg-black/10 rounded" />
                <div className="mt-1 h-3 w-1/2 bg-indigo-500 rounded-sm" />
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    title: 'Promo Dental',
    type: 'Página Promo',
    price: 'Desde $49',
    color: 'bg-sky-400',
    content: (
      <div className="p-4 flex flex-col justify-center h-full text-white">
        <div className="text-[12px] font-black uppercase italic leading-none mb-2">GRAN PROMO</div>
        <div className="text-[24px] font-black leading-none mb-4 tracking-tighter">Limpieza 2x1</div>
        <div className="h-10 w-full bg-white text-sky-500 rounded flex items-center justify-center text-[10px] font-bold uppercase tracking-widest">Aprovechar YA</div>
      </div>
    )
  },
  {
    title: 'QR Restaurante',
    type: 'QR Premium',
    price: 'Desde $10',
    color: 'bg-emerald-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="aspect-square w-24 bg-white rounded-xl p-3 border-4 border-emerald-600">
           <div className="w-full h-full border-2 border-black/10 grid grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`m-[1px] ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`} />
              ))}
           </div>
        </div>
        <div className="mt-4 h-2 w-16 bg-white/40 rounded" />
      </div>
    )
  }
];

export default function DemoWall() {
  const whatsappUrl = (msg: string) => `https://wa.me/506XXXXXXXX?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-24 relative overflow-hidden bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-white mb-6 tracking-tight">
              Demo Wall
            </h2>
            <p className="text-brand-platinum/60 max-w-xl font-light">
               Galería visual de nuestros microservicios más pedidos. Así se ve tu negocio cuando elevamos su presencia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {demos.map((demo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-default"
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden mb-4 border border-white/10 glass-card">
                 <div className={`absolute inset-0 opacity-80 ${demo.color}`} />
                 <div className="absolute inset-0">
                    {demo.content}
                 </div>
                 
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-all duration-500" />
                 
                 <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-brand-black/80 backdrop-blur-md">
                    <a 
                      href={whatsappUrl(`Hola NUVRO, quiero algo como el demo "${demo.title}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-brand-accent text-brand-white text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                    >
                       Quiero algo así <ExternalLink size={14} />
                    </a>
                 </div>
              </div>
              <div className="px-2">
                 <div className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-1">{demo.type}</div>
                 <h4 className="text-brand-white font-medium text-sm">{demo.title}</h4>
                 <div className="text-brand-platinum/40 text-[10px] mt-1 font-bold">{demo.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
