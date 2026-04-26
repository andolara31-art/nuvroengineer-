import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Zap, Target, TrendingUp } from 'lucide-react';

export default function FinalCTA() {
  const whatsappUrl = (msg: string) => `https://wa.me/50671757171?text=${encodeURIComponent(msg)}`;

  return (
    <section className="py-32 bg-brand-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full translate-y-1/2" />
      
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-12"
          >
            <Zap size={14} className="fill-current" />
            ¿Listo para dominar tu mercado?
          </motion.div>

          <h2 className="text-5xl md:text-9xl font-display font-medium text-brand-white leading-[0.8] uppercase tracking-tighter mb-16">
            Menos explicaciones, <br/> 
            <span className="text-brand-accent italic">más ventas.</span>
          </h2>

          <p className="text-xl md:text-3xl text-brand-platinum/40 font-light mb-20 max-w-2xl mx-auto leading-tight italic">
            "Dejá de ser una opción y convertite en la autoridad de tu nicho en 72 horas."
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-20 text-left">
            {[
              { icon: <Target className="text-brand-accent" />, title: "Claridad Comercial", desc: "Tus clientes sabrán exactamente qué comprás al primer scroll." },
              { icon: <TrendingUp className="text-brand-accent" />, title: "Conversión Real", desc: "Diseñado para llevar al usuario directo a tu WhatsApp." },
              { icon: <Zap className="text-brand-accent" />, title: "Velocidad NUVRO", desc: "Tu link activo, profesional y vendiendo en tiempo récord." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-brand-white font-black uppercase tracking-tighter mb-2 italic">{item.title}</h4>
                <p className="text-brand-platinum/40 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={whatsappUrl("Hola NUVRO, ¡quiero empezar ya! Me interesa un microproducto para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-16 py-8 rounded-[32px] bg-brand-accent text-brand-white font-black text-2xl uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-3xl shadow-brand-accent/30 flex items-center justify-center gap-4 group"
            >
              EMPEZAR AHORA
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href={whatsappUrl("Hola, quiero hablar con un experto sobre una solución custom para mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-8 rounded-[32px] border border-white/10 bg-white/5 text-brand-platinum hover:bg-white/10 transition-all font-black uppercase tracking-tighter text-sm flex items-center justify-center gap-3"
            >
              <MessageSquare size={18} />
              HABLAR CON EXPERTO
            </a>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale saturate-0">
             <div className="text-[10px] font-mono uppercase tracking-[0.4em]">Soluciones Signature</div>
             <div className="text-[10px] font-mono uppercase tracking-[0.4em]">Design by NUVRO</div>
             <div className="text-[10px] font-mono uppercase tracking-[0.4em]">Tech Oriented</div>
          </div>
        </div>
      </div>
    </section>
  );
}
