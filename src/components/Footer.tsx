export default function Footer() {
  const links = [
    { name: 'Servicios', href: '#express' },
    { name: 'Landings', href: '#landings' },
    { name: 'Custom', href: '#custom' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0A] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[#2B6CB0] font-display text-lg font-black uppercase text-white">
              N
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-display font-black text-white uppercase tracking-[0.12em]">NUVRO</span>
              <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold">Engineer</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Bottom */}
          <div className="flex w-full flex-col items-center gap-3 border-t border-white/[0.05] pt-8 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/20">
              NUVROENGINEER.COM
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/15">
              <span className="h-1 w-1 rounded-full bg-[#2B6CB0]" />
              <span>Costa Rica</span>
              <span>·</span>
              <span>© {new Date().getFullYear()} NUVRO ENGINEER</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
