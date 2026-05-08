import { motion } from 'motion/react';

export default function WhyNuvro() {
  const steps = [
    {
      title: "Estrategia primero",
      desc: "Antes de diseñar, entendemos tu negocio, tu cliente y tu objetivo de ventas."
    },
    {
      title: "Diseño premium",
      desc: "Estética limpia y profesional que posiciona tu marca por encima de la competencia."
    },
    {
      title: "Conversión real",
      desc: "Estructuras probadas para guiar al usuario hacia la acción que necesitas."
    }
  ];

  return (
    <section className="py-32 bg-black flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#0066FF] uppercase mb-10 block">
            02. POR QUÉ NUVRO
          </span>
          <h2 className="text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight mb-12">
            No vendemos solo diseño. Vendemos <br/> 
            <span className="font-serif italic text-[#0066FF] font-medium lg:text-7xl underline decoration-[#0066FF]/30 underline-offset-8">claridad comercial.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            Tu sitio web no debe ser un folleto digital. Debe ser tu mejor vendedor, trabajando 24/7 para generar confianza y cerrar clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 pb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-px w-full bg-white/10 mb-12" />
              <h3 className="text-2xl font-medium text-white mb-6 group-hover:text-[#0066FF] transition-colors">
                {step.title}
              </h3>
              <p className="text-white/50 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
