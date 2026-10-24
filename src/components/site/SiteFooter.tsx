import {
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  BUSINESS_WHATSAPP,
  BUSINESS_WHATSAPP_DISPLAY,
  whatsappUrl,
} from "../../lib/site";
import "./corporate-footer.css";

export default function SiteFooter() {
  return (
    <footer className="corp-footer">
      <div className="corp-footer-shell">
        <div className="corp-footer-main">
          <div className="corp-footer-about">
            <a
              className="corp-footer-brand"
              href="/"
              aria-label="NUVRO ENGINEER, inicio"
            >
              <span className="corp-footer-word">
                NUVRO<small>ENGINEER</small>
              </span>
            </a>
            <p>
              Webs claras. Procesos en orden. Más fácil para vos y para tus
              clientes.
            </p>
            <span className="corp-footer-coverage">
              <MapPin size={15} aria-hidden="true" /> Atención en todo Costa
              Rica
            </span>
            <a
              className="corp-footer-instagram"
              href="https://www.instagram.com/nuvroengineer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NUVRO Engineer en Instagram"
            >
              <Instagram size={17} aria-hidden="true" /> @nuvroengineer
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="corp-footer-group">
            <h2>Soluciones</h2>
            <a href="/diseno-web-costa-rica">Diseño web</a>
            <a href="/automatizaciones-negocios">Automatizaciones</a>
            <a href="/menu-qr-restaurantes">Menú QR</a>
            <a href="/ia-para-negocios">IA para negocios</a>
          </div>
          <div className="corp-footer-group">
            <h2>Conocé NUVRO</h2>
            <a href="/sobre-nuvro">Nosotros</a>
            <a href="/#demostraciones">Demostraciones</a>
            <a href="/#proceso">Cómo trabajamos</a>
            <a href="/#aprende">Aprendé IA</a>
            <a href="/guias/ia-y-automatizacion-para-pymes">Guía para pymes</a>
          </div>
          <div className="corp-footer-group corp-footer-contact">
            <h2>Tu próximo paso</h2>
            <p>Contanos qué está frenando tu negocio. Empezamos por ahí.</p>
            <a className="corp-footer-phone" href={`tel:+${BUSINESS_WHATSAPP}`}>
              <Phone size={16} aria-hidden="true" /> {BUSINESS_WHATSAPP_DISPLAY}
            </a>
            <a
              className="corp-footer-button"
              href={whatsappUrl(
                "Hola NUVRO, quiero conversar sobre mi negocio.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> Escribinos por
              WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="corp-footer-bottom">
          <span>© 2026 NUVRO ENGINEER. Costa Rica.</span>
          <div>
            <a href="/privacidad">Privacidad</a>
            <a href="/#contacto">Contacto</a>
          </div>
          <span>Tecnología simple para negocios reales.</span>
        </div>
      </div>
    </footer>
  );
}
