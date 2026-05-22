import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/50671757171?text=${encodeURIComponent('Hola NUVRO, quiero una solución rápida.')}`;

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-white/[0.06] bg-[#0A0A0A] py-[clamp(80px,10vw,130px)] text-white">
      <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#2B6CB0]/[0.04] blur-[200px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2B6CB0]" />
              Empezar
            </div>
            <h2 className="section-heading mb-6">
              Hablemos<br />
              de tu<br />
              <span className="text-white/28 font-light italic">proyecto.</span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-white/45">
              El equipo de NUVRO se pone en contacto dentro de las próximas horas.
              Sin vueltas — directo al punto.
            </p>

            <div className="mt-10 space-y-4 border-t border-white/[0.07] pt-10">
              {[
                { label: 'WhatsApp', value: '+506 7175 7171' },
                { label: 'Ubicación', value: 'Costa Rica' },
                { label: 'Horario', value: 'Lun–Vie, 8am–6pm' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6">
                  <span className="w-24 text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-white/65">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            <div className="border border-white/[0.07] bg-[#111111] p-7 md:p-9">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Carlos Mendoza"
                      required
                      className="w-full border border-white/[0.1] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#2B6CB0] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
                      Negocio
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Cafeoteca"
                      required
                      className="w-full border border-white/[0.1] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#2B6CB0] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+506 8888 8888"
                    required
                    className="w-full border border-white/[0.1] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#2B6CB0] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
                    ¿Qué necesitás?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Contanos sobre tu proyecto..."
                    required
                    className="w-full resize-none border border-white/[0.1] bg-[#0A0A0A] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#2B6CB0] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-3 bg-white py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#0A0A0A] transition-all hover:bg-[#2B6CB0] hover:text-white"
                  >
                    Enviar proyecto
                    <ArrowUpRight size={16} />
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-3 border border-white/[0.15] py-4 text-sm font-bold uppercase tracking-[0.14em] text-white/60 transition-all hover:border-white/30 hover:text-white"
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
