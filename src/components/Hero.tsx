import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(26,26,26,0.5)_0%,rgba(5,5,5,1)_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase text-brand-platinum/80">Disponible para proyectos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] tracking-tight text-brand-white mb-6 text-balance">
            Webs premium y mini SaaS para negocios que necesitan <span className="text-brand-platinum/40 italic">verse mejor</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-platinum/60 max-w-xl mb-10 leading-relaxed font-light">
            Construimos páginas web, MVPs y sistemas digitales claros, modernos y útiles para negocios que necesitan una presencia online más profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-brand-platinum transition-all group"
            >
              Trabajar conmigo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-brand-white font-medium hover:bg-white/5 transition-all"
            >
              Ver proyectos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto lg:ml-auto rounded-3xl overflow-hidden border border-white/10 bg-brand-dark"
        >
          {/* Placeholder for Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/20 font-mono text-sm">
            [ Espacio para imagen principal ]
          </div>
          {/* Optional: Add a subtle gradient overlay to make it look premium even when empty */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
