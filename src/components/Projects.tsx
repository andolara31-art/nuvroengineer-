import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Cafeoteca Costa Rica',
    type: 'DISEÑO WEB EDITORIAL',
    description: 'Sitio web premium para la única cafetería de Costa Rica entre las 100 mejores del mundo (#76). Diseño editorial con animaciones de scroll y mapa de regiones cafetaleras.',
    impact: 'Presencia digital de clase mundial para una marca top 100 global.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://cafeoteca-website.vercel.app',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-19%20at%2010.01.37%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xOSBhdCAxMC4wMS4zNyBQTS5qcGVnIiwiaWF0IjoxNzczOTc5MzI2LCJleHAiOjE4MDU1MTUzMjZ9.61fpe52dUa76bgp7VCLG8i2wu04HrKNEZQe8Iv6XmuY',
  },
  {
    id: 2,
    title: 'LEADPILOT CRM',
    type: 'MINI SAAS B2B',
    description: 'Plataforma CRM a medida para organizar prospectos y automatizar seguimientos. Centraliza oportunidades y mejora la comunicación comercial.',
    impact: 'Reducción de 12 horas semanales en gestión manual de clientes.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://leadpilot-pi.vercel.app/',
    githubUrl: '#',
    imageUrl: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/hf_20260315_144821_292329d5-191d-46bd-a75f-d73a0598a277%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaGZfMjAyNjAzMTVfMTQ0ODIxXzI5MjMyOWQ1LTE5MWQtNDZiZC1hNzVmLWQ3M2EwNTk4YTI3NyAoMSkucG5nIiwiaWF0IjoxNzczNTg3MzQ1LCJleHAiOjE4MDUxMjMzNDV9.cT5J5jtOkiiYAfT7IVEFM1ujDVy88l4Us3h8VbubiQE',
  },
  {
    id: 3,
    title: 'CLARIO ADVISORY',
    type: 'WEB CORPORATIVA PREMIUM',
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
    <section id="proyectos" className="py-24 md:py-32 bg-brand-black relative border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-brand-platinum/30 uppercase mb-6 block">
              PORTAFOLIO CUSTOM
            </span>
            <h3 className="text-4xl md:text-8xl font-display font-medium text-brand-white leading-[0.9] mb-10 uppercase tracking-tighter">
              Trabajo que <br/> <span className="text-brand-accent italic">eleva marcas.</span>
            </h3>
            <p className="text-xl text-brand-platinum/40 font-light max-w-lg mb-8">
              Casos reales de negocios que decidieron dejar de ser "uno más" para convertirse en el estándar de su industria con soluciones 100% a medida.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#contacto" className="inline-flex items-center justify-center gap-4 py-6 px-10 rounded-2xl bg-brand-accent text-brand-white font-black hover:scale-105 active:scale-95 transition-all shadow-2xl text-lg uppercase tracking-tighter">
              Cotizar Proyecto Custom
              <ArrowRight size={20} />
            </a>
            <p className="text-[10px] text-brand-platinum/20 font-mono uppercase tracking-[0.2em] text-center italic">Desarrollo robusto para empresas</p>
          </div>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] rounded-[48px] overflow-hidden border border-white/5 bg-zinc-900 relative group ${index % 2 !== 0 ? 'lg:order-2' : ''} shadow-2xl shadow-brand-accent/5`}>
                <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/10 font-mono text-xs uppercase tracking-widest leading-none">
                     Archivo Visual: {project.title} 
                  </div>
                )}
                <div className="absolute inset-x-8 bottom-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-brand-black/90 backdrop-blur-md border border-white/10 rounded-lg text-[8px] font-black uppercase text-brand-platinum/70 tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-brand-accent/60" />
                  <span className="text-xs font-mono tracking-[0.3em] text-brand-accent uppercase">
                    {project.type}
                  </span>
                </div>
                <h4 className="text-4xl md:text-6xl font-display font-black text-brand-white mb-8 tracking-tighter uppercase italic leading-none">
                  {project.title}
                </h4>
                <p className="text-brand-platinum/40 leading-snug font-light mb-12 text-xl italic">
                  "{project.description}"
                </p>
                
                <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 mb-12 relative overflow-hidden group/impact transition-all hover:bg-white/[0.04]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 blur-3xl rounded-full" />
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-platinum/30 mb-3">Impacto Comercial</div>
                  <p className="text-brand-white font-bold text-lg leading-tight uppercase tracking-tight">
                    {project.impact}
                  </p>
                </div>

                <div className="flex items-center gap-8">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-brand-white hover:text-brand-accent transition-colors font-black uppercase tracking-tighter text-sm group"
                  >
                    Ver caso completo <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Separator / Microproducts Link */}
        <div className="mt-40 p-12 lg:p-20 rounded-[60px] border border-white/5 bg-brand-accent/[0.02] flex flex-col items-center text-center">
           <h4 className="text-brand-platinum/20 text-xs font-mono uppercase tracking-[0.5em] mb-10 italic">¿Buscás algo más rápido y directo?</h4>
           <h3 className="text-4xl md:text-6xl font-display font-medium text-brand-white leading-tight uppercase tracking-tighter mb-12">
             Miremos los <span className="text-brand-accent italic">microproductos.</span>
           </h3>
           <a href="#express" className="px-12 py-6 rounded-3xl border border-brand-accent/40 text-brand-accent font-black uppercase tracking-tighter hover:bg-brand-accent hover:text-brand-white transition-all text-xl shadow-2xl">
             Explorar Catálogo Express
           </a>
        </div>
      </div>
    </section>
  );
}
