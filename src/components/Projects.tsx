import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LAST SIGNAL',
    type: 'EXPERIENCIA INTERACTIVA',
    description: 'Demo interactivo con enfoque narrativo. Diseñado para demostrar dirección creativa y retención de usuarios mediante interfaces inmersivas.',
    impact: '+40% de tiempo de permanencia en página frente a webs tradicionales.',
    stack: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://last-signal-eta.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/hf_20260310_170142_ef719d30-a18e-4af5-8840-dec1af03812e.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaGZfMjAyNjAzMTBfMTcwMTQyX2VmNzE5ZDMwLWExOGUtNGFmNS04ODQwLWRlYzFhZjAzODEyZS5qcGVnIiwiaWF0IjoxNzczMTYyNTQ5LCJleHAiOjE4MDQ2OTg1NDl9.jC4WWeYlovKBVrUEYP9EHk6fci1T5z5LiSzvNr0mQ1Y',
  },
  {
    id: 2,
    title: 'LEADPILOT CRM',
    type: 'MINI SAAS B2B',
    description: 'Plataforma CRM a medida para organizar prospectos y automatizar seguimientos. Centraliza oportunidades y mejora la comunicación comercial.',
    impact: 'Reducción de 12 horas semanales en gestión manual de clientes.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://leadpilot-eta.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/hf_20260315_144821_292329d5-191d-46bd-a75f-d73a0598a277%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaGZfMjAyNjAzMTVfMTQ0ODIxXzI5MjMyOWQ1LTE5MWQtNDZiZC1hNzVmLWQ3M2EwNTk4YTI3NyAoMSkucG5nIiwiaWF0IjoxNzczNTg3MzQ1LCJleHAiOjE4MDUxMjMzNDV9.cT5J5jtOkiiYAfT7IVEFM1ujDVy88l4Us3h8VbubiQE',
  },
  {
    id: 3,
    title: 'CLARIO ADVISORY',
    type: 'WEB CORPORATIVA',
    description: 'Presencia digital premium para una firma de consultoría. Estructurada para comunicar confianza y autoridad en el sector financiero.',
    impact: 'Aumento del 25% en solicitudes de contacto cualificadas.',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://clario-advisory.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-15%20at%209.33.12%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xNSBhdCA5LjMzLjEyIEFNLmpwZWciLCJpYXQiOjE3NzM1ODg5MTQsImV4cCI6MTgwNTEyNDkxNH0.6caFs2Vdl8f3BbvRMij1dh5Ne3Mm4452xYFOsYxzidE',
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-brand-dark/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              03. Proyectos Principales
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-4">
              Trabajo reciente.
            </h3>
            <p className="text-lg text-brand-platinum/60 font-light">
              Casos reales de negocios que elevaron su estándar digital.
            </p>
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
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
                <p className="text-brand-platinum/60 leading-relaxed font-light mb-6 text-lg">
                  {project.description}
                </p>
                
                <div className="glass-card rounded-xl p-4 mb-8">
                  <p className="text-brand-accent font-medium text-sm">
                    <span className="text-brand-platinum/50 mr-2">Impacto:</span>
                    {project.impact}
                  </p>
                </div>
                
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
                    className="glow-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-brand-white font-semibold hover:bg-brand-accent/90 transition-colors text-sm"
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
