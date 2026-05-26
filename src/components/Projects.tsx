import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Baby Invites Boutique',
    type: 'Invitación Digital',
    desc: 'Experiencia boutique para invitaciones digitales. Diseño elegante pensado para celular y fácil de compartir desde WhatsApp.',
    image: '/assets/nuvro/digital-invitation.png',
    url: 'https://baby-invites-boutique.vercel.app/',
    featured: true,
  },
  {
    title: 'LeadPilot V3',
    type: 'CRM Custom',
    desc: 'Sistema para manejar clientes potenciales: seguimiento automático, mensajes de WhatsApp y reportes de ventas en un solo lugar.',
    image: '/assets/nuvro/dashboards-crm.png',
  },
  {
    title: 'Clario Advisory',
    type: 'Web Premium',
    desc: 'Presencia digital premium y página de contacto para clientes de alto valor en el sector financiero.',
    image: '/assets/nuvro/webs-premium.png',
  },
  {
    title: 'NUVRO FIT',
    type: 'Sistema Interno',
    desc: 'Aplicación web para coaches: cada cliente ve sus rutinas, progreso y medidas desde el celular, sin PDFs ni hojas de Excel.',
    image: '/assets/nuvro/automation-flows.png',
  },
  {
    title: 'Cafeoteca CR',
    type: 'Menú QR & Gestión',
    desc: 'Menú digital con código QR en cada mesa y sistema para que los pedidos lleguen directo a cocina sin papel ni confusión.',
    image: '/assets/nuvro/menu-qr.png',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="proyectos" className="bg-[var(--surface)] py-[clamp(80px,10vw,140px)]">
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
              Trabajos Reales
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.06, ease }}
              className="display-section text-1 uppercase"
            >
              Proyectos{' '}
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>que</span>
              <br />
              muestran{' '}
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>lo que</span>
              <br />
              construimos.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="body-lg lg:self-end max-w-[44ch]"
          >
            Cada proyecto es un sistema completo: diseño, lógica y experiencia de usuario
            construidos para que el negocio opere mejor desde el primer día.
          </motion.p>
        </div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="card group mb-4 grid overflow-hidden lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 img-veil" />
            <span className="absolute right-4 top-4 bg-[var(--text-1)] px-3 py-1.5 label-sm text-[var(--bg)]">
              {featured.type}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between p-7 md:p-9">
            <div>
              <p className="label-sm mb-4 text-brand">Trabajo destacado</p>
              <h3 className="display-card text-1 uppercase mb-4">{featured.title}</h3>
              <p className="body-lg border-t border-[var(--border-sub)] pt-4">{featured.desc}</p>
            </div>
            {featured.url && (
              <a
                href={featured.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 label-sm text-brand hover:text-1 transition-colors"
              >
                Visitar proyecto <ExternalLink size={12} />
              </a>
            )}
          </div>
        </motion.article>

        {/* Rest — 2-column grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="card group overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 img-veil" />
                <span className="absolute right-4 top-4 bg-[var(--text-1)] px-3 py-1.5 label-sm text-[var(--bg)]">
                  {p.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="display-card text-1 uppercase mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed text-3">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center border-t border-[var(--border-sub)] pt-12"
        >
          <a
            href="https://wa.me/50671757171?text=Hola NUVRO, quiero ver más proyectos"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost group"
          >
            Ver más proyectos
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
