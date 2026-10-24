import { servicePages, type ServicePageContent } from "../../content/services";
import "./services.css";

const examples: Record<
  string,
  { title: string; situation: string; flow: string[]; note: string }
> = {
  web: {
    title: "Una página para un negocio de servicios",
    situation:
      "Una persona encuentra tu negocio desde Google o Instagram y quiere saber si atendés lo que necesita.",
    flow: [
      "Lee una descripción clara del servicio y a quién va dirigido.",
      "Revisa qué incluye, ejemplos de trabajo y respuestas a sus dudas.",
      "Toca «Consultar este servicio» y llega a un contacto con contexto.",
    ],
    note: "El recorrido se adapta a tu oferta y a cómo recibís consultas. La web puede facilitar el contacto; el cierre necesita seguimiento de tu equipo.",
  },
  automatizacion: {
    title: "De consulta nueva a seguimiento organizado",
    situation:
      "El equipo recibe una solicitud de cotización y necesita saber quién la atiende y en qué estado quedó.",
    flow: [
      "La solicitud entra con los datos mínimos definidos.",
      "El flujo revisa los campos y crea un registro o avisa si falta información.",
      "La persona responsable recibe un aviso y confirma el siguiente paso.",
    ],
    note: "Es un ejemplo de proceso. Las herramientas, los permisos, los avisos y los costes de conexión se confirman para cada proyecto.",
  },
  "menu-qr": {
    title: "Del código en la mesa al plato que buscan",
    situation:
      "Un grupo llega a una cafetería y quiere revisar las opciones desde el celular.",
    flow: [
      "Escanea el QR y abre el menú web.",
      "Elige una categoría y consulta descripciones y precios.",
      "Hace el pedido por el canal de atención definido por el restaurante.",
    ],
    note: "La carta de ejemplo no corresponde a un restaurante real. Un menú web no implica por sí solo pedidos automáticos o cobros conectados.",
  },
  ia: {
    title: "Preparar una respuesta sin inventar condiciones",
    situation:
      "Querés responder una consulta usando únicamente la información confirmada de tu servicio.",
    flow: [
      "Le das a la herramienta el servicio, las condiciones aprobadas y el tono de tu negocio.",
      "Pedís un borrador corto que marque cualquier dato faltante.",
      "Revisás la información y ajustás la respuesta antes de enviarla.",
    ],
    note: "Ejemplo de instrucción: «Usá solo la información que te comparto. Si falta un precio o una condición, pedime ese dato. Prepará un borrador para que yo lo revise».",
  },
};

export default function ServicePage({ page }: { page: ServicePageContent }) {
  const contactHref = `/?servicio=${page.path.slice(1)}#contacto`;
  const example = examples[page.demoId];

  return (
    <main id="contenido" className="service-page">
      <section className="service-hero">
        <div className="shell">
          <nav aria-label="Ruta de navegación" className="service-breadcrumbs">
            <a href="/">Inicio</a>
            <span aria-hidden="true">/</span>
            <a href="/#soluciones">Soluciones</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.eyebrow.split(" / ")[0]}</span>
          </nav>
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true" />
                {page.eyebrow}
              </p>
              <h1>{page.name}</h1>
            </div>
            <div className="service-hero-copy">
              <p>{page.intro}</p>
              <a className="button" href={contactHref}>
                Hablemos de tu proyecto <span aria-hidden="true">↗</span>
              </a>
              <p className="service-hero-note">
                Empezamos por entender qué necesitás.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="shell service-section"
        aria-labelledby="service-scope-title"
      >
        <div className="service-section-heading">
          <p className="eyebrow">01 / Qué trabajamos</p>
          <h2 id="service-scope-title">
            Un alcance claro.
            <br />
            Un siguiente paso útil.
          </h2>
          <p>
            Estos son los puntos que revisamos para preparar tu propuesta. Los
            entregables y las funciones se acuerdan según el proyecto.
          </p>
        </div>
        <ul className="service-deliverables">
          {page.deliverables.map((item, index) => (
            <li key={item}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {example && (
        <section
          className="service-example"
          aria-labelledby="service-example-title"
        >
          <div className="shell service-example-grid">
            <div>
              <p className="eyebrow">02 / Un ejemplo para entenderlo</p>
              <h2 id="service-example-title">{example.title}</h2>
              <p>{example.situation}</p>
              <a className="underlink" href="/#demostraciones">
                Explorá las demostraciones <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="service-example-card">
              <span className="service-example-label">
                ESCENARIO ILUSTRATIVO
              </span>
              <ol>
                {example.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="service-example-note">{example.note}</p>
            </div>
          </div>
        </section>
      )}

      <section
        className="shell service-section service-process"
        aria-labelledby="service-process-title"
      >
        <div className="service-section-heading">
          <p className="eyebrow">03 / Cómo lo hacemos</p>
          <h2 id="service-process-title">
            Del problema
            <br />
            al proceso.
          </h2>
        </div>
        <ol className="service-steps">
          {page.steps.map((step, index) => (
            <li key={step.title}>
              <span className="service-step-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-faq" aria-labelledby="service-faq-title">
        <div className="shell service-section">
          <div className="service-section-heading">
            <p className="eyebrow">04 / Antes de empezar</p>
            <h2 id="service-faq-title">
              Preguntas
              <br />
              con respuesta.
            </h2>
          </div>
          <div className="service-faq-list">
            {page.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="shell service-related"
        aria-labelledby="service-related-title"
      >
        <p className="eyebrow">Soluciones que pueden complementarse</p>
        <h2 id="service-related-title">Cada pieza tiene su propósito.</h2>
        <div className="service-related-links">
          {servicePages
            .filter((item) => item.path !== page.path)
            .map((item) => (
              <a href={item.path} key={item.path}>
                <span>{item.eyebrow.split(" / ")[0]}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
        </div>
      </section>

      <section className="service-cta" aria-labelledby="service-cta-title">
        <div className="shell">
          <div>
            <p className="eyebrow">Tu negocio es el punto de partida</p>
            <h2 id="service-cta-title">Contanos qué querés resolver.</h2>
          </div>
          <a className="button white" href={contactHref}>
            Solicitar una propuesta <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
