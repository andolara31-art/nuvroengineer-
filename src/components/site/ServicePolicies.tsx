import { whatsappUrl } from "../../lib/site";
import "./service-policies.css";

const policyIndex = [
  ["alcance", "Antes de empezar"],
  ["produccion", "Producción y revisiones"],
  ["pagos", "Pagos y facturación"],
  ["costos-externos", "Servicios y costos externos"],
  ["soporte", "Soporte y NUVRO CARE"],
  ["entrega", "Entrega, accesos y datos"],
  ["resenas", "Reseñas y resultados"],
  ["cambios", "Cambios y cancelaciones"],
] as const;

export default function ServicePolicies() {
  return (
    <main id="contenido" className="service-policies">
      <header className="shell policies-intro">
        <nav aria-label="Ruta de navegación" className="policies-breadcrumb">
          <a href="/">Inicio</a> <span aria-hidden="true">/</span>{" "}
          <span>Políticas de servicio</span>
        </nav>
        <p className="eyebrow">NUVRO ENGINEER / Cómo trabajamos</p>
        <h1>Las cosas claras, desde el inicio.</h1>
        <p className="policies-lead">
          Qué necesitamos para empezar, cómo se entrega tu proyecto y qué pasa
          después. Estas condiciones generales acompañan la cotización; el
          alcance concreto se acuerda por escrito antes de producir.
        </p>
        <div className="policies-summary" aria-label="Condiciones principales">
          <p>
            <strong>Alcance definido.</strong> Sabés qué se entrega.
          </p>
          <p>
            <strong>50% de anticipo.</strong> Para iniciar producción.
          </p>
          <p>
            <strong>30 días de soporte.</strong> Después de la entrega.
          </p>
        </div>
      </header>

      <div className="shell policies-layout">
        <aside className="policies-index">
          <nav aria-label="En esta página">
            <p>EN ESTA PÁGINA</p>
            <ol>
              {policyIndex.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
            <a className="policies-index-contact" href="/#contacto">
              Consultá tu proyecto ↗
            </a>
          </nav>
        </aside>

        <div className="policies-body">
          <section id="alcance" aria-labelledby="alcance-title">
            <p className="policies-number">01 / EL ACUERDO</p>
            <h2 id="alcance-title">Antes de empezar</h2>
            <p>
              Primero entendemos qué necesita tu negocio y te recomendamos una
              solución. Después enviamos una cotización para tu aprobación, con
              entregables, funciones, contenido, plazos, revisiones y
              condiciones de pago. Un nombre de servicio o paquete no sustituye
              ese alcance.
            </p>
            <p>
              Coordinamos qué materiales necesitás aportar: textos, logo, fotos,
              catálogo, datos de contacto o accesos autorizados, según el
              proyecto. Debés contar con permiso para usar el contenido que nos
              compartís. Si necesitás ayuda para prepararlo, la definimos en la
              propuesta.
            </p>
          </section>

          <section id="produccion" aria-labelledby="produccion-title">
            <p className="policies-number">02 / EL PROCESO</p>
            <h2 id="produccion-title">Producción y revisiones</h2>
            <p>
              La producción comienza con la cotización aprobada, el anticipo
              confirmado y el contenido requerido para esa etapa. El calendario
              se acuerda según el trabajo; también depende de recibir
              materiales, accesos y aprobaciones del negocio.
            </p>
            <p>
              Durante la revisión comprobamos el resultado contra el alcance
              aprobado. La cantidad y el tipo de revisiones quedan en la
              cotización. Una sección nueva, más productos, otra integración o
              una función adicional pueden requerir una ampliación de alcance,
              costo y plazo, que se confirma antes de ejecutarla.
            </p>
          </section>

          <section id="pagos" aria-labelledby="pagos-title">
            <p className="policies-number">03 / PAGOS</p>
            <h2 id="pagos-title">Anticipo, saldo y factura</h2>
            <p>
              Trabajamos con un 50% de anticipo para iniciar y el 50% restante
              contra entrega, antes de publicar o liberar la entrega final. No
              iniciamos producción sin el pago confirmado.
            </p>
            <p>
              Podés pagar por SINPE Móvil, transferencia bancaria o tarjeta
              mediante un enlace de pago coordinado con Anderson. El efectivo se
              recibe con coordinación previa. Los datos de pago se confirman por
              el canal comercial; no ingresés información de tarjeta en nuestro
              formulario de contacto.
            </p>
            <p>
              Emitimos factura electrónica. Para prepararla solicitamos nombre o
              razón social, identificación, correo y teléfono. La cotización y
              la factura detallan los impuestos aplicables y el total a pagar.
            </p>
          </section>

          <section id="costos-externos" aria-labelledby="costos-title">
            <p className="policies-number">04 / LO QUE SE COTIZA APARTE</p>
            <h2 id="costos-title">Plataformas, suscripciones y materiales</h2>
            <p>
              Según la solución, puede haber dominio, alojamiento web, plan de
              Shopify, aplicaciones, herramientas de automatización o cargos de
              proveedores de pago. La propuesta distingue qué está incluido,
              quién lo paga y qué requiere renovación o una suscripción.
            </p>
            <p>
              En QR y NFC, la base o soporte físico, impresión, fabricación y
              envío se detallan por separado cuando correspondan. Crear un video
              o una pieza publicitaria no incluye por defecto el presupuesto de
              pauta ni la administración de campañas. Cualquier servicio
              adicional debe quedar expresamente acordado.
            </p>
            <p>
              Las condiciones y la disponibilidad de las plataformas externas
              dependen de cada proveedor. Antes de contratar, aclaramos cuáles
              necesita tu proyecto.
            </p>
          </section>

          <section id="soporte" aria-labelledby="soporte-title">
            <p className="policies-number">05 / DESPUÉS DE ENTREGAR</p>
            <h2 id="soporte-title">30 días de soporte incluidos</h2>
            <p>
              Todo servicio incluye 30 días de soporte postentrega. En ese
              período podés consultar sobre el uso de la solución y reportar
              problemas de lo entregado para revisarlos. Las funciones nuevas y
              los cambios de alcance se cotizan aparte: el soporte no significa
              mantenimiento ni cambios ilimitados.
            </p>
            <p>
              Para continuar después, NUVRO CARE es opcional. El plan, las
              tareas y los límites se acuerdan antes de contratarlo; no se
              activa por defecto.
            </p>
            <dl className="policies-care">
              <div>
                <dt>CARE BASIC</dt>
                <dd>
                  Cambios menores, soporte básico, revisión mensual y respaldo.
                </dd>
              </div>
              <div>
                <dt>CARE GROWTH</dt>
                <dd>
                  Cambios mensuales, actualización de contenido, revisión de
                  botones de contacto y WhatsApp, y mejoras simples.
                </dd>
              </div>
              <div>
                <dt>CARE SYSTEM</dt>
                <dd>
                  Para CRM, automatizaciones e IA: monitoreo técnico, soporte
                  del sistema contratado y reportes.
                </dd>
              </div>
            </dl>
          </section>

          <section id="entrega" aria-labelledby="entrega-title">
            <p className="policies-number">06 / TU SOLUCIÓN</p>
            <h2 id="entrega-title">Entrega, accesos y datos</h2>
            <p>
              La propuesta indica qué archivos, configuraciones, accesos e
              indicaciones de uso forman parte de la entrega. También debe
              aclarar la titularidad de cuentas y dominios, y las licencias de
              recursos o herramientas de terceros. No todas las plataformas
              permiten exportar lo mismo; lo revisamos al elegir la solución.
            </p>
            <p>
              Solicitamos únicamente los accesos necesarios y los coordinamos
              por un medio acordado. No envíes contraseñas ni datos sensibles en
              el formulario público. Si el proyecto usa información de clientes,
              definimos qué datos necesita, para qué se usan y qué permisos
              requiere el negocio antes de implementar el flujo.
            </p>
            <p>
              El uso de datos en esta web se explica en nuestra{" "}
              <a href="/privacidad">información de privacidad</a>.
            </p>
          </section>

          <section id="resenas" aria-labelledby="resenas-title">
            <p className="policies-number">07 / EXPECTATIVAS REALES</p>
            <h2 id="resenas-title">
              Reseñas auténticas, sin promesas de resultados
            </h2>
            <p>
              Una base QR o NFC facilita llegar al enlace de reseñas de Google;
              no genera reseñas por sí sola. La invitación debe ser abierta a
              experiencias reales, sin premios, descuentos ni selección de
              clientes según la opinión que vayan a dejar. No vendemos reseñas
              ni prometemos una calificación.
            </p>
            <p>
              Diseñamos herramientas para presentar el negocio con claridad y
              facilitar el contacto o la compra. No garantizamos ventas,
              cantidad de consultas ni posiciones en Google. Los resultados
              también dependen de la oferta, la atención y la operación de cada
              negocio.
            </p>
            <a
              className="policies-source"
              href="https://support.google.com/contributionpolicy/answer/7400114?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultá la política de contenido de Google Maps ↗
            </a>
          </section>

          <section id="cambios" aria-labelledby="cambios-title">
            <p className="policies-number">08 / SI ALGO CAMBIA</p>
            <h2 id="cambios-title">Cambios, cancelaciones y reembolsos</h2>
            <p>
              Si necesitás cambiar o detener un proyecto, avisá a Anderson para
              revisar el trabajo realizado, los compromisos con terceros y las
              condiciones de la cotización aprobada. Cualquier ajuste de
              entrega, saldo o reembolso se evalúa según ese acuerdo y las
              condiciones aplicables, sin limitar los derechos que correspondan.
            </p>
            <p>
              Antes de contratar, revisamos con vos las condiciones de
              suspensión y cancelación que aplican a tu proyecto. Cualquier
              condición específica debe aclararse antes de aprobarlo.
            </p>
          </section>

          <div className="policies-next">
            <p className="eyebrow">ATENCIÓN DIRECTA CON ANDERSON</p>
            <h2>¿Hay algo que querés aclarar?</h2>
            <p>Hablemos del alcance antes de que tomés una decisión.</p>
            <a
              className="button"
              href={whatsappUrl(
                "Hola Anderson, quiero aclarar una condición de servicio antes de cotizar mi proyecto.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="policies-back" href="/#contacto">
              O contanos sobre tu negocio →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
