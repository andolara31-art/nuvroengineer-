/*
  "La tripulación" de NUVRO: cuatro personajes pixel art originales que cuelgan
  del borde inferior del encabezado, mirando hacia el contenido.
  Dibujados píxel por píxel (sin imágenes). Cada uno tiene su propia animación,
  en ciclos distintos para que nunca se muevan todos a la vez.
  Solo transform y opacity; con movimiento reducido quedan quietos.
*/
import type { ReactElement } from "react";
import "./pixel-crew.css";

const COLORS: Record<string, string> = {
  k: "#121212",
  b: "#2046F0",
  w: "#F7F7F4",
  y: "#FFC83D",
  m: "#5EDBB0",
  c: "#FF5A4E",
  s: "#E8B48A",
  h: "#3B2418",
  g: "#B8B8B2",
};

/* Letras especiales: se dibujan dentro de un grupo animable */
const GROUPS: Record<string, { color: string; className: string }> = {
  e: { color: "#121212", className: "px-eyes" }, // ojos que parpadean
  u: { color: "#121212", className: "px-cursor" }, // cursor que titila
  a: { color: "#F7F7F4", className: "px-arm" }, // brazo que saluda
};

type Sprite = { name: string; rows: string[] };

const SPRITES: Sprite[] = [
  {
    name: "bit",
    rows: [
      "..ww......ww..",
      "..bb......bb..",
      "..bb..yy..bb..",
      "..kkkkkkkkkk..",
      "..kbbbbbbbbk..",
      "..kbwwwwwwbk..",
      "..kbweewewbk..",
      "..kbwwwwwwbk..",
      "..kbwwkkwwbk..",
      "..kbbbbbbbbk..",
      "..kkkkkkkkkk..",
      "....kbbbbk....",
      "....kkkkkk....",
    ],
  },
  {
    name: "dev",
    rows: [
      "..ss......ss..",
      "..cc......cc..",
      "..cc.hhhh.cc..",
      "..cchhhhhhcc..",
      "..cchsssshcc..",
      "..cckekkekcc..",
      "..ccsssssscc..",
      "..ccsskksscc..",
      "..cccccccccc..",
      "...cccyyccc...",
      "...cccccccc...",
      "....kk..kk....",
    ],
  },
  {
    name: "chispa",
    rows: [
      "...ww....ww...",
      "...yy....yy...",
      "...yyyyyyyy...",
      "..yyyyyyyyyy..",
      ".yyyeyyyyeyyy.",
      ".yyyeyyyyeyyy.",
      ".yyyyyyyyyyyy.",
      "..yycyyyycyy..",
      "...yyykkyyy...",
      "....yyyyyy....",
      ".....yyyy.....",
      "......yy......",
    ],
  },
  {
    name: "termi",
    rows: [
      "..ww..........",
      "..kk.........a",
      "..kkkkkkkkkk.a",
      "..kmmmmmmmmkaa",
      "..kmkmmmmmmk..",
      "..kmmkmmmmmk..",
      "..kmkmmuummk..",
      "..kmmmmmmmmk..",
      "..kkkkkkkkkk..",
      ".....kkkk.....",
      "....kkkkkk....",
    ],
  },
];

const PX = 3;

function PixelSprite({ sprite }: { sprite: Sprite }) {
  const width = sprite.rows[0].length;
  const height = sprite.rows.length;
  const base: ReactElement[] = [];
  const grouped: Record<string, ReactElement[]> = { e: [], u: [], a: [] };
  sprite.rows.forEach((row, y) => {
    [...row].forEach((char, x) => {
      if (char === ".") return;
      const special = GROUPS[char];
      const rect = (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={1}
          height={1}
          fill={special ? special.color : COLORS[char]}
        />
      );
      if (special) grouped[char].push(rect);
      else base.push(rect);
    });
  });
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * PX}
      height={height * PX}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g className="px-body">
        {base}
        {Object.entries(grouped).map(([char, rects]) =>
          rects.length ? (
            <g key={char} className={GROUPS[char].className}>
              {rects}
            </g>
          ) : null,
        )}
      </g>
    </svg>
  );
}

export default function PixelCrew() {
  return (
    <div className="pixel-crew" aria-hidden="true">
      {SPRITES.map((sprite) => (
        <span key={sprite.name} className={`px-char px-${sprite.name}`}>
          <PixelSprite sprite={sprite} />
        </span>
      ))}
    </div>
  );
}
