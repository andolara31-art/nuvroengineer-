import { useState } from "react";
import { ArrowDown, ArrowUpRight, ArrowRight, Check } from "lucide-react";
import "./corporate-hero.css";

const menu = [
  { name: "Café chorreado", description: "Una pausa, sin prisa." },
  { name: "Desayuno de la casa", description: "Para empezar bien el día." },
  { name: "Pan y algo dulce", description: "El acompañamiento del café." },
];

function WebsiteSample() {
  const [view, setView] = useState<"inicio" | "carta">("inicio");
  const [selection, setSelection] = useState("");
  return (
    <div className="craft-sample-wrap">
      <div className="craft-sample-label">
        <span>01 / UNA WEB QUE SE ENTIENDE</span>
        <span>PROBALA ↙</span>
      </div>
      <div className="craft-browser">
        <div className="craft-browser-bar" aria-hidden="true">
          <div>
            <i />
            <i />
            <i />
          </div>
          <span>Una idea, bien presentada.</span>
          <ArrowUpRight size={13} />
        </div>
        <div className="craft-sample-site">
          <div className="craft-sample-nav">
            <span className="craft-sample-brand">
              MESA<span>CAFÉ DE BARRIO</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setView(view === "inicio" ? "carta" : "inicio");
                setSelection("");
              }}
            >
              {view === "inicio" ? "La carta" : "El café"}
              <ArrowUpRight size={12} aria-hidden="true" />
            </button>
          </div>
          <div className="craft-sample-main">
            <div className="craft-sample-photo">
              <img
                src="/assets/brand/cafe-counter-720.webp"
                width="720"
                height="960"
                alt="Interior de cafetería fotografiado por Veronika Martinelli, usado como referencia editorial para una web de ejemplo"
                fetchPriority="high"
              />
            </div>
            <div className="craft-sample-content">
              {view === "inicio" ? (
                <>
                  <span className="craft-sample-overline">
                    CAFÉ. COCINA. BUENA PAUSA.
                  </span>
                  <h2>
                    Un buen café.
                    <br />
                    Un lugar
                    <br />
                    <em>para volver.</em>
                  </h2>
                  <p>Tu próxima pausa empieza con algo simple.</p>
                  <button
                    className="craft-sample-cta"
                    type="button"
                    onClick={() => setView("carta")}
                  >
                    Conocé la carta <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </>
              ) : (
                <>
                  <span className="craft-sample-overline">
                    LA CARTA / EJEMPLO
                  </span>
                  <h2>
                    ¿Qué se
                    <br />
                    <em>te antoja?</em>
                  </h2>
                  <div className="craft-sample-menu">
                    {menu.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        aria-pressed={selection === item.name}
                        onClick={() => setSelection(item.name)}
                      >
                        <span>
                          <strong>{item.name}</strong>
                          <small>{item.description}</small>
                        </span>
                        {selection === item.name ? (
                          <Check size={15} aria-hidden="true" />
                        ) : (
                          <ArrowUpRight size={14} aria-hidden="true" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="craft-sample-status" role="status">
            {selection
              ? `${selection} seleccionado. Esta demo no envía pedidos.`
              : "Una oferta clara. El siguiente paso, a mano."}
          </div>
        </div>
      </div>
      <div className="craft-sample-caption">
        <span>Ejemplo interactivo · negocio ficticio</span>
        <a
          href="https://unsplash.com/photos/brown-wooden-kitchen-cabinet-with-green-plants-WxfXOQEpyFg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Foto: V. Martinelli / Unsplash ↗
        </a>
      </div>
    </div>
  );
}

export default function CorporateHero() {
  return (
    <section className="craft-hero" aria-labelledby="hero-title">
      <div className="craft-container craft-hero-grid">
        <div className="craft-hero-copy">
          <p className="craft-eyebrow">
            <span aria-hidden="true" />
            FIRMA DIGITAL / COSTA RICA
          </p>
          <h1 id="hero-title">
            Tu negocio
            <br />
            merece verse
            <br />
            <span>así de bien.</span>
          </h1>
          <p className="craft-hero-description">
            Diseñamos páginas web y herramientas comerciales para que tus
            clientes entiendan lo que ofrecés y sepan cómo contactarte.
          </p>
          <div className="craft-hero-actions">
            <a className="craft-action" href="/#soluciones">
              Conocé las soluciones{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="craft-action-secondary" href="/#contacto">
              Hablemos de tu negocio{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="craft-hero-signature">
            Diseño con criterio. Tecnología simple.
          </p>
        </div>
        <WebsiteSample />
      </div>
      <div className="craft-container craft-hero-foot">
        <span>HECHO PARA NEGOCIOS TICOS.</span>
        <a href="/#soluciones">
          Mirá lo que podemos resolver{" "}
          <ArrowDown size={14} aria-hidden="true" />
        </a>
        <span>NUVRO ENGINEER — 01</span>
      </div>
    </section>
  );
}
