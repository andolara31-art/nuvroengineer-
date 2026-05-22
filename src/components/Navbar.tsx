import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Servicios',  href: '#express'   },
  { label: 'Landings',   href: '#landings'  },
  { label: 'Custom',     href: '#custom'    },
  { label: 'Proyectos',  href: '#proyectos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100]">
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 transition-all duration-500 ${
          scrolled
            ? 'my-3 bg-[var(--surface)] border border-[var(--border-sub)] py-3 shadow-[0_8px_40px_oklch(0%_0_0/0.5)]'
            : 'py-6 md:py-8'
        }`}
        style={{ backdropFilter: scrolled ? 'blur(24px)' : 'none' }}
      >
        {/* Logo */}
        <a href="/" className="group flex items-center gap-3">
          <div
            className="grid h-8 w-8 place-items-center bg-brand text-[var(--bg)]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem' }}
          >
            N
          </div>
          <span
            className="text-sm tracking-[0.28em] text-1"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            NUVRO ENGINEER
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="label-sm hover:text-1 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-white">
            Iniciar proyecto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center border border-[var(--border-sub)] text-2 lg:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-x-0 top-full lg:hidden"
          >
            <div className="mx-4 mt-2 bg-[var(--surface)] border border-[var(--border-sub)] p-5 shadow-[0_20px_60px_oklch(0%_0_0/0.5)]">
              {links.map(l => (
                <a key={l.label} href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[var(--border-sub)] py-3 label-sm hover:text-1 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setOpen(false)}
                className="btn btn-white mt-5 w-full justify-center"
              >
                Iniciar proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
