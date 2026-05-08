import { motion } from 'motion/react';
import { ArrowRight, Cpu, Database, Laptop, Settings, Zap } from 'lucide-react';

const customServices = [
  {
    icon: <Laptop size={20} />,
    title: 'Webs Premium',
    desc: 'Plataformas web construidas a medida. Diseño exclusivo, alto rendimiento y arquitecturas escalables.',
    image: '/assets/nuvro/webs-premium.png',
    tag: 'Brand + conversion',
  },
  {
    icon: <Database size={20} />,
    title: 'CRM / Dashboards',
    desc: 'Visualización de datos en tiempo real, tableros de control y gestión centralizada del negocio.',
    image: '/assets/nuvro/dashboards-crm.png',
    tag: 'Data cockpit',
  },
  {
    icon: <Zap size={20} />,
    title: 'Automatizacion',
    desc: 'Integración de flujos de trabajo. Conectamos software para operar con menos fricción.',
    image: '/assets/nuvro/automation-flows.png',
    tag: 'Workflow engine',
  },
  {
    icon: <Settings size={20} />,
    title: 'Sistemas Internos',
    desc: 'Herramientas operativas privadas. Software hecho exactamente como tu equipo trabaja.',
    image: '/assets/nuvro/hero-command-center.png',
    tag: 'Private tools',
  },
  {
    icon: <Cpu size={20} />,
    title: 'IA Aplicada',
    desc: 'Modelos de inteligencia artificial integrados para analisis, soporte, ventas u optimizacion.',
    image: '/assets/nuvro/ai-applied.png',
    tag: 'Applied AI',
  },
];

export default function NuvroCustom() {
  return (
    <section id="custom" className="relative overflow-hidden bg-[#0A0A0A] py-[clamp(80px,10vw,140px)] text-white">
      <div className="absolute inset-0 hero-bg opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#0A0A0A_0%,_rgba(10,10,10,0.72)_46%,_#0A0A0A_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 border border-white/18 bg-[#111111]/6 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/72"
            >
              <span className="h-2 w-2 bg-[#0066FF]" />
              Nuvro Custom
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="max-w-4xl font-display text-[clamp(3.3rem,7vw,7rem)] font-black uppercase leading-[0.84] tracking-wide"
            >
              <span className="font-light italic">Cuando</span> el negocio necesita una maquina propia.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="self-end border-y border-white/12 py-6"
          >
            <p className="text-xl leading-relaxed text-white/68">
              Webs premium, CRM, dashboards, automatización, IA aplicada y sistemas internos
              diseñados alrededor de tu operación real.
            </p>
            <a
              href="https://wa.me/50671757171?text=Hola NUVRO, necesito un sistema custom"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#0066FF] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition duration-200 hover:bg-[#111111] hover:text-white active:scale-[0.98]"
            >
              Hablar de un proyecto custom <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="grid gap-5">
          {customServices.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.07 }}
              className="group grid overflow-hidden border-b border-[rgba(255,255,255,0.06)] border-l-[3px] border-l-transparent bg-[#111111] backdrop-blur-sm transition-[background-color,border-color] duration-200 ease-in hover:border-l-[#0066FF] hover:bg-[#0F0F0F] md:grid-cols-[220px_1fr_220px]"
            >
              <div className="relative h-48 overflow-hidden bg-[#0A0A0A] md:h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(2,5,10,0.08),_rgba(2,5,10,0.86))]" />
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-[72px_1fr] md:p-8">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 text-[#0066FF] transition group-hover:border-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white">
                  {service.icon}
                </div>
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-4xl font-black uppercase leading-none tracking-wide">
                      {service.title}
                    </h3>
                    <span className="border border-[rgba(0,102,255,0.3)] bg-[#0066FF]/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#0066FF]">
                      {service.tag}
                    </span>
                  </div>
                  <p className="max-w-3xl text-lg leading-relaxed text-white/58">{service.desc}</p>
                </div>
              </div>

              <div className="flex items-end justify-between border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-8">
                <span className="font-display text-5xl font-black text-[#0066FF]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <ArrowRight
                  size={22}
                  className="text-[#0066FF] opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
