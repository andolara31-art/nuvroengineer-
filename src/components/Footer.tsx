export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-brand-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-xl font-display font-bold tracking-tight text-brand-white">
            LEAD<span className="text-brand-platinum/50 font-light">PILOT</span>
          </a>
          <p className="text-sm text-brand-platinum/50">
            CRM para negocios serios.
          </p>
        </div>
        
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a href="#servicios" className="text-sm font-medium text-brand-platinum/70 hover:text-brand-white transition-colors">Servicios</a>
          <a href="#proyectos" className="text-sm font-medium text-brand-platinum/70 hover:text-brand-white transition-colors">Proyectos</a>
          <a href="#proceso" className="text-sm font-medium text-brand-platinum/70 hover:text-brand-white transition-colors">Proceso</a>
          <a href="#inversion" className="text-sm font-medium text-brand-platinum/70 hover:text-brand-white transition-colors">Inversión</a>
          <a href="#contacto" className="text-sm font-medium text-brand-platinum/70 hover:text-brand-white transition-colors">Contacto</a>
        </nav>
        
        <div className="text-sm text-brand-platinum/50">
          &copy; {currentYear} LEADPILOT CRM. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
