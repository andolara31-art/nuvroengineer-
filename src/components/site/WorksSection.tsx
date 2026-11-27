import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight, MessageCircle, RefreshCw } from "lucide-react";
import {
  workMenus,
  workSites,
  workVideos,
  type WorkSite,
} from "../../content/works";
import { whatsappUrl } from "../../lib/site";
import TornEdge from "./TornEdge";
import { VideoCard } from "./WorkMedia";
import DeferredImg from "./DeferredImg";
import { FlowApp, MenuApp, WebsiteApp } from "./DemoApps";
import { kissByMay } from "../../content/cases";
import "./works.css";

type TabId = "videos" | "webs" | "menus" | "probalo";

const tabs: {
  id: TabId;
  label: string;
  note: string;
  message: string;
}[] = [
  {
    id: "videos",
    label: "Videos con IA",
    note: "Las personas y las voces de las creadoras están hechas con IA. Las marcas de estos videos son ficticias.",
    message:
      "Hola NUVRO, vi sus videos con IA y quiero uno así para mi negocio.",
  },
  {
    id: "webs",
    label: "Páginas web",
    note: "Propuestas de diseño hechas por NUVRO. Tocá una captura para ver otra sección y abrí el sitio en vivo.",
    message: "Hola NUVRO, vi sus páginas web y quiero una así para mi negocio.",
  },
  {
    id: "menus",
    label: "Menús QR",
    note: "Propuestas de diseño de menús para ver desde el celular. Abrilos en vivo y probalos.",
    message: "Hola NUVRO, vi sus menús QR y quiero uno así para mi negocio.",
  },
  {
    id: "probalo",
    label: "Probalo vos",
    note: "Demostraciones interactivas con negocios y datos ficticios. No se hacen pedidos, no se envían mensajes y no hay integraciones reales.",
    message:
      "Hola NUVRO, probé las demostraciones de la web y quiero algo así para mi negocio.",
  },
];

const demos = [
  {
    id: "menu",
    label: "Menú digital",
    App: MenuApp,
    href: "/menu-qr-restaurantes",
    link: "Conocé el menú QR",
  },
  {
    id: "web",
    label: "Página comercial",
    App: WebsiteApp,
    href: "/diseno-web-costa-rica",
    link: "Conocé el diseño web",
  },
  {
    id: "flow",
    label: "Seguimiento",
    App: FlowApp,
    href: "/automatizaciones-negocios",
    link: "Conocé las automatizaciones",
  },
] as const;

