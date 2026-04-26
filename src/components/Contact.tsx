import { motion } from 'motion/react';
import { MessageSquare, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "50671757171";
  const whatsappUrl = (msg: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  const quickButtons = [
    { label: 'Menú QR para mi local', msg: 'Hola NUVRO, quiero cotizar un menú QR para mi negocio.' },
    { label: 'Link Bio Pro para redes', msg: 'Hola NUVRO, quiero un Link Bio para mi Instagram.' },
    { label: 'Invitación digital para evento', msg: 'Hola NUVRO, quiero una invitación digital.' },
    { label: 'Catálogo rápido de productos', msg: 'Hola NUVRO, quiero un catálogo express.' },
    { label: 'Página de promoción activa', msg: 'Hola NUVRO, quiero una página para una promoción.' },
    { label: 'Proyecto CUSTOM grande', msg: 'Hola NUVRO, quiero hablar sobre un proyecto custom grande.' },
  ];

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-brand-black border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-brand-accent uppercase mb-6 block">
              CANAL DE VENTA DIRECTA
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-medium text-brand-white leading-[0.9] mb-10 uppercase tracking-tighter">
              ¿Listo para dar el <br/> <span className="text-brand-accent italic">salto digital?</span>
            </h2>
            
            <p className="text-xl text-brand-platinum/40 mb-12 font-light leading-relaxed max-w-lg">
              No perdás más tiempo. El 90% de nuestros clientes eligen su producto, mandan el contenido y están vendiendo en menos de 72 horas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-5 text-brand-platinum/60 hover:text-brand-accent transition-colors group cursor-default">
                <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform shadow-xl">
                  <Mail size={24} />
                </div>
                <div>
                   <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-platinum/30 mb-0.5">Ventas</div>
                   <div className="text-sm font-bold tracking-tight">hola@nuvroengineer.com</div>
                </div>
              </div>

              <div className="flex items-center gap-5 text-brand-platinum/60 hover:text-brand-accent transition-colors group cursor-default">
                <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform shadow-xl">
                  <MapPin size={24} />
                </div>
                <div>
                   <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-platinum/30 mb-0.5">Base</div>
                   <div className="text-sm font-bold tracking-tight">Escazú, Costa Rica</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-accent/5 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative glass-card p-8 md:p-14 rounded-[50px] border-white/5 bg-white/[0.02] backdrop-blur-3xl border">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
              
              <h3 className="text-2xl font-display font-black text-brand-white mb-10 uppercase tracking-tight italic">Elegí tu producto:</h3>
              
              <div className="grid grid-cols-1 gap-3 mb-12">
                 {quickButtons.map((btn, i) => (
                   <motion.a
                     key={i}
                     whileHover={{ x: 10 }}
                     href={whatsappUrl(btn.msg)}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/40 hover:bg-brand-accent/5 transition-all group"
                   >
                     <span className="text-sm font-bold text-brand-platinum/50 group-hover:text-brand-white uppercase tracking-tighter">{btn.label}</span>
                     <ArrowRight size={18} className="text-brand-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                   </motion.a>
                 ))}
              </div>

              <div className="pt-10 border-t border-white/5">
                 <a
                   href={whatsappUrl("Hola NUVRO, tengo un negocio y quiero saber qué me conviene.")}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full inline-flex items-center justify-center gap-4 py-7 rounded-3xl bg-brand-white text-brand-black font-black uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all shadow-2xl"
                 >
                   <MessageSquare size={24} />
                   Chatear con un experto
                 </a>
                 <div className="flex items-center justify-center gap-2 mt-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <p className="text-[10px] text-brand-platinum/30 uppercase tracking-[0.3em] font-mono">Un humano te responde en minutos</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

