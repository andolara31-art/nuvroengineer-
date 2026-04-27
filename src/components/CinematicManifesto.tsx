import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function CinematicManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const words = "Una web genérica le cuesta más a tu negocio que una premium.".split(" ");

  return (
    <section ref={containerRef} className="h-[200vh] bg-[#000000] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
        <h2 className="text-[56px] md:text-[120px] font-serif italic text-[#F5F5F5] leading-[1.1] tracking-tight max-w-7xl mx-auto text-center">
          {words.map((word, i) => {
             const start = i / words.length;
             const end = start + (1 / words.length);
             const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
             
             return (
               <motion.span 
                 key={i} 
                 style={{ opacity }}
                 className={`inline-block mr-[2vw] md:mr-[1vw] ${word === "más" || word === "más," ? "text-brand-accent font-bold" : ""}`}
               >
                 {word}
               </motion.span>
             );
          })}
        </h2>
      </div>
    </section>
  );
}
