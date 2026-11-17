import {
  ArrowUpRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { whatsappUrl } from "../../lib/site";
import { AndersonPhoto } from "./Characters";
import TornEdge from "./TornEdge";
import "./meet-anderson.css";

export const SCHEDULE = {
  whatsapp: "Por WhatsApp te respondemos todo el día.",
  visits: "Visitas y reuniones en persona: de jueves a sábado.",
  free: "La primera conversación no tiene costo.",
};

export default function MeetAnderson() {
  return (
    <section
      className="corp-section meet-anderson"
      id="quien-soy"
      aria-labelledby="meet-title"
    >
      <TornEdge fill="#2046F0" seed={61} />
      <div className="corp-container meet-layout">
        <div className="meet-copy">
          <p className="meet-kicker">Quién está detrás</p>
          <div className="meet-bubble">
            <h2 id="meet-title">¡Hola! Soy Anderson.</h2>
            <p>
              Detrás de NUVRO ENGINEER estoy yo, desde Palmares. Te atiendo
              directo, te explico todo en palabras simples y trabajo con
              negocios de todo Costa Rica.
            </p>
          </div>
          <ul className="meet-facts">
            <li>
              <span className="brand-icon" aria-hidden="true">
                <Sparkles size={20} strokeWidth={2.2} />
              </span>
              {SCHEDULE.free}
            </li>
            <li>
              <span className="brand-icon" aria-hidden="true">
                <MessageCircle size={20} strokeWidth={2.2} />
              </span>
              {SCHEDULE.whatsapp}
            </li>
            <li>
              <span className="brand-icon" aria-hidden="true">
                <CalendarDays size={20} strokeWidth={2.2} />
              </span>
              {SCHEDULE.visits}
            </li>
          </ul>
          <div className="meet-actions">
            <a
              className="brand-btn brand-btn-primary"
              href={whatsappUrl(
                "Hola Anderson, quiero conversar sobre mi negocio.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} strokeWidth={2.2} aria-hidden="true" />
              Escribime por WhatsApp
            </a>
            <a className="meet-link" href="/sobre-nuvro">
              Conocé más de NUVRO
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="meet-figure">
          <div className="anderson-card">
            <AndersonPhoto />
          </div>
        </figure>
      </div>
    </section>
  );
}
