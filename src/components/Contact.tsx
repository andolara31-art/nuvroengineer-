import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Loader2, CheckCircle2, XCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '63d09dec-85b0-4fcb-bf6f-480e8d6909d4',
          subject: 'Nueva solicitud desde Nuvro Engineer',
          from_name: 'Nuvro Engineer',
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          project: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-32 md:py-48 bg-brand-dark/40 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,229,255,0.1)_0%,rgba(10,10,10,1)_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
            08. Contacto
          </h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-brand-white leading-[1.1] tracking-tight mb-6"
          >
            Es momento de elevar el nivel de tu negocio.
          </motion.h3>
          
          <p className="text-lg md:text-xl text-brand-platinum/60 leading-relaxed font-light">
            Completá el formulario y te responderemos en menos de 24 horas para agendar una llamada exploratoria.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            
            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-brand-platinum/80">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-brand-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-brand-platinum/80">Email profesional</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-brand-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="tu@empresa.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-brand-platinum/80">Tipo de proyecto</label>
                <select 
                  id="project" 
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-brand-white focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Seleccionar...</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Web Corporativa">Web Corporativa</option>
                  <option value="Mini SaaS">Mini SaaS</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-brand-platinum/80">Presupuesto estimado</label>
                <select 
                  id="budget" 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-brand-white focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Seleccionar...</option>
                  <option value="Menos de $1,000">Menos de $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="Más de $3,000">Más de $3,000</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-brand-platinum/80">Mensaje</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-brand-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                placeholder="Contanos brevemente sobre tu negocio y qué necesitás"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="glow-button w-full py-4 rounded-xl bg-brand-accent text-brand-black font-semibold hover:bg-brand-accent/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Enviando...
                </>
              ) : (
                'Solicitar propuesta'
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-black/95 backdrop-blur-sm rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-display font-medium text-brand-white mb-2">¡Solicitud enviada!</h4>
                <p className="text-brand-platinum/70 mb-8">
                  Hemos recibido tu información correctamente. Nos pondremos en contacto con vos en menos de 24 horas.
                </p>
                <button 
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 rounded-full border border-white/20 text-brand-white font-medium hover:bg-white/5 transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-start gap-3 mt-4"
              >
                <XCircle size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm">
                  Hubo un error al enviar tu solicitud. Por favor, intentá nuevamente o contactanos por WhatsApp.
                </p>
              </motion.div>
            )}
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-brand-platinum/60 mb-4">¿Preferís un trato más directo?</p>
            <a
              href="https://wa.me/50671757171"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-brand-white font-medium hover:bg-white/5 transition-colors"
            >
              <MessageCircle size={18} />
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
