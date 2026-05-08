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
      <div className={`max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/75 backdrop-blur-2xl border border-white/10 py-3 shadow-2xl shadow-black/40' : ''
      }`}>
        <a href="/" className="flex items-center gap-4 group">
          <div className="w-11 h-11 bg-[#111111] text-white flex items-center justify-center font-display text-xl uppercase leading-none border-b-4 border-[#2B6CB0] group-hover:bg-[#2B6CB0] group-hover:text-white transition-colors">
            N
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base md:text-lg font-display text-white uppercase">NUVRO</span>
            <span className="text-[11px] md:text-xs text-white/48 uppercase tracking-[0.36em] font-extrabold">Engineer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/50 hover:text-[#2B6CB0] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-6 py-3 bg-[#111111] text-white text-xs font-extrabold uppercase tracking-[0.2em] hover:bg-[#2B6CB0] hover:text-white transition-all shadow-xl"
          >
            Iniciar Proyecto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-12 h-12 bg-[#111111]/5 border border-white/10 flex items-center justify-center text-white"
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
            <div className="bg-[#0A0A0A] border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
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
                className="mt-4 w-full py-4 bg-[#FFFFFF] text-[#0A0A0A] text-sm font-bold uppercase tracking-wider text-center"
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
