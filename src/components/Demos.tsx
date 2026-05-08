import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';

const demos = [
  {
    id: 'menu',
    label: 'Menú QR',
    image: '/assets/nuvro/menu-qr.png',
    title: 'Menú Digital',
    desc: 'Celular con menú elegante, fotos de platillos y navegación clara.'
  },
  {
    id: 'invitacion',
    label: 'Invitación',
    image: '/assets/nuvro/digital-invitation.png',
    title: 'Invitación Premium',
    desc: 'Invitación en celular con detalles dorados, RSVP y cuenta regresiva.'
  },
  {
    id: 'linkbio',
    label: 'Link Bio',
    image: '/assets/nuvro/link-bio.png',
    title: 'Link en Bio',
    desc: 'Interfaz móvil estructurada con enlaces clave y CTA central.'
  },
  {
    id: 'catalogo',
    label: 'Catálogo',
    image: '/assets/nuvro/catalogo-express.png',
    title: 'Catálogo Móvil',
    desc: 'Productos organizados en grid con precios y botón de comprar.'
  },
  {
    id: 'landing',
    label: 'Promo Landing',
    image: '/assets/nuvro/landing-pages.png',
    title: 'Landing Promocional',
    desc: 'Diseño enfocado en alta conversión con pruebas sociales claras.'
  },
  {
    id: 'qr',
    label: 'QR Comercial',
    image: '/assets/nuvro/qr-comercial.png',
    title: 'Display QR',
    desc: 'Código QR personalizado impreso con bordes limpios en un mostrador.'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Kit',
    image: '/assets/nuvro/whatsapp-business.png',
    title: 'Flujo WhatsApp',
    desc: 'WhatsApp Business organizado con etiquetas visuales y mensajes clave.'
  }
];

export default function Demos() {
  const [activeTab, setActiveTab] = useState(demos[0].id);
  const activeDemo = demos.find(d => d.id === activeTab) || demos[0];

  return (
    <section id="demos" className="py-[clamp(64px,8vw,108px)] bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Eye size={16} className="text-[#2B6CB0]" />
            <span className="text-sm font-medium tracking-widest text-[#2B6CB0] uppercase">Demos Visuales</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight mb-6"
          >
            Antes de comprar, mirá cómo podría verse.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#9CA3AF] font-sans leading-relaxed"
          >
            Creamos demos visuales para que veás el estilo de tu menú, invitación, catálogo, link bio, QR o landing antes de avanzar.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {demos.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveTab(d.id)}
              className={`border px-5 py-2.5 text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
                activeTab === d.id 
                ? 'border-white bg-[#FFFFFF] text-[#0A0A0A] shadow-lg shadow-black/20'
                : 'border-[rgba(255,255,255,0.15)] bg-transparent text-[#9CA3AF] hover:border-white/40 hover:text-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="precision-card relative mx-auto max-w-5xl overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#111111] p-4 shadow-xl shadow-black/5 md:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 md:grid-cols-[72px_1.04fr_0.96fr] md:items-stretch"
            >
              <div className="data-rail hidden md:flex md:flex-col md:justify-between">
                <span>demo</span>
                <span>mobile</span>
                <span>flow</span>
                <span>cta</span>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10">
                <img 
                  src={activeDemo.image}
                  alt={activeDemo.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute left-4 top-4 border border-white/15 bg-[#111111]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  PREVIEW: {activeDemo.label}
                </div>
                <div className="matrix-strip absolute bottom-4 left-4 right-4 backdrop-blur-md">
                  <span>look</span>
                  <span>feel</span>
                  <span>path</span>
                  <span>send</span>
                </div>
              </div>
              
              <div className="flex flex-col items-start border-y border-white/10 p-4 md:p-6">
                <span className="module-chip mb-5">
                  visual prototype
                </span>
                <h3 className="mb-4 font-display text-[clamp(2.05rem,3.4vw,3.8rem)] font-black uppercase leading-[0.84] tracking-wide text-white">
                  {activeDemo.title}
                </h3>
                <p className="mb-6 border-t border-white/10 pt-4 font-sans text-base leading-relaxed text-[#9CA3AF]">
                  "{activeDemo.desc}"
                </p>
                <a 
                  href={`https://wa.me/50671757171?text=Hola NUVRO, quiero ver un demo de ${activeDemo.label}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-3 border border-white/10 bg-[#111111] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#2B6CB0] hover:text-white group"
                >
                  Pedir Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
