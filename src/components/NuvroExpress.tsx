import { motion } from 'motion/react';
import {
  ArrowRight,
  Layout,
  Link as LinkIcon,
  Mail,
  MessageCircle,
  QrCode,
  ScanLine,
  ShoppingCart,
} from 'lucide-react';

const products = [
  {
    title: 'Menú Digital QR',
    pain: 'Tu menú no debería ser una foto borrosa.',
    desc: 'Un menú visual, claro y compartible para que el cliente vea, elija y pida más fácil.',
    cta: 'Quiero menú QR',
    icon: <QrCode size={22} />,
    image: '/assets/nuvro/menu-qr.png',
  },
  {
    title: 'Link Bio Vivo',
    pain: 'Un link lleno de botones no siempre guía.',
    desc: 'Un mini sitio mobile-first que lleva al cliente a WhatsApp, ubicación, servicios o reserva.',
    cta: 'Quiero link bio',
    icon: <LinkIcon size={22} />,
    image: '/assets/nuvro/link-bio.png',
  },
  {
    title: 'Invitación Digital',
    pain: 'Una invitación plana se olvida rápido.',
    desc: 'Invitaciones con ubicación, RSVP, calendario y experiencia visual memorable.',
    cta: 'Quiero invitación',
    icon: <Mail size={22} />,
    image: '/assets/nuvro/digital-invitation.png',
  },
  {
    title: 'Catálogo Express',
    pain: 'No mandés 30 fotos sueltas por WhatsApp.',
    desc: 'Una vitrina digital con productos, precios, categorías y botón de consulta.',
    cta: 'Quiero catálogo',
    icon: <ShoppingCart size={22} />,
    image: '/assets/nuvro/catalogo-express.png',
  },
  {
    title: 'Landing de Promoción',
    pain: 'Una promo en historia desaparece.',
    desc: 'Página rápida para vender una oferta, evento, producto o servicio con CTA claro.',
    cta: 'Quiero landing',
    icon: <Layout size={22} />,
    image: '/assets/nuvro/landing-pages.png',
  },
  {
    title: 'QR Comercial',
    pain: 'Un QR mal diseñado no comunica valor.',
    desc: 'QR para mesas, empaques, mostradores o tarjetas con experiencia digital detrás.',
    cta: 'Quiero QR',
    icon: <ScanLine size={22} />,
    image: '/assets/nuvro/qr-comercial.png',
  },
  {
    title: 'Kit WhatsApp Business',
    pain: 'Responder rápido no sirve si todo está desordenado.',
    desc: 'Mensajes, respuestas rápidas, etiquetas y flujo inicial para atender mejor.',
    cta: 'Ordenar WhatsApp',
    icon: <MessageCircle size={22} />,
    image: '/assets/nuvro/whatsapp-business.png',
  },
];

export default function NuvroExpress() {
  return (
    <section id="express" className="relative overflow-hidden bg-[#fbfcff] py-24 text-[#07111f] md:py-32">
      <div className="absolute inset-0 blueprint-light opacity-55" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 grid gap-8 border-y border-[#07111f]/12 py-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 bg-[#0066FF] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white diagonal-cut"
            >
              Nuvro Express
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="max-w-2xl font-display text-[clamp(3rem,6vw,6.4rem)] font-black uppercase leading-[0.84]"
            >
              Microproductos con pinta de marca grande.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="max-w-2xl self-end text-xl font-medium leading-relaxed text-[#3e4b5d]"
          >
            Piezas digitales rápidas para negocios que necesitan verse mejor y vender sin esperar
            meses: menú, link bio, catálogo, invitación, QR comercial y landings promocionales.
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((prod, idx) => (
            <motion.article
              key={prod.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (idx % 4) * 0.07 }}
              className={`group flex min-h-[500px] flex-col overflow-hidden border border-[#07111f]/12 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#0066FF]/55 ${
                idx === 0 || idx === 6 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-56 overflow-hidden bg-[#07111f]">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-full w-full object-cover opacity-88 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,17,31,0.06),_rgba(7,17,31,0.78))]" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center border border-white/25 bg-black/35 text-white backdrop-blur-md">
                  {prod.icon}
                </div>
                <div className="absolute bottom-4 right-4 font-display text-5xl font-black text-white/28">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-3xl font-black uppercase leading-none text-[#07111f]">
                  {prod.title}
                </h3>
                <p className="mt-4 border-t border-[#07111f]/10 pt-4 text-sm font-black uppercase tracking-[0.12em] text-[#0066FF]">
                  {prod.pain}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[#596678]">{prod.desc}</p>
                <a
                  href={`https://wa.me/50671757171?text=${encodeURIComponent(`Hola NUVRO, quiero info sobre: ${prod.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-between gap-4 border border-[#07111f] px-4 py-4 text-sm font-black uppercase tracking-[0.13em] text-[#07111f] transition duration-200 hover:bg-[#07111f] hover:text-white active:scale-[0.98]"
                >
                  {prod.cta}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
