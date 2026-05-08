import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Diagnóstico inicial",
    desc: "Mapeamos tus procesos, identificamos cuellos de botella y definimos qué debe lograr el sistema antes de tirar cualquier línea de código."
  },
  {
    number: "02",
    phase: "Architecture",
    title: "Wireframes lógicos",
    desc: "Estructuramos cómo fluirá la información, cómo se verán los datos y cómo debe conectarse la tecnología para evitar fallas a futuro."
  },
  {
    number: "03",
    phase: "UI/UX Experience",
    title: "Dirección visual",
    desc: "Vestimos la estructura con diseño premium. Nada genérico. Todo adaptado a la posición de mercado de tu marca."
  },
  {
    number: "04",
    phase: "Build",
    title: "Ingeniería limpia",
    desc: "Pasamos a entorno de desarrollo, programando con lenguajes robustos y APIs seguras. Creamos el sistema."
  },
  {
    number: "05",
    phase: "Deploy",
    title: "Lanzamiento y QA",
    desc: "Fase de pruebas en entorno real. Aseguramos que los formularios conecten, los correos salgan y el CRM registre antes del Go-Live."
  },
  {
    number: "06",
    phase: "Iteration",
    title: "Soporte activo",
    desc: "Nuvro no te abandona. Monitoreamos y optimizamos con base en tráfico y uso real para una evolución continua."
  }
];

export default function Method() {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-[10px] font-mono tracking-widest text-[#0066FF] uppercase mb-4">
            04. MÉTODO
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight mb-6 tracking-tight">
            De una idea suelta a un sistema en producción.
          </h3>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Sin metodologías de agencia lentas. Ingeniería directa al grano para que tengas tu sistema corriendo lo más rápido posible.
          </p>
        </div>

        {/* Desktop Grid and Mobile Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111111]/5 p-px border border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0A0A0A] p-8 lg:p-10 relative group"
            >
               {/* Hover Line */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity" />
               
               <div className="flex items-center justify-between mb-8">
                  <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase bg-[#111111]/5 px-3 py-1 border border-white/10">
                     {step.phase}
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-medium text-white/10 group-hover:text-[#0066FF]/20 transition-colors">
                     {step.number}
                  </div>
               </div>

               <h4 className="text-xl font-medium text-white mb-4 tracking-tight">
                 {step.title}
               </h4>
               <p className="text-sm text-white/60 font-light leading-relaxed">
                 {step.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
