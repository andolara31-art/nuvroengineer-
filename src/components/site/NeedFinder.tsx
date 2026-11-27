import { useEffect, useRef, useState, type ReactElement } from "react";
import {
  ArrowUpRight,
  Lightbulb,
  Megaphone,
  MessageCircle,
  RotateCcw,
  Search,
  ShoppingCart,
  Star,
  type LucideIcon,
} from "lucide-react";
import { whatsappUrl } from "../../lib/site";
import Nuvi from "./Nuvi";
import { RestaurantArt, ServicesArt, ShopArt } from "./Illustrations";
import TornEdge from "./TornEdge";
import "./need-finder.css";

type BusinessId = "comida" | "tienda" | "servicios" | "otro";
type GoalId =
  | "verme"
  | "whatsapp"
  | "vender"
  | "resenas"
  | "publicidad"
  | "nose";
type RecId = "web" | "menu" | "auto" | "shop" | "reviews" | "ads" | "talk";

const businesses: {
  id: BusinessId;
  label: string;
  hint: string;
  phrase: string;
  Art?: () => ReactElement;
}[] = [
  {
    id: "comida",
    label: "Comida",
    hint: "Soda, restaurante o cafetería",
    phrase: "un negocio de comida",
    Art: RestaurantArt,
  },
  {
    id: "tienda",
    label: "Tienda o comercio",
    hint: "Vendo productos",
    phrase: "una tienda",
    Art: ShopArt,
  },
  {
    id: "servicios",
    label: "Servicios",
    hint: "Ofrezco un servicio o soy profesional",
    phrase: "un negocio de servicios",
    Art: ServicesArt,
  },
  {
    id: "otro",
    label: "Otro",
    hint: "Estoy empezando o es otro tipo de negocio",
    phrase: "un emprendimiento",
  },
];

const goals: { id: GoalId; label: string; icon: LucideIcon }[] = [
  {
    id: "verme",
    label: "Que me encuentren y entiendan qué ofrezco",
    icon: Search,
  },
  {
    id: "whatsapp",
    label: "Contestar menos lo mismo por WhatsApp",
    icon: MessageCircle,
  },
  { id: "vender", label: "Vender por internet", icon: ShoppingCart },
  { id: "resenas", label: "Que me dejen reseñas en Google", icon: Star },
  { id: "publicidad", label: "Publicidad para mis redes", icon: Megaphone },
  { id: "nose", label: "No sé, quiero que me orienten", icon: Lightbulb },
];

const recommendations: Record<
  RecId,
  { name: string; href: string; why: string }
> = {
  web: {
    name: "Página web",
    href: "/diseno-web-costa-rica",
    why: "Una página con lo que ofrecés, tus horarios y un botón para escribirte. Así la gente entiende rápido qué hacés y cómo contactarte.",
  },
  menu: {
    name: "Menú con código QR",
    href: "/menu-qr-restaurantes",
    why: "Tus clientes escanean un código con la cámara y ven el menú y los horarios en el celular, sin tener que preguntarte.",
  },
  auto: {
    name: "Respuestas automáticas",
    href: "/automatizaciones-negocios",
    why: "Las preguntas que siempre se repiten se responden solas, y vos atendés lo que de verdad necesita una persona.",
  },
  shop: {
    name: "Tienda en línea",
    href: "/tiendas-online-shopify",
    why: "Tus productos con foto, precio y carrito, para que te compren sin mandar fotos una por una.",
  },
  reviews: {
    name: "Reseñas en Google con un toque",
    href: "/resenas-google-qr-nfc",
    why: "Una placa en tu mostrador: el cliente acerca el celular o escanea el código y llega directo a dejarte una reseña.",
  },
  ads: {
    name: "Videos con IA",
    href: "/videos-publicidad-negocios",
    why: "Videos verticales con subtítulos, voz y música, hechos a partir de fotos de tu celular. Listos para Reels, TikTok y WhatsApp.",
  },
  talk: {
    name: "Una conversación para orientarte",
    href: "/#contacto",
    why: "Nos contás cómo trabajás y te decimos por dónde empezar.",
  },
};

function recommend(business: BusinessId, goal: GoalId): RecId {
  if (goal === "whatsapp") return "auto";
  if (goal === "resenas") return "reviews";
  if (goal === "publicidad") return "ads";
  if (goal === "nose") return "talk";
  if (goal === "vender") return business === "comida" ? "menu" : "shop";
  return business === "comida" ? "menu" : "web";
}

