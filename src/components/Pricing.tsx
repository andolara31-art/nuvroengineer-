import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    title: "Landing Page",
    subtitle: "Ideal para validar ideas, captar leads o vender un servicio específico.",
    price: "500",
    features: [
      "Diseño UX/UI enfocado en conversión",
      "Desarrollo optimizado y rápido",
      "Integración con formulario y CRM básico",
      "Optimización SEO On-Page",
      "Diseño 100% responsive"
    ]
  },
  {
    title: "Web para Negocios",
    subtitle: "Presencia digital completa para establecer autoridad y confianza.",
    price: "1,200",
    popular: true,
    features: [
      "Hasta 5 páginas internas estratégicas",
      "Diseño premium y animaciones fluidas",
      "Panel autogestionable (CMS)",
      "Integración con WhatsApp y analíticas",
      "Soporte técnico por 30 días"
    ]
  },
  {
    title: "Mini SaaS / MVP",
    subtitle: "Aplicaciones a medida para digitalizar procesos o lanzar tu producto.",
    price: "3,500",
    features: [
      "Arquitectura escalable y segura",
      "Autenticación de usuarios y base de datos",
      "Panel de administración personalizado",
      "Integración con APIs de terceros",
      "Código fuente completo y documentado"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black border-t border-white/5" id="inversion">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-xs font-mono tracking-[0.3em] text-[#0066FF] uppercase mb-10 block">
            05. INVERSIÓN
          </span>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">
            Precios claros. Sin sorpresas.
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Elige el nivel de desarrollo que tu negocio necesita para escalar al siguiente nivel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative bg-[#0A0A0A] border rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 ${
                tier.popular ? 'border-[#0066FF] ring-1 ring-[#0066FF]/20 shadow-2xl shadow-blue-500/5' : 'border-white/5 hover:border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0066FF] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  MÁS SOLICITADO
                </div>
              )}
              <h3 className="text-2xl font-medium text-white mb-4">{tier.title}</h3>
              <p className="text-sm text-white/50 font-light mb-8 leading-relaxed">
                {tier.subtitle}
              </p>
              
              <div className="mb-10">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">Desde</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-display font-medium text-white">${tier.price}</span>
                  <span className="text-sm font-mono text-white/40 tracking-widest uppercase">USD</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check size={16} className="text-[#0066FF] mt-1 shrink-0" />
                    <span className="text-sm text-white/60 font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all ${
                  tier.popular 
                    ? 'bg-[#0066FF] text-white hover:bg-[#0052cc]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Solicitar presupuesto <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
