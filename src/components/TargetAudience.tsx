import { motion } from 'motion/react';
import { Building2, UserCircle, Briefcase, Rocket } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              04. A quién ayudamos
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-8">
              Negocios que necesitan subir de nivel.
            </h3>
            <p className="text-xl text-brand-platinum/60 leading-relaxed font-light mb-12">
              Trabajamos con proyectos que tienen un buen servicio o producto, pero su imagen digital actual no refleja su verdadera calidad.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Building2 size={20} />, text: 'Negocios locales en crecimiento' },
                { icon: <UserCircle size={20} />, text: 'Marcas personales y consultores' },
                { icon: <Briefcase size={20} />, text: 'Empresas de servicios B2B/B2C' },
                { icon: <Rocket size={20} />, text: 'Emprendimientos que buscan escalar' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-platinum/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-brand-black relative">
              {/* Abstract visual representation of growth/leveling up */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 gap-4">
                <motion.div 
                  initial={{ height: '20%' }}
                  whileInView={{ height: '40%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full bg-white/5 rounded-t-xl border border-white/10 border-b-0"
                />
                <motion.div 
                  initial={{ height: '30%' }}
                  whileInView={{ height: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="w-full bg-white/10 rounded-t-xl border border-white/10 border-b-0"
                />
                <motion.div 
                  initial={{ height: '40%' }}
                  whileInView={{ height: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="w-full bg-brand-accent/20 rounded-t-xl border border-brand-accent/30 border-b-0 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/40 to-transparent" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
