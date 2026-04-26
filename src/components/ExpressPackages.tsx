import { motion } from 'motion/react';
import { Clock, Rocket, Zap, MessageCircle, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'BASIC LINK',
    icon: <Zap className="text-yellow-400" size={32} />,
    price: '10',
    for: 'Invitaciones simples, tarjetas QR y links rápidos de contacto.',
    delivery: '24h',
    cta: 'Pedir Basic',
    color: 'border-yellow-400/20',
    msg: "Hola NUVRO, quiero el paquete BASIC LINK."
  },
  {
    name: 'DIGITAL SHOP',
    icon: <Rocket className="text-brand-accent" size={32} />,
    price: '35',
    for: 'Menú QR completo, Catálogo Express o Link in Bio Profesional.',
    delivery: '48h',
    cta: 'Pedir Shop',
    color: 'border-brand-accent/50',
    popular: true,
    msg: "Hola NUVRO, quiero el paquete DIGITAL SHOP."
  },
  {
    name: 'FLASH PAGE',
    icon: <Clock className="text-emerald-400" size={32} />,
    price: '75',
    for: 'Páginas de promoción, Lanzamientos de producto o Eventos.',
    delivery: '72h',
    cta: 'Pedir Flash',
    color: 'border-emerald-400/20',
    msg: "Hola NUVRO, quiero el paquete FLASH PAGE."
  }
];

export default function ExpressPackages() {
  const whatsappUrl = (msg: string) => `https://wa.me/50671757171?text=${encodeURIComponent(msg)}`;

  return (
    <section id="paquetes" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4 block">
              TARIFAS EXPRESS
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-brand-white leading-tight uppercase tracking-tighter">
              Paquetes <span className="text-brand-accent italic">fijos.</span>
            </h2>
          </div>
          <p className="text-lg text-brand-platinum/60 max-w-sm font-light">
            Precios claros, tiempos rápidos. Sin sorpresas, solo resultados digitales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-10 rounded-[40px] relative flex flex-col border ${pkg.color} ${pkg.popular ? 'bg-brand-accent/[0.03]' : ''} hover:scale-[1.02] transition-transform duration-500`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-accent text-brand-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-[0_10px_20px_rgba(0,102,255,0.4)]">
                   Recomendado
                </div>
              )}

              <div className="mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                   {pkg.icon}
                 </div>
                 <h3 className="text-3xl font-display font-black text-brand-white mb-2 uppercase tracking-tight">{pkg.name}</h3>
                 <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-brand-platinum/60">$</span>
                    <span className="text-5xl font-display font-black text-brand-white tracking-tighter">{pkg.price}</span>
                    <span className="text-xs font-mono text-brand-platinum/30 uppercase ml-2 tracking-widest">/ Único</span>
                 </div>
              </div>

              <div className="mb-12 flex-1">
                 <p className="text-brand-platinum/80 text-lg leading-snug mb-8 font-light">
                   {pkg.for}
                 </p>
                 <div className="flex items-center gap-3 text-[10px] font-mono text-brand-accent uppercase tracking-widest bg-brand-accent/10 w-fit px-3 py-1 rounded-full">
                   <Clock size={12} />
                   <span>Entrega en {pkg.delivery}</span>
                 </div>
              </div>

              <a
                href={whatsappUrl(pkg.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black uppercase tracking-tighter transition-all duration-500 ${
                  pkg.popular 
                    ? 'bg-brand-accent text-brand-white hover:bg-brand-accent/90 shadow-[0_15px_30px_rgba(0,102,255,0.3)]'
                    : 'bg-white/5 text-brand-white hover:bg-brand-white hover:text-brand-black'
                }`}
              >
                 {pkg.cta}
                 <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 text-center">
           <p className="text-brand-platinum/60 text-sm mb-6">¿Necesitás un sistema a medida, CRM o web corporativa?</p>
           <a 
             href="#custom" 
             className="inline-flex items-center gap-2 text-brand-white font-bold uppercase tracking-tighter hover:text-brand-accent transition-colors"
           >
             Ver NUVRO CUSTOM
             <ArrowRight size={18} />
           </a>
        </div>
      </div>
    </section>
  );
}
