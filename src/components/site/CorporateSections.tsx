import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import CommercialPackages from "./CommercialPackages";
import HowWeWork from "./HowWeWork";
import NeedFinder from "./NeedFinder";
import TornEdge from "./TornEdge";
import WorksSection from "./WorksSection";
import "./corporate-sections.css";

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
      <Suspense fallback={null}>
        <WorksSection />
      </Suspense>

      <Suspense fallback={null}>
        <NeedFinder />
      </Suspense>

      <Suspense fallback={null}>
        <CommercialPackages />
      </Suspense>

      <Suspense fallback={null}>
        <HowWeWork />
      </Suspense>

      <section
        className="corp-section corp-faq"
        id="preguntas"
        aria-labelledby="corp-faq-title"
      >
        <TornEdge fill="#F7F7F4" seed={31} />
        <div className="corp-container corp-faq-grid">
          <div>
            <p className="corp-kicker">Preguntas frecuentes</p>
            <h2 id="corp-faq-title">Preguntá sin pena.</h2>
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
