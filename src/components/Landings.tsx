import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Landings() {
  return (
    <section id="landings" className="bg-nuvro py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Header — left-aligned, not centered */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="label-sm mb-5 flex items-center gap-2.5"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-brand" />
              Landing Pages
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.06, ease }}
              className="display-section text-1 uppercase max-w-[16ch]"
            >
              Una promo en redes{' '}
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>dura horas.</span>
              <br />
              Una landing{' '}
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>vende todos los días.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="flex flex-col gap-5 lg:self-end"
          >
            <p className="body-lg max-w-[38ch]">
              Creamos landing pages para explicar una oferta, eliminar dudas y llevar
              al cliente a escribir, reservar o comprar.
            </p>
            <a
              href="https://wa.me/50671757171?text=Hola NUVRO, quiero una landing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-white self-start"
            >
              Quiero una landing <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Before / After */}
        <div className="grid gap-4 md:grid-cols-2">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="card p-8 flex flex-col items-center text-center"
          >
            <p className="label-sm mb-8 flex items-center gap-2.5">
              <span className="h-[5px] w-[5px] rounded-full bg-[var(--border)]" />
              Antes — Instagram Story
            </p>

            {/* Story mockup */}
            <div className="mx-auto flex h-[260px] w-[148px] flex-col overflow-hidden border border-[var(--border-sub)] bg-[var(--surface-2)]">
              <div className="flex h-9 items-center gap-2 border-b border-[var(--border-sub)] px-3">
                <div className="h-5 w-5 rounded-full bg-[var(--border)]" />
                <div className="h-1.5 w-12 rounded bg-[var(--border-sub)]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-3 p-4 text-center">
                <p className="label-sm" style={{ color: 'var(--text-3)' }}>OFERTA LIMITADA</p>
                <div className="h-1.5 w-20 rounded bg-[var(--border-sub)]" />
                <div className="h-1.5 w-14 rounded bg-[var(--border-sub)]" />
                <div className="mt-3 w-full bg-[var(--border-sub)] px-3 py-2 label-sm" style={{ color: 'var(--text-3)' }}>
                  LINK EN BIO
                </div>
              </div>
              <div className="border-t border-[var(--border-sub)] py-2 text-center label-sm" style={{ color: 'var(--text-3)' }}>
                EXPIRA EN 24H
              </div>
            </div>

            <p className="mt-7 text-sm leading-relaxed text-3 max-w-[30ch]">
              Publicación efímera. Sin CTA claro. El mensaje se pierde en 24 horas.
            </p>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative flex flex-col items-center p-8 text-center overflow-hidden"
            style={{
              background: 'var(--surface)',
              border: '1px solid oklch(56% 0.18 235 / 0.28)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[oklch(56%_0.18_235/0.05)] to-transparent pointer-events-none" />

            <p className="relative label-sm mb-8 flex items-center gap-2.5">
              <span className="h-[5px] w-[5px] rounded-full bg-brand" />
              Estructura NUVRO
            </p>

            {/* Landing mockup */}
            <div
              className="relative mx-auto flex h-[280px] w-[160px] flex-col overflow-hidden shadow-[0_20px_60px_oklch(56%_0.18_235/0.15)]"
              style={{ border: '1px solid oklch(56% 0.18 235 / 0.3)', background: 'var(--surface-2)' }}
            >
              <div className="h-8 flex items-center border-b border-[var(--border-sub)] px-3 bg-[var(--surface)]">
                <div className="h-1.5 w-10 rounded bg-[var(--border)]" />
              </div>
              <div className="flex flex-1 flex-col overflow-hidden">
                <div className="border-b border-[var(--border-sub)] p-4 text-center">
                  <div className="mx-auto mb-3 h-2 w-16 rounded bg-[var(--text-1)]" />
                  <div className="mb-1.5 h-1.5 w-full rounded bg-[var(--border)]" />
                  <div className="mx-auto mb-4 h-1.5 w-3/4 rounded bg-[var(--border)]" />
                  <div className="w-full bg-[var(--text-1)] py-2">
                    <div className="mx-auto h-1.5 w-12 rounded bg-[var(--bg)]" />
                  </div>
                </div>
                <div className="space-y-2.5 p-4">
                  {[20, 16, 22].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 shrink-0 rounded-sm bg-brand opacity-60" />
                      <div className="h-1.5 rounded bg-[var(--border-sub)]" style={{ width: `${w * 3}px` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="relative mt-7 text-sm font-medium leading-relaxed text-1 max-w-[30ch]">
              Beneficios, prueba social y CTA visible. Disponible siempre.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
