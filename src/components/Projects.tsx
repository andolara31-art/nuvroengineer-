import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, FolderKanban, Orbit, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Baby Invites Boutique',
    type: 'Invitación Digital',
    problem: 'Invitaciones digitales que necesitan verse delicadas, premium y fáciles de compartir.',
    system: 'Experiencia boutique para invitaciones digitales con presencia visual propia.',
    approach: 'Diseño emocional, enfoque mobile-first y ruta directa para compartir el proyecto.',
    image: '/assets/nuvro/digital-invitation.png',
    url: 'https://baby-invites-boutique.vercel.app/',
    featured: true,
  },
  {
    title: 'LeadPilot V3',
    type: 'CRM Custom',
    problem: 'Demora en respuesta a leads y pérdida de trazabilidad.',
    system: 'Plataforma de alta densidad para gestión de leads en tiempo real.',
    approach: 'Dashboard de ventas, Automatización de WhatsApp y Analítica.',
    image: '/assets/nuvro/dashboards-crm.png',
  },
  {
    title: 'Clario Advisory',
    type: 'Web Premium',
    problem: 'Falta de credibilidad digital en sector financiero high-ticket.',
    system: 'Identidad digital de alto nivel y funnel de prospección.',
    approach: 'Estrategia de contenido, landing page de conversión y UI corporativa.',
    image: '/assets/nuvro/webs-premium.png',
  },
  {
    title: 'NUVRO FIT',
    type: 'Sistema Interno',
    problem: 'Coaches enviando rutinas por PDFs desactualizados.',
    system: 'Panel de control web para seguimiento biométrico y rutinas dinámicas.',
    approach: 'Portal de cliente web-app, backend de entrenamiento y estadísticas.',
    image: '/assets/nuvro/automation-flows.png',
  },
  {
    title: 'Cafeoteca Costa Rica',
    type: 'Menú QR & Gestión',
    problem: 'Menú en imágenes de Instagram y toma manual de pedidos lenta.',
    system: 'Ecosistema de menú interactivo y sistema POS ligero.',
    approach: 'Menú digital rápido, sistema de órdenes a cocina y diseño de marca.',
    image: '/assets/nuvro/menu-qr.png',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] py-[clamp(80px,10vw,140px)]">
      <div className="absolute inset-0 hero-bg opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-[360px] w-[min(84vw,980px)] -translate-x-1/2 border border-[#D7FF45]/15 opacity-60 [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2"
            >
              <FolderKanban size={16} className="text-[#D7FF45]" />
              <span className="text-sm font-medium uppercase tracking-widest text-[#D7FF45]">Casos Reales</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl font-display text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-wide text-white"
            >
              Proyectos que muestran lo que podemos construir.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="relative min-h-[240px] overflow-hidden border border-white/10 bg-[#111111] p-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_40%,rgba(215,255,69,0.16)_40.2%,transparent_58%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#9CA3AF]">
                  <Orbit size={15} className="text-[#D7FF45]" />
                  Ecosistema conectado
                </span>
                <Sparkles size={18} className="text-[#D7FF45]" />
              </div>

              <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
                <div className="border border-white/10 bg-[#0A0A0A] p-4">
                  <p className="font-display text-3xl font-black uppercase leading-none text-white">NUVRO</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#D7FF45]">engineer</p>
                </div>
                <div className="hidden h-px w-20 bg-[#D7FF45] sm:block" />
                <div className="border border-[#D7FF45]/35 bg-[#D7FF45]/10 p-4">
                  <p className="font-display text-3xl font-black uppercase leading-none text-white">Baby Invites</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#D7FF45]">boutique</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`group overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#111111] shadow-xl shadow-black/5 transition duration-300 hover:scale-[1.02] hover:border-[#D7FF45]/40 ${
                project.featured ? 'lg:col-span-6 xl:grid xl:grid-cols-[1.1fr_0.9fr]' : 'lg:col-span-3'
              }`}
            >
              <div className={`relative w-full overflow-hidden bg-[#111111] ${project.featured ? 'aspect-[16/9] xl:aspect-auto xl:min-h-[430px]' : 'aspect-[4/3]'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.78))]" />
                <div className="absolute right-4 top-4 bg-[#D7FF45] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0A0A0A] shadow-md">
                  {project.type}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]/52 opacity-0 backdrop-blur-[3px] transition duration-300 group-hover:opacity-100">
                  <span className="bg-[#D7FF45] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0A0A0A] shadow-xl">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="flex h-full flex-col p-7 md:p-8">
                <div className="mb-8 flex items-start justify-between gap-6">
                  <h3 className="font-display text-4xl font-black uppercase leading-none text-white md:text-5xl">
                    {project.title}
                  </h3>
                  <span className="font-display text-5xl font-black text-[#D7FF45]/55">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="grid gap-4">
                  <div>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">Problema Abordado</span>
                    <p className="text-sm leading-snug text-white">{project.problem}</p>
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#D7FF45]">Sistema Construido</span>
                    <p className="text-sm font-medium leading-snug text-white">{project.system}</p>
                  </div>
                  <div>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">Enfoque</span>
                    <p className="text-sm leading-snug text-white">{project.approach}</p>
                  </div>
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-3 border border-[#D7FF45]/45 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#D7FF45] hover:text-[#0A0A0A]"
                  >
                    Visitar proyecto <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-6 border-t border-white/10 pt-12 text-center"
        >
          <a
            href="https://wa.me/50671757171?text=Hola NUVRO, quiero ver más casos de estudio"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-[#111111] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#D7FF45] hover:text-[#0A0A0A]"
          >
            Ver todos los proyectos <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
