import { motion } from 'motion/react';
import { ArrowRight, FolderKanban } from 'lucide-react';

const projects = [
  {
    title: "LeadPilot V3",
    type: "CRM Custom",
    problem: "Demora en respuesta a leads y pérdida de trazabilidad.",
    system: "Plataforma de alta densidad para gestión de leads en tiempo real.",
    approach: "Dashboard de ventas, Automatización de WhatsApp y Analítica.",
    image: "/assets/nuvro/dashboards-crm.png",
  },
  {
    title: "Clario Advisory",
    type: "Web Premium",
    problem: "Falta de credibilidad digital en sector financiero high-ticket.",
    system: "Identidad digital de alto nivel y funnel de prospección.",
    approach: "Estrategia de contenido, landing page de conversión y UI corporativa.",
    image: "/assets/nuvro/webs-premium.png",
  },
  {
    title: "NUVRO FIT",
    type: "Sistema Interno",
    problem: "Coaches enviando rutinas por PDFs desactualizados.",
    system: "Panel de control web para seguimiento biométrico y rutinas dinámicas.",
    approach: "Portal de cliente web-app, backend de entrenamiento y estadísticas.",
    image: "/assets/nuvro/automation-flows.png",
  },
  {
    title: "Cafeoteca Costa Rica",
    type: "Menú QR & Gestión",
    problem: "Menú en imágenes de Instagram y toma manual de pedidos lenta.",
    system: "Ecosistema de menú interactivo y sistema POS ligero.",
    approach: "Menú digital rápido, sistema de órdenes a cocina y diseño de marca.",
    image: "/assets/nuvro/menu-qr.png",
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/10">
      <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-[#0066FF]/5 blur-[200px] -z-10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <FolderKanban size={16} className="text-[#0066FF]" />
            <span className="text-sm font-medium tracking-widest text-[#0066FF] uppercase">Casos Reales</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight max-w-3xl"
          >
            Proyectos que muestran lo que podemos construir.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[32px] overflow-hidden shadow-xl shadow-black/5 group transition duration-300 hover:scale-[1.02] hover:border-[#0066FF]/40"
            >
              <div className="relative aspect-[4/3] w-full bg-[#111111] overflow-hidden">
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 right-4 bg-[#0066FF] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-md">
                    {project.type}
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]/52 opacity-0 backdrop-blur-[3px] transition duration-300 group-hover:opacity-100">
                    <span className="bg-[#0066FF] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-xl">
                      {project.type}
                    </span>
                 </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-6">{project.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-bold text-[#9CA3AF] uppercase tracking-wider mb-1">Problema Abordado</span>
                    <p className="text-sm text-white leading-snug">{project.problem}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#0066FF] uppercase tracking-wider mb-1">Sistema Construido</span>
                    <p className="text-sm font-medium text-white leading-snug">{project.system}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#9CA3AF] uppercase tracking-wider mb-1">Enfoque</span>
                    <p className="text-sm text-white leading-snug">{project.approach}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/10 flex flex-col items-center text-center gap-6"
        >
           <a href="https://wa.me/50671757171?text=Hola NUVRO, quiero ver más casos de estudio" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#111111] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#0066FF] transition-all shadow-md group">
              Ver todos los proyectos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </motion.div>

      </div>
    </section>
  );
}
