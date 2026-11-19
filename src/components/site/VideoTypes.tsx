import {
  Camera,
  Check,
  FileText,
  Images,
  Music,
  Smartphone,
} from "lucide-react";
import { findVideo } from "../../content/works";
import { VideoCard } from "./WorkMedia";
import "./video-types.css";

const types = [
  {
    id: "sabor-tico",
    name: "UGC con creadora",
    body: "Una creadora hecha con IA presenta tu restaurante o tu producto como si lo recomendara en TikTok: habla a cámara, muestra y cuenta por qué vale la pena.",
    ideal: "restaurantes, belleza, ropa y tiendas.",
  },
  {
    id: "comercial-una-foto",
    name: "Comercial con 1 foto",
    body: "De una sola foto de tu producto sale un comercial con movimiento, voz y música. No hace falta una sesión de fotos.",
    ideal: "productos y promociones.",
  },
  {
    id: "inmobiliario-casa-palma",
    name: "Inmobiliario",
    body: "La propiedad, espacio por espacio, con una voz que la describe y los datos clave en pantalla.",
    ideal: "casas, apartamentos, lotes y alquileres.",
  },
];

const send = [
  {
    icon: Camera,
    text: "Fotos de tu producto, local o propiedad. Las del celular sirven si se ven claras.",
  },
  {
    icon: FileText,
    text: "Lo que querés decir: qué ofrecés, precio o promoción, horario y contacto, confirmados por vos.",
  },
  { icon: Images, text: "Tu logo y colores, si los tenés." },
];

const receive = [
  {
    icon: Smartphone,
    text: "Un video vertical listo para Reels, TikTok y estados de WhatsApp.",
  },
  { icon: Music, text: "Con subtítulos, voz y música." },
  {
    icon: Check,
    text: "Rondas de revisión acordadas en la propuesta antes de la entrega final.",
  },
];

export default function VideoTypes() {
  return (
    <section className="video-types" aria-labelledby="video-types-title">
      <div className="shell">
        <div className="service-section-heading video-types-heading">
          <p className="eyebrow">02 / Tres tipos de video</p>
          <h2 id="video-types-title">Elegí el que mejor cuenta lo tuyo.</h2>
          <p>
            Tocá cualquiera para verlo con sonido. Las marcas son ficticias y
            las personas y las voces de las creadoras están hechas con IA.
          </p>
        </div>
        <ol className="video-types-list">
          {types.map(({ id, name, body, ideal }, index) => (
            <li key={id} className="video-type">
              <div className="video-type-card">
                <VideoCard item={findVideo(id)} />
              </div>
              <div className="video-type-copy">
                <span className="video-type-number">0{index + 1}</span>
                <h3>{name}</h3>
                <p>{body}</p>
                <p className="video-type-ideal">
                  <strong>Ideal para</strong> {ideal}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="video-io">
          <div className="video-io-box">
            <h3>Qué tenés que mandar</h3>
            <ul>
              {send.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <span className="brand-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="video-io-box video-io-receive">
            <h3>Qué recibís</h3>
            <ul>
              {receive.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <span className="brand-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
