import { ArrowUpRight } from "lucide-react";
import DemoSection from "./DemoSection";
import LearningSection from "./LearningSection";
import CommercialPackages from "./CommercialPackages";
import "./corporate-sections.css";

const solutions = [
  {
    number: "01",
    title: "Diseño web.",
    body: "Que tu cliente entienda qué ofrecés y encuentre cómo contactarte.",
    deliverables: "Páginas web · Landing pages · Catálogos",
    href: "/diseno-web-costa-rica",
    action: "Ver diseño web",
  },
  {
    number: "02",
    title: "Tiendas online.",
    body: "Pasá de enviar fotos por mensaje a un catálogo con un recorrido de compra definido.",
    deliverables: "E-commerce · Shopify · Catálogo y compra",
    href: "/tiendas-online-shopify",
    action: "Ver tiendas online y Shopify",
  },
  {
    number: "03",
    title: "Menú QR.",
    body: "Tu menú a un escaneo. Fácil de consultar, fácil de actualizar.",
    deliverables: "Menú digital · Categorías · Acceso desde la mesa",
    href: "/menu-qr-restaurantes",
    action: "Ver menú QR",
  },
  {
    number: "04",
    title: "Reseñas a un toque.",
    body: "Una base QR o NFC en tu mostrador para que tus clientes compartan su experiencia en Google.",
    deliverables: "Base o tarjeta · QR y NFC · Enlace de reseñas",
    href: "/resenas-google-qr-nfc",
    action: "Ver bases QR y NFC para reseñas de Google",
  },
  {
    number: "05",
    title: "Videos y publicidad.",
    body: "Mostrá una promoción, un producto o tu servicio con una pieza que se entienda desde el celular.",
    deliverables: "Videos simples · Edición · Piezas comerciales",
    href: "/videos-publicidad-negocios",
    action: "Ver videos y piezas publicitarias",
  },
  {
    number: "06",
    title: "Automatización.",
    body: "Hay tareas que tu negocio no debería seguir haciendo a mano.",
    deliverables: "Consultas · Avisos · Seguimiento",
    href: "/automatizaciones-negocios",
    action: "Ver automatizaciones",
  },
  {
    number: "07",
    title: "Presencia digital.",
    body: "Ordená tus enlaces, productos y formas de contacto en un lugar fácil de compartir.",
    deliverables: "Link Bio · Catálogos · Kit WhatsApp Business",
    href: "/?servicio=presencia-digital#contacto",
    action: "Consultar presencia digital",
  },
];

const sectors = [
  {
    title: "Restaurantes y cafeterías",
    body: "El menú, el horario y cómo llegar. A mano, antes de preguntar.",
    href: "/menu-qr-restaurantes",
    action: "Ver menú QR",
  },
  {
    title: "Comercios locales",
    body: "Lo que vendés, bien presentado. Una tienda o un catálogo según cómo compren tus clientes.",
    href: "/tiendas-online-shopify",
    action: "Ver tiendas online",
  },
  {
    title: "Servicios y profesionales",
    body: "Servicios que se entienden y consultas que podés seguir con orden.",
    href: "/automatizaciones-negocios",
    action: "Ver automatizaciones",
  },
];

const process = [
  {
    number: "01",
    title: "Una conversación.",
    body: "Nos contás cómo trabajás y qué necesitás resolver. Definimos por dónde empezar.",
  },
  {
    number: "02",
    title: "Una propuesta clara.",
    body: "Acordamos qué vamos a construir, qué incluye y cuánto cuesta. Todo antes de empezar.",
  },
  {
    number: "03",
    title: "Trabajo que podés usar.",
    body: "Con el anticipo y los materiales confirmados, construimos y revisamos con vos. Te explicamos el uso e incluimos 30 días de soporte postentrega.",
  },
];

