import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    before: 'Menú en foto borrosa por WhatsApp',
    after: 'Menú QR interactivo en mesa y celular',
  },
  {
    before: 'Link BIO lleno de botones que no guían',
    after: 'Link BIO guiado hacia reservas y valor',
  },
  {
    before: 'Promociones perdidas en Historias de 24h',
    after: 'Landing pages promocionales que venden solas',
  },
  {
    before: 'Catálogo desordenado con fotos sueltas',
    after: 'Catálogo digital con carrito a WhatsApp',
  },
  {
    before: 'Atención manual caótica en DM',
    after: 'Atención centralizada y estructurada',
  },
];

export default function Diagnosis() {
  return (
    <section id="problema" className="relative overflow-hidden bg-[#0A0A0A] py-[clamp(64px,8vw,108px)] text-white">
      <div className="absolute inset-0 hero-bg opacity-80" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-8 inline-flex items-center gap-3 bg-[#111111] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white diagonal-cut"
          >
            <span className="h-2 w-2 bg-[#2B6CB0]" />
            Auditoría digital
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.08 }}
            className="max-w-xl font-display text-[clamp(3.4rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-wide"
          >
            <span className="font-light italic">Lo</span> barato se nota antes de leer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.16 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[#9CA3AF]"
          >
            Si el cliente ve desorden, duda. NUVRO convierte piezas sueltas en una ruta visual
            clara: descubre, entiende, decide y escribe.
          </motion.p>
          <div className="software-panel mt-10 grid grid-cols-3">
            {['orden', 'valor', 'accion'].map((item) => (
              <span
                key={item}
                className="border-r border-white/10 px-3 py-4 text-center text-[9px] font-black uppercase tracking-[0.18em] text-white/48 last:border-r-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="precision-card border-y border-white/10 bg-[#111111] backdrop-blur-sm">
          <div className="grid grid-cols-[0.9fr_1.1fr] border-b border-white/10 text-[10px] font-black uppercase tracking-[0.24em] text-[#9CA3AF]">
            <div className="px-4 py-4 md:px-6">Fuga actual</div>
            <div className="border-l border-white/10 px-4 py-4 text-[#2B6CB0] md:px-6">
              Estructura NUVRO
            </div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={item.before}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: index * 0.06 }}
              className="grid min-h-28 grid-cols-[0.9fr_1.1fr] border-b border-white/10 last:border-b-0"
            >
              <div className="grid gap-4 bg-[#111111] px-4 py-6 md:grid-cols-[46px_1fr] md:px-6">
                <span className="font-display text-3xl font-black leading-none text-white/12">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex items-start gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-[#6B7280]/25 text-[#6B7280]">
                  <X size={16} />
                </span>
                <p className="text-base font-semibold leading-snug text-[#9CA3AF] md:text-lg">{item.before}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l border-l-[#2B6CB0]/55 bg-[#2B6CB0]/10 px-4 py-6 md:px-6">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-[#2B6CB0]">
                  <Check size={16} strokeWidth={3} />
                </span>
                <p className="text-base font-extrabold leading-snug text-white md:text-lg">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
