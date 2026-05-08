import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function BehindFirm() {
  return (
    <section className="py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square md:aspect-[4/5] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5"
          >
            {/* Replace with actual image of Anderson if provided in future, using placeholder with HUD effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,255,0.15)_0%,transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/10 font-mono text-sm tracking-[0.5em] uppercase rotate-90">
                PORTRAIT_MISSING_HUD_v07
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <div className="bg-[#0066FF] px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active Engineer</span>
              </div>
            </div>
          </motion.div>

          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#0066FF] uppercase mb-8 block">
              07. DETRÁS DE LA FIRMA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium text-white tracking-tight mb-10 leading-tight">
              Anderson Agüero Lara
            </h2>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                Soy ingeniero de software y diseñador enfocado en resultados. Fundé Nuvro Engineer al ver cómo negocios excelentes perdían clientes por culpa de webs genéricas y procesos manuales.
              </p>
              <p className="text-lg text-white/50 font-light leading-relaxed">
                Mi objetivo es traducir tu experiencia y calidad en un sistema digital que comunique autoridad, genere confianza y cierre más ventas de forma automática.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
                <span className="text-xs font-mono text-white/60 tracking-widest uppercase flex items-center gap-2">
                  <MapPin size={14} /> Basado en Costa Rica
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
