import { ArrowUpRight, AtSign, MessageCircle } from "lucide-react";
import { kissByMay as c, type CaseImage } from "../../content/cases";
import { whatsappUrl } from "../../lib/site";
import TornEdge from "./TornEdge";
import "./case.css";

function Picture({
  image,
  sizes,
  eager = false,
}: {
  image: CaseImage;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <img
      src={`${image.base}-1200.webp`}
      srcSet={`${image.base}-600.webp 600w, ${image.base}-1200.webp 1200w`}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

function BeforeAfter({
  before,
  after,
  sizes,
  wide = false,
}: {
  before: CaseImage;
  after: CaseImage;
  sizes: string;
  wide?: boolean;
}) {
  return (
    <div className={`case-ba${wide ? " case-ba-wide" : ""}`}>
      <figure className="case-ba-item">
        <figcaption className="case-ba-label">antes</figcaption>
        <div className="case-frame case-frame-before">
          <Picture image={before} sizes={sizes} />
        </div>
      </figure>
      <figure className="case-ba-item">
        <figcaption className="case-ba-label">después</figcaption>
        <div className="case-frame">
          <Picture image={after} sizes={sizes} />
        </div>
      </figure>
    </div>
  );
}

export default function CaseKissByMay() {
  return (
    <main id="contenido" className="case-page">
      <section className="case-hero" aria-labelledby="case-title">
        <div className="shell">
          <nav aria-label="Ruta de navegación" className="case-crumbs">
            <a href="/">Inicio</a>
            <span aria-hidden="true">/</span>
            <a href="/#trabajos">Trabajos</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{c.name}</span>
          </nav>
          <div className="case-hero-grid">
            <div>
              <p className="brand-label">Caso real</p>
              <h1 id="case-title">{c.title}</h1>
              <p className="case-service">{c.service}</p>
              <p className="case-sector">
                {c.sector} ·{" "}
                <a
                  href={`https://www.instagram.com/${c.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AtSign size={16} aria-hidden="true" />
                  {c.instagram}
                </a>
              </p>
              <ul className="case-facts">
                {c.facts.map((fact) => (
                  <li key={fact.label}>
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="case-hero-art">
              <div className="case-frame">
                <Picture
                  image={c.logo.profile}
                  sizes="(max-width: 900px) 70vw, 420px"
                  eager
                />
              </div>
            </div>
          </div>
        </div>
        <TornEdge fill="#ECECE8" seed={83} className="torn-edge-end" />
      </section>

      <section className="case-block" aria-labelledby="case-challenge">
        <div className="shell case-two">
          <div>
            <p className="corp-kicker">El reto</p>
            <h2 id="case-challenge">Buenos productos, imagen sencilla.</h2>
          </div>
          <p className="case-lead">{c.challenge}</p>
        </div>
        <div className="shell">
          <ol className="case-done" aria-label="Lo que hicimos">
            {c.done.map((item, index) => (
              <li key={item.title}>
                <span className="brand-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case-block case-paper" aria-labelledby="case-logo">
        <TornEdge fill="#F7F7F4" seed={89} />
        <div className="shell">
          <p className="corp-kicker">01 · Logo</p>
          <h2 id="case-logo">Nítido en cualquier tamaño.</h2>
          <BeforeAfter
            before={c.logo.before}
            after={c.logo.after}
            sizes="(max-width: 700px) 92vw, 560px"
            wide
          />
          <div className="case-system">
            <div>
              <h3>Sistema de marca</h3>
              <p>
                Cuatro colores y dos letras, con una sola palabra en cursiva.
              </p>
              <ul className="case-colors">
                {c.colors.map((color) => (
                  <li key={color.hex}>
                    <span
                      className="case-swatch"
                      style={{ background: color.hex }}
                      aria-hidden="true"
                    />
                    <strong>{color.name}</strong>
                    <code>{color.hex}</code>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="case-profile">
              <div className="case-frame case-frame-round">
                <Picture image={c.logo.profile} sizes="160px" />
              </div>
              <figcaption className="brand-note">foto de perfil</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="case-block" aria-labelledby="case-stories">
        <TornEdge fill="#ECECE8" seed={97} />
        <div className="shell">
          <p className="corp-kicker">02 · Historias</p>
          <h2 id="case-stories">Misma información, otra imagen.</h2>
          {c.stories.map((story) => (
            <div className="case-story" key={story.title}>
              <h3>{story.title}</h3>
              <BeforeAfter
                before={story.before}
                after={story.after}
                sizes="(max-width: 700px) 80vw, 360px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="case-block case-paper" aria-labelledby="case-content">
        <TornEdge fill="#F7F7F4" seed={101} />
        <div className="shell">
          <p className="corp-kicker">03 · Contenido y catálogo</p>
          <h2 id="case-content">Todo con la misma cara.</h2>
          <p className="case-lead">
            Posts, historias y un catálogo con 656 perfumes, todos con el mismo
            fondo y con precios en colones, listo para mandar por WhatsApp.
          </p>
          <div className="case-samples">
            {c.samples.map((image) => (
              <div className="case-frame" key={image.base}>
                <Picture image={image} sizes="(max-width: 700px) 80vw, 360px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-cta" aria-labelledby="case-cta-title">
        <TornEdge fill="#2046F0" seed={107} />
        <div className="shell case-cta-inner">
          <div>
            <h2 id="case-cta-title">¿Querés que tu marca se vea así?</h2>
            <p>
              Contanos de tu negocio. La primera conversación no tiene costo.
            </p>
          </div>
          <div className="case-cta-actions">
            <a
              className="brand-btn brand-btn-primary"
              href={whatsappUrl(
                "Hola NUVRO, vi el caso de kiss by may y quiero algo así para mi marca.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} strokeWidth={2.2} aria-hidden="true" />
              Escribinos por WhatsApp
            </a>
            <a className="case-back" href="/#trabajos">
              Ver más trabajos
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
