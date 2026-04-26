import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function NuvroExpress() {
  const whatsappUrl = (msg: string) => `https://wa.me/50671757171?text=${encodeURIComponent(msg)}`;

  const microservices = [
    {
      type: "menu",
      title: "Menú QR Premium",
      badCopy: "Tu menú no debería ser una foto borrosa.",
      goodCopy: "Convertí tu lista en una vitrina digital que antoja y vende sola.",
      price: "25",
      accent: "bg-orange-500",
      msg: "Hola NUVRO, quiero el Menú QR Premium."
    },
    {
      type: "bio",
      title: "Link in Bio Pro",
      badCopy: "Un link que solo abre botones es perder clientes.",
      goodCopy: "Centralizá tus redes, pagos y promos en un link con diseño de agencia.",
      price: "25",
      accent: "bg-pink-500",
      msg: "Hola NUVRO, quiero el Link in Bio Pro."
    },
    {
      type: "invite",
      title: "Invitación Digital",
      badCopy: "Dejá de mandar PDFs pesados que nadie abre.",
      goodCopy: "Invitaciones con confirmación de asistencia, ubicación y cuenta regresiva.",
      price: "10",
      accent: "bg-indigo-500",
      msg: "Hola NUVRO, quiero una invitación digital."
    },
    {
      type: "catalog",
      title: "Catálogo Express",
      badCopy: "No mandés 50 fotos sueltas por WhatsApp.",
      goodCopy: "Un solo link donde tus clientes ven, eligen y te mandan el pedido listo.",
      price: "35",
      accent: "bg-emerald-500",
      msg: "Hola NUVRO, quiero el Catálogo Express."
    },
    {
      type: "promo",
      title: "Promo Landing",
      badCopy: "Lanzar algo sin una página dedicada es invisible.",
      goodCopy: "Páginas diseñadas para una sola cosa: que el cliente dé clic en comprar.",
      price: "49",
      accent: "bg-brand-accent",
      msg: "Hola NUVRO, quiero una Promo Landing."
    },
    {
      type: "shop",
      title: "Digital Shop",
      badCopy: "Vender productos por chat es agotador y lento.",
      goodCopy: "Un sistema compacto para recibir cobros y pedidos sin fricción.",
      price: "75",
      accent: "bg-blue-600",
      featured: true,
      msg: "Hola NUVRO, quiero el pack Digital Shop."
    }
  ];

  return (
    <section id="express" className="py-24 bg-brand-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4 block">
              CATÁLOGO DE MICROPRODUCTOS
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-medium text-brand-white leading-[0.9] uppercase tracking-tighter">
              Links rápidos para <br/> <span className="text-brand-accent italic">vender ahora mismo.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-platinum/40 max-w-sm font-light leading-snug">
            No necesitás una web de mil dólares. Necesitás un link profesional que convierta atención en plata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {microservices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[40px] border transition-all duration-500 overflow-hidden flex flex-col h-full shadow-2xl ${
                service.featured 
                ? 'bg-brand-accent/[0.05] border-brand-accent/40 lg:scale-105 z-10' 
                : 'bg-white/[0.015] border-white/5 hover:border-brand-accent/30'
              }`}
            >
              {/* Product Visual Mockup Header */}
              <div className={`relative h-48 sm:h-56 overflow-hidden ${service.accent} bg-opacity-20 flex items-center justify-center`}>
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/90`} />
                
                {/* Specific Layout Mockups */}
                {service.type === 'menu' && (
                  <div className="relative w-32 aspect-[9/16] bg-white rounded-t-2xl shadow-2xl p-3 translate-y-8">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs mb-3">🍔</div>
                    <div className="space-y-1.5">
                      <div className="h-1 w-full bg-zinc-100 rounded" />
                      <div className="h-1 w-2/3 bg-zinc-100 rounded" />
                    </div>
                    <div className="mt-4 flex justify-between">
                       <div className="h-8 w-12 bg-orange-500/10 rounded-lg" />
                       <div className="h-8 w-12 bg-orange-500/10 rounded-lg" />
                    </div>
                  </div>
                )}

                {service.type === 'bio' && (
                  <div className="relative w-32 aspect-[9/16] bg-brand-black border border-white/10 rounded-t-2xl shadow-2xl p-4 translate-y-8">
                    <div className="w-10 h-10 rounded-full bg-pink-500 mx-auto mb-4" />
                    <div className="space-y-1.5 mb-6">
                      <div className="h-1 w-12 bg-white/20 mx-auto rounded" />
                      <div className="h-1 w-16 bg-white/10 mx-auto rounded" />
                    </div>
                    <div className="space-y-2">
                       <div className="h-6 w-full bg-white/5 border border-white/5 rounded-full" />
                       <div className="h-6 w-full bg-white/5 border border-white/5 rounded-full" />
                    </div>
                  </div>
                )}

                {service.type === 'catalog' && (
                  <div className="relative w-40 aspect-[16/10] bg-zinc-900 rounded-t-2xl shadow-2xl p-3 translate-y-8 flex gap-2">
                    <div className="flex-1 bg-white/5 rounded-lg flex items-center justify-center text-xl">📸</div>
                    <div className="flex-1 space-y-2 py-1">
                       <div className="h-1 w-full bg-white/10 rounded" />
                       <div className="h-1 w-full bg-white/10 rounded" />
                       <div className="h-4 w-full bg-emerald-500/20 rounded" />
                    </div>
                  </div>
                )}

                {service.type === 'invite' && (
                  <div className="relative w-32 aspect-[9/16] bg-indigo-50 border border-indigo-200 rounded-t-2xl shadow-2xl p-3 translate-y-8 flex flex-col items-center">
                    <div className="text-2xl mt-2 mb-2">✨</div>
                    <div className="h-1 w-12 bg-indigo-200 rounded mb-1" />
                    <div className="h-1 w-16 bg-indigo-100 rounded mb-4" />
                    <div className="w-full h-12 bg-indigo-600 rounded-xl mt-auto" />
                  </div>
                )}

                {service.type === 'promo' && (
                  <div className="relative w-48 aspect-[16/6] bg-brand-accent/20 rounded-xl backdrop-blur-md border border-white/20 p-4 shadow-2xl">
                    <div className="flex justify-between items-center h-full">
                       <div className="text-brand-white font-black italic text-xl uppercase tracking-tighter">-50% OFF</div>
                       <div className="px-4 py-2 bg-brand-white text-brand-black text-[10px] font-black uppercase rounded-lg">Lanzar</div>
                    </div>
                  </div>
                )}

                {service.type === 'shop' && (
                   <div className="relative w-40 bg-zinc-900 rounded-t-3xl shadow-3xl p-6 translate-y-10 border-x border-t border-white/10">
                      <div className="flex justify-between mb-4">
                        <div className="w-4 h-4 rounded-full bg-blue-500" />
                        <div className="w-4 h-4 rounded-full bg-white/10" />
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full mb-4" />
                      <div className="h-12 w-full bg-brand-accent rounded-2xl" />
                   </div>
                )}

                {service.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1.5 bg-brand-accent text-brand-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      RECOMENDADO
                    </span>
                  </div>
                )}
              </div>
              
              <div className="relative z-10 flex flex-col p-8 md:p-10 flex-grow">
                <div className="mb-8 flex-grow">
                  <div className="inline-flex items-center gap-2 text-red-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    {service.badCopy}
                  </div>
                  <h3 className="text-3xl font-display font-black text-brand-white mb-3 uppercase tracking-tight leading-none">{service.title}</h3>
                  <p className="text-brand-platinum/40 font-light leading-snug mb-6 text-lg">
                    {service.goodCopy}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                   <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono text-brand-platinum/30 tracking-widest mb-1">Pago único</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-brand-accent">$</span>
                        <span className="text-4xl font-display font-black text-brand-white leading-none tracking-tighter">{service.price}</span>
                      </div>
                   </div>
                   <a
                     href={whatsappUrl(service.msg)}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`px-8 py-5 rounded-[20px] text-xs font-black uppercase tracking-tighter transition-all shadow-xl flex items-center gap-3 group/btn ${
                       service.featured 
                       ? 'bg-brand-white text-brand-black hover:scale-105' 
                       : 'bg-brand-accent text-brand-white hover:bg-brand-accent/90 hover:scale-105'
                     }`}
                   >
                     {service.type === 'menu' ? 'Pedir menú' : 
                      service.type === 'bio' ? 'Crear mi link' :
                      service.type === 'catalog' ? 'Armar catálogo' :
                      service.type === 'promo' ? 'Lanzar promo' :
                      service.type === 'invite' ? 'Quiero mi invitación' : 'Lo quiero'
                     }
                     <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <p className="text-brand-platinum/20 text-[10px] font-mono uppercase tracking-[0.4em] mb-8">"Si lo vas a mandar por WhatsApp, que se vea profesional."</p>
           <div className="h-px w-32 bg-white/10 mx-auto" />
           <a 
             href={whatsappUrl("Hola NUVRO, ninguna de las opciones anteriores se ajusta a lo que necesito. Tengo un proyecto custom.")}
             target="_blank"
             rel="noopener noreferrer"
             className="text-brand-platinum/60 hover:text-brand-accent transition-colors flex items-center justify-center gap-2 text-sm font-medium mt-12 group"
           >
             <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
             ¿Necesitás algo distinto? Hablemos de un proyecto Custom.
           </a>
        </div>
      </div>
    </section>
  );
}
