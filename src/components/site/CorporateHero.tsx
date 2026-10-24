import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./corporate-hero.css";

const slides = [
  {
    label: "SOLUCIONES DIGITALES",
    title: "Tecnología que impulsa tu negocio.",
    description:
      "Diseño web, inteligencia artificial y automatizaciones para negocios de Costa Rica. Conectamos tu presencia digital con una forma más simple de trabajar.",
    href: "/#soluciones",
    cta: "Explorar soluciones",
    tab: "Presencia digital",
  },
  {
    label: "DISEÑO WEB PARA EMPRESAS",
    title: "Tu próxima oportunidad empieza en tu web.",
    description:
      "Presentá tus servicios con claridad y facilitá el contacto desde cualquier dispositivo. Una página pensada para tu negocio y para las personas que lo buscan.",
    href: "/diseno-web-costa-rica",
    cta: "Conocer diseño web",
    tab: "Diseño web",
  },
  {
    label: "IA Y AUTOMATIZACIÓN",
    title: "Menos tareas repetidas. Más tiempo para tu negocio.",
    description:
      "Ordená consultas y procesos comerciales. Empezamos por entender cómo trabajás y elegimos las herramientas que tienen sentido para vos.",
    href: "/automatizaciones-negocios",
    cta: "Descubrir automatizaciones",
    tab: "IA y automatización",
  },
];

export default function CorporateHero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const change = (direction: number) =>
    setActive(
      (current) => (current + direction + slides.length) % slides.length,
    );
  return (
    <section
      className="corp-hero"
      aria-labelledby="hero-title"
      aria-roledescription="presentación"
    >
      <img
        className="corp-hero-image"
        src="/assets/brand/nuvro-corporate-cr-v1-1920.webp"
        srcSet="/assets/brand/nuvro-corporate-cr-v1-960.webp 960w, /assets/brand/nuvro-corporate-cr-v1-1920.webp 1920w"
        sizes="100vw"
        width="1920"
        height="819"
        fetchPriority="high"
        alt="Escena editorial generada con IA: dos profesionales revisan una tableta en un negocio tropical inspirado en Costa Rica"
      />
      <div className="corp-hero-shade" aria-hidden="true" />
      <div className="corp-shell corp-hero-layout">
        <div className="corp-hero-copy">
          <p className="corp-hero-label">{slide.label}</p>
          <h1 id="hero-title">{slide.title}</h1>
          <p className="corp-hero-description">{slide.description}</p>
          <div className="corp-hero-actions">
            <a className="corp-primary" href={slide.href}>
              {slide.cta} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="corp-hero-secondary" href="/#contacto">
              Hablemos de tu proyecto{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="corp-hero-bottom">
          <div className="corp-hero-tabs" aria-label="Contenido destacado">
            {slides.map((item, index) => (
              <button
                key={item.tab}
                type="button"
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>
                {item.tab}
              </button>
            ))}
          </div>
          <div className="corp-hero-controls">
            <button
              type="button"
              onClick={() => change(-1)}
              aria-label="Ver contenido anterior"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => change(1)}
              aria-label="Ver siguiente contenido"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <span className="corp-hero-credit">Imagen editorial generada con IA</span>
    </section>
  );
}
