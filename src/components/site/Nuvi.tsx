/*
  Nuvi: mascota cómic de NUVRO ENGINEER (personaje propio, no representa a una persona).
  Poses: saludar, presentar, pensar y pulgar arriba.
  Animaciones con transform y opacity; se apagan con prefers-reduced-motion.
*/
import "./nuvi.css";

const INK = "#121212";
const BLUE = "#2046F0";
const YELLOW = "#FFC83D";
const PAPER = "#F7F7F4";
const CORAL = "#FF5A4E";

export type NuviPose = "wave" | "present" | "think" | "thumbs";

/* Brazo como tubo con contorno: primero la tinta, encima el azul */
function Arm({ d }: { d: string }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={INK}
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill="none"
        stroke={BLUE}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function Hand({ x, y, r = 10 }: { x: number; y: number; r?: number }) {
  return (
    <circle cx={x} cy={y} r={r} fill={PAPER} stroke={INK} strokeWidth="4" />
  );
}

function Mouth({ pose }: { pose: NuviPose }) {
  if (pose === "think")
    return (
      <path d="M90 94h18" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    );
  if (pose === "thumbs")
    return (
      <path
        d="M84 88h32q-2 16-16 16t-16-16Z"
        fill={CORAL}
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    );
  return (
    <path
      d="M85 89q15 13 30 0"
      fill="none"
      stroke={INK}
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  );
}

export default function Nuvi({
  pose = "wave",
  className = "",
  title,
  x,
  y,
  width,
}: {
  pose?: NuviPose;
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  /** Si se indica, el dibujo se anuncia con este texto; si no, es decorativo */
  title?: string;
}) {
  return (
    <svg
      className={`nuvi nuvi--${pose} ${className}`.trim()}
      viewBox="-24 -14 248 262"
      x={x}
      y={y}
      width={width}
      height={width ? (width * 262) / 248 : undefined}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <g className="nuvi-bob">
        {/* Pensamiento */}
        {pose === "think" && (
          <g className="nuvi-thought">
            <circle
              cx="170"
              cy="40"
              r="5"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3"
            />
            <circle
              cx="184"
              cy="22"
              r="8"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3"
            />
            <circle
              cx="204"
              cy="-2"
              r="16"
              fill={YELLOW}
              stroke={INK}
              strokeWidth="4"
            />
            <text x="204" y="5" textAnchor="middle" className="nuvi-q">
              ?
            </text>
          </g>
        )}

        {/* Piernas */}
        <rect x="70" y="200" width="20" height="28" rx="7" fill={INK} />
        <rect x="110" y="200" width="20" height="28" rx="7" fill={INK} />
        <ellipse cx="78" cy="230" rx="16" ry="8" fill={INK} />
        <ellipse cx="122" cy="230" rx="16" ry="8" fill={INK} />

        {/* Brazo izquierdo (del lado del observador) */}
        {pose === "present" ? (
          <g>
            <Arm d="M62 150L22 140" />
            <ellipse
              cx="6"
              cy="136"
              rx="16"
              ry="10"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              transform="rotate(-12 6 136)"
            />
          </g>
        ) : (
          <g>
            <Arm d="M62 150L44 190" />
            <Hand x={42} y={196} />
          </g>
        )}

        {/* Cuerpo */}
        <rect
          x="56"
          y="128"
          width="88"
          height="78"
          rx="22"
          fill={BLUE}
          stroke={INK}
          strokeWidth="5"
        />
        <circle
          cx="100"
          cy="164"
          r="18"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="4"
        />
        <text x="100" y="173" textAnchor="middle" className="nuvi-badge">
          N
        </text>
        <rect x="88" y="118" width="24" height="14" fill={INK} />

        {/* Cabeza */}
        <rect
          x="28"
          y="60"
          width="14"
          height="32"
          rx="5"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="4"
        />
        <rect
          x="158"
          y="60"
          width="14"
          height="32"
          rx="5"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="4"
        />
        <line
          x1="100"
          y1="32"
          x2="100"
          y2="12"
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle
          className="nuvi-antenna"
          cx="100"
          cy="8"
          r="9"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="4"
        />
        <rect
          x="38"
          y="30"
          width="124"
          height="94"
          rx="28"
          fill={BLUE}
          stroke={INK}
          strokeWidth="5"
        />
        <rect
          x="54"
          y="46"
          width="92"
          height="64"
          rx="18"
          fill={PAPER}
          stroke={INK}
          strokeWidth="4"
        />
        <g className="nuvi-blink">
          <ellipse cx="82" cy="72" rx="7.5" ry="10" fill={INK} />
          <ellipse cx="118" cy="72" rx="7.5" ry="10" fill={INK} />
          <circle cx="84.5" cy="68" r="2.6" fill="#FFFFFF" />
          <circle cx="120.5" cy="68" r="2.6" fill="#FFFFFF" />
        </g>
        {pose === "think" ? (
          <path
            d="M72 56q9-8 18-1M112 59l17-1"
            fill="none"
            stroke={INK}
            strokeWidth="4"
            strokeLinecap="round"
          />
        ) : null}
        <circle cx="68" cy="92" r="6" fill={CORAL} opacity="0.45" />
        <circle cx="132" cy="92" r="6" fill={CORAL} opacity="0.45" />
        <Mouth pose={pose} />
        {/* Brazo derecho según la pose */}
        {pose === "wave" && (
          <g className="nuvi-wave">
            <Arm d="M138 150L164 122L172 84" />
            <Hand x={173} y={76} r={12} />
          </g>
        )}
        {pose === "present" && (
          <g>
            <Arm d="M138 150L156 190" />
            <Hand x={158} y={196} />
          </g>
        )}
        {pose === "think" && (
          <g>
            <Arm d="M138 152L158 140L134 116" />
            <Hand x={128} y={112} />
          </g>
        )}
        {pose === "thumbs" && (
          <g className="nuvi-thumb">
            <Arm d="M138 150L168 128" />
            <rect
              x="162"
              y="110"
              width="26"
              height="24"
              rx="8"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <rect
              x="166"
              y="92"
              width="11"
              height="22"
              rx="5.5"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
          </g>
        )}
      </g>
    </svg>
  );
}
