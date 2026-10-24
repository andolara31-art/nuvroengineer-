import { useState } from "react";
import "./guide.css";

const guidePrompt = `Actuá como asistente de atención de un negocio ficticio de reparación de equipos.
Objetivo: preparar un borrador breve para responder una consulta.
Consulta ficticia: “¿Pueden revisar una computadora que se apaga sola?”
Información confirmada para este ejemplo: primero se debe coordinar una revisión; el precio y la fecha se confirman después de conocer el equipo.
Tono: claro, amable y cercano, usando voseo de Costa Rica.
Instrucciones: no inventés un diagnóstico, precios, horarios ni disponibilidad. Pedí solamente el tipo de equipo y una descripción del problema, sin contraseñas ni información sensible. Indicá que el siguiente paso es coordinar una revisión.
Formato: un párrafo corto y una pregunta de seguimiento.
La respuesta será revisada por una persona antes de enviarse.`;

export default function BusinessGuide() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyExample() {
    try {
      await navigator.clipboard.writeText(guidePrompt);
      setCopyStatus(
        "Ejemplo copiado. Adaptalo con información confirmada antes de usarlo.",
      );
    } catch {
      setCopyStatus(
        "Podés seleccionar y copiar el texto del ejemplo directamente.",
      );
    }
  }

  return (
    <main id="contenido" className="nuvro-guide">
      <article className="shell nuvro-guide-layout">
        <header className="nuvro-guide-header">
          <a className="underlink" href="/#aprende">
            ← Volver a Aprendé IA
          </a>
          <p className="eyebrow">
            <span aria-hidden="true" />
            Guía práctica · Editorial de NUVRO
          </p>
          <h1>Cómo empezar con IA y automatización en tu negocio</h1>
          <p className="nuvro-guide-lead">
            Elegí una tarea que repetís, prepará un ejemplo y revisá el
            resultado. Esta guía te propone una prueba pequeña para decidir qué
            vale la pena incorporar a tu trabajo.
          </p>
          <p className="nuvro-guide-meta">
            Para personas que atienden clientes y administran una pyme en Costa
            Rica. Los negocios y datos de los ejemplos son ficticios.
          </p>
        </header>

        <nav className="nuvro-guide-index" aria-label="Contenido de la guía">
          <p>EN ESTA GUÍA</p>
          <ol>
            <li>
              <a href="#elegi-la-tarea">Elegí una tarea concreta</a>
            </li>
            <li>
              <a href="#prepara-el-prompt">Prepará una instrucción útil</a>
            </li>
            <li>
              <a href="#revisa-la-respuesta">Revisá antes de usar</a>
            </li>
            <li>
              <a href="#mapa-de-seguimiento">Dibujá el seguimiento</a>
            </li>
            <li>
              <a href="#evalua-el-resultado">Evaluá el resultado</a>
            </li>
            <li>
              <a href="#lista-para-empezar">Tu lista para empezar</a>
            </li>
          </ol>
        </nav>

        <div className="nuvro-guide-body">
          <section id="elegi-la-tarea" aria-labelledby="guide-task-title">
            <p className="nuvro-guide-number">01 / EL PUNTO DE PARTIDA</p>
            <h2 id="guide-task-title">
              Elegí una tarea que puedas explicar en una frase.
            </h2>
            <p>
              Por ejemplo: “Necesito preparar un borrador para las consultas que
              preguntan qué incluye un servicio”. Anotá qué información recibís,
              qué respuesta necesitás y quién la revisa. Si no podés describir
              el resultado, primero ordená la tarea.
            </p>
            <p>
              Para una primera prueba, podés elegir redactar respuestas
              frecuentes, organizar una lista de pendientes o convertir tus
              notas en un borrador de publicación. Elegí una actividad que
              conozcás bien: así vas a poder reconocer una respuesta incorrecta.
            </p>
            <div className="nuvro-guide-callout">
              <strong>Tu ficha de prueba</strong>
              <dl>
                <div>
                  <dt>Tarea</dt>
                  <dd>Preparar una respuesta sobre una revisión de equipo.</dd>
                </div>
                <div>
                  <dt>Entrada</dt>
                  <dd>
                    La consulta y las condiciones del servicio que ya
                    confirmaste.
                  </dd>
                </div>
                <div>
                  <dt>Salida</dt>
                  <dd>Un borrador que propone el siguiente paso.</dd>
                </div>
                <div>
                  <dt>Responsable</dt>
                  <dd>La persona que atiende y aprueba la respuesta.</dd>
                </div>
              </dl>
            </div>
            <p>
              Para esta prueba, mantené las decisiones sobre cobros, compromisos
              con clientes o información confidencial bajo revisión directa.
              Podés empezar con ejemplos ficticios como el de abajo.
            </p>
          </section>

          <section id="prepara-el-prompt" aria-labelledby="guide-prompt-title">
            <p className="nuvro-guide-number">
              02 / UNA INSTRUCCIÓN CON CONTEXTO
            </p>
            <h2 id="guide-prompt-title">
              Contale qué necesitás y qué no debe inventar.
            </h2>
            <p>
              Una instrucción —también llamada <em>prompt</em>— puede reunir
              objetivo, contexto, información confirmada, tono y formato. Si el
              precio o la disponibilidad no están confirmados, escribí esa
              limitación. La respuesta debe ayudarte a preparar un borrador que
              puedas revisar.
            </p>
            <div className="nuvro-guide-prompt">
              <p>EJEMPLO CON DATOS FICTICIOS</p>
              <pre>{guidePrompt}</pre>
              <button type="button" onClick={copyExample}>
                Copiar instrucción de ejemplo <span aria-hidden="true">⧉</span>
              </button>
              <p className="nuvro-guide-copy-status" role="status">
                {copyStatus}
              </p>
            </div>
            <p>
              Probalo primero tal como está. Después cambiá un elemento por vez:
              el tipo de consulta, el tono o el formato. Guardá la versión que
              te resulte más clara junto con las instrucciones que necesitás
              revisar.
            </p>
            <p>
              Antes de usar una herramienta con información real, revisá sus
              condiciones y controles de datos. Para aprender el proceso,
              reemplazá nombres, teléfonos, correos y detalles de clientes por
              datos ficticios.
            </p>
          </section>

          <section
            id="revisa-la-respuesta"
            aria-labelledby="guide-review-title"
          >
            <p className="nuvro-guide-number">
              03 / LA REVISIÓN ES PARTE DEL TRABAJO
            </p>
            <h2 id="guide-review-title">
              Revisá el contenido como si fueras el cliente.
            </h2>
            <p>
              Leé el borrador y comparalo con la información que entregaste. Que
              una respuesta suene segura no confirma que sus datos sean
              correctos. Marcá qué podés usar, qué hay que corregir y qué
              necesita confirmación antes de enviarse.
            </p>
            <ul>
              <li>
                <strong>Información:</strong> ¿los precios, horarios y
                condiciones coinciden con tu negocio?
              </li>
              <li>
                <strong>Alcance:</strong> ¿promete algo que todavía no podés
                asegurar?
              </li>
              <li>
                <strong>Claridad:</strong> ¿contesta la consulta y explica un
                siguiente paso?
              </li>
              <li>
                <strong>Tono:</strong> ¿suena a la forma en que atendés?
              </li>
              <li>
                <strong>Datos:</strong> ¿pide únicamente la información
                necesaria para continuar?
              </li>
            </ul>
            <p>
              Si el borrador falla, corregí la instrucción y volvé a probar. Una
              corrección útil es concreta: “No confirmés disponibilidad; pedí la
              fecha que necesita el cliente para que una persona la revise”.
            </p>
            <p>
              En <a href="/ia-para-negocios">IA para negocios</a> podés conocer
              cómo plantear este trabajo con acompañamiento de NUVRO.
            </p>
          </section>

          <section id="mapa-de-seguimiento" aria-labelledby="guide-flow-title">
            <p className="nuvro-guide-number">
              04 / DE LA RESPUESTA AL PROCESO
            </p>
            <h2 id="guide-flow-title">
              Dibujá qué pasa después de recibir una consulta.
            </h2>
            <p>
              Antes de conectar herramientas, escribí el recorrido de una
              consulta. Definí dónde entra, dónde se registra, quién recibe el
              aviso y quién responde. El ejemplo siguiente es un mapa para
              planear; no activa ninguna automatización.
            </p>
            <ol className="nuvro-guide-flow">
              <li>
                <strong>Entra una consulta.</strong>
                <span>
                  Un formulario recibe servicio de interés y un medio de
                  contacto.
                </span>
              </li>
              <li>
                <strong>Se registra.</strong>
                <span>
                  La integración crea un registro con fecha, origen y estado
                  pendiente. Se define cómo reconocer un registro duplicado.
                </span>
              </li>
              <li>
                <strong>Se avisa a una persona.</strong>
                <span>
                  La persona responsable recibe la información necesaria para
                  revisar la consulta. Si el aviso falla, se deja visible en la
                  lista de pendientes.
                </span>
              </li>
              <li>
                <strong>Se revisa y responde.</strong>
                <span>
                  Una persona confirma los datos, responde al cliente y
                  actualiza el estado.
                </span>
              </li>
            </ol>
            <div className="nuvro-guide-callout">
              <strong>Las preguntas que completan el mapa</strong>
              <p>
                ¿Qué pasa si falta un dato? ¿Quién revisa los pendientes? ¿Cómo
                se detecta un envío repetido? ¿Qué sucede si falla una
                herramienta? ¿Cómo se pausa el flujo? Dejá esas respuestas junto
                al proceso antes de activarlo.
              </p>
            </div>
            <p>
              Probá primero con consultas ficticias: una completa, una
              incompleta y una repetida. Compará lo que ocurrió con lo que
              esperabas en cada paso. Si necesitás llevar ese mapa a las
              herramientas de tu negocio, conocé el servicio de{" "}
              <a href="/automatizaciones-negocios">
                automatizaciones para negocios
              </a>
              .
            </p>
          </section>

          <section
            id="evalua-el-resultado"
            aria-labelledby="guide-evaluate-title"
          >
            <p className="nuvro-guide-number">
              05 / DECIDÍ CON LO QUE OBSERVASTE
            </p>
            <h2 id="guide-evaluate-title">
              Anotá qué mejoró y qué seguís corrigiendo.
            </h2>
            <p>
              Usá ejemplos comparables del mismo tipo de tarea y registrá el
              tiempo que te toma hacerla, revisar el resultado y corregirlo.
              Compará el proceso habitual con la prueba completa, incluyendo esa
              revisión.
            </p>
            <div className="nuvro-guide-table-wrap">
              <table>
                <caption>Registro sugerido para tu prueba</caption>
                <thead>
                  <tr>
                    <th scope="col">Qué anotar</th>
                    <th scope="col">Para qué sirve</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tiempo total</th>
                    <td>
                      Comparar preparación, revisión y correcciones con tu forma
                      habitual de trabajar.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Correcciones necesarias</th>
                    <td>
                      Reconocer qué información o instrucciones hay que mejorar.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Consultas pendientes</th>
                    <td>
                      Comprobar si el seguimiento queda visible y tiene
                      responsable.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Errores o fallas</th>
                    <td>
                      Decidir qué necesita resolverse antes de usar el proceso
                      con clientes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Si tenés que reescribir cada respuesta o revisar más pasos de los
              que resolvés, ajustá la prueba antes de ampliarla. Si el resultado
              funciona para tu tarea, documentá cómo se usa, quién revisa y cómo
              volver al proceso anterior cuando sea necesario.
            </p>
          </section>

          <section
            id="lista-para-empezar"
            aria-labelledby="guide-checklist-title"
          >
            <p className="nuvro-guide-number">06 / LISTA PARA EMPEZAR</p>
            <h2 id="guide-checklist-title">
              Dejá lista una prueba que puedas revisar.
            </h2>
            <ul className="nuvro-guide-checklist">
              <li>Tengo una tarea concreta y un resultado esperado.</li>
              <li>
                Preparé ejemplos ficticios y la información que sí está
                confirmada.
              </li>
              <li>
                Escribí una instrucción que explica contexto, límites y formato.
              </li>
              <li>Definí quién revisa y aprueba el resultado.</li>
              <li>Dibujé el flujo y qué hacer si algo falla.</li>
              <li>
                Anoté tiempo, correcciones y pendientes para decidir el
                siguiente paso.
              </li>
            </ul>
            <p>
              Podés probar{" "}
              <a href="/#demostraciones">las demostraciones de NUVRO</a> para
              explorar un menú digital, una consulta desde una página y un
              seguimiento simulado.
            </p>
          </section>

          <aside
            className="nuvro-guide-contact"
            aria-labelledby="guide-contact-title"
          >
            <p className="eyebrow">Llevémoslo a tu negocio</p>
            <h2 id="guide-contact-title">
              Empecemos por esa tarea que repetís todos los días.
            </h2>
            <p>
              Contanos qué hacés hoy, qué se te complica y qué necesitás
              ordenar. Con eso podemos conversar sobre el alcance de una primera
              implementación.
            </p>
            <a className="button" href="/#contacto">
              Quiero revisar una idea con NUVRO{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </article>
    </main>
  );
}
