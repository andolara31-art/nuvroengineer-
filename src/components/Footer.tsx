export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-display font-bold tracking-tight text-white uppercase">
              NUVRO
            </span>
            <span className="text-2xl font-display font-light tracking-tight text-white/40 uppercase">
              ENGINEER
            </span>
          </div>
          <p className="text-white/60 font-light text-lg">Webs premium, sistemas y microservicios digitales.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 font-mono text-xs uppercase tracking-widest text-white/40">
          <a href="#problema" className="hover:text-[#D7FF45] transition-colors">Problema</a>
          <a href="#express" className="hover:text-[#D7FF45] transition-colors">Express</a>
          <a href="#landings" className="hover:text-[#D7FF45] transition-colors">Landings</a>
          <a href="#custom" className="hover:text-[#D7FF45] transition-colors">Custom</a>
          <a href="#proyectos" className="hover:text-[#D7FF45] transition-colors">Proyectos</a>
        </div>

        <div className="flex flex-col items-center gap-12 border-t border-white/5 pt-16">
          <div className="px-6 py-2 rounded-full border border-white/10 bg-[#111111]/5 text-[10px] font-mono tracking-widest text-white/60">
            NUVROENGINEER.COM
          </div>
          
          <div className="text-[10px] font-mono tracking-widest text-white/20 uppercase text-center space-y-4">
            <p>© {new Date().getFullYear()} NUVRO ENGINEER. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D7FF45]" />
              <span>COSTA RICA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
