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

const beforeSignals = ['foto borrosa', 'link perdido', 'cero recordación'];

const serviceSignals = [
  { label: 'Web premium', icon: <Globe2 size={16} /> },
  { label: 'Menú QR', icon: <QrCode size={16} /> },
  { label: 'QR comercial', icon: <ScanLine size={16} /> },
  { label: 'WhatsApp', icon: <MessageSquareText size={16} /> },
  { label: 'Dashboard', icon: <ChartNoAxesCombined size={16} /> },
  { label: 'Automatización', icon: <Braces size={16} /> },
  { label: 'IA aplicada', icon: <Bot size={16} /> },
];

const machineShots = [
  {
    src: '/assets/nuvro/webs-premium.png',
    label: 'Presencia premium',
    className: 'left-[26%] top-[4%] h-[34%] w-[58%] rotate-[-2deg]',
  },
  {
    src: '/assets/nuvro/menu-qr.png',
    label: 'Menú QR que se ve caro',
    className: 'left-[3%] top-[33%] h-[37%] w-[38%] rotate-[3deg]',
  },
  {
    src: '/assets/nuvro/dashboards-crm.png',
    label: 'Operación visible',
    className: 'bottom-[3%] left-[34%] h-[37%] w-[55%] rotate-[2deg]',
  },
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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#02050a] text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/nuvro/hero-command-center.png"
          alt="Centro de control digital creado por NUVRO ENGINEER"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(104deg,_rgba(2,5,10,0.98)_0%,_rgba(2,5,10,0.9)_36%,_rgba(0,102,255,0.27)_36.2%,_rgba(0,102,255,0.08)_58%,_rgba(2,5,10,0.68)_77%,_rgba(2,5,10,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,5,10,0.96)_0%,_rgba(2,5,10,0.1)_48%,_#02050a_100%)]" />
        <div className="absolute inset-0 nuvro-blueprint animate-blueprint opacity-60" />
        <div className="absolute inset-0 scan-lines opacity-20" />
      </div>

      <div className="pointer-events-none absolute -left-[10vw] top-[14%] hidden rotate-[-8deg] font-display text-[18vw] font-black uppercase leading-none tracking-[0.02em] text-white/[0.04] lg:block">
        Invisible
      </div>
      <div className="pointer-events-none absolute -right-[8vw] bottom-[9%] hidden rotate-[7deg] font-display text-[14vw] font-black uppercase leading-none tracking-[0.02em] text-[#0066FF]/[0.12] lg:block">
        Ignorar
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pt-28 md:px-8 lg:px-10">
        <div className="grid flex-1 grid-rows-[auto_1fr_auto] gap-6 pb-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-between gap-4 border-y border-white/12 bg-black/24 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/62 backdrop-blur-sm sm:flex-row"
          >
            <span>NUVRO ENGINEER / presencia digital de alto impacto</span>
            <span>webs, qr, sistemas, automatización e IA</span>
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,0.84fr)]">
            <div className="relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="mb-5 inline-flex bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#02050a] diagonal-cut"
              >
                Tu competencia se ve igual. Ese es el problema.
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.86, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="font-display text-[clamp(3.55rem,16vw,12.8rem)] font-black uppercase leading-[0.73] tracking-[0.01em]"
              >
                <span className="block text-white">De invisible</span>
                <span className="block text-[#0066FF]">a imposible</span>
                <span className="block text-white">de ignorar.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.72, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="mt-6 max-w-4xl bg-[#0066FF] px-5 py-4 text-white shadow-[14px_14px_0_rgba(255,255,255,0.95)] md:px-7 md:py-5"
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
                <div className="border-t border-[#0066FF] pt-4 text-sm leading-relaxed text-white/62 lg:mt-2">
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
                  className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#02050a] transition duration-200 hover:bg-[#0066FF] hover:text-white active:scale-[0.98]"
                >
                  Transformar mi marca
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#express"
                  className="inline-flex items-center justify-center border border-white/24 bg-black/34 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-200 hover:border-[#0066FF] hover:text-[#8bb8ff] active:scale-[0.98]"
                >
                  Ver la máquina
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10"
            >
              <div className="nuvro-machine relative h-[520px] md:h-[620px]">
                <div className="absolute left-0 top-6 z-20 w-[44%] border border-white/15 bg-[#02050a]/78 p-4 backdrop-blur-md md:top-12">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/46">Antes</p>
                  <p className="font-display text-4xl font-black uppercase leading-none text-white/82 md:text-5xl">
                    negocio invisible
                  </p>
                  <div className="mt-5 space-y-2">
                    {beforeSignals.map((item) => (
                      <span
                        key={item}
                        className="block border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/42"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="machine-core absolute left-[34%] top-[28%] z-30 w-[42%] border border-[#0066FF]/72 bg-[#0066FF] px-5 py-5 text-white shadow-[12px_12px_0_rgba(255,255,255,0.88)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/70">NUVRO engine</p>
                  <p className="mt-3 font-display text-5xl font-black uppercase leading-[0.82] md:text-6xl">
                    mirada
                    <span className="block text-[#02050a]">activada</span>
                  </p>
                </div>

                {machineShots.map((shot, index) => (
                  <motion.div
                    key={shot.src}
                    initial={{ opacity: 0, y: 26, rotate: index === 1 ? 7 : -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.72, delay: 0.45 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                    className={`media-slice absolute z-10 ${shot.className}`}
                  >
                    <img src={shot.src} alt={shot.label} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,5,10,0.02),_rgba(2,5,10,0.58))]" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-black uppercase tracking-[0.22em] text-white/72">
                      {shot.label}
                    </span>
                  </motion.div>
                ))}

                <div className="absolute bottom-8 right-0 z-20 w-[45%] border border-[#0066FF]/50 bg-white px-4 py-4 text-[#02050a] shadow-[12px_12px_0_rgba(0,102,255,0.82)] md:bottom-12">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#0066FF]">Después</p>
                  <p className="font-display text-4xl font-black uppercase leading-none md:text-5xl">
                    marca que se ve cara
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-30 grid grid-cols-2 gap-2 md:grid-cols-4">
                  {serviceSignals.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.68 + index * 0.05 }}
                      className="flex items-center gap-2 border border-white/12 bg-[#02050a]/76 px-3 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white/72 backdrop-blur-md"
                    >
                      <span className="text-[#0066FF]">{item.icon}</span>
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
            className="overflow-hidden border-y border-white/12 bg-[#0066FF] py-3 text-white"
          >
            <div className="marquee-track flex w-max items-center gap-7 whitespace-nowrap font-display text-3xl font-black uppercase leading-none tracking-wide">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-7">
                  {item}
                  <span className="h-3 w-3 bg-white" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
