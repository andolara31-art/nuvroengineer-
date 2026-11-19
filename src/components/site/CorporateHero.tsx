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
import { CafeScene } from "./Illustrations";
import HeroFan from "./HeroFan";
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
              <CafeScene />
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
        <span>Ilustración: NUVRO</span>
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
          <h1 id="hero-title">Tu negocio, bien presentado en internet.</h1>
          <p className="craft-hero-description">
            Hacemos páginas web, menús QR y videos con IA para negocios de Costa
            Rica. Te explicamos todo en palabras simples.
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
            <a className="brand-btn brand-btn-ghost" href="/#que-necesito">
              ¿Qué necesito?
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <ul className="brand-hero-trust" aria-label="Cómo trabajamos">
            <li>Primera conversación sin costo</li>
            <li>Propuesta por escrito antes de empezar</li>
            <li>30 días de soporte al entregar</li>
          </ul>
        </div>
        <HeroFan />
      </div>
      <TornEdge fill="#121212" seed={3} className="torn-edge-end" />
    </section>
  );
}

/* Demo MESA: va después de Trabajos, como bloque propio */
export function MesaSection() {
  return (
    <section className="corp-section mesa-section" aria-labelledby="mesa-title">
      <TornEdge fill="#ECECE8" seed={71} />
      <div className="corp-container mesa-layout">
        <div className="mesa-copy">
          <p className="corp-kicker">Probá una web</p>
          <h2 id="mesa-title">Tocá y mirá cómo funciona.</h2>
          <p>
            MESA es un café inventado para que pruebes una página como la que
            usarían tus clientes: abrí la carta y elegí algo.
          </p>
          <a className="corp-text-link" href="/diseno-web-costa-rica">
            Conocé cómo hacemos páginas web
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <WebsiteSample />
      </div>
    </section>
  );
}
