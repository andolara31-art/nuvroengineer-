/*
  Ilustraciones cómic dibujadas con código (SVG), sin fotos.
  Contorno de tinta, colores planos, semitono y animaciones suaves
  (solo transform y opacity; se apagan con prefers-reduced-motion).
*/
import type { ReactElement, ReactNode } from "react";
import "./illustrations.css";

const INK = "#121212";
const PAPER = "#F7F7F4";
const YELLOW = "#FFC83D";
const MINT = "#5EDBB0";
const BLUE = "#2046F0";
const WOOD = "#C08552";
const WOOD_DARK = "#8A5A34";
const STEEL = "#D6D6D0";
const STEEL_DARK = "#A6A6A0";
const CRUST = "#E3A24A";

function Steam({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g
      className="art-steam"
      transform={`translate(${x} ${y}) scale(${scale})`}
      aria-hidden="true"
    >
      {[-6, 0, 6].map((dx, i) => (
        <path
          key={dx}
          d={`M${dx} 0c-5-6 5-11 0-17c-5-6 5-11 0-17`}
          fill="none"
          stroke={INK}
          strokeOpacity="0.45"
          strokeWidth="2.6"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}
    </g>
  );
}

/* ---------- Escena principal: cafetería ficticia MESA ---------- */
export function CafeScene() {
  const tiles: ReactElement[] = [];
  for (let row = 0; row < 6; row++) {
    const y = 208 + row * 14;
    tiles.push(
      <line
        key={`h${row}`}
        x1="0"
        x2="360"
        y1={y}
        y2={y}
        stroke="#D9D3C7"
        strokeWidth="1.5"
      />,
    );
    for (let col = 0; col < 13; col++) {
      const x = col * 30 + (row % 2 ? 15 : 0);
      tiles.push(
        <line
          key={`v${row}-${col}`}
          x1={x}
          x2={x}
          y1={y}
          y2={y + 14}
          stroke="#D9D3C7"
          strokeWidth="1.5"
        />,
      );
    }
  }
  const boards = Array.from({ length: 12 }, (_, i) => 30 * i + 15);
  return (
    <svg
      className="art cafe-scene"
      viewBox="0 0 360 480"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-labelledby="cafe-scene-title"
    >
      <title id="cafe-scene-title">
        Ilustración de una cafetería ficticia: barra con máquina de espresso,
        vitrina de pan, estantes con frascos y plantas, y una pizarra con la
        carta
      </title>
      <defs>
        <pattern
          id="cafe-dots"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.3" fill={INK} opacity="0.14" />
        </pattern>
      </defs>

      {/* Pared y azulejos */}
      <rect width="360" height="480" fill="#F3EBDD" />
      <rect x="0" y="0" width="230" height="200" fill="url(#cafe-dots)" />
      <rect x="0" y="206" width="360" height="88" fill="#FFFFFF" />
      {tiles}

      {/* Lámparas colgantes */}
      {[92, 176].map((x, i) => (
        <g
          key={x}
          className="art-swing"
          style={{
            transformOrigin: `${x}px 0px`,
            animationDelay: `${i * -1.6}s`,
          }}
        >
          <line x1={x} x2={x} y1="0" y2="26" stroke={INK} strokeWidth="2.5" />
          <path
            d={`M${x - 30} 112L${x - 14} 54h28L${x + 30} 112Z`}
            fill={YELLOW}
            className="art-glow"
          />
          <path
            d={`M${x - 22} 52L${x - 10} 26h20L${x + 22} 52Z`}
            fill={YELLOW}
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <ellipse
            cx={x}
            cy="54"
            rx="8"
            ry="4.5"
            fill="#FFF6D6"
            stroke={INK}
            strokeWidth="2.5"
          />
        </g>
      ))}

      {/* Pizarra con la carta */}
      <g>
        <rect
          x="236"
          y="34"
          width="108"
          height="140"
          rx="4"
          fill={WOOD}
          stroke={INK}
          strokeWidth="3"
        />
        <rect x="244" y="42" width="92" height="124" fill="#22312B" />
        <text
          x="290"
          y="70"
          textAnchor="middle"
          className="art-chalk art-chalk-big"
        >
          MESA
        </text>
        <line
          x1="258"
          x2="322"
          y1="78"
          y2="78"
          stroke="#F7F7F4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <text x="290" y="98" textAnchor="middle" className="art-chalk">
          café chorreado
        </text>
        <text x="290" y="118" textAnchor="middle" className="art-chalk">
          desayunos
        </text>
        <text x="290" y="138" textAnchor="middle" className="art-chalk">
          pan dulce
        </text>
        <path
          d="M280 150h18v8a9 9 0 0 1-18 0Z M298 152c6 0 6 6 0 6"
          fill="none"
          stroke="#F7F7F4"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>

      {/* Estante superior */}
      <g>
        <rect
          x="26"
          y="80"
          width="26"
          height="38"
          rx="5"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="3"
        />
        <rect x="29" y="96" width="20" height="19" rx="2" fill={WOOD_DARK} />
        <rect x="24" y="72" width="30" height="9" rx="2" fill={INK} />
        <rect
          x="58"
          y="88"
          width="22"
          height="30"
          rx="5"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="3"
        />
        <rect x="61" y="100" width="16" height="15" rx="2" fill={CRUST} />
        <rect x="56" y="81" width="26" height="8" rx="2" fill={INK} />
        {/* Planta */}
        <g className="art-sway" style={{ transformOrigin: "112px 96px" }}>
          <path
            d="M112 96c-18-6-26-22-22-34c10 4 20 16 22 34Z"
            fill="#3FA37A"
            stroke={INK}
            strokeWidth="2.5"
          />
          <path
            d="M112 96c16-8 26-24 20-38c-10 6-20 20-20 38Z"
            fill={MINT}
            stroke={INK}
            strokeWidth="2.5"
          />
          <path
            d="M112 96c-2-16 2-32 10-42c4 12 0 30-10 42Z"
            fill="#3FA37A"
            stroke={INK}
            strokeWidth="2.5"
          />
        </g>
        <path
          d="M98 96h28l-4 22h-20Z"
          fill="#E07A4F"
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Bolsas de café */}
        <path
          d="M140 80h30l2 38h-34Z"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect
          x="146"
          y="94"
          width="18"
          height="10"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="1.5"
        />
        <path
          d="M176 84h28l2 34h-32Z"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="190" cy="100" r="5" fill={WOOD_DARK} />
        <rect
          x="16"
          y="118"
          width="206"
          height="10"
          fill={WOOD}
          stroke={INK}
          strokeWidth="3"
        />
      </g>

      {/* Estante inferior con tazas */}
      <g>
        {[28, 62, 96, 130].map((x, i) => (
          <g key={x}>
            <path
              d={`M${x} 160h24v16a8 8 0 0 1-8 8h-8a8 8 0 0 1-8-8Z`}
              fill={i % 2 ? MINT : "#FFFFFF"}
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d={`M${x + 24} 164c8 0 8 12 0 12`}
              fill="none"
              stroke={INK}
              strokeWidth="3"
            />
          </g>
        ))}
        <rect
          x="172"
          y="150"
          width="14"
          height="34"
          rx="6"
          fill={BLUE}
          stroke={INK}
          strokeWidth="3"
        />
        <g
          className="art-sway"
          style={{ transformOrigin: "179px 150px", animationDelay: "-1s" }}
        >
          <line
            x1="179"
            x2="179"
            y1="150"
            y2="132"
            stroke={INK}
            strokeWidth="2.5"
          />
          <circle
            cx="179"
            cy="128"
            r="7"
            fill={YELLOW}
            stroke={INK}
            strokeWidth="2.5"
          />
        </g>
        <rect
          x="16"
          y="184"
          width="206"
          height="10"
          fill={WOOD}
          stroke={INK}
          strokeWidth="3"
        />
      </g>

      {/* Máquina de espresso */}
      <g>
        <rect
          x="30"
          y="204"
          width="128"
          height="10"
          rx="2"
          fill={STEEL_DARK}
          stroke={INK}
          strokeWidth="3"
        />
        <path
          d="M44 204v-10h12v10M66 204v-8h12v8"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="2.5"
        />
        <rect
          x="30"
          y="214"
          width="128"
          height="78"
          rx="6"
          fill={STEEL}
          stroke={INK}
          strokeWidth="3.5"
        />
        <rect
          x="74"
          y="218"
          width="40"
          height="12"
          rx="2"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="2"
        />
        <text x="94" y="227.5" textAnchor="middle" className="art-label">
          MESA
        </text>
        {[58, 130].map((x) => (
          <g key={x}>
            <circle
              cx={x}
              cy="240"
              r="9"
              fill="#FFFFFF"
              stroke={INK}
              strokeWidth="2.5"
            />
            <line
              x1={x}
              x2={x + 5}
              y1="240"
              y2="235"
              stroke={INK}
              strokeWidth="2"
              className="art-needle"
              style={{ transformOrigin: `${x}px 240px` }}
            />
          </g>
        ))}
        <rect x="52" y="252" width="22" height="9" fill={INK} />
        <rect x="114" y="252" width="22" height="9" fill={INK} />
        <path
          d="M52 262h22l-3 6h-16Z M114 262h22l-3 6h-16Z"
          fill={STEEL_DARK}
          stroke={INK}
          strokeWidth="2"
        />
        <line
          x1="40"
          x2="56"
          y1="265"
          y2="265"
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M56 272h14v8a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5Z"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="2.5"
        />
        <rect
          x="40"
          y="284"
          width="108"
          height="8"
          fill={STEEL_DARK}
          stroke={INK}
          strokeWidth="2.5"
        />
        <Steam x={63} y={268} scale={0.8} />
      </g>

      {/* Taza en la barra */}
      <g>
        <ellipse
          cx="174"
          cy="292"
          rx="18"
          ry="4"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="2.5"
        />
        <path
          d="M162 268h24v14a8 8 0 0 1-8 8h-8a8 8 0 0 1-8-8Z"
          fill="#E07A4F"
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M186 272c8 0 8 12 0 12"
          fill="none"
          stroke={INK}
          strokeWidth="3"
        />
        <Steam x={174} y={262} />
      </g>

      {/* Vitrina de pan */}
      <g>
        <rect
          x="198"
          y="228"
          width="148"
          height="64"
          fill="#E3F6EF"
          stroke={INK}
          strokeWidth="3"
        />
        <line
          x1="198"
          x2="346"
          y1="260"
          y2="260"
          stroke={INK}
          strokeWidth="2.5"
        />
        <path
          d="M212 236l14 18M220 236l10 13M300 266l14 18"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Croissants */}
        {[226, 262].map((x) => (
          <path
            key={x}
            d={`M${x - 14} 256c4-12 24-12 28 0c-6-3-10-3-14 0c-4-3-8-3-14 0Z`}
            fill={CRUST}
            stroke={INK}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        ))}
        {/* Pan dulce */}
        <circle
          cx="312"
          cy="250"
          r="9"
          fill={CRUST}
          stroke={INK}
          strokeWidth="2.5"
        />
        <path
          d="M305 248h14M307 253h10"
          stroke="#FFF6D6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Queques */}
        {[222, 252, 282].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 9} 274h18l-3 14h-12Z`}
              fill={WOOD_DARK}
              stroke={INK}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d={`M${x - 11} 275c0-10 22-10 22 0Z`}
              fill={YELLOW}
              stroke={INK}
              strokeWidth="2.5"
            />
          </g>
        ))}
        <path
          d="M314 288v-16c0-8 22-8 22 0v16Z"
          fill={CRUST}
          stroke={INK}
          strokeWidth="2.5"
        />
        <rect
          x="194"
          y="222"
          width="156"
          height="8"
          fill={WOOD}
          stroke={INK}
          strokeWidth="3"
        />
      </g>

      {/* Barra */}
      <rect
        x="-4"
        y="292"
        width="368"
        height="16"
        fill={WOOD_DARK}
        stroke={INK}
        strokeWidth="3"
      />
      <rect
        x="-4"
        y="308"
        width="368"
        height="180"
        fill={WOOD}
        stroke={INK}
        strokeWidth="3"
      />
      {boards.map((x) => (
        <line
          key={x}
          x1={x}
          x2={x}
          y1="312"
          y2="452"
          stroke={WOOD_DARK}
          strokeWidth="2"
        />
      ))}
      <rect x="-4" y="452" width="368" height="40" fill={INK} />

      {/* Letrero ABIERTO que se mece */}
      <g
        className="art-swing"
        style={{ transformOrigin: "120px 318px", animationDelay: "-0.8s" }}
      >
        <path
          d="M100 340L120 318L140 340"
          fill="none"
          stroke={INK}
          strokeWidth="2"
        />
        <rect
          x="88"
          y="340"
          width="64"
          height="26"
          rx="3"
          fill={MINT}
          stroke={INK}
          strokeWidth="3"
        />
        <text
          x="120"
          y="358"
          textAnchor="middle"
          className="art-label art-label-big"
        >
          ABIERTO
        </text>
      </g>
    </svg>
  );
}

/* ---------- Sectores: restaurante, comercio y servicios ---------- */
function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg
      className="art sector-art"
      viewBox="0 0 160 112"
      role="img"
      aria-label={label}
    >
      <rect
        x="2"
        y="2"
        width="156"
        height="108"
        fill={PAPER}
        stroke={INK}
        strokeWidth="4"
      />
      {children}
    </svg>
  );
}

export function RestaurantArt() {
  return (
    <Frame label="Ilustración: plato de casado y café sobre una mesa">
      <rect x="4" y="80" width="152" height="28" fill={WOOD} />
      <line x1="4" x2="156" y1="80" y2="80" stroke={INK} strokeWidth="3" />
      <ellipse
        cx="66"
        cy="78"
        rx="44"
        ry="11"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="3"
      />
      <path
        d="M36 74c0-10 18-12 24-4c-6 6-18 6-24 4Z"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="2.2"
      />
      <ellipse
        cx="66"
        cy="70"
        rx="11"
        ry="6"
        fill="#5B3A29"
        stroke={INK}
        strokeWidth="2.2"
      />
      <path
        d="M78 74c6-10 18-10 22-2c-8 4-16 4-22 2Z"
        fill={CRUST}
        stroke={INK}
        strokeWidth="2.2"
      />
      <circle
        cx="54"
        cy="66"
        r="4"
        fill="#3FA37A"
        stroke={INK}
        strokeWidth="1.8"
      />
      <circle
        cx="48"
        cy="70"
        r="3.5"
        fill="#E05A4E"
        stroke={INK}
        strokeWidth="1.8"
      />
      <path
        d="M118 60h20v14a7 7 0 0 1-7 7h-6a7 7 0 0 1-7-7Z"
        fill={YELLOW}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M138 64c7 0 7 10 0 10"
        fill="none"
        stroke={INK}
        strokeWidth="3"
      />
      <Steam x={128} y={54} scale={0.7} />
      <rect
        x="98"
        y="22"
        width="22"
        height="30"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="2.5"
      />
      <rect x="102" y="26" width="6" height="6" fill={INK} />
      <rect x="110" y="26" width="6" height="6" fill={INK} />
      <rect x="102" y="34" width="6" height="6" fill={INK} />
      <rect x="111" y="35" width="4" height="4" fill={INK} />
      <text x="109" y="48" textAnchor="middle" className="art-label">
        QR
      </text>
    </Frame>
  );
}

export function ShopArt() {
  const scallops = [0, 1, 2, 3, 4, 5, 6].map((i) => 26 + i * 16);
  return (
    <Frame label="Ilustración: fachada de un comercio local con toldo y letrero de abierto">
      <rect
        x="22"
        y="38"
        width="116"
        height="70"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="3"
      />
      <rect
        x="30"
        y="56"
        width="58"
        height="36"
        fill="#E3F6EF"
        stroke={INK}
        strokeWidth="2.5"
      />
      <rect
        x="36"
        y="74"
        width="12"
        height="18"
        fill={YELLOW}
        stroke={INK}
        strokeWidth="2"
      />
      <rect
        x="52"
        y="68"
        width="12"
        height="24"
        fill={BLUE}
        stroke={INK}
        strokeWidth="2"
      />
      <rect
        x="68"
        y="78"
        width="14"
        height="14"
        fill="#E07A4F"
        stroke={INK}
        strokeWidth="2"
      />
      <rect
        x="96"
        y="56"
        width="34"
        height="52"
        fill={WOOD}
        stroke={INK}
        strokeWidth="2.5"
      />
      <circle cx="124" cy="84" r="2.5" fill={INK} />
      <path d="M18 22h124v16H18Z" fill={BLUE} stroke={INK} strokeWidth="3" />
      {scallops.map((x, i) => (
        <path
          key={x}
          d={`M${x - 8} 38a8 8 0 0 0 16 0`}
          fill={i % 2 ? BLUE : "#FFFFFF"}
          stroke={INK}
          strokeWidth="2.5"
        />
      ))}
      {[34, 66, 98, 130].map((x) => (
        <rect
          key={x}
          x={x - 8}
          y="22"
          width="16"
          height="16"
          fill="#FFFFFF"
          opacity="0.9"
        />
      ))}
      <path d="M18 22h124v16H18Z" fill="none" stroke={INK} strokeWidth="3" />
      <g className="art-swing" style={{ transformOrigin: "113px 50px" }}>
        <path
          d="M104 62l9-12l9 12"
          fill="none"
          stroke={INK}
          strokeWidth="1.8"
        />
        <rect
          x="96"
          y="62"
          width="34"
          height="11"
          fill={MINT}
          stroke={INK}
          strokeWidth="2"
        />
        <text
          x="113"
          y="70.5"
          textAnchor="middle"
          className="art-label art-label-tiny"
        >
          ABIERTO
        </text>
      </g>
    </Frame>
  );
}

export function ServicesArt() {
  return (
    <Frame label="Ilustración: computadora con una lista de citas confirmadas, un engranaje y una llave">
      <rect
        x="22"
        y="20"
        width="84"
        height="56"
        rx="4"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="3"
      />
      <rect
        x="22"
        y="20"
        width="84"
        height="12"
        rx="3"
        fill={BLUE}
        stroke={INK}
        strokeWidth="3"
      />
      {[42, 54, 66].map((y, i) => (
        <g key={y}>
          <rect
            x="30"
            y={y - 6}
            width="9"
            height="9"
            fill={i < 2 ? MINT : "#FFFFFF"}
            stroke={INK}
            strokeWidth="2"
          />
          {i < 2 && (
            <path
              d={`M31.5 ${y - 1.5}l2.5 2.5l4-5`}
              fill="none"
              stroke={INK}
              strokeWidth="1.8"
            />
          )}
          <line
            x1="46"
            x2={i === 1 ? 84 : 96}
            y1={y - 1.5}
            y2={y - 1.5}
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path
        d="M12 76h104l-8 10H20Z"
        fill={STEEL}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g className="art-spin" style={{ transformOrigin: "132px 44px" }}>
        <path
          d="M132 26l4 6l7-2l1 7l7 2l-3 6l5 5l-6 4l2 7l-7 1l-2 7l-6-3l-5 5l-4-6l-7 2l-1-7l-7-2l3-6l-5-5l6-4l-2-7l7-1l2-7l6 3Z"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle
          cx="132"
          cy="44"
          r="6"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.5"
        />
      </g>
      <g transform="rotate(-35 128 92)">
        <rect
          x="104"
          y="88"
          width="40"
          height="8"
          rx="4"
          fill={STEEL_DARK}
          stroke={INK}
          strokeWidth="2.5"
        />
        <path
          d="M144 84a8 8 0 1 1 0 16l-3-5h-5v-6h5Z"
          fill={STEEL_DARK}
          stroke={INK}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </g>
    </Frame>
  );
}
