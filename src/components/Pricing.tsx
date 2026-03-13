import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '49',
    description: 'Para equipos pequeños que necesitan organizar sus ventas.',
    features: [
      'Hasta 3 usuarios',
      'Gestión de contactos ilimitada',
      'Pipeline visual de ventas',
      'Soporte por email'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '99',
    description: 'Para equipos en crecimiento que buscan automatización.',
    features: [
      'Hasta 10 usuarios',
      'Automatización de correos',
      'Reportes avanzados',
      'Soporte prioritario 24/7'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '299',
    description: 'Para empresas con procesos comerciales complejos.',
    features: [
      'Usuarios ilimitados',
      'Integraciones a medida (API)',
      'Onboarding personalizado',
      'Account Manager dedicado'
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
            06. Inversión
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-6">
            Planes simples. Sin sorpresas.
          </h3>
          <p className="text-lg md:text-xl text-brand-platinum/60 leading-relaxed font-light">
            Elegí el plan que mejor se adapte al tamaño de tu equipo comercial.
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
                  ? 'bg-brand-dark border-brand-accent/50 shadow-2xl shadow-brand-accent/10' 
                  : 'glass-card hover:border-white/20'
              } flex flex-col transition-colors`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-brand-black text-xs font-bold uppercase tracking-wider rounded-full">
                  Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-medium text-brand-white mb-2">{tier.name}</h4>
                <p className="text-brand-platinum/60 text-sm h-10">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-brand-platinum/50 text-sm">Desde</span>
                <div className="text-4xl font-display font-bold text-brand-white mt-1">
                  {tier.price} <span className="text-lg text-brand-platinum/40 font-normal">USD/mes</span>
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
                    ? 'glow-button bg-brand-accent text-brand-black hover:bg-brand-accent/90'
                    : 'bg-white/5 text-brand-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Seleccionar plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
