import { motion } from 'motion/react';
import { ArrowRight, Layout, Link as LinkIcon, Mail, MessageCircle, QrCode, ScanLine, ShoppingCart } from 'lucide-react';

const products = [
  {
    title: 'Menú Digital QR',
    desc: 'Un menú visual, claro y compartible. El cliente ve, elige y pide más fácil.',
    cta: 'Quiero menú QR',
    icon: QrCode,
    image: '/assets/nuvro/menu-qr.png',
    featured: true,
  },
  {
    title: 'Link Bio Vivo',
    desc: 'Mini sitio mobile-first que lleva al cliente directo a WhatsApp, reservas o servicios.',
    cta: 'Quiero link bio',
    icon: LinkIcon,
    image: '/assets/nuvro/link-bio.png',
  },
  {
    title: 'Invitación Digital',
    desc: 'Con ubicación, RSVP, calendario y experiencia visual memorable.',
    cta: 'Quiero invitación',
    icon: Mail,
    image: '/assets/nuvro/digital-invitation.png',
  },
  {
    title: 'Catálogo Express',
    desc: 'Vitrina digital con productos, precios y botón de consulta directa.',
    cta: 'Quiero catálogo',
    icon: ShoppingCart,
    image: '/assets/nuvro/catalogo-express.png',
  },
  {
    title: 'Landing Promocional',
    desc: 'Página rápida para vender una oferta, evento o servicio con CTA claro.',
    cta: 'Quiero landing',
    icon: Layout,
    image: '/assets/nuvro/landing-pages.png',
  },
  {
    title: 'QR Comercial',
    desc: 'QR para mesas, empaques o tarjetas con experiencia digital detrás.',
    cta: 'Quiero QR',
    icon: ScanLine,
    image: '/assets/nuvro/qr-comercial.png',
  },
  {
    title: 'Kit WhatsApp Business',
    desc: 'Mensajes, respuestas rápidas, etiquetas y flujo inicial ordenado.',
    cta: 'Ordenar WhatsApp',
    icon: MessageCircle,
    image: '/assets/nuvro/whatsapp-business.png',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function ProductCard({ p, idx, featured }: { p: typeof products[0]; idx: number; featured?: boolean }) {
  const Icon = p.icon;
  return (
    <motion.a
      href={`https://wa.me/50671757171?text=${encodeURIComponent(`Hola NUVRO, quiero info sobre: ${p.title}`)}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (idx % 4) * 0.07, ease }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-64 lg:h-72' : 'h-48'}`}>
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover opacity-65 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent" />
        {/* Icon badge */}
        <div className="absolute bottom-4 left-4 grid h-9 w-9 place-items-center border border-[var(--border)] bg-[var(--surface)] text-2 backdrop-blur-md">
          <Icon size={17} />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="display-card text-1 uppercase mb-2">{p.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-3">{p.desc}</p>
        <div className="mt-5 flex items-center gap-2 border-t border-[var(--border-sub)] pt-4 label-sm text-brand">
          {p.cta}
          <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}

export default function NuvroExpress() {
  const [featured, ...rest] = products;

  return (
    <section id="express" className="bg-[var(--surface)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="label-sm mb-5 flex items-center gap-2.5"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-brand" />
              Nuvro Express
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.06, ease }}
              className="display-section text-1 uppercase"
            >
              Micro&shy;productos
              <br />
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>con pinta de</span>
              <br />
              marca grande.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="lg:self-end"
          >
            <p className="body-lg max-w-[44ch] mb-8">
              Piezas digitales rápidas para negocios que necesitan verse mejor y vender
              sin esperar meses.
            </p>
            <a
              href="https://wa.me/50671757171?text=Hola NUVRO, quiero info sobre Express"
              target="_blank"
              rel="noreferrer"
              className="btn btn-white"
            >
              Ver todos los servicios <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Grid — featured + rest */}
        <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr_1fr]">
          {/* Featured spans 1 col × 2 rows */}
          <div className="lg:row-span-2">
            <ProductCard p={featured} idx={0} featured />
          </div>

          {/* Products 2-5 fill 2×2 */}
          {rest.slice(0, 4).map((p, i) => (
            <ProductCard key={p.title} p={p} idx={i + 1} />
          ))}
        </div>

        {/* Bottom row — remaining products */}
        {rest.length > 4 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(4).map((p, i) => (
              <ProductCard key={p.title} p={p} idx={i + 5} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
