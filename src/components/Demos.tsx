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
    <section id="demos" className="py-[clamp(80px,10vw,140px)] bg-[#0A0A0A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Eye size={16} className="text-[#0066FF]" />
            <span className="text-sm font-medium tracking-widest text-[#0066FF] uppercase">Demos Visuales</span>
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

        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {demos.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveTab(d.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
                activeTab === d.id 
                ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/20 scale-105'
                : 'bg-transparent text-[#9CA3AF] border border-[rgba(255,255,255,0.15)] hover:text-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-[32px] overflow-hidden p-6 shadow-xl shadow-black/5 relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-[24px] overflow-hidden relative">
                <img 
                  src={activeDemo.image}
                  alt={activeDemo.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#111111]/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  PREVIEW: {activeDemo.label}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col items-start p-4">
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {activeDemo.title}
                </h3>
                <p className="text-[#9CA3AF] font-sans leading-relaxed text-lg mb-8">
                  "{activeDemo.desc}"
                </p>
                <a 
                  href={`https://wa.me/50671757171?text=Hola NUVRO, quiero ver un demo de ${activeDemo.label}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#111111] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#0066FF] transition-colors group shadow-md"
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
