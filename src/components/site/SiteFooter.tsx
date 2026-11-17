import {
  ArrowUpRight,
  AtSign,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  BUSINESS_WHATSAPP,
  BUSINESS_WHATSAPP_DISPLAY,
  whatsappUrl,
} from "../../lib/site";
import TornEdge from "./TornEdge";
import "./corporate-footer.css";

const INSTAGRAM_HANDLE = "@nuvroengineer";
const INSTAGRAM_URL = "https://www.instagram.com/nuvroengineer/";

export default function SiteFooter() {
  return (
    <footer className="corp-footer">
      <TornEdge fill="#2046F0" seed={41} />
      <div className="corp-footer-shell">
        <div className="corp-footer-sign">
          <div className="corp-footer-box">
            <a className="corp-footer-brand" href="/">
              NUVRO ENGINEER
            </a>
            <p>Hecho para negocios ticos.</p>
          </div>
          <a
            className="corp-footer-handle"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="corp-footer-main">
          <div className="corp-footer-group">
            <h2>Soluciones</h2>
            <a href="/diseno-web-costa-rica">Diseño web</a>
            <a href="/automatizaciones-negocios">Automatizaciones</a>
            <a href="/menu-qr-restaurantes">Menú QR</a>
            <a href="/resenas-google-qr-nfc">Reseñas Google · QR/NFC</a>
            <a href="/tiendas-online-shopify">Tiendas online / Shopify</a>
            <a href="/videos-publicidad-negocios">Videos y publicidad</a>
            <a href="/ia-para-negocios">IA para negocios</a>
          </div>
          <div className="corp-footer-group">
            <h2>Conocé NUVRO</h2>
            <a href="/sobre-nuvro">Nosotros</a>
            <a href="/#paquetes">Paquetes para tu negocio</a>
            <a href="/#demostraciones">Demostraciones</a>
            <a href="/#proceso">Cómo trabajamos</a>
            <a href="/#aprende">Aprendé IA</a>
            <a href="/guias/ia-y-automatizacion-para-pymes">Guía para pymes</a>
          </div>
          <div className="corp-footer-group corp-footer-contact">
            <h2>Contacto</h2>
            <p>Contanos qué querés ordenar en tu negocio. Empezamos por ahí.</p>
            <a
              className="corp-footer-button"
              href={whatsappUrl(
                "Hola NUVRO, quiero conversar sobre mi negocio.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" /> Escribinos por
              WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="corp-footer-line" href={`tel:+${BUSINESS_WHATSAPP}`}>
              <Phone size={16} aria-hidden="true" /> {BUSINESS_WHATSAPP_DISPLAY}
            </a>
            <a
              className="corp-footer-line"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AtSign size={16} aria-hidden="true" /> Instagram{" "}
              {INSTAGRAM_HANDLE}
            </a>
            <span className="corp-footer-line">
              <MapPin size={16} aria-hidden="true" /> Desde Palmares, para todo
              Costa Rica
            </span>
          </div>
        </div>

        <div className="corp-footer-bottom">
          <span>© 2026 NUVRO ENGINEER · Costa Rica</span>
          <div>
            <a href="/privacidad">Privacidad</a>
            <a href="/politicas-de-servicio">Políticas de servicio</a>
            <a href="/#contacto">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
