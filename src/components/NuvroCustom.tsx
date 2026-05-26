import { motion } from 'motion/react';
import { ArrowRight, Cpu, Database, Laptop, Settings, Zap } from 'lucide-react';

const services = [
  {
    Icon: Laptop,
    title: 'Webs Premium',
    desc: 'Sitios web hechos a la medida de tu negocio. Diseño exclusivo, rápido y que se ve premium desde el primer clic.',
    tag: 'Marca y Ventas',
    image: '/assets/nuvro/webs-premium.png',
  },
  {
    Icon: Database,
    title: 'CRM & Dashboards',
    desc: 'Un panel donde ves todo tu negocio: clientes, ventas, seguimiento y métricas — en tiempo real desde cualquier dispositivo.',
    tag: 'Panel de Control',
    image: '/assets/nuvro/dashboards-crm.png',
  },
  {
    Icon: Zap,
    title: 'Automatización',
    desc: 'Conectamos tus herramientas digitales para que funcionen solas: cotizaciones, recordatorios, respuestas y más — sin que tengas que hacer todo a mano.',
    tag: 'Flujos Automáticos',
    image: '/assets/nuvro/automation-flows.png',
  },
  {
    Icon: Settings,
    title: 'Sistemas Internos',
    desc: 'Aplicaciones internas hechas a la medida de tu equipo: para registrar, gestionar y operar tu negocio sin depender de hojas de Excel ni WhatsApp.',
    tag: 'Herramientas Internas',
    image: '/assets/nuvro/hero-command-center.png',
  },
  {
    Icon: Cpu,
    title: 'IA Aplicada',
    desc: 'Inteligencia artificial que trabaja por vos: atiende clientes, responde preguntas frecuentes, analiza datos y te ayuda a vender más, de forma automática.',
    tag: 'Inteligencia Artificial',
    image: '/assets/nuvro/ai-applied.png',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function NuvroCustom() {
  return (
    <section id="custom" className="bg-nuvro py-[clamp(80px,10vw,140px)]">
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
              Nuvro Custom
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.06, ease }}
              className="display-section text-1 uppercase"
            >
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>Cuando</span>{' '}
              el negocio
              <br />
              necesita{' '}
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>su propia</span>
              <br />
              máquina.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="self-end"
          >
            <p className="body-lg max-w-[44ch] mb-8">
              Sitios web, paneles de control, automatización, inteligencia artificial
              y herramientas internas hechas exactamente para tu negocio.
            </p>
            <a
              href="https://wa.me/50671757171?text=Hola NUVRO, necesito un sistema custom"
              target="_blank"
              rel="noreferrer"
              className="btn btn-white"
            >
              Hablar de mi proyecto <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="card group grid overflow-hidden md:grid-cols-[220px_1fr_60px]"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden md:h-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--surface)]" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-7 py-7">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="grid h-9 w-9 place-items-center border border-[var(--border-sub)] text-3 transition-all duration-200 group-hover:border-brand group-hover:text-brand"
                  >
                    <s.Icon size={16} />
                  </div>
                  <span className="label-sm text-brand">{s.tag}</span>
                </div>
                <h3 className="display-card text-1 uppercase mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed text-3 max-w-[52ch]">{s.desc}</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center border-t border-[var(--border-sub)] p-5 md:border-l md:border-t-0">
                <ArrowRight
                  size={18}
                  className="text-3 transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand"
                />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
