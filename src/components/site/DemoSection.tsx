import { useState } from "react";
import "./demos.css";

const menuItems = [
  { id: "casado", name: "Casado de la casa", category: "Platos", price: 4200 },
  { id: "gallo", name: "Gallo de queso", category: "Platos", price: 1800 },
  { id: "cafe", name: "Café chorreado", category: "Bebidas", price: 1300 },
  { id: "fresco", name: "Fresco natural", category: "Bebidas", price: 1500 },
  { id: "queque", name: "Queque de banano", category: "Postres", price: 1700 },
];

const previewServices = [
  {
    name: "Mantenimiento",
    detail: "Revisión y cuidado del equipo de tu negocio.",
  },
  {
    name: "Reparación",
    detail: "Contanos qué falla para orientar la revisión.",
  },
  {
    name: "Instalación",
    detail: "Prepará el espacio y el equipo que necesitás instalar.",
  },
];

const flowSteps = [
  {
    title: "Llega la consulta",
    detail:
      "Ejemplo ficticio: una persona solicita información sobre una página web.",
  },
  {
    title: "Se registra",
    detail:
      "La consulta aparece en una lista de seguimiento de ejemplo, con estado pendiente.",
  },
  {
    title: "Se avisa",
    detail:
      "Se muestra un aviso simulado a la persona responsable de responder.",
  },
  {
    title: "Se revisa y responde",
    detail:
      "Una persona revisa la consulta, prepara la respuesta y marca el seguimiento.",
  },
];

