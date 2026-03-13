import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Inversión', href: '#inversion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/40 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold tracking-tight text-brand-white">
          NUVRO<span className="text-brand-platinum/50 font-light">ENGINEER</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-platinum/70 hover:text-brand-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="glow-button px-5 py-2.5 rounded-full bg-brand-accent text-brand-black text-sm font-semibold hover:bg-brand-accent/90 transition-colors"
          >
            Iniciar Proyecto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-platinum"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-brand-dark/90 backdrop-blur-md border-b border-white/5 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-brand-platinum/80 hover:text-brand-white py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="glow-button mt-4 px-6 py-3 rounded-full bg-brand-accent text-brand-black text-center font-semibold"
          >
            Iniciar Proyecto
          </a>
        </motion.div>
      )}
    </header>
  );
}
