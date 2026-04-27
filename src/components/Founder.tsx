import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Founder() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-brand-black relative border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-platinum/50 uppercase mb-4 block">
              07. Detrás de la firma
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-brand-white leading-tight mb-8">
              No somos una agencia "full-service". Somos ingenieros de producto.
            </h2>
            <p className="text-lg text-brand-platinum/60 font-light leading-relaxed mb-6">
              Las agencias tradicionales sobre-prometen y delegan el trabajo a juniors. Nosotros tomamos un número limitado de negocios cada año y construimos herramientas robustas, enfocadas en rentabilidad y rendimiento.
            </p>
            <p className="text-lg text-brand-platinum/60 font-light leading-relaxed">
              Trabajás directamente con quien escribe el código de tu negocio.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-center">
            {/* Signature SVG path drawing effect */}
            <div className="w-full max-w-sm mb-6">
              <svg viewBox="0 0 400 150" fill="none" className="w-full stroke-[#F5F5F5] stroke-[2] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <motion.path 
                  d="M40 90 C 70 50, 60 10, 80 40 S 90 120, 110 80 C 130 50, 140 70, 150 90 S 140 130, 170 100 C 200 60, 220 50, 240 80 S 230 140, 260 100 C 290 60, 310 70, 330 90" 
                  style={{ pathLength }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-mono tracking-widest uppercase text-brand-platinum/40">
                Founder · Engineer · Costa Rica
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
