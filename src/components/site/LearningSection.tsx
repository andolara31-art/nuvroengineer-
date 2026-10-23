import { useState } from "react";
import "./learning.css";

const examplePrompt = `Ayudame a preparar una respuesta breve y amable para un cliente.
Mi negocio es: [describí tu negocio].
El cliente pregunta: [pegá la consulta sin datos personales].
Información confirmada: [horario, precio o condiciones vigentes].
No inventés precios, disponibilidad ni promesas. Si falta información, indicá qué debo confirmar. Entregá un borrador para que yo lo revise antes de enviarlo.`;

export default function LearningSection() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(examplePrompt);
      setCopyStatus("Ejemplo copiado. Completá los campos antes de usarlo.");
    } catch {
      setCopyStatus(
        "No se pudo copiar automáticamente. Podés seleccionar y copiar el texto del ejemplo.",
      );
    }
  }

  return (
    <section
      className="section learn"
      id="aprende"
      aria-labelledby="learn-title"
    >
      <div className="shell">
        <div className="section-head learn-head">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true" />
              05 / Aprendé y aplicá
            </p>
            <h2 id="learn-title">
              IA y automatizaciones.
              <br />
              <span>Para tu negocio.</span>
            </h2>
          </div>
          <p className="section-sub">
            No se trata de usar más herramientas. Se trata de entender qué te
            pueden resolver. Empezá con estos ejemplos, sin enredos.
          </p>
        </div>

        <div className="learn-grid">
          <article className="learn-card">
            <div className="learn-card-label">
              <span>01 / INTELIGENCIA ARTIFICIAL</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3>
              De la página en blanco
              <br />
              al primer borrador.
            </h3>
            <p>
              Practicá cómo pedir ayuda para responder consultas o preparar
              contenido, sin perder la voz de tu negocio.
            </p>
            <details>
              <summary>Ver un ejemplo de IA</summary>
              <div className="learn-example">
                <p className="learn-example-label">
                  UNA INSTRUCCIÓN PARA PROBAR
                </p>
                <pre>{examplePrompt}</pre>
                <button
                  className="learn-copy"
                  type="button"
                  onClick={copyPrompt}
                >
                  Copiar ejemplo <span aria-hidden="true">⧉</span>
                </button>
                <p className="learn-copy-status" role="status">
                  {copyStatus}
                </p>
                <p className="learn-caution">
                  Usá información ficticia o sin datos personales. Revisá
                  siempre el borrador antes de enviarlo.
                </p>
              </div>
            </details>
          </article>

          <article className="learn-card">
            <div className="learn-card-label">
              <span>02 / AUTOMATIZACIONES</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3>
              Una consulta entra.
              <br />
              El seguimiento empieza.
            </h3>
            <p>
              Entendé cómo conectar una tarea con la siguiente para organizar
              consultas y avisos que hoy hacés a mano.
            </p>
            <details>
              <summary>Ver un flujo de ejemplo</summary>
              <div className="learn-example">
                <ol className="learn-flow">
                  <li>
                    <strong>Llega una consulta</strong>
                    <span>El cliente completa un formulario.</span>
                  </li>
                  <li>
                    <strong>Se registra</strong>
                    <span>
                      Una integración guarda la información en una lista.
                    </span>
                  </li>
                  <li>
                    <strong>Se genera un aviso</strong>
                    <span>La persona responsable recibe una notificación.</span>
                  </li>
                  <li>
                    <strong>Vos revisás y respondés</strong>
                    <span>El trato con tu cliente sigue en tus manos.</span>
                  </li>
                </ol>
                <p className="learn-caution">
                  Es un ejemplo educativo, no una automatización activa.
                  Requiere configurar herramientas, permisos y pruebas.
                </p>
              </div>
            </details>
          </article>

          <article className="learn-card">
            <div className="learn-card-label">
              <span>03 / CRITERIO PARA EMPEZAR</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3>
              Empezá por una tarea.
              <br />
              No por todo a la vez.
            </h3>
            <p>
              Elegí algo pequeño, repetitivo y fácil de revisar. Probalo antes
              de incorporarlo al trabajo de cada día.
            </p>
            <details>
              <summary>Ver la guía para empezar</summary>
              <div className="learn-example">
                <ul className="learn-checklist">
                  <li>
                    <strong>Identificá la tarea.</strong> ¿Qué repetís y qué
                    resultado necesitás?
                  </li>
                  <li>
                    <strong>Ordená la información.</strong> Definí qué entra y
                    qué debería salir.
                  </li>
                  <li>
                    <strong>Probá sin datos sensibles.</strong> Usá ejemplos
                    ficticios al empezar.
                  </li>
                  <li>
                    <strong>Revisá el resultado.</strong> Corregí errores y dejá
                    una persona a cargo.
                  </li>
                </ul>
                <p className="learn-caution">
                  Si una tarea implica decisiones importantes o información
                  confidencial, no la automatices sin evaluar los riesgos.
                </p>
              </div>
            </details>
          </article>
        </div>

        <div className="learn-bottom">
          <p>
            Aprender es el primer paso.
            <br />
            <strong>Aplicarlo con sentido es lo que sigue.</strong>
          </p>
          <a
            className="button"
            href="https://wa.me/50671757171?text=Hola%20NUVRO%2C%20quiero%20aprender%20a%20aplicar%20IA%20y%20automatizaciones%20en%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero aplicarlo en mi negocio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
