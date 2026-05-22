import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Landings() {
  return (
    <section id="landings" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-[clamp(80px,10vw,130px)] text-white">
      <div className="absolute top-0 right-[10%] h-[500px] w-[500px] rounded-full bg-[#2B6CB0]/[0.04] blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6 justify-center"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
            Landing Pages
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl font-display text-[clamp(2.6rem,6vw,6rem)] font-black uppercase leading-[0.86] tracking-wide text-white"
          >
            Una promo en redes dura horas.{' '}
            <span className="text-white/28 font-light italic">Una landing puede vender todos los días.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/45 md:text-lg"
          >
            Creamos landing pages para explicar una oferta, eliminar dudas y llevar al cliente
            a escribir, reservar o comprar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
            className="mt-8"
          >
            <a
              href="https://wa.me/50671757171?text=Hola NUVRO, quiero una landing"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex"
            >
              Quiero una landing
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Before / After */}
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="nuvro-card flex flex-col items-center p-8 text-center"
          >
            <span className="section-label mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              Antes — Instagram
            </span>

            {/* Story mockup */}
            <div className="relative mx-auto flex h-[260px] w-[150px] flex-col overflow-hidden border border-white/[0.08] bg-[#0A0A0A]">
              <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] px-3">
                <div className="h-5 w-5 rounded-full bg-white/10" />
                <div className="h-1.5 w-12 rounded bg-white/10" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-3 p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white/20">OFERTA LIMITADA</div>
                <div className="h-1.5 w-20 rounded bg-white/[0.06]" />
                <div className="h-1.5 w-14 rounded bg-white/[0.06]" />
                <div className="mt-3 w-full bg-white/[0.06] px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-white/20">
                  LINK EN BIO
                </div>
              </div>
              <div className="border-t border-white/[0.05] py-2 text-center text-[9px] font-bold uppercase tracking-wider text-white/20">
                EXPIRA EN 24H
              </div>
            </div>

            <p className="mt-6 text-sm text-white/35">
              Publicación perdida. Sin CTA claro. Mensaje disperso.
            </p>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="nuvro-card relative flex flex-col items-center border-[#2B6CB0]/25 bg-[#2B6CB0]/[0.04] p-8 text-center"
            style={{ borderColor: 'rgba(43,108,176,0.25)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2B6CB0]/[0.05] to-transparent pointer-events-none" />
            <span className="section-label relative z-10 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
              Estructura NUVRO
            </span>

            {/* Landing mockup */}
            <div className="relative z-10 mx-auto flex h-[260px] w-[160px] flex-col overflow-hidden border border-[#2B6CB0]/25 bg-[#0A0A0A] shadow-xl shadow-[#2B6CB0]/10">
              <div className="h-8 w-full border-b border-white/[0.05] bg-[#111111] px-3 flex items-center">
                <div className="h-1.5 w-10 rounded bg-white/[0.08]" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="border-b border-white/[0.05] p-4 text-center">
                  <div className="mx-auto mb-3 h-2 w-14 rounded bg-white" />
                  <div className="mb-1.5 h-2 w-full rounded bg-white/[0.08]" />
                  <div className="mb-4 mx-auto h-2 w-3/4 rounded bg-white/[0.08]" />
                  <div className="w-full bg-white py-2 text-center">
                    <div className="mx-auto h-1.5 w-12 rounded bg-[#0A0A0A]" />
                  </div>
                </div>
                <div className="space-y-2.5 p-4">
                  {[18, 14, 20].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 shrink-0 rounded-sm border border-white/20 bg-white/[0.06]" />
                      <div className={`h-1.5 rounded bg-white/[0.06]`} style={{ width: `${w * 4}px` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="relative z-10 mt-6 text-sm font-medium text-white/70">
              Beneficios, prueba visual y CTA siempre disponible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
