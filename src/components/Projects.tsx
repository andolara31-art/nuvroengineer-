import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { SplitText } from './ui/SplitText';

const projects = [
  {
    id: 1,
    title: 'Cafeoteca Costa Rica',
    type: 'DISEÑO WEB',
    context: 'La única cafetería de Costa Rica en el top 100 mundial necesitaba una experiencia digital que reflejara la alta calidad de su producto de especialidad y la cálida hospitalidad de su espacio.',
    solution: 'Desarrollamos una web editorial inmersiva con animaciones al scroll y un mapa interactivo para explorar las regiones cafetaleras del país.',
    result: 'Una posición dominante en búsquedas internacionales y unaumento drástico en reservas directas a través del sitio.',
    metric: '+45%',
    metricLabel: 'RETENCIÓN DE USUARIO',
    liveUrl: 'https://cafeoteca-website.vercel.app',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-19%20at%2010.01.37%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xOSBhdCAxMC4wMS4zNyBQTS5qcGVnIiwiaWF0IjoxNzczOTc5MzI2LCJleHAiOjE4MDU1MTUzMjZ9.61fpe52dUa76bgp7VCLG8i2wu04HrKNEZQe8Iv6XmuY',
  },
  {
    id: 2,
    title: 'LEADPILOT CRM',
    type: 'MINI SAAS B2B',
    context: 'Equipos comerciales perdiendo oportunidades por falta de seguimiento estructurado. Dependencia de hojas de cálculo lentas y propensas a errores.',
    solution: 'Construimos un CRM ligero a medida enfocado exclusivamente en la simplicidad de uso y la velocidad de registro de nuevos leads.',
    result: 'Equipos de ventas adoptando la herramienta en su primer día y una reducción masiva del tiempo administrativo.',
    metric: '-12hrs',
    metricLabel: 'CARGA ADMINISTRATIVA / SEMANA',
    liveUrl: 'https://leadpilot-pi.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/hf_20260315_144821_292329d5-191d-46bd-a75f-d73a0598a277%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaGZfMjAyNjAzMTVfMTQ0ODIxXzI5MjMyOWQ1LTE5MWQtNDZiZC1hNzVmLWQ3M2EwNTk4YTI3NyAoMSkucG5nIiwiaWF0IjoxNzczNTg3MzQ1LCJleHAiOjE4MDUxMjMzNDV9.cT5J5jtOkiiYAfT7IVEFM1ujDVy88l4Us3h8VbubiQE',
  },
  {
    id: 3,
    title: 'CLARIO ADVISORY',
    type: 'WEB CORPORATIVA',
    context: 'Una firma financiera boutique requería transmitir inmediatamente autoridad y confianza institucional sin perder el toque humano.',
    solution: 'Diseño ultra-limpio con tipografía serif imponente, paleta restringida y estructuración de contenido orientada a establecer credibilidad técnica.',
    result: 'Tráfico orgánico más cualificado y prospectos con menor fricción en la etapa inicial del embudo de ventas.',
    metric: '+25%',
    metricLabel: 'LEADS CUALIFICADOS',
    liveUrl: 'https://clario-advisory.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-15%20at%209.33.12%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xNSBhdCA5LjMzLjEyIEFNLmpwZWciLCJpYXQiOjE3NzM1ODg5MTQsImV4cCI6MTgwNTEyNDkxNH0.6caFs2Vdl8f3BbvRMij1dh5Ne3Mm4452xYFOsYxzidE',
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-brand-black relative border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-platinum/50 uppercase mb-4 block">
              03. Casos de Estudio
            </span>
            <SplitText 
              text="Ingeniería que genera tracción."
              className="text-4xl md:text-5xl font-serif italic text-brand-white leading-tight mb-4"
            />
          </div>
          <a href="#contacto" className="text-brand-accent hover:text-white transition-colors font-medium flex items-center gap-2">
            Iniciar un proyecto similar <ExternalLink size={16} />
          </a>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[11px] font-mono tracking-widest text-brand-platinum/60 uppercase border border-white/10 px-3 py-1 bg-white/5 inline-table w-max self-start">
                  {project.type}
                </span>
                
                <h3 className="text-5xl md:text-[80px] font-serif italic text-brand-white leading-[0.95] tracking-tight">
                  {project.title}
                </h3>
                
                <div className="mt-4 mb-4">
                  <div className="text-4xl md:text-5xl font-display font-medium text-brand-accent">
                    {project.metric}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-brand-platinum/40 mt-2">
                    {project.metricLabel}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-brand-platinum/40 mb-3 block">Contexto</h4>
                    <p className="font-light text-brand-platinum/80 text-sm leading-relaxed">{project.context}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-brand-platinum/40 mb-3 block">Solución</h4>
                    <p className="font-light text-brand-platinum/80 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-brand-platinum/40 mb-3 block">Resultado</h4>
                    <p className="font-light text-brand-platinum/80 text-sm leading-relaxed">{project.result}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-brand-accent text-brand-white font-medium hover:bg-brand-accent/90 transition-colors text-sm"
                  >
                    Ver proyecto <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] border border-brand-accent/30 text-brand-white font-medium hover:bg-brand-accent/10 transition-colors text-sm"
                  >
                    Ver código <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Project Image Full Width */}
              <div className="w-full aspect-[16/9] bg-[#050505] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 z-10 flex gap-2 mix-blend-difference">
                  <div className="w-2 h-2 bg-brand-white/40 rounded-full" />
                  <div className="w-2 h-2 bg-brand-white/40 rounded-full" />
                  <div className="w-2 h-2 bg-brand-white/40 rounded-full" />
                </div>
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/20 font-mono text-sm">
                    [ Imagen del Proyecto: {project.title} ]
                  </div>
                )}
                {/* Blueprint lines over image just for style */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-accent/20 mix-blend-screen pointer-events-none" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-brand-accent/20 mix-blend-screen pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
