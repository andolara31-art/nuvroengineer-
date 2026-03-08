import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Proyecto Uno',
    type: 'Landing Page Premium',
    description: 'Descripción breve del proyecto, el problema que resolvía y el impacto que tuvo en el negocio del cliente.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Proyecto Dos',
    type: 'Mini SaaS B2B',
    description: 'Sistema interno para gestión de prospectos y automatización de correos de seguimiento comercial.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Proyecto Tres',
    type: 'Web Corporativa',
    description: 'Rediseño completo de presencia digital para firma de consultoría, enfocada en captación de leads.',
    stack: ['Astro', 'Tailwind', 'CMS'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              06. Proyectos Principales
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight">
              Trabajo reciente.
            </h3>
          </div>
          <a href="#contacto" className="text-brand-accent hover:text-white transition-colors font-medium flex items-center gap-2">
            Iniciar un proyecto similar <ExternalLink size={16} />
          </a>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Placeholder */}
              <div className={`lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-brand-black relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/20 font-mono text-sm">
                  [ Imagen del Proyecto: {project.title} ]
                </div>
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4 block">
                  {project.type}
                </span>
                <h4 className="text-3xl md:text-4xl font-display font-medium text-brand-white mb-6">
                  {project.title}
                </h4>
                <p className="text-brand-platinum/60 leading-relaxed font-light mb-8 text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-brand-platinum/70 bg-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-brand-platinum transition-colors text-sm"
                  >
                    Ver proyecto <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-brand-white font-medium hover:bg-white/5 transition-colors text-sm"
                  >
                    Ver código <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
