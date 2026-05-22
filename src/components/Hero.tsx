import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ticker = [
  'DISEÑO PREMIUM', 'MENÚ QR', 'LANDING PAGES',
  'LINK BIO', 'WHATSAPP BUSINESS', 'CRM', 'IA APLICADA', 'CATÁLOGO DIGITAL',
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-nuvro">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/nuvro/hero-engineering-that-sells.png"
          alt=""
          className="h-full w-full object-cover object-[58%_center] opacity-40"
          fetchPriority="high"
        />
        {/* Gradient veils */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[oklch(9.5%_0.008_235/0.7)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[oklch(9.5%_0.008_235/0.4)]" />
      </div>

      {/* Atelier grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Noise */}
      <div className="noise absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-6 pt-24 md:px-10">
        <div className="flex flex-1 flex-col justify-end pb-0">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[5px] w-[5px] rounded-full bg-brand" />
            <span className="label-sm" style={{ color: 'var(--brand)' }}>
              Engineering that sells
            </span>
          </motion.div>

          {/* Main headline — BIG */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="display-hero text-1 uppercase"
            >
              Engineering
              <br />
              <span style={{ color: 'var(--text-3)', fontWeight: 300 }}>that&nbsp;</span>
              Sells.
            </motion.h1>
          </div>

          {/* Sub + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-10 flex flex-col gap-8 border-t border-[var(--border-sub)] pt-8 md:flex-row md:items-center md:justify-between"
          >
            <p className="body-lg max-w-[42ch]">
              Diseño premium, activos comerciales y sistemas conectados
              para negocios que quieren verse y operar a otro nivel.
            </p>

            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn btn-white">
                Transformar mi marca <ArrowRight size={15} />
              </a>
              <a href="#express" className="btn btn-ghost">
                Ver servicios
              </a>
            </div>
          </motion.div>

          {/* Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 overflow-hidden border-t border-[var(--border-sub)] bg-[var(--text-1)] py-3.5"
          >
            <div className="marquee-wrap flex w-max gap-8 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.35rem', letterSpacing: '0.04em', color: 'var(--bg)' }}
            >
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i} className="flex items-center gap-8">
                  {t}
                  <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
