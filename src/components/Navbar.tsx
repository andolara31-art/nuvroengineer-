import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Servicios', href: '#express' },
  { name: 'Landing Pages', href: '#landings' },
  { name: 'Custom', href: '#custom' },
  { name: 'Proyectos', href: '#proyectos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 transition-all duration-500 ${
        scrolled
          ? 'my-3 bg-[#0A0A0A]/85 backdrop-blur-2xl border border-white/[0.07] py-3 shadow-2xl shadow-black/50'
          : 'py-6 md:py-8'
      }`}>
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center bg-[#2B6CB0] font-display text-lg font-black uppercase text-white">
            N
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-display font-black text-white uppercase tracking-[0.12em]">NUVRO</span>
            <span className="text-[10px] text-white/35 uppercase tracking-[0.4em] font-bold">Engineer</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/45 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2.5 bg-white text-[#0A0A0A] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#2B6CB0] hover:text-white transition-all duration-200"
          >
            Iniciar Proyecto
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full lg:hidden"
          >
            <div className="mx-4 mt-2 bg-[#111111] border border-white/[0.08] p-5 shadow-2xl shadow-black/60">
              <div className="flex flex-col gap-1 mb-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.04] transition-all border-b border-white/[0.05] last:border-b-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3.5 bg-white text-[#0A0A0A] text-sm font-bold uppercase tracking-wider text-center hover:bg-[#2B6CB0] hover:text-white transition-all"
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
