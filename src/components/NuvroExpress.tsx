import { motion } from 'motion/react';
import type { CSSProperties } from 'react';
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
    color: 'var(--color-service-1)',
  },
  {
    title: 'Link Bio Vivo',
    pain: 'Un link lleno de botones no siempre guía.',
    desc: 'Un mini sitio mobile-first que lleva al cliente a WhatsApp, ubicación, servicios o reserva.',
    cta: 'Quiero link bio',
    icon: <LinkIcon size={22} />,
    image: '/assets/nuvro/link-bio.png',
    color: 'var(--color-service-2)',
  },
  {
    title: 'Invitación Digital',
    pain: 'Una invitación plana se olvida rápido.',
    desc: 'Invitaciones con ubicación, RSVP, calendario y experiencia visual memorable.',
    cta: 'Quiero invitación',
    icon: <Mail size={22} />,
    image: '/assets/nuvro/digital-invitation.png',
    color: 'var(--color-service-3)',
  },
  {
    title: 'Catálogo Express',
    pain: 'No mandés 30 fotos sueltas por WhatsApp.',
    desc: 'Una vitrina digital con productos, precios, categorías y botón de consulta.',
    cta: 'Quiero catálogo',
    icon: <ShoppingCart size={22} />,
    image: '/assets/nuvro/catalogo-express.png',
    color: 'var(--color-service-4)',
  },
  {
    title: 'Landing de Promoción',
    pain: 'Una promo en historia desaparece.',
    desc: 'Página rápida para vender una oferta, evento, producto o servicio con CTA claro.',
    cta: 'Quiero landing',
    icon: <Layout size={22} />,
    image: '/assets/nuvro/landing-pages.png',
    color: 'var(--color-service-5)',
  },
  {
    title: 'QR Comercial',
    pain: 'Un QR mal diseñado no comunica valor.',
    desc: 'QR para mesas, empaques, mostradores o tarjetas con experiencia digital detrás.',
    cta: 'Quiero QR',
    icon: <ScanLine size={22} />,
    image: '/assets/nuvro/qr-comercial.png',
    color: 'var(--color-service-6)',
  },
  {
    title: 'Kit WhatsApp Business',
    pain: 'Responder rápido no sirve si todo está desordenado.',
    desc: 'Mensajes, respuestas rápidas, etiquetas y flujo inicial para atender mejor.',
    cta: 'Ordenar WhatsApp',
    icon: <MessageCircle size={22} />,
    image: '/assets/nuvro/whatsapp-business.png',
    color: 'var(--color-service-7)',
  },
];

export default function NuvroExpress() {
  return (
    <section id="express" className="relative overflow-hidden bg-[#111111] py-[clamp(64px,8vw,108px)] text-white">
      <div className="absolute inset-0 hero-bg opacity-55" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 grid gap-8 border-y border-white/10 py-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 bg-[#FFFFFF] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0A0A0A] diagonal-cut"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="self-end"
          >
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-[#9CA3AF]">
              Piezas digitales rápidas para negocios que necesitan verse mejor y vender sin esperar
              meses: menú, link bio, catálogo, invitación, QR comercial y landings promocionales.
            </p>
            <div className="mt-8 grid grid-cols-3 border border-white/10 bg-[#0A0A0A]/40 text-center">
              {['fricción', 'presencia', 'acción'].map((item, index) => (
                <div key={item} className="border-r border-white/10 px-3 py-4 last:border-r-0">
                  <span className="block font-display text-2xl font-black text-white/80">0{index + 1}</span>
                  <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.22em] text-white/42">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((prod, idx) => (
            <motion.article
              key={prod.title}
              style={{ '--service-color': prod.color } as CSSProperties}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (idx % 4) * 0.07 }}
              className={`service-card group flex min-h-[420px] flex-col overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-[var(--service-color)] hover:bg-[#0F0F0F] ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[590px]' : ''
              }`}
            >
              <div className={`signal-band relative overflow-hidden bg-[#111111] ${idx === 0 ? 'h-60 lg:h-[300px]' : 'h-44'}`}>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-full w-full object-cover opacity-88 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(7,17,31,0.06),_rgba(7,17,31,0.78))]" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center border border-white/25 bg-[#0A0A0A]/55 text-white backdrop-blur-md">
                  {prod.icon}
                </div>
                <div className="absolute right-4 top-4 hidden border border-white/12 bg-[#050505]/72 px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-white/58 backdrop-blur-md sm:block">
                  NX-{String(idx + 1).padStart(2, '0')}
                </div>
                <div className="absolute bottom-4 right-4 font-display text-5xl font-black text-white/24">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="tech-readout absolute bottom-4 left-4 right-20 backdrop-blur-md">
                  <span>ui</span>
                  <span>flow</span>
                  <span>cta</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40">
                    módulo {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-16 bg-[var(--service-color)] opacity-70" />
                </div>

                <h3 className="max-w-[12ch] font-display text-[clamp(1.95rem,2.6vw,3.55rem)] font-black uppercase leading-[0.84] tracking-wide text-white">
                  {prod.title}
                </h3>
                <div className="mt-5 grid gap-4">
                  <div>
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.22em] text-white/38">
                      punto de fricción
                    </span>
                    <p className="text-sm font-black uppercase leading-snug tracking-[0.12em] text-white/[0.52]">
                      {prod.pain}
                    </p>
                  </div>
                  <div>
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.22em] text-white/38">
                      sistema entregable
                    </span>
                    <p className="text-sm leading-relaxed text-[#9CA3AF]">{prod.desc}</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-[1fr_auto] items-center border-y border-white/10 py-2.5">
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                    deployment ready
                  </span>
                  <span className="h-2 w-2 bg-[#2B6CB0] shadow-[0_0_18px_rgba(43,108,176,0.95)]" />
                </div>
                <div className="matrix-strip mt-3">
                  <span>brief</span>
                  <span>visual</span>
                  <span>flow</span>
                  <span>sell</span>
                </div>
                <div className="flex-1" />
                <a
                  href={`https://wa.me/50671757171?text=${encodeURIComponent(`Hola NUVRO, quiero info sobre: ${prod.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-between gap-4 border border-white/10 px-4 py-3.5 text-xs font-black uppercase tracking-[0.13em] text-white transition duration-200 hover:border-[var(--service-color)] hover:bg-[#FFFFFF] hover:text-[#0A0A0A] active:scale-[0.98]"
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
