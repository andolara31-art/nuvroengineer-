/*
  Personajes cómic dibujados en SVG.
  - Doña Ana: personaje ficticio para la historia de ejemplo.
  Animaciones con transform y opacity; se apagan con prefers-reduced-motion.
*/
import "./characters.css";

const INK = "#121212";

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
