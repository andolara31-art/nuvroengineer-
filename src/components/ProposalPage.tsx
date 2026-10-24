import {
  CheckCircle,
  Clock,
  ExternalLink,
  MessageCircle,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SITE_URL, whatsappUrl } from "../lib/site";

type NicheProposal = {
  service: string;
  price: string;
  plazo: string;
  incluye: string[];
  problema: string;
  beneficio: string;
};

function detectProposal(niche: string): NicheProposal {
  const n = niche.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  if (
    n.includes("barber") ||
    n.includes("salon") ||
    n.includes("belleza") ||
    n.includes("nail") ||
    n.includes("estetica") ||
    n.includes("micropigment")
  ) {
    return {
      service: "Link Bio Vivo + Kit WhatsApp Business",
      price: "desde $350",
      plazo: "3 – 5 días hábiles",
      incluye: [
        "Mini landing mobile-first para Instagram",
        "Galería de trabajos con identidad de marca",
        "Botón directo a WhatsApp para reservas",
        "Horario, servicios y ubicación",
        "Optimización del Kit WhatsApp Business",
      ],
      problema:
        "Cuando la información de reservas está dispersa, encontrar el horario o el contacto puede requerir varios pasos.",
      beneficio:
        "Una presencia digital ordenada para que las personas consulten los servicios y encuentren cómo reservar desde un solo enlace.",
    };
  }

  if (
    n.includes("restaur") ||
    n.includes("soda") ||
    n.includes("cafe") ||
    n.includes("pizza") ||
    n.includes("comida") ||
    n.includes("heladeria") ||
    n.includes("panaderia") ||
    n.includes("sushi") ||
    n.includes("gastronom")
  ) {
    return {
      service: "Menú Digital QR + Link Bio",
      price: "desde $300",
      plazo: "3 – 5 días hábiles",
      incluye: [
        "Menú digital responsive adaptado al celular",
        "Categorías, fotos y precios actualizables",
        "Botón de WhatsApp para pedidos directos",
        "QR de alta resolución para imprimir",
        "Link Bio con horario, servicios y ubicación",
      ],
      problema:
        "Un menú difícil de leer o actualizar puede complicar la consulta de productos, precios y opciones disponibles.",
      beneficio:
        "Un menú organizado para compartir por WhatsApp, redes y QR, con un acceso claro para realizar consultas.",
    };
  }

  if (
    n.includes("gimnasio") ||
    n.includes("crossfit") ||
    n.includes("yoga") ||
    n.includes("pilates") ||
    n.includes("fitness") ||
    n.includes("gym")
  ) {
    return {
      service: "Landing Page de Ventas",
      price: "desde $400",
      plazo: "5 – 7 días hábiles",
      incluye: [
        "Página de ventas enfocada en conversión",
        "Sección de planes, precios y horarios",
        "Galería de instalaciones y transformaciones",
        "Formulario de inscripción o botón WhatsApp",
        "SEO básico para búsquedas locales",
      ],
      problema:
        "Los horarios, planes e instalaciones necesitan un lugar donde las personas puedan consultarlos de forma clara.",
      beneficio:
        "Una página preparada para buscadores que presenta la oferta y facilita consultar por una inscripción. El posicionamiento depende de varios factores.",
    };
  }

  if (
    n.includes("dental") ||
    n.includes("odont") ||
    n.includes("medic") ||
    n.includes("clinic") ||
    n.includes("psicol") ||
    n.includes("nutri") ||
    n.includes("fisio") ||
    n.includes("veterinar") ||
    n.includes("optica")
  ) {
    return {
      service: "Sitio Web Profesional",
      price: "desde $500",
      plazo: "7 – 14 días hábiles",
      incluye: [
        "Sitio web de 5 páginas: inicio, servicios, equipo, contacto y citas",
        "Formulario de citas o consultas",
        "Integración con Google Maps",
        "Diseño adaptable con revisión de rendimiento y accesibilidad",
        "SEO básico para búsquedas locales",
      ],
      problema:
        "La información de servicios, equipo y canales de citas debe ser clara y fácil de consultar.",
      beneficio:
        "Un sitio que presenta información profesional confirmada y facilita el contacto para solicitar una cita.",
    };
  }

  if (
    n.includes("abogad") ||
    n.includes("contad") ||
    n.includes("notari") ||
    n.includes("consultor") ||
    n.includes("asesor") ||
    n.includes("bienes raices") ||
    n.includes("inmobili") ||
    n.includes("seguro")
  ) {
    return {
      service: "Tarjeta Digital + Sitio Web",
      price: "desde $450",
      plazo: "5 – 10 días hábiles",
      incluye: [
        "Tarjeta digital profesional compartible por WhatsApp",
        "Sitio web de 3-5 páginas",
        "Sección de servicios y áreas de especialidad",
        "Formulario de contacto y consulta inicial",
        "Diseño que comunica formalidad y confianza",
      ],
      problema:
        "Las personas necesitan entender las áreas de especialidad y cómo hacer una consulta antes de contratar.",
      beneficio:
        "Una presentación profesional de servicios y un canal de contacto claro para quienes desean consultar.",
    };
  }

  if (
    n.includes("ropa") ||
    n.includes("tienda") ||
    n.includes("cosmet") ||
    n.includes("joyeria") ||
    n.includes("muebleria") ||
    n.includes("floristeria")
  ) {
    return {
      service: "Catálogo Digital Express",
      price: "desde $350",
      plazo: "5 – 7 días hábiles",
      incluye: [
        "Catálogo digital responsive con categorías",
        "Productos con foto, nombre, precio y descripción",
        "Botón de WhatsApp en cada producto",
        "Filtros y búsqueda básica",
        "Compartible por WhatsApp y redes sociales",
      ],
      problema:
        "Cuando el catálogo está repartido entre fotos y publicaciones, consultar productos puede requerir varios mensajes.",
      beneficio:
        "Un catálogo donde las personas pueden explorar productos y escribir por WhatsApp para confirmar disponibilidad o comprar.",
    };
  }

  if (
    n.includes("hotel") ||
    n.includes("hostal") ||
    n.includes("tour") ||
    n.includes("alquiler") ||
    n.includes("turismo")
  ) {
    return {
      service: "Sitio Web Premium",
      price: "desde $600",
      plazo: "10 – 14 días hábiles",
      incluye: [
        "Sitio web con galería de fotos profesional",
        "Sección de habitaciones, tarifas y paquetes",
        "Formulario de reserva o consulta",
        "Integración con Google Maps",
        "SEO para turistas locales e internacionales",
      ],
      problema:
        "Fotos, condiciones y opciones de reserva necesitan una presentación completa que las personas puedan revisar antes de consultar.",
      beneficio:
        "Un canal propio para mostrar la oferta y recibir consultas directas. Las condiciones de reserva se acuerdan con el negocio.",
    };
  }

  return {
    service: "Landing Page de Ventas",
    price: "desde $250",
    plazo: "3 – 5 días hábiles",
    incluye: [
      "Página de ventas enfocada en conversión",
      "Propuesta de valor clara y directa",
      "Botón de WhatsApp visible en todo momento",
      "Galería de fotos y descripción de servicios",
      "Adaptado a celular y carga rápida",
    ],
    problema:
      "Una persona que conoce el negocio necesita entender qué ofrece y cómo contactarlo con facilidad.",
    beneficio:
      "Una página profesional que explica la oferta y facilita las consultas por WhatsApp, con una base preparada para buscadores.",
  };
}

