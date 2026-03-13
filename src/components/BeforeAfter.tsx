import { motion } from 'motion/react';
import { XCircle, CheckCircle } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            05. La Transformación
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight">
            El impacto de una buena web.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 rounded-3xl bg-red-950/10 border border-red-900/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <XCircle className="text-red-500" size={32} />
              <h4 className="text-2xl font-display font-medium text-brand-white">Antes</h4>
            </div>
            <ul className="space-y-6">
              {[
                'Imagen digital débil o inexistente',
                'Poca confianza online para cerrar ventas',
                'Clientes confundidos sobre qué vendes',
                'Procesos manuales y desordenados',
                'Pérdida de prospectos por falta de seguimiento'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-platinum/60">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 rounded-3xl bg-emerald-950/10 border border-emerald-900/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <CheckCircle className="text-emerald-500" size={32} />
                <h4 className="text-2xl font-display font-medium text-brand-white">Después</h4>
              </div>
              <ul className="space-y-6">
                {[
                  'Presencia moderna y altamente profesional',
                  'Mayor percepción de valor de tus servicios',
                  'Claridad absoluta en tu oferta comercial',
                  'Estructura digital que trabaja 24/7',
                  'Mejor punto de contacto con tus clientes'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-platinum/90">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
