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
    <section id="problema" className="relative overflow-hidden bg-[#f2f6fb] py-24 text-[#07111f] md:py-32">
      <div className="absolute inset-0 blueprint-light opacity-80" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-8 inline-flex items-center gap-3 bg-[#07111f] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white diagonal-cut"
          >
            <span className="h-2 w-2 bg-[#0066FF]" />
            Auditoría digital
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.08 }}
            className="max-w-xl font-display text-[clamp(3.4rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-wide"
          >
            Lo barato se nota antes de leer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.16 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[#3e4b5d]"
          >
            Si el cliente ve desorden, duda. NUVRO convierte piezas sueltas en una ruta visual
            clara: descubre, entiende, decide y escribe.
          </motion.p>
        </div>

        <div className="border-y border-[#07111f]/12 bg-white/62 backdrop-blur-sm">
          <div className="grid grid-cols-[0.9fr_1.1fr] border-b border-[#07111f]/12 text-[10px] font-black uppercase tracking-[0.24em] text-[#667387]">
            <div className="px-4 py-4 md:px-6">Fuga actual</div>
            <div className="border-l border-[#07111f]/12 px-4 py-4 text-[#0066FF] md:px-6">
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
              className="grid min-h-28 grid-cols-[0.9fr_1.1fr] border-b border-[#07111f]/10 last:border-b-0"
            >
              <div className="flex items-start gap-4 px-4 py-6 md:px-6">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-red-500/25 text-red-600">
                  <X size={16} />
                </span>
                <p className="text-base font-semibold leading-snug text-[#526070] md:text-lg">{item.before}</p>
              </div>
              <div className="flex items-start gap-4 border-l border-[#07111f]/12 bg-[#0066FF]/[0.04] px-4 py-6 md:px-6">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center bg-[#0066FF] text-white">
                  <Check size={16} strokeWidth={3} />
                </span>
                <p className="text-base font-extrabold leading-snug text-[#07111f] md:text-lg">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
