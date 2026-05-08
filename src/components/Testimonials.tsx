import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Director, Clínica Dental Mendoza",
    content: "Pasamos de recibir consultas por WhatsApp desordenadas a tener un sistema de reservas automático. La web no solo se ve premium, sino que nos ahorra horas de trabajo cada semana.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#0066FF] uppercase mb-10 block">
            TESTIMONIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
            Resultados que hablan <br/> por sí solos.
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            No vendemos diseño, vendemos sistemas que generan confianza y ventas. Esto es lo que dicen quienes ya dieron el salto.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star size={120} className="text-[#0066FF]" />
              </div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#0066FF] fill-[#0066FF]" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white/80 font-light italic leading-relaxed mb-10">
                  "{t.content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-white font-medium flex items-center gap-2">
                      {t.name}
                      <div className="w-4 h-4 rounded-full bg-[#0066FF] flex items-center justify-center">
                        <CheckIcon />
                      </div>
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-widest font-mono">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2 h-2 text-white">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
