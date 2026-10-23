export default function SiteHeader() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <div className="topbar">
        NUVRO ENGINEER · TECNOLOGÍA SIMPLE PARA NEGOCIOS REALES.
      </div>
      <header className="header">
        <div className="shell nav">
          <a className="brand" href="#" aria-label="NUVRO ENGINEER, inicio">
            <span className="brand-symbol" aria-hidden="true">
              N
            </span>
            <span className="brand-word">
              NUVRO<small>ENGINEER</small>
            </span>
          </a>
          <details className="mobile-menu">
            <summary>MENÚ +</summary>
            <div>
              <a href="#soluciones">Soluciones</a>
              <a href="#proceso">Cómo trabajamos</a>
              <a href="#aprende">Aprendé IA</a>
              <a href="#preguntas">Preguntas</a>
            </div>
          </details>
          <nav className="navlinks" aria-label="Navegación principal">
            <a href="#soluciones">Soluciones</a>
            <a href="#proceso">Cómo trabajamos</a>
            <a href="#aprende">Aprendé IA</a>
            <a href="#preguntas">Preguntas</a>
            <a className="button black" href="#contacto">
              Hablemos <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
