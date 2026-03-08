import { motion } from 'motion/react';
import { Bot, Sparkles, Workflow } from 'lucide-react';

export default function Automation() {
  return (
    <section className="py-24 md:py-32 bg-brand-black relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              07. Capacidades Complementarias
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-8">
              Automatización y Creatividad Digital.
            </h3>
            <p className="text-xl text-brand-platinum/60 leading-relaxed font-light mb-12">
              Más allá de la web, diseñamos sistemas que hacen que tu negocio opere de manera más inteligente y eficiente.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Workflow size={24} />, title: 'Automatización de Leads', desc: 'Conectamos tu web con tu CRM para que ningún prospecto se enfríe.' },
                { icon: <Bot size={24} />, title: 'Sistemas de Seguimiento', desc: 'Respuestas automáticas y flujos de nutrición para tus clientes potenciales.' },
                { icon: <Sparkles size={24} />, title: 'Demos Interactivos', desc: 'Experiencias web experimentales para mostrar tu producto de forma única.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-brand-accent shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-brand-white mb-2">{item.title}</h4>
                    <p className="text-brand-platinum/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-brand-dark relative group">
              {/* Placeholder for Automation/Creativity visual */}
              <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/20 font-mono text-sm text-center px-8">
                [ Espacio para visual de automatización o demo interactivo ]
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,125,38,0.1)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
