import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  FileText,
  ImagePlus,
  MessageCircle,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import { brandIcons, type BrandIcon } from "../../content/brand-icons";
import "./ai-section.css";

const tools: (BrandIcon | { title: string; hex: string; path?: undefined })[] =
  [
    brandIcons.claude,
    { title: "ChatGPT", hex: "#10A37F" },
    brandIcons.gemini,
    brandIcons.perplexity,
    brandIcons.mistral,
    brandIcons.huggingface,
    brandIcons.n8n,
    brandIcons.make,
    brandIcons.zapier,
    brandIcons.whatsapp,
    brandIcons.notion,
    brandIcons.sheets,
    brandIcons.shopify,
    brandIcons.meta,
  ];

const uses: {
  icon: LucideIcon;
  tone: string;
  title: string;
  body: string;
  tag: string;
}[] = [
  {
    icon: MessageCircle,
    tone: "mint",
    title: "Un asistente para WhatsApp",
    body: "Responde lo que siempre te preguntan, como horarios, ubicación o lo que ofrecés, y te pasa lo que necesita una persona.",
    tag: "Atención",
  },
  {
    icon: PenLine,
    tone: "pink",
    title: "Contenido para tus redes",
    body: "Ideas, textos y un calendario de publicaciones con la voz de tu negocio. Vos revisás antes de publicar.",
    tag: "Marketing",
  },
  {
    icon: ImagePlus,
    tone: "yellow",
    title: "Fotos y piezas de producto",
    body: "Fondos limpios, variaciones para campañas y piezas cortas a partir de tus propias fotos.",
    tag: "Imagen",
  },
  {
    icon: BarChart3,
    tone: "blue",
    title: "Resúmenes que se leen en un minuto",
    body: "Lo que entró en la semana, lo que falta responder y lo que más te preguntan, en un solo resumen.",
    tag: "Orden",
  },
  {
    icon: FileText,
    tone: "violet",
    title: "Cotizaciones y correos en borrador",
    body: "Propuestas, respuestas y fichas de producto listas para revisar, sin empezar desde la página en blanco.",
    tag: "Tiempo",
  },
  {
    icon: Bot,
    tone: "coral",
    title: "Un agente con la información de tu negocio",
    body: "Un asistente que conoce tus servicios y políticas, para tu equipo o para tus clientes, con límites claros.",
    tag: "A medida",
  },
];

function ToolChip({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <li
      className="ai-tool"
      style={{ "--brand": tool.hex } as CSSProperties}
    >
      {tool.path ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={tool.path} />
        </svg>
      ) : (
        <Bot size={18} strokeWidth={1.8} aria-hidden="true" />
      )}
      {tool.title}
    </li>
  );
}

export default function AISection() {
  return (
    <section
      className="corp-section ai-section"
      id="ia"
      aria-labelledby="ai-title"
    >
      <div className="corp-container">
        <div className="ai-heading">
          <div>
            <p className="corp-kicker">IA PARA TU NEGOCIO</p>
            <h2 id="ai-title">
              Inteligencia artificial
              <br />
              <span className="ai-mark">que trabaja</span> para vos.
            </h2>
          </div>
          <div className="ai-heading-copy">
            <p>
              Usamos herramientas como Claude, ChatGPT o Gemini para resolver
              tareas concretas: responder consultas, crear contenido y ordenar
              información. Vos decidís qué se automatiza y qué sigue pasando
              por tus manos.
            </p>
            <div className="ai-heading-actions">
              <a className="pop-button" href="/ia-para-negocios">
                Ver IA para negocios
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                className="corp-text-link"
                href="/?servicio=ia#contacto"
              >
                Quiero IA en mi negocio
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="ai-tools" aria-label="Herramientas de IA y automatización">
          <ul className="ai-tools-track">
            {tools.map((tool) => (
              <ToolChip tool={tool} key={tool.title} />
            ))}
          </ul>
          <ul className="ai-tools-track" aria-hidden="true">
            {tools.map((tool) => (
              <ToolChip tool={tool} key={tool.title} />
            ))}
          </ul>
        </div>

        <div className="ai-layout">
          <div className="ai-chat" aria-label="Ejemplo de conversación ficticia">
            <div className="ai-chat-top">
              <span className="ai-chat-avatar" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d={brandIcons.claude.path} />
                </svg>
              </span>
              <span>
                <strong>Asistente de Soda La Esquina</strong>
                <small>Ejemplo · conversación ficticia</small>
              </span>
            </div>
            <ol>
              <li className="ai-bubble ai-bubble-client">
                Hola, ¿abren el domingo?
              </li>
              <li className="ai-bubble ai-bubble-bot">
                Sí, el domingo abrimos de 7 a. m. a 2 p. m. ¿Querés ver la
                carta o la ubicación?
              </li>
              <li className="ai-bubble ai-bubble-client">La carta, porfa</li>
              <li className="ai-bubble ai-bubble-bot">
                Aquí está. Si querés encargar algo, te paso con Andrea para
                confirmarlo.
              </li>
              <li className="ai-typing" aria-hidden="true">
                <i />
                <i />
                <i />
              </li>
            </ol>
            <p className="ai-chat-note">
              El asistente responde con la información que vos aprobás y
              deriva a una persona lo que no debe decidir solo.
            </p>
          </div>

          <ul className="ai-uses">
            {uses.map(({ icon: Icon, tone, title, body, tag }) => (
              <li className="ai-use" data-tone={tone} key={title}>
                <span className="pop-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="ai-use-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="ai-disclaimer">
          Las marcas mostradas pertenecen a sus respectivos dueños. NUVRO no
          está afiliado a ellas: elegimos la herramienta según tu caso, sus
          costos y el cuidado de tus datos.
        </p>
      </div>
    </section>
  );
}
