import { motion } from 'motion/react';
import { CreditCard, Smartphone, Landmark, Banknote, ShieldCheck, Wallet } from 'lucide-react';

const paymentMethods = [
  {
    id: 'datafono',
    title: 'Datáfono',
    description: 'Procesamiento seguro para todas las tarjetas de crédito y débito.',
    icon: <CreditCard size={24} className="text-brand-accent" />
  },
  {
    id: 'tasa-cero',
    title: 'Tasa Cero',
    description: 'Financiamiento a plazos sin intereses con tarjetas seleccionadas.',
    icon: <Wallet size={24} className="text-brand-accent" />
  },
  {
    id: 'sinpe',
    title: 'SINPE Móvil',
    description: 'Transferencias inmediatas desde tu dispositivo móvil.',
    icon: <Smartphone size={24} className="text-brand-accent" />
  },
  {
    id: 'transferencia',
    title: 'Transferencia Bancaria',
    description: 'Transacciones directas a nuestras cuentas corporativas.',
    icon: <Landmark size={24} className="text-brand-accent" />
  },
  {
    id: 'efectivo',
    title: 'Efectivo',
    description: 'Pagos tradicionales con su respectivo comprobante formal.',
    icon: <Banknote size={24} className="text-brand-accent" />
  }
];

export default function PaymentMethods() {
  return (
    <section className="py-24 md:py-32 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-5">
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              06. Proceso Comercial
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-brand-white leading-tight mb-6">
              Facilidades de pago pensadas para avanzar sin fricción.
            </h3>
            <p className="text-lg text-brand-platinum/60 leading-relaxed font-light mb-8">
              Hacemos que el aspecto comercial sea tan claro y estructurado como el desarrollo de tu proyecto. Ofrecemos opciones accesibles y profesionales para que puedas iniciar con total comodidad y seguridad.
            </p>
            
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <ShieldCheck className="text-brand-accent shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-brand-white font-medium mb-1">Acompañamiento comercial serio</h4>
                <p className="text-sm text-brand-platinum/60 leading-relaxed">
                  Garantizamos total transparencia en cada transacción, con facturación formal y claridad absoluta en las condiciones de tu inversión.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Methods */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl glass-card hover:border-white/20 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-colors relative z-10">
                    {method.icon}
                  </div>
                  <h4 className="text-lg font-medium text-brand-white mb-2 relative z-10">{method.title}</h4>
                  <p className="text-sm text-brand-platinum/50 leading-relaxed relative z-10">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
