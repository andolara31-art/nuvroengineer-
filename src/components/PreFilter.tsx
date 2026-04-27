import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { SplitText } from './ui/SplitText';

export default function PreFilter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-brand-black relative border-t border-brand-accent/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-8">
          08. Filtro de fase
        </h2>
        
        <SplitText 
          text="Antes de hablar, una pregunta directa:"
          className="text-2xl md:text-3xl font-serif italic text-brand-white leading-tight mb-8 justify-center"
        />
        
        <h3 className="text-4xl md:text-[56px] font-display font-medium text-brand-white leading-[1.1] mb-12">
          ¿Tu negocio ya está facturando con un flujo estable?
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 glow-button bg-brand-accent text-brand-white font-medium text-sm font-mono uppercase tracking-widest hover:bg-brand-accent/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            SÍ, LISTO PARA ESCALAR <ArrowRight size={16} />
          </a>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 border border-brand-accent/30 text-brand-white font-medium text-sm font-mono uppercase tracking-widest hover:bg-brand-accent/10 transition-colors"
          >
            TODAVÍA ESTOY VALIDANDO
          </button>
        </div>

        <p className="text-brand-platinum/40 text-[11px] font-mono tracking-widest uppercase max-w-xl mx-auto leading-relaxed">
          Trabajamos mejor con negocios que ya tienen tracción comprobada. Si todavía no estás ahí, te dejamos recursos tácticos para acelerar tu llegada.
        </p>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#050505]/90 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#000000] border border-brand-accent/20 p-8 z-[101] shadow-[0_0_50px_rgba(0,102,255,0.1)] rounded-[4px]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-brand-platinum/50 hover:text-brand-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <h4 className="text-2xl font-serif italic text-brand-white mb-4">
                Sigue construyendo.
              </h4>
              <p className="text-brand-platinum/60 leading-relaxed font-light mb-6">
                Una inversión premium tiene sentido cuando el flujo de caja lo justifica y las bases del negocio son sólidas. Por el momento, te sugerimos enfocarte al 100% en:
              </p>
              
              <ul className="space-y-4 mb-8 text-sm text-brand-platinum/80 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-mono mt-0.5">01.</span>
                  <span><strong>Validar tu oferta:</strong> Hablá con clientes reales y cerrá ventas manuales antes de automatizar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-mono mt-0.5">02.</span>
                  <span><strong>Tener un producto sólido:</strong> Asegurate de que el valor entregado supere las expectativas de tus clientes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-mono mt-0.5">03.</span>
                  <span><strong>Crear de forma económica:</strong> Usá herramientas no-code básicas gratuitas mientras reunís capital para una solución premium.</span>
                </li>
              </ul>
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 bg-white/5 border border-white/10 text-brand-white text-sm font-mono uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Entendido, a trabajar
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
