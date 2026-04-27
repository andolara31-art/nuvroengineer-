import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { SplitText } from './ui/SplitText';

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
    highlighted: false,
    ref: 'PRC-01A',
    coords: '[X:105 Y:220]'
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
    highlighted: true,
    ref: 'PRC-02B',
    coords: '[X:310 Y:440]'
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
    highlighted: false,
    ref: 'PRC-03C',
    coords: '[X:780 Y:910]'
  }
];

export default function Pricing() {
  return (
    <section id="inversion" className="py-24 md:py-32 bg-brand-black relative border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            05. Inversión
          </h2>
          <SplitText 
            text="Precios claros. Sin sorpresas." 
            className="text-4xl md:text-5xl font-serif italic text-brand-white leading-tight mb-6 justify-center"
          />
          <p className="text-lg md:text-xl text-brand-platinum/60 leading-relaxed font-light mt-4">
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
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-8 border ${
                tier.highlighted 
                  ? 'bg-[#0a0a0a] border-brand-accent/50 shadow-[0_0_30px_rgba(0,102,255,0.1)]' 
                  : 'bg-[#050505] border-brand-accent/20 hover:border-brand-accent/30'
              } flex flex-col transition-all overflow-hidden rounded-[4px] group`}
            >
              {/* Guides */}
              <div className="absolute top-0 left-6 w-px h-full bg-brand-accent/10" />
              <div className="absolute top-20 left-0 w-full h-px bg-brand-accent/10" />

              <div className="absolute top-4 left-3 text-[10px] font-mono text-brand-white/80 group-hover:text-brand-accent transition-colors z-10">
                {tier.ref}
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-brand-platinum/40 z-10">
                {tier.coords}
              </div>

              {tier.highlighted && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-brand-accent/20 text-brand-accent border border-brand-accent/20 text-[10px] font-mono uppercase tracking-wider z-10">
                  RECOMENDADO
                </div>
              )}
              
              <div className="mb-4 mt-8 relative z-10">
                <h4 className="text-xl font-medium text-brand-white mb-2">{tier.name}</h4>
                <p className="text-brand-platinum/60 text-sm h-10">{tier.description}</p>
              </div>
              
              <div className="mb-8 relative z-10">
                <span className="text-brand-platinum/50 text-sm font-mono uppercase tracking-widest text-[10px] block mb-1">Inversión base</span>
                <div className="text-4xl font-serif text-brand-white">
                  ${tier.price} <span className="text-lg text-brand-platinum/40 font-sans">USD</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-brand-platinum/80 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contacto"
                className={`w-full py-4 text-sm font-mono uppercase tracking-widest text-center transition-colors relative z-10 ${
                  tier.highlighted
                    ? 'glow-button bg-brand-accent text-brand-white hover:bg-brand-accent/90'
                    : 'bg-white/5 text-brand-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Solicitar Deploy
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
