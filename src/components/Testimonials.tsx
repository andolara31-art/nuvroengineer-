import { motion } from 'motion/react';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    role: 'Director, Clínica Dental Mendoza',
    content: 'Pasamos de recibir consultas por WhatsApp desordenadas a tener un sistema de reservas automático. La web no solo se ve premium, sino que nos ahorra horas de trabajo cada semana.',
    image: 'https://picsum.photos/seed/carlos/150/150',
    verified: true,
  },
  {
    id: 2,
    name: 'Laura Gómez',
    role: 'Consultora Financiera',
    content: 'Nuvro Engineer entendió exactamente lo que necesitaba. No quería una plantilla más, quería autoridad. Desde que lanzamos la nueva web, el perfil de clientes que me contacta es mucho más calificado.',
    image: 'https://picsum.photos/seed/laura/150/150',
    verified: true,
  },
  {
    id: 3,
    name: 'Andrés Silva',
    role: 'Fundador, Silva & Co. Abogados',
    content: 'El proceso fue directo y sin tecnicismos innecesarios. En menos de 3 semanas teníamos una plataforma que refleja la seriedad de nuestra firma. La inversión se recuperó en el primer mes.',
    image: 'https://picsum.photos/seed/andres/150/150',
    verified: true,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            Testimonios
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-6">
            Resultados que hablan por sí solos.
          </h3>
          <p className="text-lg text-brand-platinum/60 font-light">
            No vendemos diseño, vendemos sistemas que generan confianza y ventas. Esto es lo que dicen quienes ya dieron el salto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-3xl border border-white/5 relative group hover:border-brand-blue/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <p className="text-brand-platinum/80 leading-relaxed font-light mb-8 text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-brand-white font-medium">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle size={14} className="text-brand-blue" />
                    )}
                  </div>
                  <p className="text-sm text-brand-platinum/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
