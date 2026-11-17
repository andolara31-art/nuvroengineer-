import {
  ArrowUpRight,
  BarChart3,
  Bot,
  FileText,
  ImagePlus,
  MessageCircle,
  MessagesSquare,
  PenLine,
  ShoppingBag,
  Table2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import TornEdge from "./TornEdge";
import "./ai-section.css";

/*
  Solo nombres en pastillas con íconos genéricos de categoría.
  No se usan logotipos oficiales de ninguna marca.
*/
const tools: { name: string; icon: LucideIcon }[] = [
  { name: "Claude", icon: MessagesSquare },
  { name: "ChatGPT", icon: MessagesSquare },
  { name: "Gemini", icon: MessagesSquare },
  { name: "Perplexity", icon: MessagesSquare },
  { name: "n8n", icon: Workflow },
  { name: "Make", icon: Workflow },
  { name: "Zapier", icon: Workflow },
  { name: "WhatsApp Business", icon: MessageCircle },
  { name: "Google Sheets", icon: Table2 },
  { name: "Notion", icon: FileText },
  { name: "Shopify", icon: ShoppingBag },
];

const uses: { icon: LucideIcon; title: string; body: string; tag: string }[] = [
  {
    icon: MessageCircle,
    title: "Un asistente para WhatsApp",
    body: "Responde lo que siempre te preguntan, como horarios o ubicación, y te pasa lo que necesita una persona.",
    tag: "Atención",
  },
  {
    icon: PenLine,
    title: "Contenido para tus redes",
    body: "Ideas, textos y un calendario de publicaciones con la voz de tu negocio. Vos revisás antes de publicar.",
    tag: "Redes",
  },
  {
    icon: ImagePlus,
    title: "Fotos y piezas de producto",
    body: "Fondos limpios y variaciones para campañas, a partir de tus propias fotos de producto.",
    tag: "Imagen",
  },
  {
    icon: BarChart3,
    title: "Resúmenes semanales",
    body: "Lo que entró en la semana, lo que falta responder y lo que más te preguntan, en un solo resumen.",
    tag: "Orden",
  },
  {
    icon: FileText,
    title: "Cotizaciones en borrador",
    body: "Propuestas, correos y fichas de producto listas para revisar, sin empezar desde la página en blanco.",
    tag: "Tiempo",
  },
  {
    icon: Bot,
    title: "Un agente para tu negocio",
    body: "Un asistente que conoce tus servicios y políticas, para tu equipo o tus clientes, con límites claros.",
    tag: "A medida",
  },
];

function ToolList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="ai-tools-track" aria-hidden={hidden || undefined}>
      {tools.map(({ name, icon: Icon }) => (
        <li className="ai-tool" key={name}>
          <Icon size={17} strokeWidth={2.2} aria-hidden="true" />
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function AISection() {
  return (
    <section
      className="corp-section ai-section"
      id="ia"
      aria-labelledby="ai-title"
    >
      <TornEdge fill="#F7F7F4" seed={13} />
      <div className="corp-container">
        <div className="ai-heading">
          <div>
            <p className="corp-kicker">IA para tu negocio</p>
            <h2 id="ai-title">
              IA que te da <span className="ai-mark">una mano.</span>
            </h2>
          </div>
          <div className="ai-heading-copy">
            <p>
              Usamos herramientas de IA para tareas concretas: responder
              consultas, preparar contenido y ordenar información. Vos decidís
              qué se automatiza y qué sigue pasando por tus manos.
            </p>
            <div className="ai-heading-actions">
              <a
                className="brand-btn brand-btn-primary"
                href="/ia-para-negocios"
              >
                Conocé IA para negocios
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="corp-text-link" href="/?servicio=ia#contacto">
                Contanos tu caso
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="ai-tools">
          <p className="corp-sr-only">
            Herramientas con las que trabajamos:{" "}
            {tools.map((t) => t.name).join(", ")}.
          </p>
          <div className="ai-tools-window" aria-hidden="true">
            <ToolList hidden />
            <ToolList hidden />
          </div>
        </div>

        <div className="ai-layout">
          <figure className="ai-phone-wrap">
            <span className="brand-label ai-phone-label">
              Conversación ficticia
            </span>
            <div className="ai-phone">
              <span className="ai-phone-notch" aria-hidden="true" />
              <div className="ai-phone-screen">
                <div className="ai-chat-top">
                  <span className="ai-chat-avatar" aria-hidden="true">
                    <Bot size={20} strokeWidth={2.2} />
                  </span>
                  <span>
                    <strong>Soda La Esquina</strong>
                    <small>Asistente · ejemplo</small>
                  </span>
                </div>
                <ol className="ai-chat-list">
                  <li className="ai-bubble ai-bubble-client">
                    Hola, ¿abren el domingo?
                  </li>
                  <li className="ai-bubble ai-bubble-bot">
                    Sí, el domingo abrimos de 7 a. m. a 2 p. m. ¿Querés ver la
                    carta o la ubicación?
                  </li>
                  <li className="ai-bubble ai-bubble-client">
                    La carta, porfa
                  </li>
                  <li className="ai-bubble ai-bubble-bot">
                    Aquí está. Si querés encargar algo, te paso con alguien del
                    equipo para confirmarlo.
                  </li>
                  <li className="ai-typing" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </li>
                </ol>
              </div>
            </div>
            <figcaption className="brand-note">
              Responde con lo que vos aprobás y pasa a una persona lo demás
            </figcaption>
          </figure>

          <ul className="ai-uses">
            {uses.map(({ icon: Icon, title, body, tag }) => (
              <li className="ai-use" key={title}>
                <div className="ai-use-top">
                  <span className="brand-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <span className="ai-use-tag">{tag}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="ai-disclaimer">
          Las marcas pertenecen a sus dueños. NUVRO no está afiliado a ninguna
          de ellas: elegimos la herramienta según tu caso, sus costos y el
          cuidado de tus datos.
        </p>
      </div>
    </section>
  );
}
