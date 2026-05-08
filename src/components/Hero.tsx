import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const mockups = [
  { id: '1', title: 'Link Bio', img: '/assets/nuvro/link-bio.png', color: 'bg-[#0066FF]' },
  { id: '2', title: 'Menú QR', img: '/assets/nuvro/menu-qr.png', color: 'bg-white' },
  { id: '3', title: 'Invitación', img: '/assets/nuvro/digital-invitation.png', color: 'bg-[#0066FF]' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0A0A] pt-24 pb-16 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#0066FF]/10 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[#0047B8]/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* Left: Text */}
        <div className="flex flex-col relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-sm font-medium tracking-widest text-[#0066FF] uppercase">Digital Product Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight text-white mb-6"
          >
            Productos digitales, webs y sistemas para negocios que quieren <span className="text-[#0066FF]">vender mejor.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-sans leading-relaxed tracking-wide mb-10 max-w-xl"
          >
            Creamos microservicios rápidos, landing pages, webs premium, automatización y sistemas a medida para que tu negocio se vea mejor, responda mejor y venda con más estructura.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a href="#express" className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#0066FF] rounded-full text-white font-bold leading-none tracking-wide hover:bg-[#0052cc] transition-all text-center">
              Ver soluciones
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="flex items-center justify-center px-8 py-4 border border-white/20 rounded-full text-white font-bold leading-none tracking-wide hover:bg-white/10 transition-all text-center">
              Crear mi proyecto
            </a>
          </motion.div>
        </div>

        {/* Right: Visual Collage */}
        <div className="relative w-full h-[500px] lg:h-[600px] flex justify-center items-center">
            {mockups.map((item, idx) => {
              const positions = [
                "top-[5%] right-[15%] rotate-3 z-10",
                "bottom-[10%] left-[5%] -rotate-6 z-20",
                "top-[30%] left-[30%] rotate-2 z-30"
              ];
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`absolute ${positions[idx]} w-[200px] sm:w-[240px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#111] group cursor-pointer transition-all`}
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-white font-medium text-xs tracking-wider uppercase">{item.title}</span>
                  </div>
                </motion.div>
              )
            })}
            
            {/* Connecting Line Effect */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                d="M 60 20 Q 40 50 20 80" 
                fill="none" 
                stroke="#0066FF" 
                strokeWidth="0.5" 
                className="opacity-50"
              />
            </svg>
        </div>
      </div>
    </section>
  );
}
