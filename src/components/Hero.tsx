import { motion } from 'motion/react';
import { ArrowRight, Cpu, Globe2, MessageSquare, Workflow } from 'lucide-react';

const capabilities = [
  { label: 'Webs premium', icon: <Globe2 size={18} /> },
  { label: 'Landing pages', icon: <ArrowRight size={18} /> },
  { label: 'Automatizacion', icon: <Workflow size={18} /> },
  { label: 'CRM + IA', icon: <Cpu size={18} /> },
];

const proofPoints = [
  { value: '01', label: 'Oferta clara' },
  { value: '02', label: 'Sistema visual' },
  { value: '03', label: 'Ruta a WhatsApp' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/nuvro/hero-command-center.png"
          alt="NUVRO ENGINEER digital command center"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#000_0%,_rgba(0,0,0,0.88)_34%,_rgba(0,0,0,0.42)_67%,_rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.72)_0%,_rgba(0,0,0,0.16)_48%,_#000_100%)]" />
        <div className="absolute inset-0 hero-grid opacity-70" />
        <div className="absolute inset-0 scan-lines opacity-30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pt-28 md:px-8 lg:px-10">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-3 border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md"
            >
              <span className="h-2 w-2 bg-[#0066FF]" />
              <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-white/70">
                Digital systems for businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="font-display text-5xl leading-[0.92] text-white sm:text-6xl md:text-8xl lg:text-9xl"
            >
              NUVRO
              <span className="block text-[#0066FF]">ENGINEER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/72 md:text-2xl"
            >
              Convertimos tu negocio en una experiencia digital que se entiende rapido,
              se ve premium y lleva al cliente directo a la accion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 bg-[#0066FF] px-8 py-5 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-2xl shadow-[#0066FF]/30 transition-all hover:bg-white hover:text-black"
              >
                Quiero impactar
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#express"
                className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-8 py-5 text-sm font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all hover:border-white/45 hover:bg-white/10"
              >
                Ver servicios
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.22 }}
            className="relative hidden min-h-[520px] lg:block"
          >
            <div className="absolute right-0 top-0 w-[420px] border border-white/10 bg-black/38 p-5 backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#0066FF]">
                    NUVRO build map
                  </p>
                  <p className="mt-2 text-sm text-white/55">Presencia, venta y operacion conectadas.</p>
                </div>
                <MessageSquare className="text-[#0066FF]" size={22} />
              </div>

              <div className="space-y-3">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + index * 0.08 }}
                    className="flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <div className="flex items-center gap-3 text-white/82">
                      <span className="text-[#0066FF]">{item.icon}</span>
                      <span className="text-sm font-bold uppercase tracking-[0.14em]">{item.label}</span>
                    </div>
                    <span className="h-px w-12 bg-[#0066FF]" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-12 left-0 grid w-[520px] grid-cols-3 border border-white/10 bg-black/45 backdrop-blur-xl">
              {proofPoints.map((item) => (
                <div key={item.value} className="border-r border-white/10 p-5 last:border-r-0">
                  <p className="font-display text-4xl text-white">{item.value}</p>
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white/48">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-6 grid border-y border-white/10 bg-black/35 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/52 backdrop-blur-md sm:grid-cols-4"
        >
          {['Landing que vende', 'Menu QR premium', 'CRM visible', 'IA aplicada'].map((item) => (
            <div key={item} className="border-b border-white/10 px-4 py-4 sm:border-b-0 sm:border-r sm:last:border-r-0">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
