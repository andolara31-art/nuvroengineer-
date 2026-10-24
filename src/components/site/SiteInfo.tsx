import { whatsappUrl, BUSINESS_WHATSAPP_DISPLAY } from "../../lib/site";
import "./site-expansion.css";

export default function SiteInfo({ page }: { page: string }) {
  const privacy = page === "/privacidad";
  const about = page === "/sobre-nuvro";
  return (
    <main id="contenido" className="shell site-info">
      <nav aria-label="Ruta de navegación">
        <a href="/">Inicio</a> /{" "}
        {privacy
          ? "Privacidad"
          : about
            ? "Sobre NUVRO"
            : "Página no encontrada"}
      </nav>
      <p className="eyebrow">NUVRO ENGINEER / Costa Rica</p>
      <h1>
        {privacy
          ? "Tu información, con claridad."
          : about
            ? "Tecnología útil para el trabajo de cada día."
            : "Esta página no está disponible."}
      </h1>
      {privacy ? (
        <>
          <h2>Cuando nos contactás</h2>
          <p>
            El formulario prepara un mensaje en tu dispositivo y abre WhatsApp
            para que lo revisés y lo enviés. La web no registra ese mensaje en
            una base de datos propia. Al enviarlo, compartís los datos que
            incluyás con NUVRO ENGINEER y con WhatsApp, según las condiciones de
            ese servicio.
          </p>
          <p>
            Usamos la información que nos compartís para atender tu consulta y
            dar seguimiento a lo solicitado. Podés consultar sobre el uso de tus
            datos o pedir que dejemos de contactarte por el mismo canal de
            WhatsApp.
          </p>
          <h2>Medición opcional</h2>
          <p>
            Si Google Analytics está configurado y lo permitís, se miden visitas
            y acciones como abrir un contacto. El texto de tus mensajes, tu
            nombre de negocio y tu correo no se incluyen en los eventos que
            envía esta web. No contamos un clic como una consulta recibida ni
            como una venta.
          </p>
          <p>
            Tu preferencia se conserva en este navegador. Podés cambiarla aquí:
          </p>
          <button
            className="button"
            type="button"
            onClick={() =>
              window.dispatchEvent(new Event("nuvro:open-privacy"))
            }
          >
            Cambiar preferencia de medición
          </button>
          <h2>Servicios que hacen funcionar la web</h2>
          <p>
            La web se aloja en Vercel y utiliza fuentes de Google Fonts. Al
            cargar esos recursos, sus proveedores pueden recibir información
            técnica de conexión. Las demostraciones funcionan con datos
            ficticios dentro de la página y no envían pedidos ni avisos reales.
          </p>
          <p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacidad de Google ↗
            </a>{" "}
            ·{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacidad de WhatsApp ↗
            </a>{" "}
            ·{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacidad de Vercel ↗
            </a>
          </p>
        </>
      ) : about ? (
        <>
          <p>
            NUVRO ENGINEER ofrece diseño web, presencia digital, IA aplicada y
            automatización para negocios de todo Costa Rica. Partimos de cómo
            trabajás y de lo que necesita tu cliente para definir una solución
            con un propósito concreto.
          </p>
          <h2>Cómo trabajamos</h2>
          <p>
            Primero conversamos sobre tu negocio. Después definimos alcance,
            entregables y costo. La propuesta debe aclarar qué se construye, qué
            requiere herramientas de terceros y cómo vas a utilizarlo.
          </p>
          <h2>Qué podés evaluar antes de conversar</h2>
          <p>
            Podés explorar las páginas de servicios y probar las demostraciones.
            Los ejemplos están identificados como demos y no representan
            proyectos de clientes. La muestra de cafetería de la portada es un
            negocio ficticio; utiliza una fotografía de Veronika Martinelli en
            Lisboa, con el crédito y la fuente junto al ejemplo.
          </p>
          <a className="button" href="/#demostraciones">
            Probá las demostraciones <span aria-hidden="true">↗</span>
          </a>
          <h2>Conversemos sobre tu negocio</h2>
          <p>Contacto comercial: WhatsApp {BUSINESS_WHATSAPP_DISPLAY}.</p>
          <a
            className="button"
            href={whatsappUrl("Hola NUVRO, quiero conversar sobre mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir a NUVRO <span aria-hidden="true">↗</span>
          </a>
        </>
      ) : (
        <>
          <p>
            Revisá el enlace o elegí una solución desde la página principal.
          </p>
          <a className="button" href="/">
            Volver al inicio →
          </a>
        </>
      )}
    </main>
  );
}
