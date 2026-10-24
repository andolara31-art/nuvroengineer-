export default function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="shell">
          <div className="footer-main">
            <div>
              <a className="brand" href="/" aria-label="NUVRO ENGINEER, inicio">
                <span className="brand-symbol" aria-hidden="true">
                  N
                </span>
                <span className="brand-word">
                  NUVRO<small>ENGINEER</small>
                </span>
              </a>
              <p className="footer-description">
                Tecnología simple para negocios reales.
                <br />
                Atención a negocios de todo Costa Rica.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <b>EXPLORÁ</b>
                <a href="/diseno-web-costa-rica">Diseño web</a>
                <a href="/automatizaciones-negocios">Automatizaciones</a>
                <a href="/menu-qr-restaurantes">Menú QR</a>
                <a href="/ia-para-negocios">IA para negocios</a>
                <a href="/guias/ia-y-automatizacion-para-pymes">
                  Guía para pymes
                </a>
              </div>
              <div>
                <b>CONVERSEMOS</b>
                <a href="/#contacto">Contacto</a>
                <a href="/sobre-nuvro">Sobre NUVRO</a>
                <a href="/#demostraciones">Demostraciones</a>
                <a href="/privacidad">Privacidad</a>
                <a
                  href="https://www.instagram.com/nuvroengineer/"
                  target="_blank"
                  rel="noopener"
                >
                  @nuvroengineer ↗
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 NUVRO ENGINEER</span>
            <span>Claridad. Criterio. Ejecución.</span>
          </div>
          <div className="footer-signoff" aria-hidden="true">
            NEGOCIOS REALES.
          </div>
        </div>
      </footer>
    </>
  );
}
