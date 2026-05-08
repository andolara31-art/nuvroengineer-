import { motion } from 'motion/react';
import { Layout, GitBranch, TerminalSquare, Cpu } from 'lucide-react';

const modules = [
  {
    icon: <Layout className="w-6 h-6 text-[#0066FF] mb-6" strokeWidth={1.5} />,
    title: "Webs premium y presencia digital",
    description: "Sitios corporativos y landing pages enfocadas en explicar, posicionar y convertir tráfico en clientes de alto valor.",
    example: "Ej: Una presencia que transmite autoridad inmediata."
  },
  {
    icon: <GitBranch className="w-6 h-6 text-[#0066FF] mb-6" strokeWidth={1.5} />,
    title: "Automatización y flujos operativos",
    description: "Conectamos herramientas, automatizamos emails y tareas repetitivas para reducir el trabajo manual y ordenar tus procesos.",
    example: "Ej: Desde el registro en la web hasta la creación en el CRM."
  },
  {
    icon: <TerminalSquare className="w-6 h-6 text-[#0066FF] mb-6" strokeWidth={1.5} />,
    title: "Dashboards, CRM y sistemas internos",
    description: "Plataformas a medida para gestionar clientes, dar seguimiento a ventas y tener control total sobre los datos de tu empresa.",
    example: "Ej: Un portal central para ver qué entra y qué sale."
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#0066FF] mb-6" strokeWidth={1.5} />,
    title: "IA aplicada y producto digital",
    description: "Desarrollamos agentes inteligentes, MVPs, mini SaaS y soluciones personalizadas para escalar tu oferta.",
    example: "Ej: Automatización de atención al cliente con IA o tu propio software."
  }
];

export default function Systems() {
  return (
    <section id="sistemas" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-[10px] font-mono tracking-widest text-[#0066FF] uppercase mb-4">
            02. LO QUE CONSTRUIMOS
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-6 tracking-tight">
            Sistemas digitales que conectan presencia, operación y venta.
          </h3>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            No hacemos servicios sueltos de diseño. Construimos la infraestructura tecnológica que empuja tu negocio hacia adelante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#111111]/[0.03] p-px border border-white/5">
          {modules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0A0A0A] p-10 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF] opacity-[0.02] blur-[40px] group-hover:opacity-[0.06] transition-opacity duration-500" />
              
              <div className="relative z-10">
                {mod.icon}
                <h4 className="text-2xl font-medium text-white mb-4 tracking-tight">{mod.title}</h4>
                <p className="text-white/60 font-light leading-relaxed mb-8">
                  {mod.description}
                </p>
                <div className="font-mono text-[11px] text-[#0066FF] border-l border-[#0066FF]/30 pl-3 py-1">
                  {mod.example}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
