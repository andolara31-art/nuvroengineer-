import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/50671757171?text=${encodeURIComponent("Hola NUVRO, quiero hablar sobre mi próximo proyecto.")}`;

  return (
    <section id="contacto" className="py-24 md:py-32 relative bg-brand-dark/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              05. Contacto
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-6">
              Inicia tu próximo proyecto.
            </h3>
            
            <p className="text-lg text-brand-platinum/60 mb-12 font-light leading-relaxed max-w-md">
              Hagamos realidad tu visión. Cuéntanos sobre tu negocio y descubramos cómo podemos ayudarte a escalar mediante tecnología de primer nivel.
            </p>

            <div className="space-y-8 mb-12 lg:mb-0">
              <div className="flex items-start gap-4 text-brand-platinum/80">
                <div className="p-3 bg-white/5 rounded-full text-brand-accent mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:hola@nuvroengineer.com" className="text-brand-platinum/60 hover:text-brand-accent transition-colors">hola@nuvroengineer.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-brand-platinum/80">
                <div className="p-3 bg-white/5 rounded-full text-brand-accent mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Ubicación</h4>
                  <p className="text-brand-platinum/60">San José, Costa Rica</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] pointer-events-none" />
            
            <form className="relative space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-brand-platinum/50 mb-2" htmlFor="name">Nombre</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 focus:bg-white/10 transition-all font-light"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-brand-platinum/50 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 focus:bg-white/10 transition-all font-light"
                    placeholder="tucorreo@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-brand-platinum/50 mb-2" htmlFor="company">Empresa / Proyecto</label>
                <input 
                  type="text" 
                  id="company"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 focus:bg-white/10 transition-all font-light"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-brand-platinum/50 mb-2" htmlFor="message">Mensaje</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent/50 focus:bg-white/10 transition-all font-light resize-none"
                  placeholder="Háblanos sobre lo que necesitas, objetivos, o cualquier detalle."
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button type="submit" className="w-full sm:w-auto bg-brand-white text-brand-black px-8 py-3 rounded-full font-medium hover:bg-brand-platinum transition-colors flex items-center justify-center gap-2">
                  Enviar mensaje
                  <ArrowRight size={16} />
                </button>
                <span className="text-brand-platinum/50 line-through md:no-underline md:hidden">o</span>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-8 py-3 rounded-full font-medium hover:bg-[#25D366]/20 transition-colors flex items-center justify-center text-center"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