/* Una demostración a la vez, para que no se haga eterno en el celular */
function Playground() {
  const [demo, setDemo] = useState<(typeof demos)[number]["id"]>("menu");
  const current = demos.find((item) => item.id === demo)!;
  const App = current.App;
  return (
    <div className="works-play">
      <div
        className="works-play-picker"
        role="group"
        aria-label="Elegí una demostración"
      >
        {demos.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={demo === item.id}
            onClick={() => setDemo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="works-play-stage" key={demo}>
        <App />
        <a className="work-live" href={current.href}>
          {current.link} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function SiteCard({ site }: { site: WorkSite }) {
  const [showSection, setShowSection] = useState(false);
  const base = site.top && !showSection ? site.top : site.section;
  const image = site.fictional
    ? {
        src: `${base}-540.webp`,
        srcSet: `${base}-300.webp 300w, ${base}-540.webp 540w`,
        width: 600,
        height: 1240,
      }
    : {
        src: `${base}-480.webp`,
        srcSet: `${base}-480.webp 480w, ${base}.webp 780w`,
        width: 780,
        height: 1688,
      };
  const picture = (
    <DeferredImg
      {...image}
      sizes="(max-width: 600px) 75vw, (max-width: 1200px) 30vw, 200px"
      alt={`Captura en celular de ${site.name}${showSection ? ", otra sección" : ""}`}
    />
  );
  return (
    <article className="work-card work-site">
      {site.top ? (
        <button
          type="button"
          className="phone-frame phone-frame-tall"
          aria-pressed={showSection}
          aria-label={`Ver otra sección de ${site.name}`}
          onClick={() => setShowSection((value) => !value)}
        >
          <span className="phone-notch" aria-hidden="true" />
          {picture}
          <span className="phone-flip" aria-hidden="true">
            <RefreshCw size={14} strokeWidth={2.6} />
            {showSection ? "Ver inicio" : "Ver otra sección"}
          </span>
        </button>
      ) : (
        <div className="phone-frame phone-frame-tall phone-frame-static">
          <span className="phone-notch" aria-hidden="true" />
          {picture}
        </div>
      )}
      <span className="work-tag">
        {site.fictional ? "Ejemplo · marca ficticia" : "Propuesta de diseño"}
      </span>
      <h3 className="work-title">{site.name}</h3>
      <span className="work-sector">{site.sector}</span>
      {site.url && (
        <a
          className="work-live"
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="ver_en_vivo"
          data-analytics-site={site.id}
          aria-label={`Ver ${site.name} en vivo (abre en otra pestaña)`}
        >
          Ver en vivo <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

/*
  En computadora es una grilla; en celular, un carrusel horizontal con
  scroll-snap (tarjetas al 75 % del ancho) y puntitos de posición.
*/
function Carousel({
  kind,
  label,
  children,
}: {
  kind: string;
  label: string;
  children: ReactNode[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const count = children.length;

  useEffect(() => {
    const track = ref.current;
    if (!track || !("IntersectionObserver" in window)) return;
    const cards = [...track.children] as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setCurrent(cards.indexOf(entry.target as HTMLElement));
      },
      { root: track, threshold: 0.6 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="works-carousel">
      <div
        ref={ref}
        className={`works-grid works-grid-${kind}`}
        role="group"
        aria-label={`${label}: ${count} trabajos`}
      >
        {children}
      </div>
      <div className="works-dots" aria-hidden="true">
        {children.map((_, index) => (
          <span key={index} className={index === current ? "is-on" : ""} />
        ))}
        <span className="works-swipe">
          {current < count - 1 ? "Deslizá para ver más →" : "← Volvé al inicio"}
        </span>
      </div>
    </div>
  );
}

export default function WorksSection() {
  const [active, setActive] = useState<TabId>("videos");
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({
    videos: null,
    webs: null,
    menus: null,
    probalo: null,
  });

  // Los enlaces viejos a /#demostraciones abren directo "Probalo vos".
  useEffect(() => {
    const open = () => {
      if (window.location.hash === "#demostraciones") setActive("probalo");
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);
  const current = tabs.find((tab) => tab.id === active)!;

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = tabs[(keys[event.key] + tabs.length) % tabs.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  }

  return (
    <section
      className="corp-section works"
      id="trabajos"
      aria-labelledby="works-title"
    >
      <TornEdge fill="#121212" seed={67} />
      <div className="corp-container">
        <div className="corp-section-heading">
          <div>
            <p className="corp-kicker">Trabajos</p>
            <h2 id="works-title">Mirá lo que hacemos.</h2>
          </div>
          <div className="works-lead">
            <p>
              Videos con IA, páginas web y menús QR hechos por NUVRO, y
              demostraciones para que lo probés vos.
            </p>
            <p className="brand-note">¡Dale play!</p>
          </div>
        </div>

        <a className="works-case" href={kissByMay.path}>
          <span className="works-case-art" aria-hidden="true">
            <DeferredImg
              src={`${kissByMay.logo.profile.base}-600.webp`}
              width={600}
              height={600}
              alt=""
            />
          </span>
          <span className="works-case-copy">
            <span className="works-case-tag">Caso real · cliente</span>
            <strong>{kissByMay.title}</strong>
            <span>{kissByMay.service}.</span>
            <span className="works-case-go">
              Ver el caso <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </span>
        </a>

        <span id="demostraciones" className="works-anchor" aria-hidden="true" />
        <div className="works-tabs" role="tablist" aria-label="Tipo de trabajo">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[tab.id] = node;
              }}
              type="button"
              role="tab"
              id={`works-tab-${tab.id}`}
              aria-controls={`works-panel-${tab.id}`}
              aria-selected={active === tab.id}
              tabIndex={active === tab.id ? 0 : -1}
              className="works-tab"
              onClick={() => setActive(tab.id)}
              onKeyDown={(event) => onTabKey(event, index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`works-panel-${tab.id}`}
            aria-labelledby={`works-tab-${tab.id}`}
            hidden={active !== tab.id}
            className="works-panel"
          >
            <p className="works-note">{tab.note}</p>
            {tab.id === "videos" && (
              <Carousel kind="videos" label="Videos con IA">
                {workVideos.map((item) => (
                  <VideoCard key={item.id} item={item} />
                ))}
              </Carousel>
            )}
            {tab.id === "webs" && (
              <Carousel kind="webs" label="Páginas web">
                {workSites.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </Carousel>
            )}
            {tab.id === "probalo" && active === "probalo" && <Playground />}
            {tab.id === "menus" && (
              <Carousel kind="menus" label="Menús QR">
                {workMenus.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </Carousel>
            )}
          </div>
        ))}

        <div className="works-cta">
          <p>¿Querés uno así para tu negocio?</p>
          <a
            className="brand-btn brand-btn-primary"
            href={whatsappUrl(current.message)}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-location={`trabajos-${current.id}`}
          >
            <MessageCircle size={20} strokeWidth={2.2} aria-hidden="true" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
