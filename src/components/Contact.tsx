import { motion } from 'motion/react';
import { ArrowRight, Zap, Laptop, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/50671757171?text=${encodeURIComponent("Hola NUVRO, quiero una solución rápida.")}`;

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0066FF]/5 blur-[200px] -z-10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-4"
          >
            ¿Querés algo rápido o algo a medida?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 font-sans max-w-2xl mx-auto"
          >
            Elegí la ruta que mejor se adapte a la velocidad y complejidad de lo que buscás.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          {/* Bloque 1: NUVRO EXPRESS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 rounded-[40px] flex flex-col items-start relative group hover:border-[#0066FF]/30 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] mb-8">
              <Zap size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-2">NUVRO EXPRESS</h3>
            <p className="text-white/50 font-sans mb-8">Necesito una solución rápida para vender mejor.</p>
            <div className="mt-auto pt-8 w-full border-t border-white/5">
              <a 
                href="#express" 
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-[#111111]/5 text-white font-bold uppercase tracking-wider text-sm hover:bg-[#111111] hover:text-white transition-colors"
               >
                Ver microservicios <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Bloque 2: NUVRO CUSTOM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-[#0066FF]/20 p-8 md:p-12 rounded-[40px] flex flex-col items-start relative group shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0066FF] flex items-center justify-center text-white mb-8">
               <Laptop size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-2">NUVRO CUSTOM</h3>
            <p className="text-white/60 font-sans mb-8">Necesito una web, sistema o automatización a medida.</p>
            <div className="mt-auto pt-8 w-full border-t border-white/10">
              <a 
                href="#formulario" 
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-[#0066FF] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#0047B8] transition-colors shadow-lg shadow-[#0066FF]/20"
               >
                Hablar de mi proyecto <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div id="formulario" className="max-w-3xl mx-auto scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[40px] p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center mb-10">
               <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-3">Contanos sobre tu proyecto</h3>
               <p className="text-white/50 font-sans">El equipo de Nuvro Engineer se pondrá en contacto pronto.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-2">Nombre</label>
                  <input type="text" className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#0066FF] transition-all placeholder:text-[#6B7280]" placeholder="Ej. Carlos Mendoza" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-2">Negocio</label>
                  <input type="text" className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#0066FF] transition-all placeholder:text-[#6B7280]" placeholder="Ej. Cafeoteca" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-2">WhatsApp</label>
                <input type="tel" className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#0066FF] transition-all placeholder:text-[#6B7280]" placeholder="+506 8888 8888" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-2">¿Qué necesitás?</label>
                <textarea rows={4} className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#0066FF] transition-all resize-none placeholder:text-[#6B7280]" placeholder="Hablame un poco sobre lo que tenés en mente..." required></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 bg-[#0066FF] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-[#0047B8] transition-all flex items-center justify-center gap-3">
                  Enviar proyecto <ArrowUpRight size={18} />
                </button>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-1 bg-transparent border border-[rgba(255,255,255,0.2)] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3">
                  Escribir por WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
