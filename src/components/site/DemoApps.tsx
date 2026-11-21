/*
  Demostraciones interactivas de NUVRO (todo ficticio: sin pedidos, mensajes
  ni integraciones reales). Pequeñas "apps" con estados y microanimaciones.
*/
import { useEffect, useRef, useState } from "react";
import {
  BellRing,
  CakeSlice,
  Check,
  CircleCheckBig,
  ClipboardList,
  Coffee,
  CupSoda,
  Egg,
  Inbox,
  Minus,
  Plus,
  PlugZap,
  RotateCcw,
  Send,
  Settings,
  ShoppingBag,
  Soup,
  Trash2,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import "./demo-apps.css";

function colones(amount: number) {
  return `₡${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}

/* ===================== 01 · Menú digital ===================== */

const categories: { name: string; icon: LucideIcon }[] = [
  { name: "Platos", icon: UtensilsCrossed },
  { name: "Bebidas", icon: CupSoda },
  { name: "Postres", icon: CakeSlice },
];

const menuItems: {
  id: string;
  name: string;
  detail: string;
  category: string;
  price: number;
  icon: LucideIcon;
  tone: string;
}[] = [
  {
    id: "casado",
    name: "Casado de la casa",
    detail: "Arroz, frijoles, maduro y ensalada",
    category: "Platos",
    price: 4200,
    icon: Soup,
    tone: "yellow",
  },
  {
    id: "gallo",
    name: "Gallo de queso",
    detail: "Tortilla caliente con queso",
    category: "Platos",
    price: 1800,
    icon: Egg,
    tone: "mint",
  },
  {
    id: "cafe",
    name: "Café chorreado",
    detail: "Recién hecho",
    category: "Bebidas",
    price: 1300,
    icon: Coffee,
    tone: "yellow",
  },
  {
    id: "fresco",
    name: "Fresco natural",
    detail: "Mora, cas o piña",
    category: "Bebidas",
    price: 1500,
    icon: CupSoda,
    tone: "mint",
  },
  {
    id: "queque",
    name: "Queque de banano",
    detail: "Hecho en casa",
    category: "Postres",
    price: 1700,
    icon: CakeSlice,
    tone: "yellow",
  },
];

export function MenuApp() {
  const [category, setCategory] = useState("Platos");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [bump, setBump] = useState(0);
  const [notice, setNotice] = useState(
    "Elegí una categoría y agregá un producto de ejemplo.",
  );
  const quantity = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const total = menuItems.reduce(
    (sum, item) => sum + item.price * (cart[item.id] || 0),
    0,
  );

  function change(id: string, name: string, delta: number) {
    setCart((current) => {
      const next = Math.max(0, (current[id] || 0) + delta);
      const copy = { ...current, [id]: next };
      if (!next) delete copy[id];
      return copy;
    });
    setBump((value) => value + 1);
    setNotice(
      delta > 0
        ? `${name} agregado al resumen de ejemplo.`
        : `${name} quitado del resumen de ejemplo.`,
    );
  }

  return (
    <div className="da-phone">
      <div className="da-menu-head">
        <span className="da-logo" aria-hidden="true">
          <UtensilsCrossed size={18} strokeWidth={2.4} />
        </span>
        <span>
          <strong>Soda de ejemplo</strong>
          <small>Abierto · ficticio</small>
        </span>
      </div>
      <div
        className="da-tabs"
        role="group"
        aria-label="Categorías del menú de ejemplo"
      >
        {categories.map(({ name, icon: Icon }) => (
          <button
            type="button"
            key={name}
            aria-pressed={category === name}
            onClick={() => setCategory(name)}
          >
            <Icon size={16} strokeWidth={2.4} aria-hidden="true" />
            {name}
          </button>
        ))}
      </div>
      <ul className="da-products" key={category}>
        {menuItems
          .filter((item) => item.category === category)
          .map(({ id, name, detail, price, icon: Icon, tone }) => {
            const count = cart[id] || 0;
            return (
              <li key={id} className="da-product">
                <span
                  className="da-product-art"
                  data-tone={tone}
                  aria-hidden="true"
                >
                  <Icon size={26} strokeWidth={2} />
                </span>
                <span className="da-product-info">
                  <strong>{name}</strong>
                  <small>{detail}</small>
                  <span className="da-price">{colones(price)}</span>
                </span>
                {count ? (
                  <span className="da-stepper">
                    <button
                      type="button"
                      onClick={() => change(id, name, -1)}
                      aria-label={`Quitar un ${name}`}
                    >
                      <Minus size={16} strokeWidth={3} aria-hidden="true" />
                    </button>
                    <span
                      className="da-count"
                      aria-label={`${count} en el resumen`}
                    >
                      {count}
                    </span>
                    <button
                      type="button"
                      onClick={() => change(id, name, 1)}
                      aria-label={`Agregar otro ${name}`}
                    >
                      <Plus size={16} strokeWidth={3} aria-hidden="true" />
                    </button>
                  </span>
                ) : (
                  <button
                    type="button"
                    className="da-add"
                    onClick={() => change(id, name, 1)}
                    aria-label={`Agregar ${name} al resumen de ejemplo`}
                  >
                    <Plus size={18} strokeWidth={3} aria-hidden="true" />
                  </button>
                )}
              </li>
            );
          })}
      </ul>
      <div className={`da-cartbar${quantity ? " is-filled" : ""}`}>
        <span className="da-cart-icon" key={bump} aria-hidden="true">
          <ShoppingBag size={20} strokeWidth={2.4} />
          {quantity > 0 && <span className="da-badge">{quantity}</span>}
        </span>
        <span className="da-cart-text">
          <strong>Tu resumen de ejemplo</strong>
          <small>
            {quantity
              ? `${quantity} ${quantity === 1 ? "producto" : "productos"}`
              : "Aún no agregaste productos."}
          </small>
        </span>
        <strong className="da-total">{colones(total)}</strong>
      </div>
      {quantity > 0 && (
        <ul className="da-receipt">
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
          <li className="da-receipt-actions">
            <button
              type="button"
              className="da-text-button"
              onClick={() => {
                setCart({});
                setNotice("El resumen de ejemplo está vacío.");
              }}
            >
              <Trash2 size={15} aria-hidden="true" /> Vaciar resumen
            </button>
          </li>
        </ul>
      )}
      <p className="da-status" role="status">
        {notice}
      </p>
    </div>
  );
}

/* ===================== 02 · Página comercial ===================== */

const services: {
  name: string;
  detail: string;
  icon: LucideIcon;
  time: string;
}[] = [
  {
    name: "Mantenimiento",
    detail: "Revisión y cuidado del equipo de tu negocio.",
    icon: Settings,
    time: "Revisión programada",
  },
  {
    name: "Reparación",
    detail: "Contanos qué falla para orientar la revisión.",
    icon: Wrench,
    time: "Diagnóstico primero",
  },
  {
    name: "Instalación",
    detail: "Prepará el espacio y el equipo que necesitás instalar.",
    icon: PlugZap,
    time: "Visita para medir",
  },
];

export function WebsiteApp() {
  const [selected, setSelected] = useState(services[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="da-phone da-site">
      <div className="da-site-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>taller-de-ejemplo.cr</span>
      </div>
      <div className="da-site-head">
        <span className="da-logo da-logo-blue" aria-hidden="true">
          <Wrench size={18} strokeWidth={2.4} />
        </span>
        <strong>Taller de ejemplo</strong>
      </div>
      <div className="da-site-hero">
        <span className="da-chip">Servicio local · ejemplo</span>
        <h4>El equipo de tu negocio merece atención.</h4>
        <p>Consultá por revisión, reparación o instalación.</p>
      </div>
      <fieldset className="da-choices">
        <legend>¿Qué necesitás?</legend>
        {services.map((item) => {
          const Icon = item.icon;
          const checked = selected.name === item.name;
          return (
            <label
              key={item.name}
              className={`da-choice${checked ? " is-checked" : ""}`}
            >
              <input
                type="radio"
                name="demo-local-service"
                value={item.name}
                checked={checked}
                onChange={() => {
                  setSelected(item);
                  setMessage("");
                }}
              />
              <span className="da-choice-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <span className="da-choice-text">
                <strong>{item.name}</strong>
                <small>{item.time}</small>
              </span>
              <span className="da-choice-check" aria-hidden="true">
                <Check size={14} strokeWidth={3} />
              </span>
            </label>
          );
        })}
      </fieldset>
      <p className="da-choice-detail" key={selected.name}>
        {selected.detail}
      </p>
      <button
        className="da-primary"
        type="button"
        onClick={() =>
          setMessage(
            `Hola, me interesa el servicio de ${selected.name.toLowerCase()}. Quisiera conocer qué incluye y cómo solicitar una revisión.`,
          )
        }
      >
        <Send size={16} strokeWidth={2.4} aria-hidden="true" />
        Preparar consulta de ejemplo
      </button>
      <div className="da-chat" role="status">
        {message ? (
          <>
            <span className="da-chat-label">Vista previa · no se envía</span>
            <p className="da-bubble">{message}</p>
          </>
        ) : (
          <span className="da-chat-empty">
            El botón prepara un mensaje aquí mismo.
          </span>
        )}
      </div>
    </div>
  );
}

/* ===================== 03 · Seguimiento ===================== */

const stages: {
  title: string;
  state: string;
  detail: string;
  icon: LucideIcon;
  log: string;
}[] = [
  {
    title: "Llega la consulta",
    state: "Nueva",
    detail:
      "Ejemplo ficticio: una persona solicita información sobre una página web.",
    icon: Inbox,
    log: "Entró una consulta desde la web",
  },
  {
    title: "Se registra",
    state: "Registrada",
    detail:
      "La consulta aparece en una lista de seguimiento de ejemplo, con estado pendiente.",
    icon: ClipboardList,
    log: "Quedó en la lista de seguimiento",
  },
  {
    title: "Se avisa",
    state: "Avisada",
    detail:
      "Se muestra un aviso simulado a la persona responsable de responder.",
    icon: BellRing,
    log: "Aviso simulado al responsable",
  },
  {
    title: "Se revisa y responde",
    state: "Respondida",
    detail:
      "Una persona revisa la consulta, prepara la respuesta y marca el seguimiento.",
    icon: CircleCheckBig,
    log: "Respuesta revisada por una persona",
  },
];

export function FlowApp() {
  const [done, setDone] = useState(0);
  const resetRef = useRef<HTMLButtonElement>(null);
  const finished = done === stages.length;
  const current = done > 0 ? stages[done - 1] : null;

  useEffect(() => {
    if (finished) resetRef.current?.focus();
  }, [finished]);

  return (
    <div className="da-phone da-flow">
      <ol className="da-track" aria-label="Etapas de la simulación">
        {stages.map(({ title, icon: Icon }, index) => {
          const state =
            index < done ? "done" : index === done ? "next" : "todo";
          return (
            <li key={title} className={`da-stage is-${state}`}>
              <span className="da-stage-dot" aria-hidden="true">
                {state === "done" ? (
                  <Check size={16} strokeWidth={3} />
                ) : (
                  <Icon size={16} strokeWidth={2.4} />
                )}
              </span>
              <span className="da-stage-name">
                {title}
                <span className="corp-sr-only">
                  {state === "done" ? " (simulado)" : " (pendiente)"}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
      <div className="da-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${done / stages.length})` }} />
      </div>

      <article className="da-ticket" aria-label="Consulta de ejemplo">
        <div className="da-ticket-top">
          <span className="da-ticket-id">#0142 · ficticia</span>
          <span className={`da-state${done ? ` is-${done}` : ""}`} key={done}>
            {current ? current.state : "Sin iniciar"}
          </span>
        </div>
        <strong>María · Página web</strong>
        <p>“Hola, ¿me pueden contar qué incluye una página para mi negocio?”</p>
      </article>

      <ul className="da-log" aria-label="Historial de la simulación">
        {stages.slice(0, done).map((stage, index) => (
          <li key={stage.title}>
            <span className="da-log-time">
              9:{String(index * 3 + 2).padStart(2, "0")}
            </span>
            {stage.log}
          </li>
        ))}
      </ul>

      <div className="da-flow-actions">
        <button
          className="da-primary"
          type="button"
          disabled={finished}
          onClick={() => setDone((step) => Math.min(step + 1, stages.length))}
        >
          {done === 0
            ? "Simular una consulta"
            : finished
              ? "Simulación completada"
              : `Siguiente: ${stages[done].title.toLowerCase()}`}
        </button>
        <button
          ref={resetRef}
          className="da-text-button"
          type="button"
          disabled={done === 0}
          onClick={() => setDone(0)}
        >
          <RotateCcw size={15} aria-hidden="true" /> Reiniciar
        </button>
      </div>
      <p className="da-status" role="status">
        {current
          ? `${done} de ${stages.length}. ${current.detail}`
          : "Listo para probar con una consulta ficticia."}
      </p>
    </div>
  );
}