export default function CorporateSections() {
  return (
    <div className="corp-content">
      <section
        className="corp-section corp-intro"
        aria-labelledby="corp-intro-title"
      >
        <div className="corp-container">
          <div className="corp-intro-grid">
            <div>
              <p className="corp-kicker">LA FORMA NUVRO</p>
              <h2 id="corp-intro-title">
                Buen diseño.
                <br />
                Mejor criterio.
              </h2>
            </div>
            <div className="corp-intro-copy">
              <p>
                Tu negocio ya tiene una forma de hacer las cosas. Nuestra tarea
                es entenderla y diseñar lo que le hace falta.
              </p>
              <p>
                Una web que explique bien. Un menú fácil de consultar. Un
                proceso que deje de depender de tu memoria.
              </p>
              <a className="corp-text-link" href="/sobre-nuvro">
                Conocé la firma <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="corp-method" aria-label="Nuestro criterio de trabajo">
            <div>
              <span>El negocio primero.</span>
              <strong>
                Entender<span>.</span>
              </strong>
            </div>
            <div>
              <span>Cada decisión cuenta.</span>
              <strong>
                Diseñar<span>.</span>
              </strong>
            </div>
            <div>
              <span>Que sirva todos los días.</span>
              <strong>
                Resolver<span>.</span>
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="corp-section corp-solutions"
        id="soluciones"
        aria-labelledby="corp-solutions-title"
      >
        <div className="corp-container">
          <div className="corp-section-heading">
            <div>
              <p className="corp-kicker">QUÉ PODEMOS HACER</p>
              <h2 id="corp-solutions-title">
                El siguiente paso
                <br />
                de tu negocio.
              </h2>
            </div>
            <p>
              Empezamos por una necesidad concreta. Definimos el alcance y
              construimos una solución que tenga sentido para vos.
            </p>
          </div>
          <div className="corp-solution-list">
            {solutions.map(
              ({ number, title, body, deliverables, href, action }) => (
                <a
                  className="corp-solution-row"
                  href={href}
                  key={number}
                  aria-label={action}
                >
                  <span className="corp-solution-number" aria-hidden="true">
                    {number}
                  </span>
                  <h3>{title}</h3>
                  <div className="corp-solution-description">
                    <p>{body}</p>
                    <span>{deliverables}</span>
                  </div>
                  <span className="corp-solution-arrow" aria-hidden="true">
                    <ArrowUpRight size={27} strokeWidth={1.5} />
                  </span>
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <CommercialPackages />

      <DemoSection />

      <section
        className="corp-section corp-sectors"
        id="sectores"
        aria-labelledby="corp-sectors-title"
      >
        <div className="corp-container corp-sector-layout">
          <div className="corp-sector-heading">
            <p className="corp-kicker">HECHO PARA NEGOCIOS TICOS</p>
            <h2 id="corp-sectors-title">
              El contexto
              <br />
              importa.
            </h2>
            <p>
              No atiende igual una cafetería que un consultorio. La solución
              tampoco debería ser igual.
            </p>
            <span className="corp-local-signature">
              NUVRO ENGINEER · COSTA RICA
            </span>
          </div>
          <div className="corp-sector-list">
            {sectors.map(({ title, body, href, action }) => (
              <a
                href={href}
                className="corp-sector-row"
                key={title}
                aria-label={`${title}: ${action}`}
              >
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <ArrowUpRight size={23} strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="corp-section corp-process"
        id="proceso"
        aria-labelledby="corp-process-title"
      >
        <div className="corp-container corp-process-layout">
          <div className="corp-process-heading">
            <p className="corp-kicker">ASÍ TRABAJAMOS</p>
            <h2 id="corp-process-title">
              Sabé qué
              <br />
              esperar.
            </h2>
            <a className="corp-text-link" href="#contacto">
              Hablemos de tu proyecto{" "}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
          <ol className="corp-process-list">
            {process.map(({ number, title, body }) => (
              <li key={number}>
                <span className="corp-step-number" aria-hidden="true">
                  {number}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LearningSection />

      <section
        className="corp-section corp-faq"
        id="preguntas"
        aria-labelledby="corp-faq-title"
      >
        <div className="corp-container corp-faq-grid">
          <div>
            <p className="corp-kicker">ANTES DE EMPEZAR</p>
            <h2 id="corp-faq-title">
              Hablemos
              <br />
              claro.
            </h2>
            <p className="corp-faq-intro">
              Estas son algunas preguntas que vale la pena resolver desde el
              principio.
            </p>
            <a className="corp-text-link" href="#contacto">
              Tengo otra pregunta <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
          <div className="corp-faq-list">
            <details>
              <summary>
                ¿Qué necesito para empezar?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                Contanos qué hace tu negocio y qué querés mejorar. Si ya tenés
                logo, fotografías o una web, los revisamos. Juntos definimos qué
                información falta.
              </p>
            </details>
            <details>
              <summary>
                ¿Puedo empezar con algo pequeño?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                Sí. Una página, un menú o un proceso específico. Definimos una
                necesidad concreta y acordamos qué incluye el trabajo antes de
                construir.
              </p>
            </details>
            <details>
              <summary>
                ¿Cuánto cuesta?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                Depende de lo que haya que resolver. La propuesta detalla los
                entregables, el costo y cualquier servicio externo o pago
                recurrente que corresponda.
              </p>
            </details>
            <details>
              <summary>
                ¿Tengo que saber de tecnología?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                No. Necesitamos conocer tu negocio. Te explicamos las opciones
                en palabras simples y, al entregar, cómo usar lo que
                construimos.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
