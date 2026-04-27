export default function Footer() {
  return (
    <footer className="bg-[#000000] relative overflow-hidden flex flex-col items-center justify-center border-t border-brand-accent/10 pt-32 pb-8">
      {/* Upper tag / Phrase */}
      <div className="relative z-10 text-center mb-8 px-6">
        <p className="text-xl md:text-3xl font-serif italic text-brand-white/80 font-light max-w-2xl mx-auto">
          Construido en Costa Rica para negocios que no se conforman.
        </p>
      </div>

      {/* Giant NUVRO Text */}
      <div className="w-full flex justify-center items-center pointer-events-none select-none relative z-0 -mt-8 md:-mt-16">
        <h2 className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] leading-[0.8] font-serif font-bold text-[#111111] tracking-tighter">
          NUVRO
        </h2>
      </div>

      {/* Bottom Info Row */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-16 pb-4">
        <div className="flex items-center gap-8">
          <a href="#" className="text-brand-platinum/40 hover:text-brand-white transition-colors text-sm font-mono tracking-widest uppercase">
            Legal
          </a>
          <a href="#" className="text-brand-platinum/40 hover:text-brand-white transition-colors text-sm font-mono tracking-widest uppercase">
            Instagram
          </a>
          <a href="mailto:hello@nuvro.engineer" className="text-brand-platinum/40 hover:text-brand-white transition-colors text-sm font-mono tracking-widest uppercase">
            Mail
          </a>
        </div>
        
        <div className="text-[10px] font-mono tracking-widest text-brand-platinum/30 uppercase">
          Last deploy: 27.04.2026 · v1.0.4
        </div>
      </div>
    </footer>
  );
}
