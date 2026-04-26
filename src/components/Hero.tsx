import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = (msg: string) => `https://wa.me/50671757171?text=${encodeURIComponent(msg)}`;

  const screens = [
    { name: 'Menú Digital', icon: '🍔', color: 'bg-orange-600', rotation: '-12deg', scale: 0.9, x: -40, y: -20 },
    { name: 'Link in Bio', icon: '✨', color: 'bg-pink-500', rotation: '8deg', scale: 1.1, x: 20, y: 40 },
    { name: 'Invitación', icon: '🎈', color: 'bg-indigo-500', rotation: '-5deg', scale: 1, x: 80, y: -60 },
    { name: 'Catálogo', icon: '👟', color: 'bg-zinc-100', rotation: '15deg', scale: 0.95, x: 140, y: 20, dark: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-brand-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,102,255,0.15)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff22 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-[0.2em] mb-10">
               <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
               Tienda de Microproductos Digitales
            </div>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tighter text-brand-white mb-8 uppercase">
              Vende más <br/> <span className="text-brand-accent italic">hoy mismo.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-platinum/60 max-w-xl mb-12 leading-tight font-light">
              De una idea suelta a un link, QR o mini página <span className="text-brand-white font-medium italic underline decoration-brand-accent underline-offset-4">lista para vender</span> en menos de 72 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
              <a
                href="#express"
                className="glow-button w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-brand-accent text-brand-white font-black hover:scale-105 transition-all text-xl uppercase tracking-tighter shadow-2xl shadow-brand-accent/20"
              >
                Ver Catálogo
                <ArrowRight size={24} />
              </a>
              <div className="flex items-center gap-4 text-left">
                <div className="w-px h-12 bg-white/10 hidden sm:block" />
                <div>
                  <span className="text-[10px] font-mono text-brand-platinum/30 uppercase tracking-[0.2em] block mb-1">Inversión desde</span>
                  <span className="text-3xl font-display font-black text-brand-white leading-none">$10.00</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center text-[10px] font-mono text-brand-platinum/40 uppercase tracking-widest">
               <span>Menús</span>
               <span className="w-1 h-1 rounded-full bg-brand-accent" />
               <span>Invitaciones</span>
               <span className="w-1 h-1 rounded-full bg-brand-accent" />
               <span>Link Bio</span>
               <span className="w-1 h-1 rounded-full bg-brand-accent" />
               <span>Catálogos</span>
               <span className="w-1 h-1 rounded-full bg-brand-accent" />
               <span>Promos</span>
            </div>
          </motion.div>

          {/* Right Column: Visual Product Wall */}
          <div className="lg:col-span-6 xl:col-span-5 relative h-[500px] lg:h-[700px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {screens.map((screen, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: screen.scale, 
                    rotate: screen.rotation,
                    x: screen.x,
                    y: screen.y
                  }}
                  transition={{ 
                    delay: 0.4 + (i * 0.15), 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`absolute w-60 rounded-[40px] overflow-hidden aspect-[9/19] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] ${screen.color} glass-card p-6 border-white/10`}
                >
                   <div className="flex flex-col h-full">
                      <div className="flex justify-between items-center mb-8">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xl">{screen.icon}</div>
                        <div className="w-10 h-1 bg-white/10 rounded-full" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 w-full bg-white/10 rounded-lg" />
                        <div className="h-4 w-2/3 bg-white/10 rounded-lg" />
                      </div>
                      <div className="mt-auto p-4 rounded-2xl bg-black/10 backdrop-blur-md border border-white/5">
                        <div className="h-2 w-12 bg-white/20 rounded-full mb-3" />
                         <div className="h-6 w-full bg-white/40 rounded-xl" />
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Display */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-12">
             {screens.slice(0, 2).map((screen, i) => (
               <div key={i} className={`rounded-3xl aspect-[9/16] ${screen.color} p-6 flex flex-col shadow-2xl relative overflow-hidden`}>
                  <span className="text-3xl mb-4">{screen.icon}</span>
                  <div className="mt-auto p-3 rounded-2xl bg-black/10 backdrop-blur-sm border border-white/5">
                    <div className="h-1 w-8 bg-white/30 rounded-full mb-2" />
                    <div className="h-4 w-full bg-white/30 rounded-lg" />
                  </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}

