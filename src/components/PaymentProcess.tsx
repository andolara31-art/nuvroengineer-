import { CreditCard, Wallet, Smartphone, Landmark, Banknote, ShieldCheck } from 'lucide-react';

export default function PaymentProcess() {
  const methods = [
    {
      icon: <CreditCard size={20} />,
      title: "Datáfono",
      desc: "Procesamiento seguro para todas las tarjetas de crédito y débito."
    },
    {
      icon: <Wallet size={20} />,
      title: "Tasa Cero",
      desc: "Financiamiento a plazos sin intereses con tarjetas seleccionadas."
    },
    {
      icon: <Smartphone size={20} />,
      title: "SINPE Móvil",
      desc: "Transferencias inmediatas desde tu dispositivo móvil."
    },
    {
      icon: <Landmark size={20} />,
      title: "Transferencia Bancaria",
      desc: "Transacciones directas a nuestras cuentas corporativas."
    },
    {
      icon: <Banknote size={20} />,
      title: "Efectivo",
      desc: "Pagos tradicionales con su respectivo comprobante formal."
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#0066FF] uppercase mb-8 block">
              06. PROCESO COMERCIAL
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8">
              Facilidades de pago pensadas para avanzar sin fricción.
            </h2>
            <p className="text-lg text-white/50 font-light max-w-xl leading-relaxed mb-12">
              Hacemos que el aspecto comercial sea tan claro y estructurado como el desarrollo de tu proyecto. Ofrecemos opciones accesibles y profesionales para que puedas iniciar con total comodidad y seguridad.
            </p>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={120} className="text-[#0066FF]" />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-[#0066FF]/10 rounded-full flex items-center justify-center mb-6 border border-[#0066FF]/20">
                  <ShieldCheck className="text-[#0066FF]" size={20} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Acompañamiento comercial serio</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed max-w-md">
                  Garantizamos total transparencia en cada transacción, con facturación formal y claridad absoluta en las condiciones de tu inversión.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {methods.map((method, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex items-center gap-6 group hover:border-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#111111]/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/20 transition-all">
                  <div className="text-white group-hover:text-[#0066FF] transition-colors">
                    {method.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">{method.title}</h4>
                  <p className="text-sm text-white/40 font-light leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
