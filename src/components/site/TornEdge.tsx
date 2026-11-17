/*
  Borde de papel rasgado generado con SVG.
  Usa una semilla fija para que el dibujo sea idéntico en el HTML prerenderizado
  y en el navegador (sin diferencias de hidratación).
  Dibuja dos capas: la fibra blanca del papel (#F7F7F4) y el color de la
  sección que empieza.
*/
function seeded(seed: number) {
  let value = seed % 2147483647 || 1;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function edgePath(seed: number, width: number, height: number, lift: number) {
  const random = seeded(seed);
  const points: string[] = [`M0 ${height}`];
  let x = 0;
  while (x < width) {
    const y = lift + random() * (height * 0.62 - lift);
    points.push(`L${x.toFixed(1)} ${y.toFixed(1)}`);
    x += 9 + random() * 26;
  }
  points.push(`L${width} ${(lift + random() * height * 0.5).toFixed(1)}`);
  points.push(`L${width} ${height}Z`);
  return points.join("");
}

type TornEdgeProps = {
  /** Color de la sección que empieza debajo del borde */
  fill: string;
  seed?: number;
  /** "top": el borde va arriba de la sección. "bottom": abajo, invertido */
  side?: "top" | "bottom";
  className?: string;
};

export default function TornEdge({
  fill,
  seed = 7,
  side = "top",
  className = "",
}: TornEdgeProps) {
  const width = 1440;
  const height = 34;
  return (
    <svg
      className={`torn-edge torn-edge-${side} ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={edgePath(seed + 11, width, height, 0)} fill="#F7F7F4" />
      <path d={edgePath(seed, width, height, 7)} fill={fill} />
    </svg>
  );
}
