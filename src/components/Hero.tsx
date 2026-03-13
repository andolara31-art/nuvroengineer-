import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05)_0%,rgba(10,10,10,1)_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-8">
            <span className="text-xs font-medium tracking-wide uppercase text-brand-platinum/80">CRM B2B PARA EQUIPOS COMERCIALES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] tracking-tight text-brand-white mb-6 text-balance uppercase">
            Gestión de prospectos que <span className="text-brand-accent italic">cierra ventas</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-platinum/60 max-w-xl mb-10 leading-relaxed font-light">
            CRM para organizar prospectos, automatizar seguimientos y gestionar oportunidades comerciales con más claridad, control y eficiencia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contacto"
              className="glow-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-brand-black font-semibold hover:bg-brand-accent/90 transition-all group"
            >
              Agendar llamada
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
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto lg:ml-auto rounded-3xl overflow-hidden border border-white/10 bg-brand-dark group shadow-2xl shadow-brand-accent/5"
        >
          {/* Hero Image */}
          <img 
            src="https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/hf_20260309_163429_58dc34e6-4fba-485d-85b1-1b892b1b4753.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaGZfMjAyNjAzMDlfMTYzNDI5XzU4ZGMzNGU2LTRmYmEtNDg1ZC04NWIxLTFiODkyYjFiNDc1My5qcGVnIiwiaWF0IjoxNzczMTU2Nzk0LCJleHAiOjE4MDQ2OTI3OTR9.2r8RS2hxsxoZvOh0773pyT8KWskZ5eS863Ujwqhf64g" 
            alt="LEADPILOT CRM Dashboard" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          
          {/* Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
          <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
