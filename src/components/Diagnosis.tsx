import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

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
    before: 'Promociones perdidas en historias de 24h',
    after: 'Landing pages promocionales que venden solas',
  },
  {
    before: 'Catálogo desordenado con fotos sueltas',
    after: 'Catálogo digital con carrito a WhatsApp',
  },
  {
    before: 'Atención manual caótica en mensajes directos',
    after: 'Atención centralizada y estructurada',
  },
];

export default function Diagnosis() {
  return (
    <section id="problema" className="relative overflow-hidden bg-[#0A0A0A] py-[clamp(80px,10vw,130px)] text-white">
      <div className="absolute inset-0 hero-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="section-label mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
              Diagnóstico
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.08 }}
              className="section-heading"
            >
              Lo barato<br />
              <span className="text-white/28 font-light italic">se nota</span><br />
              antes de leer.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.16 }}
            className="max-w-lg text-lg leading-relaxed text-white/50 lg:self-end"
          >
            Si el cliente ve desorden, duda. NUVRO convierte piezas sueltas en una ruta visual
            clara: descubre, entiende, decide y escribe.
          </motion.p>
        </div>

        {/* Comparison table */}
        <div className="overflow-hidden border border-white/[0.07]">
          {/* Column headers */}
          <div className="grid grid-cols-2 border-b border-white/[0.07] bg-[#0D0D0D]">
            <div className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/35">
              Situación actual
            </div>
            <div className="border-l border-white/[0.07] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2B6CB0]">
              Estructura NUVRO
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={item.before}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.07 }}
              className="grid grid-cols-2 border-b border-white/[0.06] last:border-b-0"
            >
              <div className="flex items-start gap-4 px-6 py-6 bg-[#0A0A0A]">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-white/25">
                  <X size={14} />
                </div>
                <p className="text-sm leading-relaxed text-white/40 md:text-base">{item.before}</p>
              </div>
              <div className="flex items-start gap-4 border-l border-white/[0.07] bg-[#2B6CB0]/[0.06] px-6 py-6">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-[#2B6CB0]">
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <p className="text-sm font-medium leading-relaxed text-white/85 md:text-base">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
