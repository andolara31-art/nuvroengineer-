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
  { label: 'WhatsApp Business', icon: <MessageSquareText size={16} /> },
  { label: 'CRM / dashboards', icon: <ChartNoAxesCombined size={16} /> },
  { label: 'Automatización', icon: <Braces size={16} /> },
  { label: 'IA aplicada', icon: <Bot size={16} /> },
];

const heroShots = [
  { src: '/assets/nuvro/webs-premium.png', label: 'web premium', className: 'left-[2%] top-[10%] h-[34%] w-[44%]' },
  { src: '/assets/nuvro/menu-qr.png', label: 'menú qr', className: 'right-[1%] top-[2%] h-[46%] w-[38%]' },
  { src: '/assets/nuvro/dashboards-crm.png', label: 'dashboard crm', className: 'bottom-[3%] left-[18%] h-[38%] w-[44%]' },
  { src: '/assets/nuvro/ai-applied.png', label: 'ia aplicada', className: 'bottom-[10%] right-[7%] h-[32%] w-[34%]' },
];

const marqueeItems = [
  'WEBS PREMIUM',
  'LANDING PAGES',
  'MENÚ QR',
  'LINK BIO',
  'CATÁLOGOS',
  'WHATSAPP BUSINESS',
  'CRM',
  'DASHBOARDS',
  'AUTOMATIZACIÓN',
  'IA APLICADA',
];

export default function Hero() {
  return (
    <section className="relative min-h-[94svh] overflow-hidden bg-[#02050a] text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/nuvro/hero-command-center.png"
          alt="Centro de control digital creado por NUVRO ENGINEER"
          className="h-full w-full object-cover opacity-62"
        />
        <div className="absolute inset-0 bg-[linear-gradient(112deg,_rgba(2,5,10,0.98)_0%,_rgba(2,5,10,0.84)_38%,_rgba(0,102,255,0.24)_38.2%,_rgba(0,102,255,0.09)_52%,_rgba(2,5,10,0.48)_72%,_rgba(2,5,10,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,5,10,0.95)_0%,_rgba(2,5,10,0.18)_42%,_#02050a_100%)]" />
        <div className="absolute inset-0 nuvro-blueprint animate-blueprint opacity-70" />
        <div className="absolute inset-0 scan-lines opacity-22" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[49%] hidden w-[min(86vw,980px)] -translate-x-1/2 -translate-y-1/2 lg:block">
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.94 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="relative h-[600px]"
        >
          {heroShots.map((shot, index) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, y: 34, rotate: index % 2 ? 6 : -6 }}
              animate={{ opacity: 1, y: 0, rotate: index % 2 ? 3 : -3 }}
              transition={{ duration: 0.76, delay: 0.44 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className={`media-slice absolute ${shot.className}`}
            >
              <img src={shot.src} alt={shot.label} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,5,10,0.02),_rgba(2,5,10,0.62))]" />
              <span className="absolute bottom-3 left-4 text-[10px] font-black uppercase tracking-[0.24em] text-white/68">
                {shot.label}
              </span>
            </motion.div>
          ))}
          <div className="electric-frame absolute left-[10%] top-[13%] h-[74%] w-[78%]" />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -left-[4vw] top-[18%] hidden rotate-[-8deg] font-display text-[15vw] font-black uppercase leading-none tracking-[0.02em] text-white/[0.045] lg:block">
        MIREN
      </div>

      <div className="relative z-10 mx-auto flex min-h-[94svh] max-w-7xl flex-col px-5 pt-28 md:px-8 lg:px-10">
        <div className="grid flex-1 grid-rows-[auto_1fr_auto] gap-6 pb-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-between gap-4 border-y border-white/12 bg-black/24 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/62 backdrop-blur-sm sm:flex-row"
          >
            <span>NUVRO ENGINEER / Diseño digital de alto impacto</span>
            <span>Webs, sistemas, QR, automatización e IA</span>
          </motion.div>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,0.72fr)]">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="mb-5 inline-flex bg-[#0066FF] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white diagonal-cut"
              >
                Si no llama la atención, no existe
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 max-w-[900px] font-display text-[clamp(5.2rem,16vw,13rem)] font-black uppercase leading-[0.7] tracking-[0.01em]"
              >
                <span className="block text-white">NUVRO</span>
                <span className="block text-[#0066FF]">ENGINEER</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.72, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-20 mt-5 max-w-4xl bg-white px-5 py-4 text-[#02050a] shadow-[14px_14px_0_#0066FF] md:px-7 md:py-5"
              >
                <p className="font-display text-[clamp(2.25rem,5vw,5.2rem)] font-black uppercase leading-[0.82] tracking-wide">
                  Hacemos que te miren aunque no vengan a comprar.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="mt-10 grid max-w-4xl gap-6 lg:grid-cols-[0.98fr_0.72fr]"
              >
                <p className="text-balance text-xl font-semibold leading-[1.42] text-white/84 md:text-2xl">
                  Tu web tiene segundos para parecer confiable, diferente y valiosa. Creamos experiencias
                  digitales que detienen el scroll y convierten curiosidad en conversación.
                </p>
                <div className="border-t border-[#0066FF] pt-4 text-sm leading-relaxed text-white/62 lg:mt-2">
                  Webs premium, menús QR, landings, catálogos, dashboards, WhatsApp Business,
                  automatización e IA aplicada, todo con dirección visual real.
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
                  className="group inline-flex items-center justify-center gap-3 bg-[#0066FF] px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-white hover:text-[#02050a] active:scale-[0.98]"
                >
                  Quiero que me miren
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#express"
                  className="inline-flex items-center justify-center border border-white/24 bg-black/34 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-200 hover:border-[#0066FF] hover:text-[#8bb8ff] active:scale-[0.98]"
                >
                  Ver qué hacemos
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-20 hidden lg:block"
            >
              <div className="ml-auto w-[430px] border border-white/14 bg-[#02050a]/64 p-5 backdrop-blur-xl reverse-cut">
                <div className="mb-5 flex items-center justify-between gap-5 border-b border-white/12 pb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8bb8ff]">
                      Attraction system
                    </p>
                    <p className="mt-2 font-display text-4xl font-black uppercase leading-none">No plantilla</p>
                  </div>
                  <span className="bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#02050a]">
                    Wow
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {serviceSignals.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.62 + index * 0.05 }}
                      className="group/service border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#0066FF]/70 hover:bg-[#0066FF]/14"
                    >
                      <div className="mb-8 flex items-center justify-between text-[#0066FF]">
                        {item.icon}
                        <span className="font-display text-2xl font-black">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="text-sm font-black uppercase tracking-[0.13em] text-white/82">{item.label}</p>
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
