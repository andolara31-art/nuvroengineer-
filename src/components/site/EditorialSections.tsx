export default function EditorialSections() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true"></span>Hecho para negocios ticos.
            </p>
            <h1 id="hero-title">
              Tu negocio
              <br />
              ya es bueno.
              <br />
              <span>Que se note.</span>
            </h1>
            <p className="hero-description">
              Páginas web, presencia digital y procesos más simples para
              presentar lo que ofrecés, facilitar el contacto y ordenar el
              seguimiento.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contacto">
                Hablemos de tu negocio <span aria-hidden="true">↗</span>
              </a>
              <a className="underlink" href="#soluciones">
                Conocé las soluciones <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-note">
              Claridad para tu cliente. Orden para tu negocio.
            </p>
          </div>
          <figure className="hero-photo">
            <img
              src="/assets/brand/cafe-counter-1400.webp"
              srcSet="/assets/brand/cafe-counter-720.webp 720w, /assets/brand/cafe-counter-1400.webp 1400w"
              sizes="(max-width: 700px) 100vw, 50vw"
              alt="Mostrador de una cafetería con vitrina de repostería, equipo de café y estantes"
              width="1400"
              height="1500"
              fetchPriority="high"
            />
            <figcaption>
              <div>
                DETRÁS DE CADA NEGOCIO, HAY TRABAJO REAL.
                <br />
                <b>
                  Tu presencia digital
                  <br />
                  debería estar a la altura.
                </b>
              </div>
              <a
                href="https://unsplash.com/photos/brown-wooden-kitchen-cabinet-with-green-plants-WxfXOQEpyFg"
                target="_blank"
                rel="noopener"
              >
                Foto de referencia / Unsplash ↗
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="business-strip">
        <div className="shell">
          <strong>PARA NEGOCIOS QUE ATIENDEN PERSONAS.</strong>
          <div className="businesses">
            <span>Restaurantes</span>
            <span>Barberías</span>
            <span>Salones</span>
            <span>Clínicas</span>
            <span>Comercios locales</span>
          </div>
        </div>
      </div>
      <section className="shell pain" aria-labelledby="pain-title">
        <div>
          <p className="eyebrow">01 / El punto de partida</p>
          <h2 id="pain-title">Tu cliente no debería tener que adivinar.</h2>
          <p>
            Qué vendés. Cómo funciona. Dónde encontrarte. Si esa información
            está dispersa, cada consulta empieza desde cero.
          </p>
          <p>
            Empezamos por ahí: entender qué necesita tu negocio y hacer más
            claro el siguiente paso para tu cliente.
          </p>
        </div>
        <div>
          <div className="pain-statement">
            <span>01</span>
            <div>
              <h3>“¿Dónde veo lo que ofrecen?”</h3>
              <p>
                Una página o catálogo puede reunir lo que hoy explicás en varios
                mensajes.
              </p>
            </div>
          </div>
          <div className="pain-statement">
            <span>02</span>
            <div>
              <h3>“Me pasan preguntando lo mismo.”</h3>
              <p>
                Información fácil de encontrar y respuestas a las dudas
                frecuentes.
              </p>
            </div>
          </div>
          <div className="pain-statement">
            <span>03</span>
            <div>
              <h3>“Se me quedan consultas sin seguimiento.”</h3>
              <p>
                Un proceso definido para saber qué llegó, qué sigue y qué falta
                atender.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="solutions section"
        id="soluciones"
        aria-labelledby="solutions-title"
      >
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">02 / Soluciones con propósito</p>
              <h2 id="solutions-title">
                Primero el problema.
                <br />
                Después la herramienta.
              </h2>
            </div>
            <p className="section-sub">
              Diseño, tecnología y automatización al servicio de algo concreto:
              que tu negocio se entienda mejor y sea más fácil de gestionar.
            </p>
          </div>
          <div className="solution-list">
            <details className="solution" open>
              <summary>
                <span className="solution-number">01</span>
                <span className="solution-name">Web y páginas comerciales</span>
                <span className="solution-result">
                  Que quien entre entienda qué ofrecés y cómo contactarte.
                </span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="solution-content">
                <p>
                  Páginas web, landing pages y páginas promocionales organizadas
                  alrededor de tu oferta. Un lugar claro para explicar, mostrar
                  y dirigir al cliente al siguiente paso.
                </p>
                <a className="underlink" href="#contacto">
                  Quiero presentar mejor mi negocio{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
            <details className="solution">
              <summary>
                <span className="solution-number">02</span>
                <span className="solution-name">Link Bio Vivo y catálogos</span>
                <span className="solution-result">
                  Que tus enlaces, servicios y productos estén en un solo lugar.
                </span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="solution-content">
                <p>
                  Una entrada ordenada a tu negocio desde redes sociales. Reuní
                  tus servicios, catálogo, ubicación y canales de contacto en
                  una página fácil de recorrer.
                </p>
                <a className="underlink" href="#contacto">
                  Quiero ordenar mi presencia digital{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
            <details className="solution">
              <summary>
                <span className="solution-number">03</span>
                <span className="solution-name">Menú QR</span>
                <span className="solution-result">
                  Que consultar tu menú sea fácil, desde la mesa o antes de
                  llegar.
                </span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="solution-content">
                <p>
                  Tu oferta presentada de forma clara en un menú digital.
                  Definimos el contenido y el acceso según la forma en que
                  atendés a tus clientes.
                </p>
                <a className="underlink" href="#contacto">
                  Quiero un menú más claro <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
            <details className="solution">
              <summary>
                <span className="solution-number">04</span>
                <span className="solution-name">Automatización y WhatsApp</span>
                <span className="solution-result">
                  Que las tareas repetitivas no te ocupen todo el día.
                </span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="solution-content">
                <p>
                  Revisamos consultas, respuestas frecuentes y seguimiento para
                  definir qué se puede simplificar. Automatizaciones, agentes
                  para WhatsApp y sistemas comerciales según el proceso que
                  realmente necesitás.
                </p>
                <a className="underlink" href="#contacto">
                  Quiero revisar mi proceso <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
            <details className="solution">
              <summary>
                <span className="solution-number">05</span>
                <span className="solution-name">Reseñas de Google con NFC</span>
                <span className="solution-result">
                  Que dejarte una reseña tenga menos pasos.
                </span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="solution-content">
                <p>
                  Placas y tarjetas configuradas para facilitar el acceso al
                  enlace de reseñas de tu negocio. Una solución física para el
                  momento en que un cliente quiere compartir su experiencia.
                </p>
                <a className="underlink" href="#demostracion">
                  Así se entiende <span aria-hidden="true">↓</span>
                </a>
              </div>
            </details>
            <details className="solution">
              <summary>
                <span className="solution-number">06</span>
                <span className="solution-name">
                  Contenido y presencia visual
                </span>
                <span className="solution-result">
                  Que lo que mostrás esté a la altura de lo que ofrecés.
                </span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="solution-content">
                <p>
                  Piezas visuales para explicar tu oferta, presentar promociones
                  y mantener una presencia coherente. Mensajes claros y una
                  dirección visual que se sienta parte de tu negocio.
                </p>
                <a className="underlink" href="#contacto">
                  Quiero mejorar cómo me presento{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="statement" aria-labelledby="statement-title">
        <div className="shell">
          <p className="eyebrow">EL CRITERIO NUVRO</p>
          <h2 id="statement-title">
            Hay tareas que tu negocio
            <br />
            no debería seguir
            <br />
            <span>haciendo a mano.</span>
          </h2>
          <div className="statement-bottom">
            <p>
              Pero no todo necesita automatizarse. Primero entendemos cómo
              trabajás. Después elegimos lo que tiene sentido resolver.
            </p>
            <a className="button white" href="#proceso">
              Conocé cómo trabajamos <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section
        className="section shell process"
        id="proceso"
        aria-labelledby="process-title"
      >
        <div>
          <p className="eyebrow">03 / Sin enredos</p>
          <h2 id="process-title">
            Una conversación clara.
            <br />
            Un siguiente paso concreto.
          </h2>
          <p className="process-intro">
            No tenés que llegar sabiendo qué sistema necesitás. Contanos qué
            pasa en tu negocio y qué querés mejorar.
          </p>
        </div>
        <div>
          <div className="process-step">
            <span>01</span>
            <div>
              <h3>Entendemos tu negocio.</h3>
              <p>
                Qué ofrecés, cómo llegan tus clientes y dónde se complica el
                proceso.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span>02</span>
            <div>
              <h3>Definimos lo que sí hace falta.</h3>
              <p>
                Una propuesta con alcance, entregables y costo antes de empezar.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span>03</span>
            <div>
              <h3>Construimos y revisamos.</h3>
              <p>
                La solución toma forma con una revisión de lo acordado y una
                explicación de uso.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="shell" id="demostracion" aria-labelledby="demo-title">
        <div className="demo">
          <div className="demo-story">
            <p className="eyebrow">04 / Así de simple</p>
            <h2 id="demo-title">
              Tu cliente quedó satisfecho.
              <br />
              Facilitale contarlo.
            </h2>
            <p>
              En lugar de pedirle que busque tu negocio después, una placa o
              tarjeta NFC puede acercarlo al enlace de reseñas en el momento.
            </p>
            <a className="underlink" href="#contacto">
              Consultar por reseñas NFC <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="demo-sequence">
            <div>
              <b>1</b>
              <p>
                Acerca el celular
                <br />a la placa configurada.
              </p>
            </div>
            <div>
              <b>2</b>
              <p>
                Abre el enlace
                <br />
                de reseñas de tu negocio.
              </p>
            </div>
            <div>
              <b>3</b>
              <p>Comparte su experiencia.</p>
            </div>
            <small>
              La lectura NFC depende del teléfono y su configuración. La reseña
              siempre la escribe y publica el cliente.
            </small>
          </div>
        </div>
      </section>
      <section
        className="section shell faq"
        id="preguntas"
        aria-labelledby="faq-title"
      >
        <div>
          <p className="eyebrow">05 / Antes de empezar</p>
          <h2 id="faq-title">
            Preguntas claras.
            <br />
            Respuestas también.
          </h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>
              No sé qué necesita mi negocio. ¿Por dónde empiezo?
            </summary>
            <p>
              Contanos qué ofrecés y qué parte te está complicando el día:
              explicar tus servicios, responder consultas, dar seguimiento o
              mantener tu información al día. Desde ahí podemos definir una
              solución.
            </p>
          </details>
          <details>
            <summary>¿Puedo empezar con una sola solución?</summary>
            <p>
              Sí. El punto de partida puede ser una página, un menú, una placa
              para reseñas o un proceso específico. El alcance se define según
              tu necesidad.
            </p>
          </details>
          <details>
            <summary>¿Cuánto cuesta?</summary>
            <p>
              El precio depende de lo que necesita el proyecto. Antes de
              empezar, la propuesta debe dejar claro el alcance, los entregables
              y el costo.
            </p>
          </details>
          <details>
            <summary>¿Tengo que saber de tecnología?</summary>
            <p>
              No necesitás traer una solución técnica. Necesitamos entender cómo
              funciona tu negocio y qué querés resolver.
            </p>
          </details>
          <details>
            <summary>¿Cómo los contacto?</summary>
            <p>
              Podés escribirnos desde el formulario de esta página. Incluí qué
              tipo de negocio tenés y qué te gustaría mejorar.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
