import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Sparkles, Calendar, ShoppingBag, Briefcase, Store, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'comida',
    label: 'Comida',
    icon: <Utensils size={20} />,
    problem: 'Tu menú está en una foto vieja, PDF pesado o mensaje perdido en WhatsApp.',
    solution: 'Menú QR, pedido rápido, promo del día y ubicación exacta.',
    recommended: ['Menú digital QR', 'QR ubicación', 'Página de combo', 'WhatsApp Business'],
    cta: 'Quiero algo para mi restaurante',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d72c77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'belleza',
    label: 'Belleza',
    icon: <Sparkles size={20} />,
    problem: 'Tu Instagram se ve bien, pero el link no convierte visitas en citas.',
    solution: 'Link Bio vivo, agenda rápida, galería de antes/después y promo activa.',
    recommended: ['Link Bio', 'Mini portfolio', 'Página de promoción', 'Tarjeta digital'],
    cta: 'Quiero algo para mi marca personal',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'eventos',
    label: 'Eventos',
    icon: <Calendar size={20} />,
    problem: 'Mandar una imagen por WhatsApp se siente simple y la información se pierde.',
    solution: 'Invitación digital con música, mapa, confirmación y link compartible.',
    recommended: ['Invitación digital', 'Página de evento', 'QR de confirmación'],
    cta: 'Quiero una invitación',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'productos',
    label: 'Productos',
    icon: <ShoppingBag size={20} />,
    problem: 'Vender por fotos sueltas hace que todo se vea desordenado y genera dudas.',
    solution: 'Catálogo express con categorías, precios claros y pedido directo por WhatsApp.',
    recommended: ['Catálogo express', 'Producto único', 'Cupón digital', 'Página de lanzamiento'],
    cta: 'Quiero vender productos',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'profesionales',
    label: 'Profesionales',
    icon: <Briefcase size={20} />,
    problem: 'Mandar solo un número o Instagram no transmite suficiente confianza.',
    solution: 'Tarjeta digital, mini portfolio, servicios detallados y contacto profesional.',
    recommended: ['Tarjeta digital', 'Mini portfolio', 'Link Bio', 'Página de servicio'],
    cta: 'Quiero una presentación profesional',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'locales',
    label: 'Negocios locales',
    icon: <Store size={20} />,
    problem: 'Si alguien te busca y compara rápido, tu presencia no puede verse improvisada.',
    solution: 'Google Business Profile, QR comercial y página de promoción activa.',
    recommended: ['Kit Google Business', 'QR comercial', 'Página de promoción', 'WhatsApp Business'],
    cta: 'Ordenar mi negocio digital',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BusinessSelector() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const current = categories.find(c => c.id === activeTab)!;

  const whatsappUrl = (msg: string) => `https://wa.me/506XXXXXXXX?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-white mb-6">
            Elegí según tu negocio
          </h2>
          <p className="text-brand-platinum/60 max-w-2xl mx-auto font-light">
            Soluciones diseñadas específicamente para los retos de tu industria.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-brand-accent border-brand-accent text-brand-white'
                  : 'bg-[#111111]/5 border-white/10 text-brand-platinum/60 hover:bg-[#111111]/10'
              }`}
            >
              {cat.icon}
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="glass-card rounded-3xl overflow-hidden min-h-[500px] flex flex-col lg:grid lg:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-2 block">El problema</span>
                  <p className="text-xl text-brand-platinum/90 leading-relaxed font-medium capitalize">
                    {current.problem}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-2 block">La solución NUVRO</span>
                  <p className="text-xl text-brand-platinum/90 leading-relaxed font-medium">
                    {current.solution}
                  </p>
                </div>

                <div className="mb-10">
                  <span className="text-brand-platinum/40 font-mono text-xs uppercase tracking-widest mb-4 block">Recomendados para vos</span>
                  <div className="flex flex-wrap gap-2">
                    {current.recommended.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-[#111111]/5 border border-white/10 rounded-lg text-xs text-brand-platinum/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappUrl(`Hola NUVRO, ${current.cta.toLowerCase()} para mi negocio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-brand-white font-bold hover:bg-brand-accent/90 transition-all group"
                >
                  {current.cta}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative h-64 lg:h-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={current.image}
                alt={current.label}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-brand-black/40 lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
