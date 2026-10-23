export default function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="shell">
          <div className="footer-main">
            <div>
              <a className="brand" href="#" aria-label="NUVRO ENGINEER, inicio">
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
                Hecho para negocios ticos.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <b>EXPLORÁ</b>
                <a href="#soluciones">Soluciones</a>
                <a href="#proceso">Cómo trabajamos</a>
                <a href="#aprende">Aprendé IA</a>
                <a href="#preguntas">Preguntas</a>
              </div>
              <div>
                <b>CONVERSEMOS</b>
                <a href="#contacto">Contacto</a>
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
