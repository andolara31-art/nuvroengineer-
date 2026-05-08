import { motion } from 'motion/react';
import { QrCode, Link as LinkIcon, Mail, ShoppingCart, Layout, MessageCircle, ScanLine, ArrowRight } from 'lucide-react';

const products = [
  {
    title: "Menú Digital QR",
    pain: "Tu menú no debería ser una foto borrosa.",
    desc: "Un menú visual, claro y compartible para que el cliente vea, elija y pida más fácil.",
    cta: "Quiero menú QR",
    icon: <QrCode size={24} />,
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    iconColor: 'bg-orange-500 text-white',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
  },
  {
    title: "Link Bio Vivo",
    pain: "Un link lleno de botones no siempre guía.",
    desc: "Un mini sitio mobile-first que lleva al cliente a WhatsApp, ubicación, servicios o reserva.",
    cta: "Quiero link bio",
    icon: <LinkIcon size={24} />,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    iconColor: 'bg-blue-600 text-white',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800',
  },
  {
    title: "Invitación Digital",
    pain: "Una invitación plana se olvida rápido.",
    desc: "Invitaciones con ubicación, RSVP, calendario y experiencia visual memorable.",
    cta: "Quiero invitación",
    icon: <Mail size={24} />,
    color: 'bg-pink-50 text-pink-600 border-pink-200',
    iconColor: 'bg-pink-500 text-white',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
  },
  {
    title: "Catálogo Express",
    pain: "No mandés 30 fotos sueltas por WhatsApp.",
    desc: "Una vitrina digital con productos, precios, categorías y botón de consulta.",
    cta: "Quiero catálogo",
    icon: <ShoppingCart size={24} />,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    iconColor: 'bg-emerald-500 text-white',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800',
  },
  {
    title: "Landing de Promoción",
    pain: "Una promo en historia desaparece.",
    desc: "Página rápida para vender una oferta, evento, producto o servicio con CTA claro.",
    cta: "Quiero landing",
    icon: <Layout size={24} />,
    color: 'bg-rose-50 text-rose-600 border-rose-200',
    iconColor: 'bg-rose-500 text-white',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
  },
  {
    title: "QR Comercial",
    pain: "Un QR mal diseñado no comunica valor.",
    desc: "QR para mesas, empaques, mostradores o tarjetas con experiencia digital detrás.",
    cta: "Quiero QR",
    icon: <ScanLine size={24} />,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    iconColor: 'bg-amber-500 text-white',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800',
  },
  {
    title: "Kit WhatsApp Business",
    pain: "Responder rápido no sirve si todo está desordenado.",
    desc: "Mensajes, respuestas rápidas, etiquetas y flujo inicial para atender mejor.",
    cta: "Ordenar WhatsApp",
    icon: <MessageCircle size={24} />,
    color: 'bg-teal-50 text-teal-600 border-teal-200',
    iconColor: 'bg-teal-500 text-white',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800',
  }
];

export default function NuvroExpress() {
  return (
    <section id="express" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-bold tracking-widest uppercase mb-6"
          >
            Nuvro Express
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-[#111827] mb-6 leading-tight tracking-tight"
          >
            Soluciones rápidas para verte mejor y vender más fácil.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#6B7280] font-sans"
          >
            Microproductos digitales diseñados para negocios que necesitan una mejora visual y comercial sin esperar meses.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((prod, idx) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className={`rounded-[32px] overflow-hidden group flex flex-col h-full border ${prod.color.split(' ')[2]} ${prod.color.split(' ')[0]} transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img 
                  src={prod.image} 
                  alt={prod.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${prod.iconColor}`}>
                  {prod.icon}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-display font-bold text-[#111827] mb-3">{prod.title}</h3>
                <p className="text-sm font-bold text-[#0066FF] mb-3">"{prod.pain}"</p>
                <p className="text-[#6B7280] font-sans leading-relaxed mb-8 flex-1 text-[15px]">
                  {prod.desc}
                </p>
                <a href={`https://wa.me/50671757171?text=${encodeURIComponent(`Hola NUVRO, quiero info sobre: ${prod.title}`)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full p-4 rounded-xl font-bold bg-[#111827] text-white hover:bg-[#0066FF] transition-colors group/btn shadow-md">
                  {prod.cta}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
