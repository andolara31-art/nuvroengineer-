import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Elegí y Mandá',
    description: 'Elegís el producto en el catálogo y me mandás el contenido (fotos, precios, logo) por WhatsApp.'
  },
  {
    number: '02',
    title: 'NUVRO Crea',
    description: 'Diseñamos y programamos tu link en tiempo récord (24h - 72h) con un enfoque que sí vende.'
  },
  {
    number: '03',
    title: 'Link al Aire',
    description: 'Recibís un link único y un QR de alta resolución listo para disparar tus ventas.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-brand-platinum/30 uppercase mb-6 block">
              MÉTODO EXPRESS
            </span>
            <h3 className="text-4xl md:text-6xl font-display font-medium text-brand-white leading-tight uppercase tracking-tighter">
              Cómo comprar <br/> un <span className="text-brand-accent italic">link activo.</span>
            </h3>
          </div>
          <p className="text-lg text-brand-platinum/40 max-w-sm font-light">
            Dejamos atrás las llamadas eternas. Aquí venís por una solución rápida, profesional y comercial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-10 bg-white/[0.02] border border-white/5 rounded-[40px] group hover:bg-white/[0.05] transition-colors duration-500"
            >
              <div className="text-5xl font-display font-black text-brand-accent/10 mb-8 italic group-hover:text-brand-accent/20 transition-colors">
                {step.number}
              </div>
              <h4 className="text-2xl font-display font-bold text-brand-white mb-4 uppercase tracking-tight">{step.title}</h4>
              <p className="text-brand-platinum/40 leading-relaxed font-light text-base">
                {step.description}
              </p>
              
              {index < 2 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-brand-accent/20">
                  <ArrowRight size={32} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

