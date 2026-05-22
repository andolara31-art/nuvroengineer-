const links = [
  { label: 'Servicios',  href: '#express'   },
  { label: 'Landings',   href: '#landings'  },
  { label: 'Custom',     href: '#custom'    },
  { label: 'Proyectos',  href: '#proyectos' },
  { label: 'Contacto',   href: '#contacto'  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-sub)] bg-nuvro py-14">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div
              className="grid h-8 w-8 place-items-center bg-brand text-[var(--bg)]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem' }}
            >
              N
            </div>
            <span
              className="label-sm text-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.28em', fontSize: '0.75rem' }}
            >
              NUVRO ENGINEER
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="label-sm hover:text-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--border-sub)] pt-8 sm:flex-row sm:items-center">
          <span className="label-sm">
            © {new Date().getFullYear()} NUVRO ENGINEER — TODOS LOS DERECHOS RESERVADOS
          </span>
          <div className="flex items-center gap-2 label-sm">
            <span className="h-[5px] w-[5px] rounded-full bg-brand" />
            COSTA RICA
          </div>
        </div>

      </div>
    </footer>
  );
}