function colones(amount: number) {
  return `₡${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}

function MenuDemo() {
  const [category, setCategory] = useState("Platos");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [notice, setNotice] = useState(
    "Elegí una categoría y agregá un producto de ejemplo.",
  );
  const quantity = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const total = menuItems.reduce(
    (sum, item) => sum + item.price * (cart[item.id] || 0),
    0,
  );

  function addItem(id: string, name: string) {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
    setNotice(`${name} agregado al resumen de ejemplo.`);
  }

  function clearCart() {
    setCart({});
    setNotice("El resumen de ejemplo está vacío.");
  }

  return (
    <article className="nuvro-demo-card" aria-labelledby="demo-menu-title">
      <p className="nuvro-demo-label">01 / MENÚ DIGITAL · DEMO FICTICIA</p>
      <h3 id="demo-menu-title">Del menú al pedido claro.</h3>
      <p className="nuvro-demo-intro">
        Probá categorías y un resumen de consumo. Los productos y precios son
        inventados para esta demostración.
      </p>
      <div className="nuvro-demo-surface">
        <div className="nuvro-demo-shop-name">
          <span aria-hidden="true">◒</span> Soda de ejemplo
        </div>
        <div
          className="nuvro-demo-categories"
          role="group"
          aria-label="Categorías del menú de ejemplo"
        >
          {["Platos", "Bebidas", "Postres"].map((name) => (
            <button
              type="button"
              key={name}
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <ul className="nuvro-demo-menu">
          {menuItems
            .filter((item) => item.category === category)
            .map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <span>{colones(item.price)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => addItem(item.id, item.name)}
                  aria-label={`Agregar ${item.name} al resumen de ejemplo`}
                >
                  +
                </button>
              </li>
            ))}
        </ul>
        <div className="nuvro-demo-cart">
          <h4>Tu resumen de ejemplo</h4>
          {quantity > 0 ? (
            <ul>
              {menuItems
                .filter((item) => cart[item.id])
                .map((item) => (
                  <li key={item.id}>
                    <span>
                      {cart[item.id]} × {item.name}
                    </span>
                    <span>{colones(item.price * cart[item.id])}</span>
                  </li>
                ))}
            </ul>
          ) : (
            <p>Aún no agregaste productos.</p>
          )}
          <div className="nuvro-demo-total">
            <span>Total de ejemplo</span>
            <strong>{colones(total)}</strong>
          </div>
          <button
            className="nuvro-demo-text-button"
            type="button"
            onClick={clearCart}
            disabled={quantity === 0}
          >
            Vaciar resumen
          </button>
        </div>
        <p className="nuvro-demo-status" role="status">
          {notice}
        </p>
      </div>
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
  const [service, setService] = useState(previewServices[0]);
  const [summary, setSummary] = useState("");

  return (
    <article className="nuvro-demo-card" aria-labelledby="demo-site-title">
      <p className="nuvro-demo-label">02 / PÁGINA COMERCIAL · DEMO FICTICIA</p>
      <h3 id="demo-site-title">Un siguiente paso fácil.</h3>
      <p className="nuvro-demo-intro">
        Elegí un servicio y prepará una consulta. Así podés orientar el contacto
        desde tu página.
      </p>
      <div className="nuvro-demo-surface nuvro-demo-website">
        <div className="nuvro-demo-shop-name">
          <span aria-hidden="true">↗</span> Taller de ejemplo
        </div>
        <p className="nuvro-demo-site-eyebrow">SERVICIO LOCAL · EJEMPLO</p>
        <h4>El equipo de tu negocio merece atención.</h4>
        <p className="nuvro-demo-site-description">
          Consultá por revisión, reparación o instalación.
        </p>
        <fieldset className="nuvro-demo-service-options">
          <legend>¿Qué necesitás?</legend>
          {previewServices.map((item) => (
            <label key={item.name}>
              <input
                type="radio"
                name="demo-local-service"
                value={item.name}
                checked={service.name === item.name}
                onChange={() => {
                  setService(item);
                  setSummary("");
                }}
              />
              <span>{item.name}</span>
            </label>
          ))}
        </fieldset>
        <p className="nuvro-demo-service-detail">{service.detail}</p>
        <button
          className="nuvro-demo-action"
          type="button"
          onClick={() =>
            setSummary(
              `Consulta de ejemplo preparada: “Hola, me interesa el servicio de ${service.name.toLowerCase()}. Quisiera conocer qué incluye y cómo solicitar una revisión.”`,
            )
          }
        >
          Preparar consulta de ejemplo <span aria-hidden="true">↗</span>
        </button>
        <p className="nuvro-demo-status" role="status">
          {summary || "El botón prepara un mensaje aquí mismo."}
        </p>
      </div>
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
  const [completed, setCompleted] = useState(0);
  const currentStep = completed > 0 ? flowSteps[completed - 1] : null;

  return (
    <article className="nuvro-demo-card" aria-labelledby="demo-flow-title">
      <p className="nuvro-demo-label">03 / SEGUIMIENTO · SIMULACIÓN</p>
      <h3 id="demo-flow-title">Cada consulta, con seguimiento.</h3>
      <p className="nuvro-demo-intro">
        Avanzá paso a paso por un flujo de ejemplo: recibir, registrar, avisar y
        responder.
      </p>
      <div className="nuvro-demo-surface">
        <div className="nuvro-demo-shop-name">
          <span aria-hidden="true">⌁</span> Flujo de ejemplo
        </div>
        <ol className="nuvro-demo-flow">
          {flowSteps.map((step, index) => (
            <li
              key={step.title}
              className={index < completed ? "nuvro-demo-step-done" : ""}
            >
              <span className="nuvro-demo-step-number" aria-hidden="true">
                {index < completed ? "✓" : `0${index + 1}`}
              </span>
              <div>
                <strong>{step.title}</strong>
                <span>
                  {index < completed
                    ? "Paso simulado"
                    : "Pendiente en la simulación"}
                </span>
              </div>
            </li>
          ))}
        </ol>
        <button
          className="nuvro-demo-action"
          type="button"
          disabled={completed === flowSteps.length}
          onClick={() =>
            setCompleted((step) => Math.min(step + 1, flowSteps.length))
          }
        >
          {completed === 0
            ? "Simular una consulta"
            : completed === flowSteps.length
              ? "Simulación completada"
              : `Simular: ${flowSteps[completed].title.toLowerCase()}`}{" "}
          <span aria-hidden="true">→</span>
        </button>
        <p className="nuvro-demo-status" role="status">
          {currentStep
            ? `${completed} de ${flowSteps.length}. ${currentStep.detail}`
            : "Listo para probar con una consulta ficticia."}
        </p>
        <button
          className="nuvro-demo-text-button"
          type="button"
          disabled={completed === 0}
          onClick={() => setCompleted(0)}
        >
          Reiniciar simulación
        </button>
      </div>
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
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true" />
              Probá una idea
            </p>
            <h2 id="demos-title">
              Así podría funcionar
              <br />
              <span>en tu negocio.</span>
            </h2>
          </div>
          <p className="section-sub">
            Tres demostraciones interactivas para entender qué podés construir
            con NUVRO. Todos los negocios, productos y consultas de estos
            ejemplos son ficticios.
          </p>
        </div>
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
          <a className="button" href="/#contacto">
            Quiero algo así para mi negocio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
