import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const demos = [
  { id: 'menu',      label: 'Menú QR',       image: '/assets/nuvro/menu-qr.png',           title: 'Menú Digital',        desc: 'Menú con categorías, fotos de platillos y navegación optimizada para celular.' },
  { id: 'inv',       label: 'Invitación',    image: '/assets/nuvro/digital-invitation.png', title: 'Invitación Premium',  desc: 'Con RSVP, cuenta regresiva y experiencia visual memorable.' },
  { id: 'bio',       label: 'Perfil Digital', image: '/assets/nuvro/link-bio.png',           title: 'Perfil Digital',      desc: 'Mini sitio con tus servicios, ubicación y un botón directo para que el cliente te escriba.' },
  { id: 'cat',       label: 'Catálogo',      image: '/assets/nuvro/catalogo-express.png',   title: 'Catálogo Móvil',      desc: 'Productos organizados con precios y botón directo a WhatsApp.' },
  { id: 'land',      label: 'Página Promo',  image: '/assets/nuvro/landing-pages.png',      title: 'Página Promocional',  desc: 'Diseñada para vender: con beneficios claros, opiniones de clientes y botón de contacto en todo momento.' },
  { id: 'qr',        label: 'QR Comercial',  image: '/assets/nuvro/qr-comercial.png',       title: 'Display QR',          desc: 'QR personalizado con diseño de marca para mesas, empaques o mostradores.' },
  { id: 'wa',        label: 'WhatsApp Kit',  image: '/assets/nuvro/whatsapp-business.png',  title: 'Flujo WhatsApp',      desc: 'WhatsApp Business configurado con etiquetas y respuestas rápidas.' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Demos() {
  const [active, setActive] = useState(demos[0].id);
  const demo = demos.find(d => d.id === active)!;

  return (
    <section id="demos" className="bg-[var(--surface)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="label-sm mb-5 flex items-center gap-2.5"
          >
            <span className="h-[5px] w-[5px] rounded-full bg-brand" />
            Demos Visuales
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.06, ease }}
            className="display-section text-1 uppercase max-w-[14ch]"
          >
            Mirá cómo{' '}
            <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>
              podría verse antes de comprar.
            </span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-wrap gap-2"
        >
          {demos.map(d => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`label-sm px-4 py-2 transition-all duration-200 ${
                active === d.id
                  ? 'bg-[var(--text-1)] text-[var(--bg)]'
                  : 'border border-[var(--border-sub)] text-3 hover:text-2 hover:border-[var(--border)]'
              }`}
            >
              {d.label}
            </button>
          ))}
        </motion.div>

        {/* Demo panel */}
        <div className="overflow-hidden border border-[var(--border-sub)] bg-[var(--surface-2)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              className="grid md:grid-cols-[1fr_340px]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[400px]">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between border-t border-[var(--border-sub)] p-7 md:border-l md:border-t-0 md:p-8">
                <div>
                  <p className="label-sm mb-5 flex items-center gap-2.5 text-brand">
                    <span className="h-[5px] w-[5px] rounded-full bg-brand" />
                    {demo.label}
                  </p>
                  <h3 className="display-card text-1 uppercase mb-5">{demo.title}</h3>
                  <p className="body-lg border-t border-[var(--border-sub)] pt-5">{demo.desc}</p>
                </div>
                <a
                  href={`https://wa.me/50671757171?text=${encodeURIComponent(`Hola NUVRO, quiero ver un demo de ${demo.label}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-white mt-8"
                >
                  Pedir este demo <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
