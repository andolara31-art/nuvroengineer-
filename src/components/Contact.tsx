import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const wa = `https://wa.me/50671757171?text=${encodeURIComponent('Hola NUVRO, quiero una solución.')}`;

  return (
    <section id="contacto" className="relative overflow-hidden bg-nuvro py-[clamp(80px,10vw,140px)]">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full"
        style={{ background: 'oklch(56% 0.18 235 / 0.04)', filter: 'blur(180px)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="label-sm mb-5 flex items-center gap-2.5">
              <span className="h-[5px] w-[5px] rounded-full bg-brand" />
              Empezar
            </p>
            <h2 className="display-section text-1 uppercase mb-8">
              Hablemos{' '}
              <span style={{ fontWeight: 300, color: 'var(--text-3)' }}>de tu</span>
              <br />
              proyecto.
            </h2>
            <p className="body-lg max-w-[38ch] mb-10">
              El equipo de NUVRO se pone en contacto dentro de las próximas horas.
              Directo al punto, sin vueltas.
            </p>

            <dl className="space-y-5 border-t border-[var(--border-sub)] pt-10">
              {[
                { dt: 'WhatsApp', dd: '+506 7175 7171' },
                { dt: 'Ubicación', dd: 'Costa Rica' },
                { dt: 'Horario',   dd: 'Lun–Vie, 8am–6pm' },
              ].map(({ dt, dd }) => (
                <div key={dt} className="flex items-baseline gap-6">
                  <dt className="w-24 label-sm shrink-0">{dt}</dt>
                  <dd className="text-sm font-medium text-2">{dd}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
            className="bg-[var(--surface)] border border-[var(--border-sub)] p-7 md:p-9"
          >
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { label: 'Nombre',  type: 'text', placeholder: 'Ej. Carlos Mendoza' },
                  { label: 'Negocio', type: 'text', placeholder: 'Ej. Cafeoteca'      },
                ].map(f => (
                  <div key={f.label} className="flex flex-col gap-2">
                    <label className="label-sm">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      className="border border-[var(--border-sub)] bg-[var(--surface-2)] px-4 py-3 text-sm text-1 placeholder:text-3 focus:border-brand focus:outline-none transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label className="label-sm">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+506 8888 8888"
                  required
                  className="border border-[var(--border-sub)] bg-[var(--surface-2)] px-4 py-3 text-sm text-1 placeholder:text-3 focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label-sm">¿Qué necesitás?</label>
                <textarea
                  rows={4}
                  placeholder="Contanos sobre tu proyecto..."
                  required
                  className="resize-none border border-[var(--border-sub)] bg-[var(--surface-2)] px-4 py-3 text-sm text-1 placeholder:text-3 focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button
                  type="submit"
                  className="btn btn-white flex-1 justify-center"
                >
                  Enviar proyecto <ArrowUpRight size={15} />
                </button>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost flex-1 justify-center"
                >
                  WhatsApp
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
