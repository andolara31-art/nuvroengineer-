import { servicePages } from "../../content/services";
import "./site-expansion.css";

const labels: Record<string, string> = {
  web: "Diseño web",
  automatizacion: "Automatizaciones",
  "menu-qr": "Menú QR",
  ia: "IA para tu negocio",
};

export default function ServiceDirectory() {
  return (
    <section
      className="shell service-directory"
      aria-labelledby="directory-title"
    >
      <p className="eyebrow">Elegí por dónde empezar</p>
      <h2 id="directory-title">Soluciones para negocios en Costa Rica.</h2>
      <div className="directory-grid">
        {servicePages.map((service, index) => (
          <a href={service.path} key={service.path}>
            <span className="eyebrow">0{index + 1} / NUVRO</span>
            <h3>{labels[service.demoId] || service.name}</h3>
            <p>{service.description}</p>
            <strong>
              Ver qué incluye <span aria-hidden="true">↗</span>
            </strong>
          </a>
        ))}
      </div>
      <p className="directory-guide">
        ¿Querés aprender primero?{" "}
        <a href="/guias/ia-y-automatizacion-para-pymes">
          Leé la guía de IA y automatización para pymes →
        </a>
      </p>
    </section>
  );
}
