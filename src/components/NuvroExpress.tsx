import { motion } from 'motion/react';
import { QrCode, MessageSquare, Link as LinkIcon, FileText, ShoppingBag, Send, CreditCard, Layout } from 'lucide-react';

const products = [
  {
    icon: <Send className="text-pink-400" />,
    title: 'Invitaciones digitales animadas',
    price: 'Desde: $10',
    description: 'Para baby shower, cumpleaños, bautizos, bodas, revelaciones y eventos. Link compartible, música, ubicación y confirmación.',
    cta: 'Crear invitación',
    badge: 'Rápido',
    accent: 'bg-pink-400'
  },
  {
    icon: <QrCode className="text-orange-400" />,
    title: 'Menú digital QR',
    price: 'Desde: $25',
    description: 'Para sodas, restaurantes, cafeterías y food trucks. Menú visual, categorías, fotos, precios, pedido por WhatsApp y QR impreso.',
    cta: 'Quiero mi menú',
    badge: 'QR',
    accent: 'bg-orange-400'
  },
  {
    icon: <LinkIcon className="text-brand-blue" />,
    title: 'Link Bio vivo',
    price: 'Desde: $25',
    description: 'Una mini landing para Instagram con servicios, precios, ubicación, agenda, catálogo y WhatsApp directo.',
    cta: 'Crear Link Bio',
    badge: 'Link',
    accent: 'bg-brand-blue'
  },
  {
    icon: <ShoppingBag className="text-emerald-400" />,
    title: 'Catálogo express',
    price: 'Desde: $35',
    description: 'Dejá de mandar 20 fotos por WhatsApp. Mostrá productos con categorías, precios y botón de pedido directo.',
    cta: 'Armar catálogo',
    badge: 'WhatsApp',
    accent: 'bg-emerald-400'
  },
  {
    icon: <Layout className="text-purple-400" />,
    title: 'Página de promoción',
    price: 'Desde: $49',
    description: 'Una mini landing para ofertas, lanzamientos, combos o campañas puntuales. Diseño de alto impacto.',
    cta: 'Lanzar promo',
    badge: '24-72h',
    accent: 'bg-purple-400'
  },
  {
    icon: <MessageSquare className="text-brand-accent" />,
    title: 'Kit WhatsApp Business',
    price: 'Desde: $25',
    description: 'Mensajes, respuestas rápidas, etiquetas, QR, catálogo básico, textos para estados y guion de cierre.',
    cta: 'Ordenar WhatsApp',
    badge: 'Rápido',
    accent: 'bg-brand-accent'
  },
  {
    icon: <CreditCard className="text-indigo-400" />,
    title: 'Tarjeta digital profesional',
    price: 'Desde: $20',
    description: 'Contacto, servicios, redes, ubicación, QR y botón para guardar contacto en una presentación profesional.',
    cta: 'Crear tarjeta',
    badge: 'QR',
    accent: 'bg-indigo-400'
  },
  {
    icon: <QrCode className="text-yellow-400" />,
    title: 'QR comercial premium',
    price: 'Desde: $10',
    description: 'Un QR que no lleva a algo feo. Abre menú, WhatsApp, catálogo, ubicación, promoción o tarjeta digital.',
    cta: 'Crear QR',
    badge: 'QR',
    accent: 'bg-yellow-400'
  }
];

export default function NuvroExpress() {
  const whatsappUrl = (msg: string) => `https://wa.me/506XXXXXXXX?text=${encodeURIComponent(msg)}`;

  return (
    <section id="express" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-4 block">
            01. NUVRO EXPRESS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-white leading-tight mb-6">
            Productos digitales rápidos para <br className="hidden md:block" /> negocios que necesitan vender ya.
          </h2>
          <p className="text-lg text-brand-platinum/60 max-w-2xl font-light">
            Links, QR y mini páginas diseñadas para que tu negocio se vea mejor, se comparta fácil y reciba más mensajes por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group p-6 rounded-2xl flex flex-col h-full hover:border-brand-accent/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-accent/10 transition-colors">
                  {product.icon}
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${product.accent} text-brand-black`}>
                  {product.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-medium text-brand-white mb-2">
                {product.title}
              </h3>
              
              <div className="text-brand-accent font-bold text-sm mb-4">
                {product.price}
              </div>
              
              <p className="text-sm text-brand-platinum/60 mb-8 leading-relaxed font-light">
                {product.description}
              </p>
              
              <div className="mt-auto">
                <a
                  href={whatsappUrl(`Hola NUVRO, quiero ${product.cta.toLowerCase().includes('crear') ? 'crear una' : 'mi/un'} ${product.title.toLowerCase()} para mi negocio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-white/5 group-hover:bg-brand-accent text-brand-white font-medium text-sm transition-all duration-300"
                >
                  {product.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
