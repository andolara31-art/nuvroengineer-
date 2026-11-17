import {
  ArrowUpRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { whatsappUrl } from "../../lib/site";
import Nuvi from "./Nuvi";
import TornEdge from "./TornEdge";
import "./attention.css";

export default function AttentionSection() {
  return (
    <section
      className="corp-section meet-anderson"
      id="atencion"
      aria-labelledby="meet-title"
    >
      <TornEdge fill="#2046F0" seed={61} />
      <div className="corp-container meet-layout">
        <div className="meet-copy">
          <p className="meet-kicker">Atención directa</p>
          <div className="meet-bubble">
            <h2 id="meet-title">¡Pura vida! Hablemos.</h2>
            <p>
              En NUVRO ENGINEER te atiende una persona, no un call center.
              Trabajamos desde Palmares con negocios de todo Costa Rica y te
              explicamos todo en palabras simples.
            </p>
          </div>
          <ul className="meet-facts">
            <li>
              <span className="brand-icon" aria-hidden="true">
                <Sparkles size={20} strokeWidth={2.2} />
              </span>
              La primera conversación no tiene costo.
            </li>
            <li>
              <span className="brand-icon" aria-hidden="true">
                <MessageCircle size={20} strokeWidth={2.2} />
              </span>
              Por WhatsApp te respondemos todo el día.
            </li>
            <li>
              <span className="brand-icon" aria-hidden="true">
                <CalendarDays size={20} strokeWidth={2.2} />
              </span>
              Visitas y reuniones en persona: de jueves a sábado.
            </li>
          </ul>
          <div className="meet-actions">
            <a
              className="brand-btn brand-btn-primary"
              href={whatsappUrl(
                "Hola NUVRO, quiero conversar sobre mi negocio.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} strokeWidth={2.2} aria-hidden="true" />
              Escribinos por WhatsApp
            </a>
            <a className="meet-link" href="/sobre-nuvro">
              Conocé más de NUVRO
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="meet-figure">
          <Nuvi pose="wave" />
        </figure>
      </div>
    </section>
  );
}
