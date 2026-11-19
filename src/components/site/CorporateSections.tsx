import { ArrowUpRight } from "lucide-react";
import DemoSection from "./DemoSection";
import CommercialPackages from "./CommercialPackages";
import AISection from "./AISection";
import HowWeWork from "./HowWeWork";
import ComicStory from "./ComicStory";
import NeedFinder from "./NeedFinder";
import AttentionSection from "./AttentionSection";
import TornEdge from "./TornEdge";
import WorksSection from "./WorksSection";
import "./corporate-sections.css";

/* Servicios explicados con palabras de todos los días */
const solutions = [
  {
    number: "01",
    title: "Página web.",
    body: "Una página con lo que ofrecés, tus horarios y un botón para escribirte.",
    ideal:
      "la gente te pregunta por Instagram o WhatsApp qué hacés o dónde estás.",
    href: "/diseno-web-costa-rica",
  },
  {
    number: "02",
    title: "Tienda en línea.",
    body: "Tus productos con foto, precio y carrito, para que te compren sin mandar fotos una por una.",
    ideal: "vendés productos y querés que te puedan comprar a cualquier hora.",
    href: "/tiendas-online-shopify",
  },
  {
    number: "03",
    title: "Menú con código QR.",
    body: "El cliente escanea un código con la cámara del celular y ve tu menú. Si cambia un precio, se actualiza fácil.",
    ideal: "tenés soda, restaurante o cafetería.",
    href: "/menu-qr-restaurantes",
  },
  {
    number: "04",
    title: "Reseñas en Google con un toque.",
    body: "Una placa en tu mostrador: el cliente acerca el celular o escanea el código y llega directo a dejarte una reseña.",
    ideal: "tus clientes salen contentos pero casi nadie te deja una reseña.",
    href: "/resenas-google-qr-nfc",
  },
  {
    number: "05",
    title: "Videos con IA.",
    body: "Con fotos de tu celular hacemos videos para Reels, TikTok y WhatsApp: una creadora hecha con IA que presenta tu negocio, un comercial de tu producto o el recorrido de una propiedad.",
    ideal: "querés mostrar tu negocio en redes sin tener que grabarte.",
    href: "/videos-publicidad-negocios",
  },
  {
    number: "06",
    title: "Respuestas automáticas.",
    body: "Que las preguntas que siempre se repiten se respondan solas y que ninguna consulta se te olvide.",
    ideal: "pasás mucho tiempo contestando lo mismo.",
    href: "/automatizaciones-negocios",
  },
  {
    number: "07",
    title: "Todo en un solo enlace.",
    body: "Un enlace para tu Instagram con tu WhatsApp, menú o catálogo y ubicación, todo en un mismo lugar.",
    ideal: "estás empezando y querés verte ordenado desde el primer día.",
    href: "/?servicio=presencia-digital#contacto",
  },
];

/* Preguntas de alguien que no sabe nada de tecnología */
const faqs = [
  {
    question: "¿La primera conversación tiene costo?",
    answer:
      "No. Nos contás qué necesita tu negocio y te orientamos sobre por dónde empezar, sin compromiso.",
  },
  {
    question: "¿Tengo que saber de tecnología?",
    answer:
      "No. Necesitamos conocer tu negocio. Te explicamos las opciones en palabras simples y, al entregar, cómo usar lo que construimos.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende de lo que haya que resolver. Antes de empezar recibís una propuesta por escrito con lo que incluye, el costo y cualquier pago a otros proveedores.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Depende de lo que pidás. El plazo queda por escrito en la propuesta, antes de empezar.",
  },
  {
    question: "¿Qué tengo que mandar para empezar?",
    answer:
      "Lo básico: el nombre de tu negocio, qué ofrecés, tus horarios y cómo te contactan. Si tenés logo y fotos, mejor; si no, vemos juntos cómo prepararlos.",
  },
  {
    question: "¿Puedo empezar con algo pequeño?",
    answer:
      "Sí. Una página, un menú o una sola tarea. Empezamos por una necesidad concreta y acordamos qué incluye antes de construir.",
  },
  {
    question: "¿Qué es un dominio?",
    answer:
      "Es la dirección de tu página, por ejemplo tunegocio.com. Se paga aparte, normalmente cada año. En la propuesta te decimos cuánto cuesta y a nombre de quién queda.",
  },
  {
    question: "¿Y si después no sé usarlo?",
    answer:
      "Al entregar te explicamos cómo usarlo, e incluimos 30 días de soporte para dudas o problemas con lo que hicimos.",
  },
  {
    question: "¿Se pueden reunir en persona?",
    answer:
      "Sí. Las visitas y reuniones en persona son de jueves a sábado. Por WhatsApp te respondemos todo el día.",
  },
];

export default function CorporateSections() {
  return (
    <div className="corp-content">
      <ComicStory />

      <NeedFinder />

      <section
        className="corp-section corp-solutions"
        id="soluciones"
        aria-labelledby="corp-solutions-title"
      >
        <TornEdge fill="#ECECE8" seed={5} />
        <div className="corp-container">
          <div className="corp-section-heading">
            <div>
              <p className="corp-kicker">Servicios</p>
              <h2 id="corp-solutions-title">
                Lo que podemos
                <br />
                hacer por vos.
              </h2>
            </div>
            <p>
              Explicado sin palabras raras. Tocá el que te interese para ver
              cómo funciona.
            </p>
          </div>
          <div className="corp-solution-list">
            {solutions.map(({ number, title, body, ideal, href }) => (
              <a
                className="corp-solution-row"
                href={href}
                key={number}
                aria-label={`${title} ${body} Ideal si ${ideal} Ver cómo funciona.`}
              >
                <span className="corp-solution-number" aria-hidden="true">
                  {number}
                </span>
                <h3>{title}</h3>
                <div className="corp-solution-description">
                  <p>{body}</p>
                  <span className="corp-solution-ideal">
                    <strong>Ideal si</strong> {ideal}
                  </span>
                </div>
                <span className="corp-solution-arrow" aria-hidden="true">
                  <ArrowUpRight size={27} strokeWidth={1.5} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />

      <WorksSection />

      <DemoSection />

      <CommercialPackages />

      <AISection />

      <AttentionSection />

      <section
        className="corp-section corp-faq"
        id="preguntas"
        aria-labelledby="corp-faq-title"
      >
        <TornEdge fill="#F7F7F4" seed={31} />
        <div className="corp-container corp-faq-grid">
          <div>
            <p className="corp-kicker">Preguntas frecuentes</p>
            <h2 id="corp-faq-title">
              Preguntá
              <br />
              sin pena.
            </h2>
            <p className="corp-faq-intro">
              Las dudas más comunes de quien empieza, respondidas en palabras
              simples.
            </p>
            <a className="corp-text-link" href="#contacto">
              Tengo otra pregunta <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
          <div className="corp-faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
