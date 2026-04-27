import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const whatsappUrl = `https://wa.me/50671757171?text=${encodeURIComponent("Hola NUVRO, quisiera agendar una llamada.")}`;

  const terminalLines = [
    "> initializing nuvro.engine...",
    "> client.type: business_serious",
    "> rendering authority..."
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalLines.length) {
        currentLine++;
        setVisibleLines(currentLine);
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-12 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,102,255,0.08)_0%,rgba(10,10,10,1)_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col space-y-4 mb-8 font-mono text-brand-platinum/50 text-sm md:text-base min-h-[100px]">
             {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index < visibleLines ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {line}
                </motion.div>
             ))}
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visibleLines >= terminalLines.length ? 1 : 0, y: visibleLines >= terminalLines.length ? 0 : 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-sans font-medium leading-[1.05] tracking-tight text-brand-white mb-12"
          >
            ✓ Tu negocio listo para vender.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visibleLines >= terminalLines.length ? 1 : 0, y: visibleLines >= terminalLines.length ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-brand-white font-medium hover:scale-105 transition-all w-full sm:w-auto"
            >
              Agendar llamada
            </a>
            <a
              href="#proyectos"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-brand-accent text-brand-white font-medium hover:bg-brand-accent/10 transition-all w-full sm:w-auto"
            >
              Ver proyectos
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:mt-32 max-w-sm lg:ml-auto w-full"
        >
           <div className="relative w-full aspect-[4/3]">
             <div className="absolute inset-0 bg-brand-accent/10 blur-[80px] rounded-full" />
             <div className="relative glass-card border border-brand-accent/20 rounded-lg p-2 md:p-4 shadow-2xl h-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a]">
               {/* Macbook mock frame */}
               <div className="flex justify-center mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20 mx-auto" />
               </div>
               <div className="flex-1 bg-[#050505] rounded-md border border-white/5 p-4 flex flex-col justify-end relative overflow-hidden">
                 <div className="absolute inset-0 pattern-grid opacity-10" />
                 <div className="w-full h-1/2 bg-gradient-to-t from-brand-accent/20 to-transparent absolute bottom-0 left-0" />
                 <div className="w-1/2 h-1 bg-brand-accent rounded shadow-[0_0_10px_rgba(0,102,255,0.8)] mb-2 relative z-10" />
                 <div className="w-1/3 h-1 bg-white/20 rounded relative z-10" />
               </div>
               <div className="h-2 w-10 bg-white/10 mx-auto mt-2 rounded-[1px]" />
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

