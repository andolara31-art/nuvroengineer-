import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LAST SIGNAL',
    type: 'EXPERIENCIA INTERACTIVA',
    description: 'Demo interactivo con enfoque narrativo y visual, diseñado para mostrar experiencia web, dirección creativa y construcción de interfaces inmersivas.',
    stack: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://last-signal-eta.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/Captura%20desde%202026-03-10%2008-54-30.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvQ2FwdHVyYSBkZXNkZSAyMDI2LTAzLTEwIDA4LTU0LTMwLnBuZyIsImlhdCI6MTc3MzE1NDg3OSwiZXhwIjoxODA0NjkwODc5fQ.r8h4YWqRDuQWKap1GFQlmSEa6yW7CR-9M_JnJeAqwvU',
  },
  {
    id: 2,
    title: 'Proyecto Dos',
    type: 'Mini SaaS B2B',
    description: 'Sistema interno para gestión de prospectos y automatización de correos de seguimiento comercial.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '',
  },
  {
    id: 3,
    title: 'CLARIO ADVISORY',
    type: 'Web Corporativa',
    description: 'Web corporativa premium para firma de consultoría, diseñada para comunicar confianza, estructura estratégica y una presencia digital más clara y profesional.',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://clario-advisory.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/Captura%20desde%202026-03-10%2008-15-07.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvQ2FwdHVyYSBkZXNkZSAyMDI2LTAzLTEwIDA4LTE1LTA3LnBuZyIsImlhdCI6MTc3MzE1NDg2MywiZXhwIjoxODA0NjkwODYzfQ.YIXvHWgUh0F09PJRDUWqgVGNuElhmcLFc8r5gSM5css',
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
              {/* Project Image */}
              <div className={`lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-brand-black relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/20 font-mono text-sm">
                    [ Imagen del Proyecto: {project.title} ]
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
