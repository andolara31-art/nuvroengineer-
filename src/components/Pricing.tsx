import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Landing Page',
    price: '500',
    description: 'Ideal para validar ideas, captar leads o vender un servicio específico.',
    features: [
      'Diseño UX/UI enfocado en conversión',
      'Desarrollo optimizado y rápido',
      'Integración con formulario y CRM básico',
      'Optimización SEO On-Page',
      'Diseño 100% responsive'
    ],
    highlighted: false
  },
  {
    name: 'Web para Negocios',
    price: '1,200',
    description: 'Presencia digital completa para establecer autoridad y confianza.',
    features: [
      'Hasta 5 páginas internas estratégicas',
      'Diseño premium y animaciones fluidas',
      'Panel autogestionable (CMS)',
      'Integración con WhatsApp y analíticas',
      'Soporte técnico por 30 días'
    ],
    highlighted: true
  },
  {
    name: 'Mini SaaS / MVP',
    price: '3,500',
    description: 'Aplicaciones a medida para digitalizar procesos o lanzar tu producto.',
    features: [
      'Arquitectura escalable y segura',
      'Autenticación de usuarios y base de datos',
      'Panel de administración personalizado',
      'Integración con APIs de terceros',
      'Código fuente completo y documentado'
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="inversion" className="py-24 md:py-32 bg-brand-dark/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            05. Inversión
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-6">
            Precios claros. Sin sorpresas.
          </h3>
          <p className="text-lg md:text-xl text-brand-platinum/60 leading-relaxed font-light">
            Elige el nivel de desarrollo que tu negocio necesita para escalar al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-8 rounded-3xl border ${
                tier.highlighted 
                  ? 'bg-brand-dark border-brand-accent/50 shadow-2xl shadow-brand-blue/10' 
                  : 'glass-card hover:border-white/20'
              } flex flex-col transition-colors`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-brand-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Más Solicitado
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-medium text-brand-white mb-2">{tier.name}</h4>
                <p className="text-brand-platinum/60 text-sm h-10">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-brand-platinum/50 text-sm">Desde</span>
                <div className="text-4xl font-display font-bold text-brand-white mt-1">
                  ${tier.price} <span className="text-lg text-brand-platinum/40 font-normal">USD</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-brand-platinum/80 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contacto"
                className={`w-full py-4 rounded-xl font-semibold text-center transition-colors ${
                  tier.highlighted
                    ? 'glow-button bg-brand-accent text-brand-white hover:bg-brand-accent/90'
                    : 'bg-white/5 text-brand-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Solicitar presupuesto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
