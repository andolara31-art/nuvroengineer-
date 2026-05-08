import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Problema', href: '#problema' },
  { name: 'Express', href: '#express' },
  { name: 'Landing Pages', href: '#landings' },
  { name: 'Custom', href: '#custom' },
  { name: 'Proyectos', href: '#proyectos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6 md:py-8'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-[32px] py-4 px-6 md:px-8 shadow-2xl' : ''
      }`}>
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0066FF] flex items-center justify-center text-white font-display font-bold text-xl uppercase tracking-tighter group-hover:bg-[#0047B8] transition-colors">
            N.
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-display font-bold tracking-tight text-white uppercase leading-none">NUVRO ENGINEER</span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Estudio Digital</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/50 hover:text-[#0066FF] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wide hover:bg-[#0066FF] hover:text-white transition-all shadow-xl"
          >
            Iniciar Proyecto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full p-6 lg:hidden"
          >
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-6 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-display font-medium text-white/70 hover:text-white uppercase tracking-wider px-4 py-3 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full py-4 rounded-2xl bg-[#0066FF] text-white text-sm font-bold uppercase tracking-wider text-center"
              >
                Iniciar Proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
