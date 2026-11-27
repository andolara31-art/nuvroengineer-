import { ArrowUpRight } from "lucide-react";
import { commercialPackages } from "../../content/packages";
import TornEdge from "./TornEdge";
import "./commercial-packages.css";

export default function CommercialPackages() {
  return (
    <section
      id="paquetes"
      className="corp-section commercial-packages"
      aria-labelledby="packages-title"
    >
      <TornEdge fill="#F7F7F4" seed={19} />
      <div className="corp-container">
        <div className="corp-section-heading">
          <div>
            <p className="corp-kicker">Un punto de partida</p>
            <h2 id="packages-title">Un paquete. Una necesidad clara.</h2>
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
              <p className="commercial-package-ideal">
                <strong>Ideal si</strong> {item.ideal}
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
          <a className="corp-text-link" href="#que-necesito">
            Encontrá tu primer paso{" "}
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <a
          className="corp-text-link commercial-policies"
          href="/politicas-de-servicio"
        >
          Leé cómo trabajamos: alcance, pagos y soporte{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
