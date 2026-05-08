import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
        <img
          src="/assets/nuvro/hero-engineering-that-sells.png"
          alt="Engineering that sells, precise, silent, expensive to replicate"
          className="h-full w-full object-cover object-[56%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(5,5,5,0.18)_0%,_rgba(5,5,5,0)_42%,_rgba(5,5,5,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(5,5,5,0.08)_0%,_rgba(5,5,5,0)_52%,_rgba(5,5,5,0.16)_100%)]" />
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

          <div className="flex items-end pb-8">
            <div className="relative z-20 max-w-2xl">
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
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="max-w-xl border border-white/12 bg-[#050505]/72 p-5 shadow-2xl shadow-black/50 backdrop-blur-md"
              >
                <p className="text-balance text-lg font-semibold leading-[1.42] text-white/84 md:text-xl">
                  Construimos una primera impresión que obliga a mirar: diseño premium, activos comerciales y sistemas conectados.
                </p>
                <div className="mt-4 border-t border-white/18 pt-4 text-sm leading-relaxed text-white/62">
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
