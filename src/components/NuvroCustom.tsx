import { motion } from 'motion/react';
import { ArrowRight, Cpu, Database, Laptop, Settings, Zap } from 'lucide-react';

const customServices = [
  {
    icon: <Laptop size={20} />,
    title: 'Webs Premium',
    desc: 'Plataformas web construidas a medida. Diseño exclusivo, alto rendimiento y arquitecturas escalables.',
    tag: 'Brand & Conversion',
    image: '/assets/nuvro/webs-premium.png',
  },
  {
    icon: <Database size={20} />,
    title: 'CRM & Dashboards',
    desc: 'Visualización de datos en tiempo real, tableros de control y gestión centralizada del negocio.',
    tag: 'Data Cockpit',
    image: '/assets/nuvro/dashboards-crm.png',
  },
  {
    icon: <Zap size={20} />,
    title: 'Automatización',
    desc: 'Integración de flujos de trabajo. Conectamos software para operar con menos fricción.',
    tag: 'Workflow Engine',
    image: '/assets/nuvro/automation-flows.png',
  },
  {
    icon: <Settings size={20} />,
    title: 'Sistemas Internos',
    desc: 'Herramientas operativas privadas. Software hecho exactamente como tu equipo trabaja.',
    tag: 'Private Tools',
    image: '/assets/nuvro/hero-command-center.png',
  },
  {
    icon: <Cpu size={20} />,
    title: 'IA Aplicada',
    desc: 'Modelos de inteligencia artificial integrados para análisis, soporte, ventas u optimización.',
    tag: 'Applied AI',
    image: '/assets/nuvro/ai-applied.png',
  },
];

export default function NuvroCustom() {
  return (
    <section id="custom" className="relative overflow-hidden bg-[#0A0A0A] py-[clamp(80px,10vw,130px)] text-white">
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
              Nuvro Custom
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="section-heading"
            >
              <span className="text-white/28 font-light italic">Cuando</span> el negocio<br />
              necesita una<br />máquina propia.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="self-end"
          >
            <p className="text-lg leading-relaxed text-white/50">
              Webs premium, CRM, dashboards, automatización, IA aplicada y sistemas internos
              diseñados alrededor de tu operación real.
            </p>
            <a
              href="https://wa.me/50671757171?text=Hola NUVRO, necesito un sistema custom"
              target="_blank"
              rel="noreferrer"
              className="mt-8 btn-primary inline-flex"
            >
              Hablar de mi proyecto
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-3">
          {customServices.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.06 }}
              className="nuvro-card group grid overflow-hidden md:grid-cols-[200px_1fr_auto]"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden md:h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-7 py-6 md:py-7">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-white/[0.1] text-white/40 transition-all duration-200 group-hover:border-[#2B6CB0] group-hover:text-[#2B6CB0]">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#2B6CB0]/60">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-display text-[clamp(2rem,3.5vw,3.2rem)] font-black uppercase leading-[0.88] tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45">
                  {service.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center border-t border-white/[0.06] p-6 md:border-l md:border-t-0">
                <ArrowRight
                  size={20}
                  className="text-white/20 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#2B6CB0]"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
