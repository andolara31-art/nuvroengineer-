import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const demos = [
  {
    id: 'menu',
    label: 'Menú QR',
    image: '/assets/nuvro/menu-qr.png',
    title: 'Menú Digital',
    desc: 'Menú con fotos de platillos, categorías claras y navegación optimizada para celular.',
  },
  {
    id: 'invitacion',
    label: 'Invitación',
    image: '/assets/nuvro/digital-invitation.png',
    title: 'Invitación Premium',
    desc: 'Invitación digital con RSVP, cuenta regresiva y experiencia visual memorable.',
  },
  {
    id: 'linkbio',
    label: 'Link Bio',
    image: '/assets/nuvro/link-bio.png',
    title: 'Link en Bio',
    desc: 'Mini sitio estructurado con enlaces clave y CTA central hacia acción de compra.',
  },
  {
    id: 'catalogo',
    label: 'Catálogo',
    image: '/assets/nuvro/catalogo-express.png',
    title: 'Catálogo Móvil',
    desc: 'Productos organizados con precios y botón directo a WhatsApp para consultar.',
  },
  {
    id: 'landing',
    label: 'Promo Landing',
    image: '/assets/nuvro/landing-pages.png',
    title: 'Landing Promocional',
    desc: 'Diseño de alta conversión con pruebas sociales y CTA visible en toda la página.',
  },
  {
    id: 'qr',
    label: 'QR Comercial',
    image: '/assets/nuvro/qr-comercial.png',
    title: 'Display QR',
    desc: 'QR personalizado con diseño de marca para mesas, empaques o mostradores.',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Kit',
    image: '/assets/nuvro/whatsapp-business.png',
    title: 'Flujo WhatsApp',
    desc: 'WhatsApp Business configurado con etiquetas, respuestas rápidas y flujo inicial.',
  },
];

export default function Demos() {
  const [activeTab, setActiveTab] = useState(demos[0].id);
  const activeDemo = demos.find((d) => d.id === activeTab) || demos[0];

  return (
    <section id="demos" className="border-t border-white/[0.06] bg-[#0A0A0A] py-[clamp(80px,10vw,130px)] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6 justify-center"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
            Demos Visuales
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl font-display text-[clamp(2.6rem,5.5vw,5.5rem)] font-black uppercase leading-[0.86] tracking-wide text-white"
          >
            Antes de comprar,{' '}
            <span className="text-white/28 font-light italic">mirá cómo podría verse.</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {demos.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveTab(d.id)}
              className={`border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                activeTab === d.id
                  ? 'border-white bg-white text-[#0A0A0A]'
                  : 'border-white/[0.12] text-white/45 hover:border-white/25 hover:text-white/70'
              }`}
            >
              {d.label}
            </button>
          ))}
        </motion.div>

        {/* Demo display */}
        <div className="overflow-hidden border border-white/[0.07] bg-[#111111]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-[1fr_380px]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[380px]">
                <img
                  src={activeDemo.image}
                  alt={activeDemo.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute left-4 top-4 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                  PREVIEW
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between border-l border-white/[0.07] p-7 md:p-8">
                <div>
                  <span className="section-label mb-5 block">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
                    {activeDemo.label}
                  </span>
                  <h3 className="font-display text-[clamp(2.4rem,4vw,4rem)] font-black uppercase leading-[0.88] tracking-wide text-white">
                    {activeDemo.title}
                  </h3>
                  <p className="mt-5 border-t border-white/[0.07] pt-5 text-sm leading-relaxed text-white/50">
                    {activeDemo.desc}
                  </p>
                </div>
                <a
                  href={`https://wa.me/50671757171?text=${encodeURIComponent(`Hola NUVRO, quiero ver un demo de ${activeDemo.label}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 btn-primary"
                >
                  Pedir este demo
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
