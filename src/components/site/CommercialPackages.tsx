import { ArrowUpRight } from "lucide-react";
import { commercialPackages } from "../../content/packages";
import "./commercial-packages.css";

export default function CommercialPackages() {
  return (
    <section
      id="paquetes"
      className="corp-section commercial-packages"
      aria-labelledby="packages-title"
    >
      <div className="corp-container">
        <div className="corp-section-heading">
          <div>
            <p className="corp-kicker">UN PUNTO DE PARTIDA</p>
            <h2 id="packages-title">
              Un paquete.
              <br />
              Una necesidad clara.
            </h2>
          </div>
          <p>
            Elegí el punto de partida que se parece a lo que necesitás.
            Conversamos sobre tu negocio y te enviamos una propuesta con el
            alcance, los entregables y las condiciones.
          </p>
        </div>
        <div className="commercial-package-grid">
          {commercialPackages.map((item, index) => (
            <article className="commercial-package" key={item.id}>
              <div className="commercial-package-top">
                <span>0{index + 1}</span>
                <span>NUVRO / PAQUETES</span>
              </div>
              <p className="commercial-package-audience">{item.audience}</p>
              <h3>{item.name}</h3>
              <p className="commercial-package-description">
                {item.description}
              </p>
              <ul>
                {item.items.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="commercial-package-scope">{item.scope}</p>
              <a
                className="corp-text-link"
                href={`/?servicio=paquetes&paquete=${item.id}#contacto`}
                aria-label={`Consultar el paquete ${item.name}`}
              >
                Consultar este paquete{" "}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <div className="commercial-package-extra">
          <p>
            ¿Necesitás vender en línea, una base para reseñas o contenido para
            promocionar tu negocio? También podemos trabajar una de esas
            soluciones por separado.
          </p>
          <a className="corp-text-link" href="#soluciones">
            Explorá los servicios <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="commercial-assurance">
          <div>
            <span>ATENCIÓN</span>
            <strong>Directa con Anderson.</strong>
          </div>
          <div>
            <span>ENTREGA</span>
            <strong>30 días de soporte.</strong>
          </div>
          <div>
            <span>ANTES DE EMPEZAR</span>
            <strong>Alcance y pagos por escrito.</strong>
          </div>
          <a href="/politicas-de-servicio">
            Leé cómo trabajamos <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