export default function NeedFinder() {
  const [business, setBusiness] = useState<BusinessId | null>(null);
  const [goal, setGoal] = useState<GoalId | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const step = !business ? 1 : !goal ? 2 : 3;

  useEffect(() => {
    if (business) headingRef.current?.focus();
  }, [business, goal]);

  const chosen = businesses.find((item) => item.id === business);
  const result =
    business && goal ? recommendations[recommend(business, goal)] : null;
  const message =
    result && chosen
      ? `Hola NUVRO, tengo ${chosen.phrase} y me interesa: ${result.name}. ¿Me orientan?`
      : "";

  return (
    <section
      className="corp-section need-finder"
      id="que-necesito"
      aria-labelledby="need-title"
    >
      <TornEdge fill="#F7F7F4" seed={59} />
      <div className="corp-container need-layout">
        <div className="need-main">
          <p className="corp-kicker">¿Qué necesito?</p>
          <h2 id="need-title">Encontrá tu primer paso en 2 preguntas.</h2>
          <p className="need-lead">
            Elegí la opción que más se parece a tu caso. Te sugerimos por dónde
            empezar y, si querés, nos escribís con el mensaje ya listo.
          </p>

          <div className="need-card">
            <div className="need-progress" aria-hidden="true">
              <span className={step >= 1 ? "is-on" : ""} />
              <span className={step >= 2 ? "is-on" : ""} />
              <span className={step >= 3 ? "is-on" : ""} />
            </div>

            {step === 1 && (
              <fieldset className="need-step">
                <legend>
                  <span className="need-step-count">Paso 1 de 2</span>
                  ¿Qué tipo de negocio tenés?
                </legend>
                <div className="need-options need-options-business">
                  {businesses.map(({ id, label, hint, Art }) => (
                    <button
                      type="button"
                      key={id}
                      className="need-option"
                      onClick={() => setBusiness(id)}
                    >
                      <span className="need-option-art" aria-hidden="true">
                        {Art ? (
                          <Art />
                        ) : (
                          <span className="need-option-other">
                            <Lightbulb size={30} strokeWidth={2.2} />
                          </span>
                        )}
                      </span>
                      <strong>{label}</strong>
                      <small>{hint}</small>
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset className="need-step">
                <legend>
                  <span className="need-step-count">Paso 2 de 2</span>
                  <span ref={headingRef} tabIndex={-1} className="need-focus">
                    ¿Qué te gustaría resolver primero?
                  </span>
                </legend>
                <div className="need-options need-options-goals">
                  {goals.map(({ id, label, icon: Icon }) => (
                    <button
                      type="button"
                      key={id}
                      className="need-option need-option-goal"
                      onClick={() => setGoal(id)}
                    >
                      <span className="brand-icon" aria-hidden="true">
                        <Icon size={20} strokeWidth={2.2} />
                      </span>
                      <strong>{label}</strong>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="need-back"
                  onClick={() => setBusiness(null)}
                >
                  ← Cambiar tipo de negocio
                </button>
              </fieldset>
            )}

            <div role="status" aria-live="polite">
              {result && (
                <div className="need-result">
                  <span className="brand-label">Te sugerimos empezar con</span>
                  <h3 ref={headingRef} tabIndex={-1} className="need-focus">
                    {result.name}
                  </h3>
                  <p>{result.why}</p>
                  <div className="need-result-actions">
                    <a
                      className="brand-btn brand-btn-primary"
                      href={whatsappUrl(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle
                        size={20}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      Escribir por WhatsApp
                    </a>
                    {result.href !== "/#contacto" && (
                      <a className="corp-text-link" href={result.href}>
                        Ver cómo funciona
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <p className="need-small">
                    Es una sugerencia. Lo confirmamos juntos cuando hablemos.
                  </p>
                  <button
                    type="button"
                    className="need-back"
                    onClick={() => {
                      setBusiness(null);
                      setGoal(null);
                    }}
                  >
                    <RotateCcw size={16} aria-hidden="true" /> Empezar de nuevo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <figure className="need-guide" aria-hidden="true">
          <div className="need-guide-bubble">
            {result ? (
              <>
                ¡Buena elección! <strong>Escribinos y lo vemos.</strong>
              </>
            ) : (
              <>
                ¿No sabés por dónde empezar? <strong>Te ayudo.</strong>
              </>
            )}
          </div>
          <Nuvi pose={result ? "thumbs" : step === 2 ? "present" : "think"} />
        </figure>
      </div>
    </section>
  );
}
