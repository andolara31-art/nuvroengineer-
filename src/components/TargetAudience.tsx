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
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-brand-black relative p-6 md:p-8 flex flex-col gap-6 justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,125,38,0.05)_0%,transparent_70%)]" />
              
              {[
                {
                  name: 'Carlos Méndez',
                  role: 'Propietario de Clínica Dental',
                  text: 'La diferencia en percepción fue inmediata. Pasamos de una web genérica a una plataforma que realmente transmite la calidad de nuestro servicio.',
                  delay: 0.2
                },
                {
                  name: 'Elena Rivas',
                  role: 'Consultora Estratégica',
                  text: 'Ahora mi marca se ve mucho más seria y clara online. El proceso de contacto es más ordenado y mis clientes lo notan desde el primer clic.',
                  delay: 0.4
                },
                {
                  name: 'Javier Soto',
                  role: 'Director en Logística Global',
                  text: 'NUVRO logró que nuestra presencia digital estuviera al nivel de nuestra operación física. El resultado es premium y genera confianza instantánea.',
                  delay: 0.6
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: testimonial.delay, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-accent/30 transition-colors group"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent/60" />
                    ))}
                  </div>
                  <p className="text-brand-platinum/80 text-sm md:text-base leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-brand-white font-medium text-sm">{testimonial.name}</span>
                      <span className="block text-brand-platinum/40 text-xs uppercase tracking-wider">{testimonial.role}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <Rocket size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
