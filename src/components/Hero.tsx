import { motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Globe2,
  MessageSquareText,
  QrCode,
  ScanLine,
} from 'lucide-react';

const serviceSignals = [
  { label: 'Web premium', icon: <Globe2 size={16} /> },
  { label: 'Menú QR', icon: <QrCode size={16} /> },
  { label: 'QR comercial', icon: <ScanLine size={16} /> },
  { label: 'WhatsApp', icon: <MessageSquareText size={16} /> },
  { label: 'Dashboard', icon: <ChartNoAxesCombined size={16} /> },
  { label: 'Automatización', icon: <Braces size={16} /> },
  { label: 'IA aplicada', icon: <Bot size={16} /> },
];

const marqueeItems = [
  'DISEÑO QUE DETIENE',
  'SISTEMAS QUE VENDEN',
  'PRESENCIA PREMIUM',
  'QR COMERCIAL',
  'WHATSAPP BUSINESS',
  'CRM',
  'IA APLICADA',
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-bg opacity-80" />
        <div className="absolute inset-0 atelier-field opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#0A0A0A_0%,_rgba(10,10,10,0.96)_48%,_rgba(10,10,10,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(10,10,10,0.9)_0%,_transparent_44%,_#0A0A0A_100%)]" />
        <div className="absolute inset-0 scan-lines opacity-10" />
      </div>

      <div className="pointer-events-none absolute -left-[10vw] top-[14%] hidden rotate-[-8deg] font-display text-[18vw] font-black uppercase leading-none tracking-[0.02em] text-white/[0.04] lg:block">
        Invisible
      </div>
      <div className="pointer-events-none absolute -right-[8vw] bottom-[9%] hidden rotate-[7deg] font-display text-[14vw] font-black uppercase leading-none tracking-[0.02em] text-white/[0.035] lg:block">
        Ignorar
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pt-28 md:px-8 lg:px-10">
        <div className="grid flex-1 grid-rows-[auto_1fr_auto] gap-6 pb-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="editorial-rule flex flex-col justify-between gap-4 border-y bg-[#0A0A0A]/24 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/62 backdrop-blur-sm sm:flex-row"
          >
            <span>NUVRO ENGINEER / engineering that sells</span>
            <span>precise, silent, expensive to replicate</span>
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,0.84fr)]">
            <div className="relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.02, ease: [0.23, 1, 0.32, 1] }}
                className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#111111]/8 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/76 backdrop-blur-xl"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2B6CB0]" />
                </span>
                NUVRO ENGINEER
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="mb-5 inline-flex bg-[#111111] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white diagonal-cut"
              >
                Tu competencia se ve igual. Ese es el problema.
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.86, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="font-display text-[clamp(3.55rem,16vw,12.8rem)] font-black uppercase leading-[0.73] tracking-[0.01em]"
              >
                <span className="block text-white">
                  <span className="font-light italic">De</span> invisible
                </span>
                <span className="block text-white">a imposible</span>
                <span className="block text-white">de ignorar.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.72, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="mt-6 max-w-4xl bg-[#FFFFFF] px-5 py-4 text-[#0A0A0A] shadow-[14px_14px_0_rgba(43,108,176,0.42)] md:px-7 md:py-5"
              >
                <p className="font-display text-[clamp(2rem,4.35vw,4.8rem)] font-black uppercase leading-[0.84] tracking-wide">
                  Tu negocio no necesita otra página. Necesita presencia.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="mt-10 grid max-w-4xl gap-6 lg:grid-cols-[1fr_0.72fr]"
              >
                <p className="text-balance text-xl font-semibold leading-[1.42] text-white/84 md:text-2xl">
                  Construimos una primera impresión que obliga a mirar: diseño premium, activos comerciales
                  y sistemas conectados para que tu marca parezca tan buena como lo que vendés.
                </p>
                <div className="border-t border-white/18 pt-4 text-sm leading-relaxed text-white/62 lg:mt-2">
                  Webs premium, menús QR, landings, catálogos, dashboards, WhatsApp Business,
                  automatización e IA aplicada con dirección visual real.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.52, ease: [0.23, 1, 0.32, 1] }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#contacto"
                  className="group inline-flex items-center justify-center gap-3 bg-[#FFFFFF] px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#0A0A0A] transition duration-200 hover:bg-[#2B6CB0] hover:text-white active:scale-[0.98]"
                >
                  Transformar mi marca
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#express"
                  className="inline-flex items-center justify-center border border-white/24 bg-[#0A0A0A]/34 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-200 hover:border-[#2B6CB0] hover:text-[#2B6CB0] active:scale-[0.98]"
                >
                  Ver la máquina
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 hidden lg:block"
              aria-hidden="true"
            >
              <div className="relative h-[560px] opacity-[0.96] xl:h-[660px]">
                <div className="absolute right-[3%] top-[5%] h-[78%] w-[78%] bg-[#FFFFFF] shadow-[24px_28px_0_rgba(255,255,255,0.06)] [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]">
                  <div className="absolute inset-[1px] bg-[#0A0A0A] [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]" />
                  <div className="absolute left-[20%] top-0 h-full w-[18%] bg-[#FFFFFF]" />
                  <div className="absolute right-[17%] top-0 h-full w-px bg-[#0A0A0A]" />
                  <div className="absolute bottom-[18%] left-[13%] h-px w-[70%] bg-[#0A0A0A]" />
                  <div className="absolute left-[20%] top-[30%] h-[40%] w-[2px] bg-[#2B6CB0]" />
                </div>

                <div className="absolute left-[7%] top-[10%] h-28 w-28 border-l border-t border-white/28" />
                <div className="absolute bottom-[18%] right-[6%] h-36 w-36 border-b border-r border-white/24" />
                <div className="absolute left-[3%] top-[30%] h-px w-[86%] rotate-[-9deg] bg-[linear-gradient(90deg,transparent,rgba(245,245,245,0.34),rgba(43,108,176,0.68),transparent)]" />
                <div className="absolute left-[14%] top-[7%] h-[82%] w-px bg-white/12" />
                <div className="absolute left-[11%] top-[7%] flex h-[82%] flex-col justify-between">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span key={index} className="block h-px w-8 bg-white/24" />
                  ))}
                </div>

                <div className="machine-core absolute left-[1%] top-[20%] z-30 w-[42%] border border-white/14 bg-[#050505]/86 px-5 py-5 text-white shadow-2xl shadow-black/40 backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/54">silent system</p>
                  <p className="mt-3 font-display text-5xl font-black uppercase leading-[0.82]">
                    precise
                    <span className="block text-white">presence</span>
                  </p>
                </div>

                <div className="absolute bottom-12 right-0 z-20 w-[45%] border border-white/16 bg-[#050505]/90 px-4 py-4 text-white shadow-[12px_12px_0_rgba(43,108,176,0.24)] backdrop-blur-md">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#2B6CB0]">Después</p>
                  <p className="font-display text-4xl font-black uppercase leading-none md:text-5xl">
                    marca que se ve cara
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-30 grid grid-cols-4 gap-2">
                  {serviceSignals.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.68 + index * 0.05 }}
                      className="flex items-center gap-2 border border-white/12 bg-[#0A0A0A]/76 px-3 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white/72 backdrop-blur-md"
                    >
                      <span className="text-white/76">{item.icon}</span>
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-y border-white/12 bg-[#FFFFFF] py-3 text-[#0A0A0A]"
          >
            <div className="marquee-track flex w-max items-center gap-7 whitespace-nowrap font-display text-3xl font-black uppercase leading-none tracking-wide">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-7">
                  {item}
                  <span className="h-3 w-3 bg-[#111111]" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
