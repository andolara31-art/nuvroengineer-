import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const rows = [
  { before: 'Menú en foto borrosa por WhatsApp',           after: 'Menú QR interactivo en mesa y celular'        },
  { before: 'Link BIO lleno de botones que no guían',      after: 'Link BIO guiado hacia reservas y valor'       },
  { before: 'Promociones perdidas en historias de 24h',    after: 'Landing pages promocionales que venden solas' },
  { before: 'Catálogo desordenado con fotos sueltas',      after: 'Catálogo digital con carrito a WhatsApp'      },
  { before: 'Atención manual caótica en mensajes directos', after: 'Atención centralizada y estructurada'         },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Diagnosis() {
  return (
    <section id="problema" className="bg-nuvro py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease }}
              className="label-sm mb-5 flex items-center gap-2.5"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-brand" />
              Diagnóstico
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.06, ease }}
              className="display-section text-1 uppercase"
            >
              Lo barato
              <br />
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>se nota</span>
              <br />
              antes de leer.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="body-lg lg:self-end lg:max-w-[46ch]"
          >
            Si el cliente ve desorden, duda. NUVRO convierte piezas sueltas en una ruta
            visual clara: descubre, entiende, decide y escribe.
          </motion.p>
        </div>

        {/* Comparison table */}
        <div className="overflow-hidden border border-[var(--border-sub)]">
          {/* Head */}
          <div className="grid grid-cols-2 bg-[var(--surface-2)]">
            <div className="px-6 py-4 label-sm">Situación actual</div>
            <div className="border-l border-[var(--border-sub)] px-6 py-4 label-sm text-brand">Estructura NUVRO</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
              className="grid grid-cols-2 border-t border-[var(--border-sub)]"
            >
              {/* Before */}
              <div className="flex items-start gap-4 bg-[var(--surface)] px-6 py-6">
                <span className="mt-0.5 text-3 shrink-0"><X size={14} /></span>
                <p className="text-[0.9375rem] leading-snug text-3">{row.before}</p>
              </div>
              {/* After */}
              <div className="flex items-start gap-4 border-l border-[var(--border-sub)] bg-[oklch(56%_0.18_235/0.05)] px-6 py-6">
                <span className="mt-0.5 shrink-0 text-brand"><Check size={14} strokeWidth={2.5} /></span>
                <p className="text-[0.9375rem] font-medium leading-snug text-1">{row.after}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
