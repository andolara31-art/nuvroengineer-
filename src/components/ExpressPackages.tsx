import { motion } from 'motion/react';
import { Clock, Rocket, Zap, MessageCircle } from 'lucide-react';

const packages = [
  {
    name: 'EXPRESS',
    icon: <Zap className="text-[#2B6CB0]" />,
    price: '$10–$50',
    for: 'QR, invitación, tarjeta digital, Link Bio básico, menú corto o promo simple.',
    delivery: '24–72h según contenido.',
    cta: 'Pedir Express',
    color: 'border-[#2B6CB0]/20'
  },
  {
    name: 'PRO',
    icon: <Rocket className="text-brand-accent" />,
    price: '$75–$150',
    for: 'Menú completo, catálogo, Link Bio avanzado, mini portfolio, página de evento o promoción.',
    delivery: '3–5 días.',
    cta: 'Quiero Pro',
    color: 'border-brand-accent/50',
    popular: true
  },
  {
    name: 'LAUNCH',
    icon: <Clock className="text-white/70" />,
    price: '$150–$250+',
    for: 'Página de promo + kit visual + copy + CTA + QR + campaña de lanzamiento.',
    delivery: '5–7 días.',
    cta: 'Armar lanzamiento',
    color: 'border-white/15'
  }
];

export default function ExpressPackages() {
  const whatsappUrl = (msg: string) => `https://wa.me/506XXXXXXXX?text=${encodeURIComponent(msg)}`;

  return (
    <section id="paquetes" className="py-24 bg-brand-dark/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-white mb-6">
            Paquetes rápidos
          </h2>
          <p className="text-brand-platinum/60 max-w-2xl mx-auto font-light">
            No todo negocio necesita una web grande. A veces necesita un link bien hecho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 rounded-3xl relative flex flex-col border ${pkg.color} ${pkg.popular ? 'bg-brand-accent/[0.03]' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-brand-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(0,102,255,0.5)]">
                  Más pedido
                </div>
              )}

              <div className="mb-8">
                 <div className="mb-4">{pkg.icon}</div>
                 <h3 className="text-2xl font-display font-bold text-brand-white mb-2">{pkg.name}</h3>
                 <div className="text-4xl font-display font-bold text-brand-white lowercase">
                   {pkg.price}
                 </div>
              </div>

              <div className="mb-10 flex-1">
                 <p className="text-brand-platinum/60 text-sm leading-relaxed mb-6">
                   <span className="text-brand-white font-medium block mb-2">Ideal para:</span>
                   {pkg.for}
                 </p>
                 <div className="flex items-center gap-2 text-xs text-brand-platinum/40">
                   <Clock size={14} />
                   <span>Entrega: {pkg.delivery}</span>
                 </div>
              </div>

              <a
                href={whatsappUrl(`Hola NUVRO, quiero el paquete ${pkg.name} para mi negocio.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-brand-accent text-brand-white hover:bg-brand-accent/90 shadow-[0_10px_20px_rgba(0,102,255,0.2)]'
                    : 'bg-[#111111]/5 text-brand-white hover:bg-[#111111]/10'
                }`}
              >
                {pkg.cta}
                <MessageCircle size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 text-brand-platinum/40 text-sm">
           ¿No sabés cuál elegir? <a href="https://wa.me/506XXXXXXXX?text=Hola NUVRO, no sé cuál paquete elegir." className="text-brand-accent font-medium underline">Hablemos por WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
