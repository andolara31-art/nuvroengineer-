import type { ReactNode } from "react";
import { Ana } from "./Characters";
import Nuvi from "./Nuvi";
import "./comic-story.css";

const INK = "#121212";
const PAPER = "#F7F7F4";
const WOOD = "#C08552";
const BLUE = "#2046F0";
const YELLOW = "#FFC83D";
const MINT = "#5EDBB0";

function Panel({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg
      className="comic-art"
      viewBox="0 0 240 200"
      role="img"
      aria-label={label}
    >
      <rect width="240" height="200" fill={PAPER} />
      {children}
    </svg>
  );
}

function Bubble({
  x,
  y,
  text,
  delay,
}: {
  x: number;
  y: number;
  text: string;
  delay: number;
}) {
  return (
    <g className="comic-pop" style={{ animationDelay: `${delay}s` }}>
      <rect
        x={x}
        y={y}
        width="66"
        height="20"
        rx="7"
        fill="#ECECE8"
        stroke={INK}
        strokeWidth="1.8"
      />
      <text x={x + 6} y={y + 13.5} className="comic-text">
        {text}
      </text>
    </g>
  );
}

function Steam({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} className="comic-steam">
      {[-7, 0, 7].map((dx, i) => (
        <path
          key={dx}
          d={`M${dx} 0c-5-6 5-10 0-16c-5-6 5-10 0-16`}
          fill="none"
          stroke={INK}
          strokeOpacity="0.45"
          strokeWidth="2.4"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </g>
  );
}

function PanelMessages() {
  return (
    <Panel label="Doña Ana, preocupada, con un celular lleno de mensajes que preguntan lo mismo">
      <rect
        x="0"
        y="168"
        width="240"
        height="32"
        fill={WOOD}
        stroke={INK}
        strokeWidth="3"
      />
      <g transform="translate(12 46) scale(0.92)">
        <Ana mood="worried" />
      </g>
      <rect x="140" y="20" width="88" height="146" rx="12" fill={INK} />
      <rect x="146" y="32" width="76" height="124" rx="6" fill="#FFFFFF" />
      <Bubble x={151} y={40} text="¿Abren hoy?" delay={0} />
      <Bubble x={151} y={66} text="¿Precio casado?" delay={0.5} />
      <Bubble x={151} y={92} text="¿Dónde quedan?" delay={1} />
      <Bubble x={151} y={118} text="¿Abren hoy?" delay={1.5} />
      <circle
        cx="226"
        cy="22"
        r="11"
        fill="#FF5A4E"
        stroke={INK}
        strokeWidth="2.5"
      />
      <text
        x="226"
        y="26"
        textAnchor="middle"
        className="comic-text comic-text-white"
      >
        12
      </text>
    </Panel>
  );
}

function PanelTalk() {
  return (
    <Panel label="Doña Ana le escribe a NUVRO y Nuvi, la mascota, le responde: ordenemos eso juntos">
      <rect x="0" y="0" width="240" height="200" fill="url(#comic-dots)" />
      <defs>
        <pattern
          id="comic-dots"
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.3" fill={INK} opacity="0.13" />
        </pattern>
      </defs>
      <g transform="translate(4 66) scale(0.9)">
        <Ana mood="happy" />
      </g>
      <Nuvi pose="wave" x={136} y={74} width={98} />
      <path
        d="M98 16h134v42H140l-10 14l-2-14H98Z"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text
        x="165"
        y="34"
        textAnchor="middle"
        className="comic-text comic-text-big"
      >
        ¡Ordenemos eso
      </text>
      <text
        x="165"
        y="50"
        textAnchor="middle"
        className="comic-text comic-text-big"
      >
        juntos!
      </text>
    </Panel>
  );
}

function PanelQr() {
  const qr = [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [4, 0],
    [5, 1],
    [4, 2],
    [3, 3],
    [5, 3],
    [1, 4],
    [3, 4],
    [4, 5],
    [0, 5],
    [2, 5],
    [5, 5],
  ];
  return (
    <Panel label="Un cliente escanea el código QR de la mesa y ve el menú y los horarios en su celular">
      <rect
        x="0"
        y="150"
        width="240"
        height="50"
        fill={WOOD}
        stroke={INK}
        strokeWidth="3"
      />
      <path
        d="M30 150L38 70h56l8 80Z"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text
        x="66"
        y="86"
        textAnchor="middle"
        className="comic-text comic-text-big"
      >
        MENÚ
      </text>
      <g transform="translate(46 94)">
        <rect
          width="40"
          height="40"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="2"
        />
        {qr.map(([cx, cy]) => (
          <rect
            key={`${cx}-${cy}`}
            x={3 + cx * 5.7}
            y={3 + cy * 5.7}
            width="5.4"
            height="5.4"
            fill={INK}
          />
        ))}
        <rect
          className="comic-scan"
          x="-4"
          y="0"
          width="48"
          height="4"
          fill={MINT}
        />
      </g>
      <g transform="rotate(-6 176 96)">
        <rect x="134" y="22" width="84" height="148" rx="12" fill={INK} />
        <rect x="140" y="34" width="72" height="124" rx="6" fill="#FFFFFF" />
        <rect x="140" y="34" width="72" height="24" rx="6" fill={BLUE} />
        <text
          x="176"
          y="50"
          textAnchor="middle"
          className="comic-text comic-text-white"
        >
          Soda Doña Ana
        </text>
        {["Casado", "Gallo pinto", "Café", "Postres"].map((item, i) => (
          <g key={item}>
            <circle
              cx="149"
              cy={74 + i * 18}
              r="3"
              fill={YELLOW}
              stroke={INK}
              strokeWidth="1.5"
            />
            <text x="156" y={77 + i * 18} className="comic-text">
              {item}
            </text>
          </g>
        ))}
        <rect
          x="146"
          y="140"
          width="60"
          height="12"
          rx="3"
          fill={MINT}
          stroke={INK}
          strokeWidth="1.5"
        />
        <text
          x="176"
          y="149"
          textAnchor="middle"
          className="comic-text comic-text-small"
        >
          Abierto hoy
        </text>
      </g>
      <path
        d="M200 176c-6-14-2-26 8-30l18 8c4 10 2 20-6 26Z"
        fill="#E7B48F"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Panel>
  );
}

function PanelCalm() {
  return (
    <Panel label="Doña Ana cocina tranquila; en el celular, las preguntas frecuentes ya se respondieron">
      <rect
        x="0"
        y="160"
        width="240"
        height="40"
        fill={WOOD}
        stroke={INK}
        strokeWidth="3"
      />
      <g transform="translate(10 44) scale(0.95)">
        <Ana mood="happy" />
      </g>
      <ellipse
        cx="170"
        cy="150"
        rx="40"
        ry="10"
        fill="#4A4A4A"
        stroke={INK}
        strokeWidth="3"
      />
      <path d="M130 150h80" stroke={INK} strokeWidth="3" />
      <path
        d="M210 148l26-8"
        stroke={INK}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <ellipse
        cx="160"
        cy="146"
        rx="10"
        ry="4"
        fill={YELLOW}
        stroke={INK}
        strokeWidth="2"
      />
      <ellipse
        cx="180"
        cy="146"
        rx="9"
        ry="4"
        fill="#E3A24A"
        stroke={INK}
        strokeWidth="2"
      />
      <Steam x={170} y={132} />
      <g className="comic-float">
        <rect
          x="150"
          y="18"
          width="80"
          height="58"
          rx="8"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="3"
        />
        <rect
          x="158"
          y="28"
          width="64"
          height="16"
          rx="6"
          fill={MINT}
          stroke={INK}
          strokeWidth="1.8"
        />
        <text x="190" y="39.5" textAnchor="middle" className="comic-text">
          Respondido ✓
        </text>
        <rect
          x="158"
          y="50"
          width="64"
          height="16"
          rx="6"
          fill="#ECECE8"
          stroke={INK}
          strokeWidth="1.8"
        />
        <text x="190" y="61.5" textAnchor="middle" className="comic-text">
          Respondido ✓
        </text>
      </g>
    </Panel>
  );
}

const panels = [
  {
    art: PanelMessages,
    text: "Doña Ana tiene una soda y contesta lo mismo por WhatsApp todo el día.",
  },
  {
    art: PanelTalk,
    text: "Le escribe a NUVRO. La primera conversación no tiene costo.",
  },
  {
    art: PanelQr,
    text: "Sus clientes escanean un código QR y ven el menú y los horarios.",
  },
  {
    art: PanelCalm,
    text: "Ahora atiende con más orden y responde lo que de verdad necesita una persona.",
  },
];

export default function ComicStory() {
  return (
    <section
      className="corp-section comic-story"
      id="historia"
      aria-labelledby="story-title"
    >
      <div className="corp-container">
        <div className="corp-section-heading">
          <div>
            <p className="corp-kicker">Así te ayudamos</p>
            <h2 id="story-title">Una historia en 4 viñetas.</h2>
          </div>
          <div className="comic-story-lead">
            <p>
              Así se ve el trabajo de NUVRO, contado como un cómic. Doña Ana y
              su soda son un ejemplo inventado.
            </p>
            <p className="brand-note">¿Te suena conocido?</p>
          </div>
        </div>
        <ol className="comic-strip">
          {panels.map(({ art: Art, text }, index) => (
            <li className="comic-panel" key={text}>
              <span className="comic-number" aria-hidden="true">
                {index + 1}
              </span>
              <Art />
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="comic-story-actions">
          <a className="brand-btn brand-btn-primary" href="#que-necesito">
            Descubrí qué necesita tu negocio
          </a>
        </div>
      </div>
    </section>
  );
}
