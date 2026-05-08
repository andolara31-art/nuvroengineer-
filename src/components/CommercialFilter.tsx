import { motion } from 'motion/react';
import { Building2, Stethoscope, UtensilsCrossed, Dumbbell, ShoppingBag, Users, Lightbulb } from 'lucide-react';

const targets = [
  { icon: <Building2 size={16} />, name: "Servicios profesionales" },
  { icon: <Stethoscope size={16} />, name: "Clínicas y salud" },
  { icon: <UtensilsCrossed size={16} />, name: "Restaurantes y marcas locales" },
  { icon: <Dumbbell size={16} />, name: "Fitness y wellness" },
  { icon: <ShoppingBag size={16} />, name: "E-commerce" },
  { icon: <Users size={16} />, name: "Equipos comerciales" },
  { icon: <Lightbulb size={16} />, name: "Founders con producto digital" }
];

export default function CommercialFilter() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-[10px] font-mono tracking-widest text-[#0066FF] uppercase mb-6">
          05. FIT COMERCIAL
        </h2>
        
        <h3 className="text-3xl md:text-5xl lg:text-5xl font-display font-medium text-white leading-tight mb-8 max-w-4xl tracking-tight">
          Trabajamos mejor con negocios que ya tienen tracción, pero necesitan más estructura.
        </h3>
        
        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mb-16">
          No construimos por construir. Diseñamos sistemas para negocios que quieren operar, vender y decidir mejor.
        </p>

        {/* Target tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all text-sm group"
            >
              <div className="text-white/40 group-hover:text-[#0066FF] transition-colors">
                {target.icon}
              </div>
              <span className="font-light tracking-wide">{target.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