function waLink(text: string): string {
  return whatsappUrl(
    `Hola, vi la propuesta orientativa de NUVRO ENGINEER y me interesa conversar sobre ${text}. ¿Podemos hablar?`,
  );
}

export function ProposalPage() {
  const [context, setContext] = useState({
    businessName: "Tu negocio",
    niche: "",
    ciudad: "",
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setContext({
      businessName: params.get("n")?.slice(0, 120) || "Tu negocio",
      niche: params.get("c")?.slice(0, 100) || "",
      ciudad: params.get("ciudad")?.slice(0, 100) || "",
    });
  }, []);
  const { businessName, niche, ciudad } = context;

  const proposal = detectProposal(niche);

  return (
    <div
      className="min-h-dvh text-white"
      style={{
        background:
          "linear-gradient(160deg, #060610 0%, #080816 40%, #05050F 100%)",
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,255,0.7), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 right-0 h-64 w-[500px] opacity-8"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,80,220,0.5), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 py-10 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div
            className="inline-flex items-center gap-2 rounded-xl border border-[#0066FF]/35 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#4d94ff]"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,71,184,0.25), rgba(0,102,255,0.10))",
            }}
          >
            <Sparkles className="size-3.5" />
            NUVRO ENGINEER
          </div>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 transition hover:text-white/70"
          >
            Ver soluciones
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        {/* Hero */}
        <div
          className="mb-6 overflow-hidden rounded-2xl border border-white/[0.08] p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,20,60,0.95), rgba(8,8,20,0.98))",
          }}
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]/70">
            Propuesta orientativa
          </p>
          <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            {businessName}
          </h1>
          {(niche || ciudad) && (
            <p className="mt-2 text-sm text-white/40">
              {[niche, ciudad].filter(Boolean).join(" · ")}
            </p>
          )}
          <p className="mt-4 text-xs leading-5 text-white/60">
            Este ejemplo se adapta al tipo de negocio indicado. Confirmamos
            necesidades, alcance, precio y fecha de entrega antes de iniciar.
          </p>
        </div>

        {/* Problem */}
        <div className="mb-4 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-400/80">
            Una oportunidad para evaluar
          </p>
          <p className="text-sm leading-6 text-white/75">{proposal.problema}</p>
        </div>

        {/* Solution */}
        <div
          className="mb-4 overflow-hidden rounded-2xl border border-[#0066FF]/30 p-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,71,184,0.18), rgba(0,102,255,0.07))",
          }}
        >
          <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#4d94ff]/80">
                Nuestra propuesta
              </p>
              <h2 className="text-xl font-black text-white">
                {proposal.service}
              </h2>
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="text-sm font-black text-white">
                Cotización a medida
              </p>
              <div className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-bold text-white/50">
                <Clock className="size-3" />
                Plazo según alcance
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Incluye
            </p>
            <ul className="space-y-2.5">
              {proposal.incluye.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  <span className="text-sm leading-5 text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] p-4">
            <div className="flex items-start gap-3">
              <Zap className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-sm leading-5 text-white/70">
                {proposal.beneficio}
              </p>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: Shield, label: "Alcance claro", sub: "antes de comenzar" },
            {
              icon: CheckCircle,
              label: "A tu medida",
              sub: "según tus necesidades",
            },
            { icon: Zap, label: "Próximo paso", sub: "conversar y cotizar" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-center"
            >
              <Icon className="mx-auto mb-2 size-5 text-[#4d94ff]" />
              <p className="text-sm font-black text-white">{label}</p>
              <p className="text-[10px] font-semibold text-white/35">{sub}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <a
            href={waLink(businessName)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-base font-black text-white shadow-lg transition active:scale-95"
            style={{ background: "linear-gradient(135deg, #0047B8, #0066FF)" }}
          >
            <MessageCircle className="size-5" />
            Quiero esto — contactar ahora
          </a>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-sm font-bold text-white/65 transition hover:border-white/20 hover:text-white"
          >
            <ExternalLink className="size-4" />
            Ver soluciones para mi negocio
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-white/40">
            NUVRO ENGINEER · Soluciones digitales para negocios de Costa Rica
          </p>
          <p className="mt-1 text-xs text-white/40">
            Consultá el alcance y las condiciones de tu proyecto por WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
