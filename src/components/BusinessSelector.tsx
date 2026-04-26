import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Sparkles, Calendar, ShoppingBag, Briefcase, Store, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'comida',
    label: 'Comida',
    icon: <Utensils size={20} />,
    problem: 'Tu menú está en una foto borrosa, un PDF pesado o un mensaje perdido.',
    solution: 'Un Menú Digital que antoja, carga al instante y vende sin que tengás que hablar.',
    recommended: ['Menú QR Premium', 'QR de Ubicación', 'Página de Combos'],
    cta: 'Digitalizar mi menú',
    msg: 'Hola NUVRO, quiero digitalizar el menú de mi negocio de comida.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'belleza',
    label: 'Belleza',
    icon: <Sparkles size={20} />,
    problem: 'Tu Instagram se ve increíble, pero el link en bio no convierte vistas en citas.',
    solution: 'Un Link in Bio Pro con galería, precios y botón de reserva directa.',
    recommended: ['Link in Bio Pro', 'Mini Portafolio', 'Promo de Tratamiento'],
    cta: 'Configurar mi Link Bio',
    msg: 'Hola NUVRO, quiero un Link in Bio Pro para mi marca de belleza.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'eventos',
    label: 'Eventos',
    icon: <Calendar size={20} />,
    problem: 'Mandar una imagen por WhatsApp es aburrido y la confirmación es un caos.',
    solution: 'Invitación interactiva con música, mapa, RSVP y cuenta regresiva.',
    recommended: ['Invitación Digital', 'QR de Registro', 'Página de Evento'],
    cta: 'Crear mi invitación',
    msg: 'Hola NUVRO, quiero crear una invitación digital interactiva.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'productos',
    label: 'Tiendas',
    icon: <ShoppingBag size={20} />,
    problem: 'Dejá de mandar 50 fotos sueltas por chat. Nadie tiene tiempo para eso.',
    solution: 'Un solo link con tu catálogo completo y pedidos directos al WhatsApp.',
    recommended: ['Catálogo Express', 'Lanzamiento de Producto', 'Cupón Web'],
    cta: 'Armar mi catálogo',
    msg: 'Hola NUVRO, quiero armar un catálogo express para mi tienda.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'profesionales',
    label: 'Servicios',
    icon: <Briefcase size={20} />,
    problem: 'Mandar solo un número no transmite autoridad ni profesionalismo.',
    solution: 'Tarjeta digital y Portafolio Link para que tus clientes te tomen en serio.',
    recommended: ['Portafolio Link', 'Tarjeta Digital', 'Landing de Servicio'],
    cta: 'Elevar mi presencia',
    msg: 'Hola NUVRO, quiero elevar mi presencia como profesional.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'locales',
    label: 'Locales',
    icon: <Store size={20} />,
    problem: 'Si alguien te busca en Google y no existís, le comprán al vecino.',
    solution: 'Kit de Presencia Digital: Google Maps, QR comercial y Web Promo.',
    recommended: ['Kit Presencia Google', 'QR Comercial', 'Web Promo'],
    cta: 'Dominar mi zona',
    msg: 'Hola NUVRO, quiero digitalizar mi negocio local para vender más.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BusinessSelector() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const current = categories.find(c => c.id === activeTab)!;

  const whatsappUrl = (msg: string) => `https://wa.me/50671757171?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-24 bg-brand-black relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4 block">
              BUSCADOR DE SOLUCIONES
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-medium text-brand-white leading-[0.9] uppercase tracking-tighter">
              Elegí tu <span className="text-brand-accent italic">nicho.</span>
            </h2>
          </div>
          <p className="text-xl text-brand-platinum/40 max-w-sm font-light leading-snug">
            No pierdas más clientes por falta de claridad. Elegí el producto que resuelve tu problema hoy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Tabs Column */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-1 lg:flex-none flex items-center gap-4 px-6 py-5 rounded-[24px] border transition-all duration-500 uppercase tracking-tighter text-[11px] font-black ${
                  activeTab === cat.id
                    ? 'bg-brand-accent border-brand-accent text-brand-white shadow-2xl shadow-brand-accent/30 scale-[1.02]'
                    : 'bg-white/5 border-white/5 text-brand-platinum/30 hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <div className={`${activeTab === cat.id ? 'text-white' : 'text-brand-accent'} transition-colors`}>
                   {cat.icon}
                </div>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Content Column */}
          <div className="lg:w-3/4">
            <div className="glass-card rounded-[50px] overflow-hidden min-h-[550px] flex flex-col md:grid md:grid-cols-2 border-white/5 bg-white/[0.01]">
              <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="mb-12">
                      <div className="inline-flex items-center gap-2 text-red-500 font-mono text-[9px] uppercase tracking-[0.3em] mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        El Problema Real
                      </div>
                      <p className="text-2xl md:text-4xl text-brand-platinum/90 leading-tight font-medium tracking-tight italic">
                        "{current.problem}"
                      </p>
                    </div>

                    <div className="mb-12">
                      <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-[9px] uppercase tracking-[0.3em] mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                        La Solución NUVRO
                      </div>
                      <p className="text-2xl md:text-4xl text-brand-white leading-tight font-black uppercase tracking-tighter">
                        {current.solution}
                      </p>
                    </div>

                    <div className="mb-14">
                      <div className="text-[10px] font-mono text-brand-platinum/20 uppercase tracking-[0.4em] mb-4">Productos recomendados</div>
                      <div className="flex flex-wrap gap-2">
                        {current.recommended.map((item, i) => (
                          <span key={i} className="px-5 py-2.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-[10px] font-black text-brand-accent uppercase tracking-widest">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={whatsappUrl(current.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-4 px-12 py-6 rounded-3xl bg-brand-white text-brand-black font-black hover:scale-[1.02] active:scale-95 transition-all group uppercase tracking-tighter text-lg shadow-2xl"
                    >
                      {current.cta}
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative h-80 md:h-auto overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={current.image}
                    alt={current.label}
                    initial={{ scale: 1.2, filter: 'blur(10px)', opacity: 0 }}
                    animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
                    exit={{ scale: 1.1, filter: 'blur(5px)', opacity: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%] brightness-75"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-transparent to-transparent hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
