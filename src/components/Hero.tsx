import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const marqueeItems = [
  'DISEÑO PREMIUM',
  'WEBS QUE VENDEN',
  'MENÚ QR',
  'LINK BIO',
  'WHATSAPP BUSINESS',
  'CRM Y DASHBOARDS',
  'IA APLICADA',
  'LANDING PAGES',
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/nuvro/hero-engineering-that-sells.png"
          alt=""
          className="h-full w-full object-cover object-[56%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/10" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 atelier-field opacity-40" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 pt-24 md:px-10 lg:px-12">
        <div className="flex flex-1 flex-col justify-end pb-0">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-7 section-label"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
            Nuvro Engineer — Engineering that sells
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-black uppercase leading-[0.82] tracking-wide text-white"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 14rem)' }}
          >
            Engineering<br />
            <span className="text-white/25">that</span> Sells.
          </motion.h1>

          {/* Description + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-white/55 md:text-lg">
              Diseño premium, activos comerciales y sistemas conectados para negocios
              que quieren verse y operar a otro nivel.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn-primary">
                Transformar mi marca
                <ArrowRight size={16} />
              </a>
              <a href="#express" className="btn-outline">
                Ver servicios
              </a>
            </div>
          </motion.div>

          {/* Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 overflow-hidden border-t border-white/8 bg-white py-3"
          >
            <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap font-display text-2xl font-black uppercase leading-none tracking-wide text-[#0A0A0A]">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-8">
                  {item}
                  <span className="h-2 w-2 bg-[#2B6CB0] rounded-full" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
