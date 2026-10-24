import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  Globe2,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  QrCode,
  Route,
  Settings2,
  Sparkles,
  Store,
  Utensils,
  Workflow,
} from "lucide-react";
import DemoSection from "./DemoSection";
import LearningSection from "./LearningSection";
import "./corporate-sections.css";

const benefits = [
  {
    icon: MonitorSmartphone,
    title: "Web adaptable",
    body: "Tu negocio, también desde el celular.",
  },
  {
    icon: Route,
    title: "Un proceso claro",
    body: "Alcance y entregables antes de empezar.",
  },
  {
    icon: MapPin,
    title: "Atención en Costa Rica",
    body: "Una conversación cercana sobre tu negocio.",
  },
  {
    icon: Settings2,
    title: "Soluciones a medida",
    body: "Herramientas según lo que necesitás.",
  },
];

const solutions = [
  {
    id: "web",
    icon: Globe2,
    label: "PRESENCIA DIGITAL",
    title: "Diseño web",
    body: "Presentá tus servicios con claridad y facilitá que tus próximos clientes te contacten.",
    href: "/diseno-web-costa-rica",
  },
  {
    id: "flow",
    icon: Workflow,
    label: "PROCESOS CONECTADOS",
    title: "Automatizaciones",
    body: "Conectá consultas, avisos y seguimiento en un proceso que tu equipo pueda entender.",
    href: "/automatizaciones-negocios",
  },
  {
    id: "menu",
    icon: QrCode,
    label: "ATENCIÓN MÁS SIMPLE",
    title: "Menú digital QR",
    body: "Reuní tu oferta en un menú fácil de consultar desde la mesa o antes de llegar.",
    href: "/menu-qr-restaurantes",
  },
  {
    id: "ai",
    icon: Sparkles,
    label: "APRENDÉ Y APLICÁ",
    title: "IA para tu negocio",
    body: "Aprendé a preparar contenido y respuestas con IA, con criterio y revisión humana.",
    href: "/ia-para-negocios",
  },
];

