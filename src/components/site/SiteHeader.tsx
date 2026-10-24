import { useId, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  Search,
  X,
} from "lucide-react";
import { BUSINESS_WHATSAPP_DISPLAY, whatsappUrl } from "../../lib/site";
import "./corporate-header.css";

const solutions = [
  {
    name: "Diseño web",
    href: "/diseno-web-costa-rica",
    description: "Tu negocio en una web clara y profesional.",
    terms: "pagina paginas sitio presencia digital negocio landing catalogo",
  },
  {
    name: "Automatizaciones",
    href: "/automatizaciones-negocios",
    description: "Conectá tareas y ordená el trabajo diario.",
    terms: "automatizacion whatsapp consultas clientes procesos",
  },
  {
    name: "Menú QR",
    href: "/menu-qr-restaurantes",
    description: "Una carta digital fácil de consultar.",
    terms: "restaurante restaurantes cafeteria soda carta comida",
  },
  {
    name: "Reseñas Google · QR/NFC",
    href: "/resenas-google-qr-nfc",
    description: "Un acceso directo para que tus clientes dejen su reseña.",
    terms:
      "resena resenas google qr nfc base soporte placa tarjeta opiniones reputacion",
  },
  {
    name: "Tiendas online / Shopify",
    href: "/tiendas-online-shopify",
    description: "Productos, carrito y una forma clara de comprar.",
    terms:
      "tienda tiendas ecommerce e-commerce shopify comercio electronico vender productos catalogo carrito pagos",
  },
  {
    name: "Videos y piezas publicitarias",
    href: "/videos-publicidad-negocios",
    description: "Contenido sencillo para mostrar lo que ofrecés.",
    terms:
      "video videos publicidad anuncios promocion contenido redes sociales reels piezas negocios",
  },
  {
    name: "IA para negocios",
    href: "/ia-para-negocios",
    description: "Aplicá inteligencia artificial a tu negocio.",
    terms: "inteligencia artificial ai aprender formacion",
  },
];
const searchablePages = [
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
      <span className="corp-brand-word">
        NUVRO<small>ENGINEER</small>
      </span>
    </a>
  );
}

export default function SiteHeader() {
  const contact = whatsappUrl(
    "Hola, me gustaría conocer las soluciones de NUVRO para mi negocio.",
  );
  return (
    <>
      <a className="corp-skip" href="#contenido">
        Saltar al contenido
      </a>
      <div className="corp-utility">
        <div className="corp-header-shell corp-utility-inner">
          <span>Hecho para negocios ticos.</span>
          <div>
            <a href={contact} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={14} aria-hidden="true" /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/nuvroengineer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={14} aria-hidden="true" /> Instagram
            </a>
          </div>
        </div>
      </div>
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
              <Menu size={25} aria-hidden="true" />
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
                    Soluciones <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <div>
                    {solutions.map((solution) => (
                      <a key={solution.href} href={solution.href}>
                        {solution.name}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </details>
                <a href="/#paquetes">Paquetes</a>
                <a href="/#demostraciones">Demostraciones</a>
                <a href="/#aprende">Aprendé IA</a>
                <a href="/sobre-nuvro">Nosotros</a>
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
              <a href="/">Inicio</a>
              <details className="corp-solutions-menu">
                <summary>
                  Soluciones <ChevronDown size={14} aria-hidden="true" />
                </summary>
                <div className="corp-solutions-panel">
                  <p>Soluciones digitales</p>
                  {solutions.map((solution) => (
                    <a key={solution.href} href={solution.href}>
                      <span>
                        <strong>{solution.name}</strong>
                        <small>{solution.description}</small>
                      </span>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </details>
              <a href="/#paquetes">Paquetes</a>
              <a href="/#demostraciones">Demostraciones</a>
              <a href="/#aprende">Aprendé IA</a>
              <a href="/sobre-nuvro">Nosotros</a>
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
