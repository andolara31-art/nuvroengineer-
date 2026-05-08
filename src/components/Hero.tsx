import { motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Globe2,
  MessageSquareText,
  QrCode,
  Sparkles,
} from 'lucide-react';

const serviceSignals = [
  { label: 'Web premium', code: '01', icon: <Globe2 size={17} /> },
  { label: 'Menú QR', code: '02', icon: <QrCode size={17} /> },
  { label: 'WhatsApp Business', code: '03', icon: <MessageSquareText size={17} /> },
  { label: 'CRM / dashboards', code: '04', icon: <ChartNoAxesCombined size={17} /> },
  { label: 'Automatización', code: '05', icon: <Braces size={17} /> },
  { label: 'IA aplicada', code: '06', icon: <Bot size={17} /> },
];

const proofLines = ['Diseño que vende', 'Operaciones más claras', 'Clientes directo a WhatsApp'];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#02050a] text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/nuvro/hero-command-center.png"
          alt="Centro de control digital creado por NUVRO ENGINEER"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(2,5,10,0.98)_0%,_rgba(2,5,10,0.78)_34%,_rgba(2,5,10,0.36)_64%,_rgba(2,5,10,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,5,10,0.92)_0%,_rgba(2,5,10,0.12)_42%,_#02050a_100%)]" />
        <div className="absolute inset-0 nuvro-blueprint animate-blueprint opacity-80" />
        <div className="absolute inset-0 scan-lines opacity-25" />
        <div className="animate-scan absolute left-0 top-0 h-1/3 w-full bg-[linear-gradient(180deg,_transparent,_rgba(0,102,255,0.18),_transparent)]" />
      </div>

      <div className="pointer-events-none absolute -right-8 top-24 hidden rotate-90 font-display text-[11vw] font-black uppercase leading-none tracking-[0.05em] text-stroke-blue opacity-80 xl:block">
        Engineer
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pt-28 md:px-8 lg:px-10">
        <div className="grid flex-1 grid-rows-[auto_1fr_auto] gap-8 pb-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-between gap-4 border-y border-white/12 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 sm:flex-row"
          >
            <span>NUVRO ENGINEER / COSTA RICA</span>
            <span>Webs, sistemas, IA y activos comerciales</span>
          </motion.div>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_440px]">
            <div className="relative max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="mb-7 inline-flex items-center gap-3 bg-[#0066FF] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white diagonal-cut"
              >
                <Sparkles size={15} />
                Presencia digital que se siente construida, no armada
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="max-w-[980px] font-display text-[clamp(4.8rem,14vw,11.8rem)] font-black uppercase leading-[0.72] tracking-[0.005em] text-white"
              >
                NUVRO
                <span className="mt-3 block text-[#0066FF]">ENGINEER</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="mt-8 grid max-w-4xl gap-6 lg:grid-cols-[1fr_0.72fr]"
              >
                <p className="text-balance text-xl font-medium leading-[1.45] text-white/82 md:text-2xl">
                  Diseñamos webs premium, menús QR, landings, dashboards, automatizaciones e IA aplicada
                  para que tu negocio se vea caro, se entienda rápido y convierta sin fricción.
                </p>
                <div className="border-t border-[#0066FF] pt-4 text-sm leading-relaxed text-white/62 lg:mt-2">
                  No vendemos una página aislada. Construimos una interfaz comercial conectada a tu operación,
                  tus clientes y tu próxima venta.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.34, ease: [0.23, 1, 0.32, 1] }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#contacto"
                  className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-5 text-sm font-extrabold uppercase tracking-[0.18em] text-[#02050a] transition duration-200 hover:bg-[#0066FF] hover:text-white active:scale-[0.98]"
                >
                  Empezar proyecto
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#express"
                  className="inline-flex items-center justify-center border border-white/22 bg-black/30 px-8 py-5 text-sm font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-200 hover:border-[#0066FF] hover:text-[#8bb8ff] active:scale-[0.98]"
                >
                  Ver soluciones
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="hidden lg:block"
            >
              <div className="relative min-h-[560px]">
                <div className="absolute inset-x-4 top-0 border border-white/12 bg-[#02050a]/52 p-5 backdrop-blur-xl reverse-cut">
                  <div className="mb-5 flex items-start justify-between gap-6 border-b border-white/10 pb-5">
                    <div>
                      <p className="font-display text-3xl font-black uppercase leading-none tracking-wide">
                        Sistema visual
                      </p>
                      <p className="mt-2 text-sm text-white/54">Activos comerciales conectados.</p>
                    </div>
                    <span className="bg-[#0066FF] px-3 py-2 text-xs font-black uppercase tracking-[0.18em]">
                      Live
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {serviceSignals.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.48 + index * 0.06 }}
                        className="border border-white/10 bg-white/[0.035] p-4"
                      >
                        <div className="mb-8 flex items-center justify-between text-[#0066FF]">
                          {item.icon}
                          <span className="font-display text-2xl font-black">{item.code}</span>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/82">
                          {item.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-8 left-0 right-10 border border-[#0066FF]/42 bg-[#0066FF]/12 p-5 backdrop-blur-xl diagonal-cut">
                  <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#8bb8ff]">
                    Resultado buscado
                  </p>
                  <div className="space-y-3">
                    {proofLines.map((line) => (
                      <div key={line} className="flex items-center justify-between gap-4 border-t border-white/12 pt-3">
                        <span className="text-sm font-bold uppercase tracking-[0.13em] text-white">{line}</span>
                        <ArrowRight size={16} className="text-[#8bb8ff]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="grid border-y border-white/12 bg-black/38 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/55 backdrop-blur-md sm:grid-cols-4"
          >
            {['Premium web', 'QR comercial', 'CRM visible', 'IA operativa'].map((item) => (
              <div key={item} className="border-b border-white/10 px-4 py-4 sm:border-b-0 sm:border-r sm:last:border-r-0">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
