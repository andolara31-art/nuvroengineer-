import { motion } from 'motion/react';
import { ArrowRight, Layout, Link as LinkIcon, Mail, MessageCircle, QrCode, ScanLine, ShoppingCart } from 'lucide-react';

const products = [
  {
    title: 'Menú Digital QR',
    desc: 'Un menú visual, claro y compartible para que el cliente vea, elija y pida más fácil.',
    cta: 'Quiero menú QR',
    icon: <QrCode size={20} />,
    image: '/assets/nuvro/menu-qr.png',
    featured: true,
  },
  {
    title: 'Link Bio Vivo',
    desc: 'Un mini sitio mobile-first que lleva al cliente a WhatsApp, ubicación, servicios o reserva.',
    cta: 'Quiero link bio',
    icon: <LinkIcon size={20} />,
    image: '/assets/nuvro/link-bio.png',
  },
  {
    title: 'Invitación Digital',
    desc: 'Invitaciones con ubicación, RSVP, calendario y experiencia visual memorable.',
    cta: 'Quiero invitación',
    icon: <Mail size={20} />,
    image: '/assets/nuvro/digital-invitation.png',
  },
  {
    title: 'Catálogo Express',
    desc: 'Una vitrina digital con productos, precios, categorías y botón de consulta directa.',
    cta: 'Quiero catálogo',
    icon: <ShoppingCart size={20} />,
    image: '/assets/nuvro/catalogo-express.png',
  },
  {
    title: 'Landing Promocional',
    desc: 'Página rápida para vender una oferta, evento, producto o servicio con CTA claro.',
    cta: 'Quiero landing',
    icon: <Layout size={20} />,
    image: '/assets/nuvro/landing-pages.png',
  },
  {
    title: 'QR Comercial',
    desc: 'QR para mesas, empaques, mostradores o tarjetas con experiencia digital detrás.',
    cta: 'Quiero QR',
    icon: <ScanLine size={20} />,
    image: '/assets/nuvro/qr-comercial.png',
  },
  {
    title: 'Kit WhatsApp Business',
    desc: 'Mensajes, respuestas rápidas, etiquetas y flujo inicial para atender mejor.',
    cta: 'Ordenar WhatsApp',
    icon: <MessageCircle size={20} />,
    image: '/assets/nuvro/whatsapp-business.png',
  },
];

export default function NuvroExpress() {
  return (
    <section id="express" className="relative overflow-hidden bg-[#0A0A0A] py-[clamp(80px,10vw,130px)] text-white">
      <div className="absolute inset-0 hero-bg opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
              Nuvro Express
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="section-heading"
            >
              Microproductos<br />con pinta de<br />
              <span className="text-white/28 font-light italic">marca grande.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            <p className="text-lg leading-relaxed text-white/50">
              Piezas digitales rápidas para negocios que necesitan verse mejor y vender sin esperar
              meses. Menú, link bio, catálogo, invitación, QR comercial y landings promocionales.
            </p>
            <a
              href="https://wa.me/50671757171?text=Hola NUVRO, quiero info sobre Nuvro Express"
              target="_blank"
              rel="noreferrer"
              className="mt-8 btn-primary inline-flex"
            >
              Ver todos los servicios
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((prod, idx) => (
            <motion.article
              key={prod.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (idx % 4) * 0.06 }}
              className={`nuvro-card group flex flex-col overflow-hidden ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${idx === 0 ? 'h-56 lg:h-64' : 'h-44'}`}>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 flex h-9 w-9 items-center justify-center border border-white/15 bg-black/40 text-white backdrop-blur-md">
                  {prod.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display text-[clamp(1.8rem,2.8vw,2.8rem)] font-black uppercase leading-[0.88] tracking-wide text-white mb-3">
                  {prod.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-white/45">
                  {prod.desc}
                </p>
                <a
                  href={`https://wa.me/50671757171?text=${encodeURIComponent(`Hola NUVRO, quiero info sobre: ${prod.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/40 transition-colors duration-200 hover:text-white group/link"
                >
                  {prod.cta}
                  <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
