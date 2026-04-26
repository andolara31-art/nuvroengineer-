import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloating() {
  const whatsappNumber = "50671757171";
  const msg = "Hola NUVRO, estoy viendo la web y me interesa un microproducto digital.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] md:bottom-12 md:right-12"
      id="whatsapp-floating"
    >
      <MessageSquare size={32} fill="currentColor" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
      </span>
    </motion.a>
  );
}
