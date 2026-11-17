/*
  Personajes cómic dibujados en SVG.
  - Anderson: basado en la ilustración oficial de NUVRO ENGINEER
    (camisa negra con parche "NE", banda "NUVRO ENGINEER" y gesto de presentar).
  - Doña Ana: personaje ficticio para la historia de ejemplo.
  Animaciones con transform y opacity; se apagan con prefers-reduced-motion.
*/
import "./characters.css";

const INK = "#121212";
const SKIN = "#F5CDB0";
const SKIN_SHADE = "#E2A988";
const SHIRT = "#1F1F1F";
const SHIRT_LINE = "#4A4A4A";
const HAIR = "#141414";

/* Cabeza de Anderson; centro aproximado (130, 100) */
export function AndersonHead({ mood = "smile" }: { mood?: "smile" | "talk" }) {
  return (
    <g className="char-anderson-head">
      <circle
        cx="88"
        cy="106"
        r="11"
        fill={SKIN}
        stroke={INK}
        strokeWidth="3.5"
      />
      <circle
        cx="172"
        cy="106"
        r="11"
        fill={SKIN}
        stroke={INK}
        strokeWidth="3.5"
      />
      <path
        d="M90 92C90 58 170 58 170 92L168 118C164 142 147 152 130 152C113 152 96 142 92 118Z"
        fill={SKIN}
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M86 100C78 58 106 36 136 38C166 40 186 58 176 100C172 86 166 76 158 70C148 80 130 78 118 70C108 80 98 84 92 102Z"
        fill={HAIR}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M104 52C114 28 152 26 164 46C150 38 130 40 118 54Z"
        fill={HAIR}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M118 50C128 42 142 40 152 44M150 58C158 60 164 66 168 74"
        fill="none"
        stroke="#3C3C3C"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M100 90L121 85M139 85L160 90"
        stroke={INK}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <g className="char-blink">
        <ellipse cx="112" cy="103" rx="5" ry="7" fill={INK} />
        <ellipse cx="148" cy="103" rx="5" ry="7" fill={INK} />
        <circle cx="113.6" cy="100" r="1.7" fill="#FFFFFF" />
        <circle cx="149.6" cy="100" r="1.7" fill="#FFFFFF" />
      </g>
      <path
        d="M130 108Q135 119 128 121"
        fill="none"
        stroke={SKIN_SHADE}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {mood === "talk" ? (
        <path
          d="M118 128Q130 142 142 128Z"
          fill="#7A2E2E"
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M117 128Q130 138 143 128"
          fill="none"
          stroke={INK}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

/* Torso de Anderson con camisa, parche y banda */
function AndersonBody() {
  return (
    <g>
      <rect
        x="114"
        y="138"
        width="32"
        height="32"
        fill={SKIN}
        stroke={INK}
        strokeWidth="3.5"
      />
      <path
        d="M56 330L64 206Q68 176 98 168L130 162L162 168Q192 176 196 206L204 330Z"
        fill={SHIRT}
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M122 166L130 182L138 166Z" fill="#F7F7F4" />
      <path
        d="M130 170L104 160L112 190Z M130 170L156 160L148 190Z"
        fill="#262626"
        stroke={SHIRT_LINE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="130"
        x2="130"
        y1="182"
        y2="330"
        stroke={SHIRT_LINE}
        strokeWidth="2"
      />
      {[204, 234, 264, 294].map((y) => (
        <circle key={y} cx="130" cy={y} r="3" fill="#6A6A6A" />
      ))}
      <rect
        x="90"
        y="214"
        width="30"
        height="30"
        rx="3"
        fill="none"
        stroke={SHIRT_LINE}
        strokeWidth="2"
      />
      <path d="M90 222h30" stroke={SHIRT_LINE} strokeWidth="2" />
      <rect
        x="140"
        y="214"
        width="30"
        height="30"
        rx="3"
        fill="none"
        stroke={SHIRT_LINE}
        strokeWidth="2"
      />
      <path d="M140 222h30" stroke={SHIRT_LINE} strokeWidth="2" />
      <line
        x1="114"
        x2="114"
        y1="204"
        y2="232"
        stroke="#8A8A8A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="142"
        y="190"
        width="27"
        height="17"
        rx="2"
        fill={INK}
        stroke="#F7F7F4"
        strokeWidth="1.5"
      />
      <text x="155.5" y="202.5" textAnchor="middle" className="char-patch">
        NE
      </text>
    </g>
  );
}

/* Anderson de medio cuerpo, presentando con la mano */
export function Anderson({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`char char-anderson ${className}`.trim()}
      viewBox="-44 20 274 310"
      role="img"
      aria-label="Ilustración cómic de Anderson, de NUVRO ENGINEER, presentando con la mano"
    >
      {/* Brazo izquierdo (de él): mano en el bolsillo */}
      <path
        d="M182 186C214 196 226 244 224 330L194 330C196 270 192 232 176 210Z"
        fill={SHIRT}
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <AndersonBody />
      {/* Banda "NUVRO ENGINEER" en el brazo */}
      <g transform="rotate(-8 210 230)">
        <rect
          x="192"
          y="220"
          width="36"
          height="20"
          rx="2"
          fill={INK}
          stroke="#F7F7F4"
          strokeWidth="1.5"
        />
        <text x="210" y="229" textAnchor="middle" className="char-band">
          NUVRO
        </text>
        <text
          x="210"
          y="236"
          textAnchor="middle"
          className="char-band char-band-small"
        >
          ENGINEER
        </text>
      </g>
      {/* Brazo derecho (de él): presentando */}
      <g className="char-present">
        <path
          d="M76 188C52 198 42 232 40 258L62 264C64 240 72 218 90 206Z"
          fill={SHIRT}
          stroke={INK}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M42 252L8 236C2 234 -2 240 0 246L4 256L42 270Z"
          fill={SHIRT}
          stroke={INK}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M10 238L2 252" stroke={SHIRT_LINE} strokeWidth="3" />
        <path
          d="M2 240C-12 234 -32 234 -40 244C-32 252 -14 254 2 252Z"
          fill={SKIN}
          stroke={INK}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M-2 238C-6 228 -14 226 -17 230C-15 236 -10 240 -4 242"
          fill={SKIN}
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M-28 246h14M-26 250h12"
          stroke={SKIN_SHADE}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <AndersonHead />
    </svg>
  );
}

/* Doña Ana (personaje ficticio): cabeza y hombros. Centro (60, 60) aprox. */
export function Ana({ mood = "happy" }: { mood?: "happy" | "worried" }) {
  return (
    <g className="char-ana">
      <path
        d="M14 140C16 108 30 96 60 96C90 96 104 108 106 140Z"
        fill="#5EDBB0"
        stroke={INK}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M40 104h40v36H40Z"
        fill="#FFC83D"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M40 104L32 98M80 104L88 98"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect
        x="52"
        y="82"
        width="16"
        height="16"
        fill="#D9A07A"
        stroke={INK}
        strokeWidth="3"
      />
      <circle
        cx="60"
        cy="20"
        r="13"
        fill="#3B2418"
        stroke={INK}
        strokeWidth="3"
      />
      <ellipse
        cx="60"
        cy="56"
        rx="30"
        ry="33"
        fill="#D9A07A"
        stroke={INK}
        strokeWidth="3.5"
      />
      <path
        d="M30 54C28 30 44 22 60 22C76 22 92 30 90 54C84 42 72 36 60 38C48 36 36 42 30 54Z"
        fill="#3B2418"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g className="char-blink">
        <ellipse cx="49" cy="58" rx="3.5" ry="5" fill={INK} />
        <ellipse cx="71" cy="58" rx="3.5" ry="5" fill={INK} />
      </g>
      {mood === "worried" ? (
        <>
          <path
            d="M42 50L54 45M78 50L66 45"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M51 76Q60 70 69 76"
            fill="none"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className="char-sweat"
            d="M92 40c-4 6-4 10 0 11c4-1 4-5 0-11Z"
            fill="#8FB8FF"
            stroke={INK}
            strokeWidth="2"
          />
        </>
      ) : (
        <>
          <path
            d="M42 50L54 48M66 48L78 50"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M49 71Q60 82 71 71"
            fill="none"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="40" cy="68" r="4" fill="#FF5A4E" opacity="0.35" />
          <circle cx="80" cy="68" r="4" fill="#FF5A4E" opacity="0.35" />
        </>
      )}
    </g>
  );
}
