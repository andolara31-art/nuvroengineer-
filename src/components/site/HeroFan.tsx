import { ArrowDown } from "lucide-react";
import { findVideo } from "../../content/works";
import { LoopVideo, openWorkVideo } from "./WorkMedia";

/* Abanico de celulares con loops de trabajos reales (marcas ficticias). */
const fan = [
  { id: "esta-chica-no-existe", priority: 0 },
  { id: "nela-belleza", priority: 1 },
  { id: "sabor-tico", priority: 2 },
  { id: "comercial-una-foto", priority: 1 },
  { id: "inmobiliario-casa-palma", priority: 0 },
];

export default function HeroFan() {
  return (
    <div className="hero-fan">
      <ul
        className="hero-fan-phones"
        aria-label="Videos con IA hechos por NUVRO"
      >
        {fan.map(({ id, priority }, index) => {
          const item = findVideo(id);
          return (
            <li key={id} className={`hero-fan-item hero-fan-${index}`}>
              <button
                type="button"
                className="phone-frame"
                onClick={(event) => openWorkVideo(item, event.currentTarget)}
                aria-label={`Ver video con sonido: ${item.title}`}
              >
                <span className="phone-notch" aria-hidden="true" />
                <LoopVideo item={item} priority={priority} />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="hero-fan-actions">
        <a className="brand-btn hero-fan-button" href="/#trabajos">
          Ver trabajos
          <ArrowDown size={18} aria-hidden="true" />
        </a>
        <p className="hero-fan-note">Videos con IA · marcas ficticias</p>
      </div>
    </div>
  );
}
