import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Bot,
  Check,
  MessageCircle,
  QrCode,
} from "lucide-react";
import { whatsappUrl } from "../../lib/site";
import TornEdge from "./TornEdge";
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
    <div className="craft-sample-wrap" id="ejemplo-mesa">
      <div className="craft-sample-label">
        <span className="brand-label">Ejemplo · negocio ficticio</span>
        <span className="brand-note brand-note-paper" aria-hidden="true">
          ¡Probala! Tocá «La carta»
        </span>
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
              <div className="pop-stickers" aria-hidden="true">
                <span className="pop-sticker pop-sticker-ai">
                  <Bot size={15} strokeWidth={2.2} />
                  Con IA
                </span>
                <span className="pop-sticker pop-sticker-wa">
                  <MessageCircle size={15} strokeWidth={2.2} />
                  WhatsApp
                </span>
                <span className="pop-sticker pop-sticker-qr">
                  <QrCode size={15} strokeWidth={2.2} />
                  Menú QR
                </span>
              </div>
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
  const contact = whatsappUrl(
    "Hola NUVRO, quiero conversar sobre la web o las herramientas para mi negocio.",
  );
  return (
    <section className="craft-hero" aria-labelledby="hero-title">
      <div className="craft-container craft-hero-grid">
        <div className="craft-hero-copy">
          <p className="brand-label">Negocios en Costa Rica</p>
          <h1 id="hero-title">
            Webs, menús QR e IA para negocios de Costa Rica.
          </h1>
          <p className="craft-hero-description">
            Te ayudamos a ordenar lo que ofrecés, mostrarlo bien y atender mejor
            a tus clientes desde el celular.
          </p>
          <div className="craft-hero-actions">
            <a
              className="brand-btn brand-btn-primary"
              href={contact}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} strokeWidth={2.2} aria-hidden="true" />
              Hablemos por WhatsApp
            </a>
            <a className="brand-btn brand-btn-ghost" href="/#soluciones">
              Conocé las soluciones
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <ul className="brand-hero-trust" aria-label="Cómo trabajamos">
            <li>Atención directa</li>
            <li>Propuesta por escrito antes de empezar</li>
            <li>30 días de soporte al entregar</li>
          </ul>
        </div>
        <WebsiteSample />
      </div>
      <TornEdge fill="#ECECE8" seed={3} className="torn-edge-end" />
    </section>
  );
}
