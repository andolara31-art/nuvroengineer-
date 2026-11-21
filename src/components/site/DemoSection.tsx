import { ArrowUpRight, Coffee, QrCode, Wrench } from "lucide-react";
import TornEdge from "./TornEdge";
import { FlowApp, MenuApp, WebsiteApp } from "./DemoApps";
import "./demos.css";

const examples = [
  {
    href: "/#ejemplo-mesa",
    title: "Web de café MESA",
    body: "Una portada con carta para un café de barrio ficticio.",
    icon: Coffee,
  },
  {
    href: "#demo-menu",
    title: "Menú QR de una soda",
    body: "Categorías y resumen de consumo con productos inventados.",
    icon: QrCode,
  },
  {
    href: "#demo-web",
    title: "Página de un taller",
    body: "Elegí un servicio y prepará una consulta de ejemplo.",
    icon: Wrench,
  },
];

function MenuDemo() {
  return (
    <article
      className="nuvro-demo-card"
      id="demo-menu"
      aria-labelledby="demo-menu-title"
    >
      <p className="nuvro-demo-label">01 / MENÚ DIGITAL · DEMO FICTICIA</p>
      <h3 id="demo-menu-title">Del menú al pedido claro.</h3>
      <p className="nuvro-demo-intro">
        Probá categorías y un resumen de consumo. Los productos y precios son
        inventados para esta demostración.
      </p>
      <MenuApp />
      <p className="nuvro-demo-note">
        No se realizan pedidos ni cobros. El resumen solo existe mientras usás
        esta página.
      </p>
      <a className="underlink" href="/menu-qr-restaurantes">
        Conocer el servicio de menú QR <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

function WebsiteDemo() {
  return (
    <article
      className="nuvro-demo-card"
      id="demo-web"
      aria-labelledby="demo-site-title"
    >
      <p className="nuvro-demo-label">02 / PÁGINA COMERCIAL · DEMO FICTICIA</p>
      <h3 id="demo-site-title">Un siguiente paso fácil.</h3>
      <p className="nuvro-demo-intro">
        Elegí un servicio y prepará una consulta. Así podés orientar el contacto
        desde tu página.
      </p>
      <WebsiteApp />
      <p className="nuvro-demo-note">
        El taller es ficticio. Esta vista previa no abre WhatsApp, reserva citas
        ni envía mensajes.
      </p>
      <a className="underlink" href="/diseno-web-costa-rica">
        Conocer el servicio de diseño web <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

function AutomationDemo() {
  return (
    <article className="nuvro-demo-card" aria-labelledby="demo-flow-title">
      <p className="nuvro-demo-label">03 / SEGUIMIENTO · SIMULACIÓN</p>
      <h3 id="demo-flow-title">Cada consulta, con seguimiento.</h3>
      <p className="nuvro-demo-intro">
        Avanzá paso a paso por un flujo de ejemplo: recibir, registrar, avisar y
        responder.
      </p>
      <FlowApp />
      <p className="nuvro-demo-note">
        No hay integraciones conectadas. No se guarda información en un servidor
        ni se envían avisos reales.
      </p>
      <a className="underlink" href="/automatizaciones-negocios">
        Conocer el servicio de automatización <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function DemoSection() {
  return (
    <section
      className="section nuvro-demos"
      id="demostraciones"
      aria-labelledby="demos-title"
    >
      <TornEdge fill="#ECECE8" seed={23} />
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="corp-kicker">Demostraciones</p>
            <h2 id="demos-title">Probalo antes de decidir.</h2>
          </div>
          <p className="section-sub">
            Tres demostraciones interactivas para entender qué podés construir
            con NUVRO. Todos los negocios, productos y consultas de estos
            ejemplos son ficticios.
          </p>
        </div>
        <ul className="brand-examples" aria-label="Ejemplos para probar">
          {examples.map(({ href, title, body, icon: Icon }) => (
            <li key={href}>
              <a className="brand-example" href={href}>
                <span className="brand-label">Ejemplo</span>
                <span className="brand-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2.2} />
                </span>
                <strong>{title}</strong>
                <span>{body}</span>
                <span className="brand-example-go">
                  Probalo <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="nuvro-demo-grid">
          <MenuDemo />
          <WebsiteDemo />
          <AutomationDemo />
        </div>
        <div className="nuvro-demo-bottom">
          <p>
            ¿Hay una idea que encaja con lo que necesitás?
            <br />
            <strong>Contanos cómo trabajás hoy.</strong>
          </p>
          <a className="brand-btn brand-btn-primary" href="/#contacto">
            Quiero algo así para mi negocio
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
