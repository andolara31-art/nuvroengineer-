import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/50671757171?text=${encodeURIComponent("Hola NUVRO, quiero una solución rápida.")}`;

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D7FF45]/5 blur-[200px] -z-10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
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
                  <input type="text" className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D7FF45] transition-all placeholder:text-[#6B7280]" placeholder="Ej. Carlos Mendoza" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-2">Negocio</label>
                  <input type="text" className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D7FF45] transition-all placeholder:text-[#6B7280]" placeholder="Ej. Cafeoteca" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-2">WhatsApp</label>
                <input type="tel" className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D7FF45] transition-all placeholder:text-[#6B7280]" placeholder="+506 8888 8888" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-2">¿Qué necesitás?</label>
                <textarea rows={4} className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#D7FF45] transition-all resize-none placeholder:text-[#6B7280]" placeholder="Hablame un poco sobre lo que tenés en mente..." required></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 bg-[#D7FF45] text-[#0A0A0A] py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-[#B8E633] transition-all flex items-center justify-center gap-3">
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
