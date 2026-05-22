import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Baby Invites Boutique',
    type: 'Invitación Digital',
    desc: 'Experiencia boutique para invitaciones digitales. Diseño emocional, mobile-first y ruta directa para compartir.',
    image: '/assets/nuvro/digital-invitation.png',
    url: 'https://baby-invites-boutique.vercel.app/',
    featured: true,
  },
  {
    title: 'LeadPilot V3',
    type: 'CRM Custom',
    desc: 'Plataforma de alta densidad para gestión de leads en tiempo real con automatización de WhatsApp.',
    image: '/assets/nuvro/dashboards-crm.png',
  },
  {
    title: 'Clario Advisory',
    type: 'Web Premium',
    desc: 'Identidad digital de alto nivel y funnel de prospección para sector financiero high-ticket.',
    image: '/assets/nuvro/webs-premium.png',
  },
  {
    title: 'NUVRO FIT',
    type: 'Sistema Interno',
    desc: 'Panel de control web para seguimiento biométrico y rutinas dinámicas de entrenamiento.',
    image: '/assets/nuvro/automation-flows.png',
  },
  {
    title: 'Cafeoteca Costa Rica',
    type: 'Menú QR & Gestión',
    desc: 'Ecosistema de menú interactivo y sistema POS ligero para pedidos a cocina.',
    image: '/assets/nuvro/menu-qr.png',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-[clamp(80px,10vw,130px)] text-white">
      <div className="absolute inset-0 hero-bg opacity-50" />

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
              Casos Reales
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading"
            >
              Proyectos que<br />
              <span className="text-white/28 font-light italic">muestran</span><br />
              lo que construimos.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="self-end text-lg leading-relaxed text-white/45"
          >
            Cada proyecto es un sistema completo: diseño, lógica y experiencia de usuario
            construidos para que el negocio opere mejor desde el primer día.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 lg:grid-cols-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className={`nuvro-card group overflow-hidden ${
                project.featured
                  ? 'lg:col-span-6 lg:grid lg:grid-cols-[1.15fr_0.85fr]'
                  : 'lg:col-span-3'
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  project.featured
                    ? 'aspect-[16/9] lg:aspect-auto lg:min-h-[340px]'
                    : 'aspect-[16/10]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0A0A0A]">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-7">
                <div>
                  <h3 className="font-display text-[clamp(2rem,3.5vw,4rem)] font-black uppercase leading-[0.88] tracking-wide text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 border-t border-white/[0.07] pt-4 text-sm leading-relaxed text-white/50 md:text-base">
                    {project.desc}
                  </p>
                </div>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2B6CB0] transition-colors hover:text-white"
                  >
                    Visitar proyecto
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/25">
                    En producción
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center border-t border-white/[0.06] pt-12"
        >
          <a
            href="https://wa.me/50671757171?text=Hola NUVRO, quiero ver más casos de estudio"
            target="_blank"
            rel="noreferrer"
            className="btn-outline group"
          >
            Ver más proyectos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
