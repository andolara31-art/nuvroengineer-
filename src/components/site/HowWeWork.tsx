import { ArrowUpRight } from "lucide-react";
import TornEdge from "./TornEdge";

const INK = "#121212";
const BLUE = "#2046F0";
const YELLOW = "#FFC83D";
const PAPER = "#F7F7F4";

function TalkIllustration() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true" focusable="false">
      <path
        d="M18 22h118a12 12 0 0 1 12 12v46a12 12 0 0 1-12 12H66l-26 22 4-22H18a12 12 0 0 1-12-12V34a12 12 0 0 1 12-12Z"
        fill="#fff"
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M66 46c0-9 7-14 15-14s15 5 15 13c0 10-13 11-13 21"
        fill="none"
        stroke={BLUE}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="83" cy="80" r="4.5" fill={BLUE} />
      <path
        d="M128 70h72a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12h-10l3 18-22-18h-43a12 12 0 0 1-12-12V82a12 12 0 0 1 12-12Z"
        fill={YELLOW}
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle cx="146" cy="98" r="5" fill={INK} />
      <circle cx="164" cy="98" r="5" fill={INK} />
      <circle cx="182" cy="98" r="5" fill={INK} />
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true" focusable="false">
      <rect
        x="40"
        y="8"
        width="86"
        height="136"
        rx="14"
        fill="#fff"
        stroke={INK}
        strokeWidth="5"
      />
      <rect x="40" y="8" width="86" height="30" rx="12" fill={BLUE} />
      <rect
        x="40"
        y="8"
        width="86"
        height="136"
        rx="14"
        fill="none"
        stroke={INK}
        strokeWidth="5"
      />
      <path d="M40 38h86" stroke={INK} strokeWidth="5" />
      <path
        d="M54 56h46M54 70h58M54 84h38"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect
        x="54"
        y="100"
        width="58"
        height="24"
        rx="6"
        fill={YELLOW}
        stroke={INK}
        strokeWidth="4"
      />
      <g transform="rotate(38 168 76)">
        <rect
          x="154"
          y="20"
          width="28"
          height="100"
          rx="4"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="5"
        />
        <path
          d="M154 120l14 24 14-24Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M163 136l5 8 5-8Z" fill={INK} />
        <path d="M154 38h28" stroke={INK} strokeWidth="5" />
      </g>
    </svg>
  );
}

function SolveIllustration() {
  return (
    <svg viewBox="0 0 220 150" aria-hidden="true" focusable="false">
      <path
        d="M110 4l14 26 28-10-4 30 30 6-22 22 18 24-30 2-2 30-24-18-24 18-2-30-30-2 18-24-22-22 30-6-4-30 28 10Z"
        fill={YELLOW}
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <rect
        x="72"
        y="42"
        width="76"
        height="66"
        rx="10"
        fill="#fff"
        stroke={INK}
        strokeWidth="5"
      />
      <path
        d="M90 76l14 14 28-30"
        fill="none"
        stroke={BLUE}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    verb: "Entender",
    title: "Una conversación.",
    body: "Nos contás cómo trabajás y qué necesitás resolver. Definimos por dónde empezar.",
    Illustration: TalkIllustration,
  },
  {
    number: "02",
    verb: "Diseñar",
    title: "Una propuesta clara.",
    body: "Acordamos qué vamos a construir, qué incluye y cuánto cuesta. Todo antes de empezar.",
    Illustration: DesignIllustration,
  },
  {
    number: "03",
    verb: "Resolver",
    title: "Trabajo que podés usar.",
    body: "Con el anticipo y los materiales confirmados, construimos y revisamos con vos. Te explicamos el uso e incluimos 30 días de soporte postentrega.",
    Illustration: SolveIllustration,
  },
];

export default function HowWeWork() {
  return (
    <section
      className="corp-section brand-how"
      id="proceso"
      aria-labelledby="how-title"
    >
      <TornEdge fill="#F7F7F4" seed={17} />
      <div className="corp-container">
        <div className="corp-section-heading">
          <div>
            <p className="corp-kicker">Cómo trabajamos</p>
            <h2 id="how-title">Tres pasos. Sin enredos.</h2>
          </div>
          <div className="brand-how-lead">
            <p>
              Tu negocio ya tiene una forma de hacer las cosas. Nuestra tarea es
              entenderla y diseñar lo que le hace falta.
            </p>
            <p className="brand-note">Te explicamos todo en palabras simples</p>
          </div>
        </div>
        <ol className="brand-how-steps">
          {steps.map(({ number, verb, title, body, Illustration }) => (
            <li className="brand-how-step" key={number}>
              <div className="brand-how-art">
                <Illustration />
              </div>
              <div className="brand-how-text">
                <span className="brand-step-number" aria-hidden="true">
                  {number}
                </span>
                <h3>
                  <span className="brand-how-verb">{verb}</span> {title}
                </h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          className="brand-btn brand-btn-primary brand-how-cta"
          href="#contacto"
        >
          Hablemos de tu proyecto
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
