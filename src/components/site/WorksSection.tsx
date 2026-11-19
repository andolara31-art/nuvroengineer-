import { useRef, useState, type KeyboardEvent } from "react";
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
import "./works.css";

type TabId = "videos" | "webs" | "menus";

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
    note: "Propuestas de diseño de menús para ver desde el celular. Sabor Tico es un ejemplo con marca ficticia.",
    message: "Hola NUVRO, vi sus menús QR y quiero uno así para mi negocio.",
  },
];

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
    <img
      {...image}
      sizes="(max-width: 600px) 45vw, (max-width: 1200px) 30vw, 200px"
      loading="lazy"
      decoding="async"
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

export default function WorksSection() {
  const [active, setActive] = useState<TabId>("videos");
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({
    videos: null,
    webs: null,
    menus: null,
  });
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
              Videos con IA, páginas web y menús QR hechos por NUVRO. Tocá
              cualquiera para verlo de cerca.
            </p>
            <p className="brand-note">¡Dale play!</p>
          </div>
        </div>

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
              <div className="works-grid works-grid-videos">
                {workVideos.map((item) => (
                  <VideoCard key={item.id} item={item} />
                ))}
              </div>
            )}
            {tab.id === "webs" && (
              <div className="works-grid works-grid-webs">
                {workSites.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </div>
            )}
            {tab.id === "menus" && (
              <div className="works-grid works-grid-menus">
                {workMenus.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </div>
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
