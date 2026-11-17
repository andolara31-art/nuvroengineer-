import {
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  Clapperboard,
  AtSign,
  LayoutTemplate,
  Menu,
  MessageCircle,
  Phone,
  QrCode,
  Search,
  ShoppingBag,
  Star,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { BUSINESS_WHATSAPP_DISPLAY, whatsappUrl } from "../../lib/site";
import "./corporate-header.css";

type Solution = {
  name: string;
  href: string;
  description: string;
  terms: string;
  icon: LucideIcon;
};

const solutions: Solution[] = [
  {
    name: "Página web",
    icon: LayoutTemplate,
    href: "/diseno-web-costa-rica",
    description: "Lo que ofrecés, tus horarios y cómo escribirte.",
    terms:
      "diseno web pagina paginas sitio presencia digital negocio landing catalogo",
  },
  {
    name: "Respuestas automáticas",
    icon: Workflow,
    href: "/automatizaciones-negocios",
    description: "Que lo que siempre te preguntan se responda solo.",
    terms:
      "automatizaciones automatizacion whatsapp consultas clientes procesos",
  },
  {
    name: "Menú con código QR",
    icon: QrCode,
    href: "/menu-qr-restaurantes",
    description: "Tus clientes ven el menú escaneando un código.",
    terms: "menu qr restaurante restaurantes cafeteria soda carta comida",
  },
  {
    name: "Reseñas en Google",
    icon: Star,
    href: "/resenas-google-qr-nfc",
    description: "Una placa para que te dejen reseñas con un toque.",
    terms:
      "resena resenas google qr nfc base soporte placa tarjeta opiniones reputacion",
  },
  {
    name: "Tienda en línea",
    icon: ShoppingBag,
    href: "/tiendas-online-shopify",
    description: "Tus productos con precio y carrito para comprar.",
    terms:
      "tienda tiendas ecommerce e-commerce shopify comercio electronico vender productos catalogo carrito pagos",
  },
  {
    name: "Videos y publicidad",
    icon: Clapperboard,
    href: "/videos-publicidad-negocios",
    description: "Videos e imágenes para tus redes.",
    terms:
      "video videos publicidad anuncios promocion contenido redes sociales reels piezas negocios",
  },
  {
    name: "Inteligencia artificial (IA)",
    icon: Bot,
    href: "/ia-para-negocios",
    description: "Herramientas que te ahorran tareas repetidas.",
    terms: "inteligencia artificial ai aprender formacion",
  },
];
const searchablePages: Omit<Solution, "icon">[] = [
  ...solutions,
  {
    name: "Paquetes para tu negocio",
    href: "/#paquetes",
    description: "Combinaciones de servicios según lo que necesitás resolver.",
    terms:
      "paquete paquetes presencia lanzamiento ventas crecimiento negocio soluciones",
  },
  {
    name: "Guía de IA y automatización para pymes",
    href: "/guias/ia-y-automatizacion-para-pymes",
    description: "Ideas prácticas para empezar con criterio.",
    terms: "aprender guia recursos inteligencia artificial procesos",
  },
];
const normalizeSearch = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

function ServiceSearch({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);
  const terms = normalizeSearch(submittedQuery ?? "")
    .split(/\s+/)
    .filter(Boolean);
  const results = searchablePages.filter((page) => {
    const text = normalizeSearch(
      `${page.name} ${page.description} ${page.terms}`,
    );
    return terms.every((term) =>
      term.length <= 2 ? text.split(/\W+/).includes(term) : text.includes(term),
    );
  });
  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  }
  return (
    <div
      className={`corp-search${compact ? " corp-search-compact" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") setSubmittedQuery(null);
      }}
    >
      <form className="corp-search-form" role="search" onSubmit={search}>
        <label className="corp-sr-only" htmlFor={`${id}-query`}>
          Buscar soluciones y recursos
        </label>
        <input
          id={`${id}-query`}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscá una solución"
          maxLength={100}
          aria-controls={submittedQuery !== null ? `${id}-results` : undefined}
          autoComplete="off"
        />
        <button type="submit" aria-label="Buscar">
          <Search size={20} strokeWidth={1.7} />
        </button>
      </form>
      {submittedQuery !== null && (
        <div className="corp-search-results" id={`${id}-results`}>
          <div className="corp-search-results-top">
            <p role="status">
              {results.length
                ? `${results.length} ${results.length === 1 ? "resultado" : "resultados"}${submittedQuery ? ` para “${submittedQuery}”` : " disponibles"}`
                : `Sin resultados para “${submittedQuery}”`}
            </p>
            <button
              type="button"
              onClick={() => setSubmittedQuery(null)}
              aria-label="Cerrar resultados"
            >
              <X size={18} />
            </button>
          </div>
          {results.length ? (
            <ul>
              {results.map((page) => (
                <li key={page.href}>
                  <a href={page.href}>
                    <span>
                      <strong>{page.name}</strong>
                      <small>{page.description}</small>
                    </span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="corp-search-empty">
              Probá con “web”, “reseñas”, “Shopify” o “videos”. También podés{" "}
              <a href="/#contacto">contarnos qué necesitás</a>.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function Brand() {
  return (
    <a className="corp-brand" href="/" aria-label="NUVRO ENGINEER, inicio">
      <span className="corp-brand-word">NUVRO ENGINEER</span>
    </a>
  );
}

function useCloseMenusOnOutsideClick() {
  useEffect(() => {
    const menus = () =>
      document.querySelectorAll<HTMLDetailsElement>(
        ".corp-solutions-menu[open], .corp-mobile-menu[open]",
      );
    const onClick = (event: MouseEvent) => {
      menus().forEach((menu) => {
        if (!menu.contains(event.target as Node)) menu.removeAttribute("open");
      });
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      menus().forEach((menu) => {
        menu.removeAttribute("open");
        menu.querySelector("summary")?.focus();
      });
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
}

export default function SiteHeader() {
  useCloseMenusOnOutsideClick();
  const contact = whatsappUrl(
    "Hola, me gustaría conocer las soluciones de NUVRO para mi negocio.",
  );
  return (
    <>
      <a className="corp-skip" href="#contenido">
        Saltar al contenido
      </a>
      <aside className="corp-utility" aria-label="Contacto rápido">
        <div className="corp-header-shell corp-utility-inner">
          <span>
            Hecho para negocios ticos.{" "}
            <a className="pop-utility-new" href="/#que-necesito">
              ¿Qué necesito? Descubrilo en 2 preguntas
            </a>
          </span>
          <div>
            <a
              href={contact}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribinos por WhatsApp"
            >
              <MessageCircle size={14} aria-hidden="true" /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/nuvroengineer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @nuvroengineer"
            >
              <AtSign size={14} aria-hidden="true" /> nuvroengineer
            </a>
          </div>
        </div>
      </aside>
      <header className="corp-header">
        <div className="corp-header-shell corp-header-main">
          <Brand />
          <div className="corp-header-search">
            <ServiceSearch />
          </div>
          <a
            className="corp-header-contact"
            href={contact}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="corp-phone-icon">
              <Phone size={19} aria-hidden="true" />
            </span>
            <span>
              <small>Hablemos de tu negocio</small>
              <strong>{BUSINESS_WHATSAPP_DISPLAY}</strong>
            </span>
          </a>
          <details className="corp-mobile-menu">
            <summary aria-label="Menú principal">
              <Menu className="pop-menu-open" size={22} aria-hidden="true" />
              <X className="pop-menu-close" size={22} aria-hidden="true" />
              <span>Menú</span>
            </summary>
            <div
              className="corp-mobile-panel"
              onClick={(event) => {
                if ((event.target as Element).closest("a")) {
                  event.currentTarget
                    .closest("details")
                    ?.removeAttribute("open");
                }
              }}
            >
              <ServiceSearch compact />
              <nav aria-label="Navegación principal móvil">
                <a href="/">Inicio</a>
                <details className="corp-mobile-solutions">
                  <summary>
                    Servicios <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <div>
                    {solutions.map(({ href, name, icon: Icon }) => (
                      <a key={href} href={href}>
                        <span className="pop-icon" aria-hidden="true">
                          <Icon size={16} strokeWidth={1.8} />
                        </span>
                        <span className="pop-mobile-label">{name}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </details>
                <a href="/#que-necesito">¿Qué necesito?</a>
                <a href="/#proceso">Cómo trabajamos</a>
                <a href="/#demostraciones">Ejemplos</a>
                <a href="/#preguntas">Preguntas</a>
                <a href="/#atencion">Atención</a>
              </nav>
              <a
                className="corp-nav-cta"
                href={contact}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablemos <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </details>
        </div>
        <div className="corp-header-nav-border">
          <div className="corp-header-shell corp-header-nav-row">
            <nav className="corp-desktop-nav" aria-label="Navegación principal">
              <details className="corp-solutions-menu">
                <summary>
                  Servicios <ChevronDown size={14} aria-hidden="true" />
                </summary>
                <div className="corp-solutions-panel">
                  <p>
                    Servicios
                    <span className="pop-burst" aria-hidden="true">
                      7
                    </span>
                  </p>
                  {solutions.map(
                    ({ href, name, description, icon: Icon }, index) => (
                      <a
                        key={href}
                        href={href}
                        style={{ "--i": index } as CSSProperties}
                      >
                        <span className="pop-icon" aria-hidden="true">
                          <Icon size={18} strokeWidth={1.8} />
                        </span>
                        <span>
                          <strong>{name}</strong>
                          <small>{description}</small>
                        </span>
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    ),
                  )}
                </div>
              </details>
              <a href="/#que-necesito">¿Qué necesito?</a>
              <a href="/#proceso">Cómo trabajamos</a>
              <a href="/#demostraciones">Ejemplos</a>
              <a href="/#preguntas">Preguntas</a>
            </nav>
            <a
              className="corp-nav-cta"
              href={contact}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