function SolutionVisual({ kind }: { kind: string }) {
  return (
    <div
      className={`corp-solution-visual corp-visual-${kind}`}
      aria-hidden="true"
    >
      {kind === "web" ? (
        <div className="corp-mini-browser">
          <div className="corp-mini-browser-bar">
            <i />
            <i />
            <i />
            <span>tu-negocio.cr</span>
          </div>
          <div className="corp-mini-browser-content">
            <div className="corp-mini-browser-nav">
              <strong>TU NEGOCIO</strong>
              <span />
              <span />
            </div>
            <div className="corp-mini-browser-hero">
              <div>
                <i />
                <i />
                <i />
                <b />
              </div>
              <div className="corp-mini-browser-art">
                <Store size={28} strokeWidth={1.5} />
              </div>
            </div>
            <div className="corp-mini-browser-tiles">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="corp-mini-browser-badge">
            <CheckCircle2 size={14} /> Listo para conectar
          </div>
        </div>
      ) : kind === "flow" ? (
        <div className="corp-mini-workflow">
          <div className="corp-flow-node">
            <MessageSquare size={18} />
            <span>Consulta</span>
          </div>
          <div className="corp-flow-connector">
            <i />
            <ArrowRight size={13} />
          </div>
          <div className="corp-flow-node corp-flow-node-main">
            <Workflow size={22} />
            <span>Organizá</span>
          </div>
          <div className="corp-flow-connector">
            <i />
            <ArrowRight size={13} />
          </div>
          <div className="corp-flow-node">
            <CheckCircle2 size={18} />
            <span>Seguimiento</span>
          </div>
          <div className="corp-workflow-note">
            <span /> Cada paso, conectado
          </div>
        </div>
      ) : kind === "menu" ? (
        <div className="corp-mini-menu">
          <div className="corp-mini-phone">
            <div className="corp-mini-phone-speaker" />
            <Utensils size={18} />
            <strong>El menú de hoy</strong>
            <div className="corp-mini-dish">
              <span />
              <div>
                <i />
                <i />
              </div>
            </div>
            <div className="corp-mini-dish">
              <span />
              <div>
                <i />
                <i />
              </div>
            </div>
            <div className="corp-mini-dish">
              <span />
              <div>
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="corp-mini-qr">
            <QrCode size={49} strokeWidth={1.5} />
            <span>Escaneá y explorá</span>
          </div>
        </div>
      ) : (
        <div className="corp-mini-ai">
          <div className="corp-mini-chat corp-mini-chat-user">
            <MessageSquare size={16} />
            <span>¿Cómo respondo esta consulta?</span>
          </div>
          <div className="corp-mini-chat corp-mini-chat-answer">
            <span className="corp-mini-chat-icon">
              <Sparkles size={17} />
            </span>
            <div>
              <strong>Un punto de partida.</strong>
              <i />
              <i />
              <i />
              <small>Vos revisás. Vos decidís.</small>
            </div>
          </div>
          <div className="corp-mini-ai-input">
            <span>Una idea para tu negocio</span>
            <ArrowUpRight size={15} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function CorporateSections() {
  return (
    <div className="corp-content">
      <section className="corp-benefits" aria-label="Nuestra forma de trabajar">
        <div className="corp-container corp-benefit-grid">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div className="corp-benefit" key={title}>
              <span className="corp-benefit-icon">
                <Icon size={25} strokeWidth={1.7} />
              </span>
              <div>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="corp-section corp-intro"
        aria-labelledby="corp-intro-title"
      >
        <div className="corp-container corp-intro-grid">
          <figure className="corp-intro-image">
            <img
              src="/assets/brand/nuvro-negocio-cr-tecnologia-v1-1080.webp"
              srcSet="/assets/brand/nuvro-negocio-cr-tecnologia-v1-720.webp 720w, /assets/brand/nuvro-negocio-cr-tecnologia-v1-1080.webp 1080w"
              sizes="(max-width: 800px) calc(100vw - 44px), 50vw"
              width="1080"
              height="1440"
              loading="lazy"
              alt="Imagen editorial generada con IA, inspirada en un negocio de Costa Rica con herramientas digitales en su mostrador"
            />
            <div className="corp-image-note">
              <span className="corp-image-note-icon">
                <Store size={23} />
              </span>
              <div>
                <strong>Tu negocio es el punto de partida.</strong>
                <span>La tecnología viene después.</span>
              </div>
            </div>
            <figcaption>Imagen editorial generada con IA.</figcaption>
          </figure>
          <div className="corp-intro-copy">
            <p className="corp-kicker">TECNOLOGÍA CON PROPÓSITO</p>
            <h2 id="corp-intro-title">
              Un negocio más conectado.
              <br />
              <span>Una experiencia más clara.</span>
            </h2>
            <p>
              Detrás de cada negocio hay personas, trabajo y una forma propia de
              hacer las cosas. En NUVRO empezamos por entender eso.
            </p>
            <p>
              Diseñamos páginas web y soluciones digitales para presentar tu
              oferta, facilitar el contacto y organizar las tareas que se
              repiten cada día.
            </p>
            <ul className="corp-intro-points">
              <li>
                <Check size={18} />
                <span>Información clara para tus clientes.</span>
              </li>
              <li>
                <Check size={18} />
                <span>Herramientas conectadas con tu operación.</span>
              </li>
              <li>
                <Check size={18} />
                <span>Un alcance definido para avanzar con orden.</span>
              </li>
            </ul>
            <a className="corp-text-link" href="/sobre-nuvro">
              Conocé NUVRO <ArrowUpRight size={18} />
            </a>
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
              <p className="corp-kicker">SOLUCIONES PARA TU NEGOCIO</p>
              <h2 id="corp-solutions-title">Elegí el siguiente paso.</h2>
            </div>
            <p>
              Desde tu primera página hasta un proceso más organizado. Empezá
              por lo que tu negocio necesita hoy.
            </p>
          </div>
          <div className="corp-solutions-grid">
            {solutions.map(({ id, icon: Icon, label, title, body, href }) => (
              <a className="corp-solution-card" href={href} key={id}>
                <SolutionVisual kind={id} />
                <div className="corp-solution-body">
                  <span className="corp-card-label">
                    <Icon size={15} />
                    {label}
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="corp-card-link">
                    Conocer solución <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="corp-section corp-sectors"
        id="sectores"
        aria-labelledby="corp-sectors-title"
      >
        <div className="corp-container">
          <div className="corp-section-heading">
            <div>
              <p className="corp-kicker">
                DIFERENTES NEGOCIOS. OBJETIVOS CONCRETOS.
              </p>
              <h2 id="corp-sectors-title">Pensado para tu día a día.</h2>
            </div>
            <p>
              La solución cambia según cómo vendés, cómo atendés y qué
              información necesita tu cliente.
            </p>
          </div>
          <div className="corp-sectors-grid">
            <article className="corp-sector-card">
              <span className="corp-sector-icon">
                <Utensils size={30} strokeWidth={1.5} />
              </span>
              <h3>Restaurantes y cafeterías</h3>
              <p>
                Un menú a mano, información actualizada y un acceso fácil desde
                el celular.
              </p>
              <a className="corp-text-link" href="/menu-qr-restaurantes">
                Explorar menú QR <ArrowUpRight size={17} />
              </a>
            </article>
            <article className="corp-sector-card">
              <span className="corp-sector-icon">
                <Store size={30} strokeWidth={1.5} />
              </span>
              <h3>Comercios locales</h3>
              <p>
                Un lugar propio para mostrar lo que ofrecés y orientar las
                consultas que llegan.
              </p>
              <a className="corp-text-link" href="/diseno-web-costa-rica">
                Explorar diseño web <ArrowUpRight size={17} />
              </a>
            </article>
            <article className="corp-sector-card">
              <span className="corp-sector-icon">
                <BriefcaseBusiness size={30} strokeWidth={1.5} />
              </span>
              <h3>Servicios y profesionales</h3>
              <p>
                Servicios bien explicados y un proceso definido para dar
                seguimiento a cada contacto.
              </p>
              <a className="corp-text-link" href="/automatizaciones-negocios">
                Explorar automatización <ArrowUpRight size={17} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        className="corp-section corp-process"
        id="proceso"
        aria-labelledby="corp-process-title"
      >
        <div className="corp-container">
          <div className="corp-process-top">
            <div>
              <p className="corp-kicker">DE LA IDEA A LA ACCIÓN</p>
              <h2 id="corp-process-title">Avancemos con claridad.</h2>
            </div>
            <a className="corp-outline-link" href="#contacto">
              Conversemos de tu proyecto <ArrowUpRight size={18} />
            </a>
          </div>
          <ol className="corp-process-grid">
            <li>
              <span className="corp-step-number">01</span>
              <h3>Entendemos tu negocio</h3>
              <p>
                Conversamos sobre tu oferta, tus clientes y lo que querés
                mejorar. El objetivo define el punto de partida.
              </p>
            </li>
            <li>
              <span className="corp-step-number">02</span>
              <h3>Definimos la solución</h3>
              <p>
                Acordamos el alcance, los entregables y el costo para que sepás
                qué vamos a construir.
              </p>
            </li>
            <li>
              <span className="corp-step-number">03</span>
              <h3>Construimos y revisamos</h3>
              <p>
                Desarrollamos la propuesta, revisamos lo acordado y te
                explicamos cómo usar la solución.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <DemoSection />
      <LearningSection />

      <section
        className="corp-section corp-faq"
        id="preguntas"
        aria-labelledby="corp-faq-title"
      >
        <div className="corp-container corp-faq-grid">
          <div>
            <p className="corp-kicker">ANTES DE EMPEZAR</p>
            <h2 id="corp-faq-title">Resolvamos tus dudas.</h2>
            <p className="corp-faq-intro">
              Una buena decisión empieza con información clara. Contanos qué
              tenés en mente.
            </p>
            <a className="corp-text-link" href="#contacto">
              Hablemos de tu proyecto <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="corp-faq-list">
            <details>
              <summary>
                ¿Qué necesito para empezar?
                <ChevronDown size={19} />
              </summary>
              <p>
                Tu nombre de negocio, qué ofrecés y qué te gustaría mejorar. Si
                ya tenés logo, fotografías o una web, también ayudan. Revisamos
                juntos qué información hace falta.
              </p>
            </details>
            <details>
              <summary>
                ¿Puedo empezar con una sola solución?
                <ChevronDown size={19} />
              </summary>
              <p>
                Sí. Podemos definir una página, un menú digital o un proceso
                específico. Empezamos por una necesidad concreta y acordamos el
                alcance antes de construir.
              </p>
            </details>
            <details>
              <summary>
                ¿Cómo se define el precio del proyecto?
                <ChevronDown size={19} />
              </summary>
              <p>
                Depende del alcance, el contenido y las funciones que necesitás.
                La propuesta detalla los entregables, el costo y los servicios
                externos o pagos recurrentes que correspondan.
              </p>
            </details>
            <details>
              <summary>
                ¿Tengo que saber de tecnología?
                <ChevronDown size={19} />
              </summary>
              <p>
                No necesitás llegar con una solución técnica. Contanos cómo
                trabajás hoy y qué querés resolver. Te explicamos las opciones y
                el funcionamiento de lo que construimos.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
