import { motion } from 'motion/react';
import { Mail, MessageCircle, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-32 md:py-48 bg-brand-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(242,125,38,0.1)_0%,rgba(5,5,5,1)_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-8">
          11. Contacto
        </h2>
        
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-brand-white leading-[1.1] tracking-tight mb-16"
        >
          Hablemos de tu <br className="hidden md:block" />
          <span className="text-brand-platinum/40 italic">próximo proyecto</span>.
        </motion.h3>
        
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:software@nuvroenginer.site"
            className="group flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-brand-dark border border-white/10 hover:border-brand-accent/50 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-platinum group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <span className="block text-sm font-medium text-brand-platinum/60 mb-1">Email</span>
              <span className="text-brand-white font-medium flex items-center gap-2">
                software@nuvroenginer.site <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </a>
          
          <a
            href="https://wa.me/50671757171"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-brand-dark border border-white/10 hover:border-brand-accent/50 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-platinum group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <MessageCircle size={24} />
            </div>
            <div>
              <span className="block text-sm font-medium text-brand-platinum/60 mb-1">WhatsApp</span>
              <span className="text-brand-white font-medium flex items-center gap-2">
                +506 71757171 <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </a>
          
          <a
            href="https://github.com/andolara31-art"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-brand-dark border border-white/10 hover:border-brand-accent/50 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-platinum group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <Github size={24} />
            </div>
            <div>
              <span className="block text-sm font-medium text-brand-platinum/60 mb-1">GitHub</span>
              <span className="text-brand-white font-medium flex items-center gap-2">
                @andolara31-art <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
