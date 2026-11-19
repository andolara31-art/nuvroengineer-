import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import type { WorkVideo } from "../../content/works";
import { registerLoop, suspendLoops } from "../../lib/media";
import DeferredImg from "./DeferredImg";
import "./work-media.css";

/* ---------- Reproductor a pantalla completa (uno para toda la web) ---------- */

let opener: ((item: WorkVideo, trigger: HTMLElement | null) => void) | null =
  null;

/** Abre el video con sonido. Se llama dentro del toque para que iOS permita el audio. */
export function openWorkVideo(item: WorkVideo, trigger: HTMLElement | null) {
  opener?.(item, trigger);
}

export function VideoLightboxHost() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [current, setCurrent] = useState<WorkVideo | null>(null);

  useEffect(() => {
    opener = (item, trigger) => {
      const overlay = overlayRef.current;
      const video = videoRef.current;
      if (!overlay || !video) return;
      triggerRef.current = trigger;
      overlay.hidden = false;
      document.documentElement.dataset.videoOpen = "true";
      document.documentElement.style.overflow = "hidden";
      suspendLoops(true);
      video.poster = item.poster;
      video.src = item.video;
      video.muted = false;
      video.play().catch(() => {
        /* Si el navegador bloquea el sonido, quedan los controles para darle play. */
      });
      setCurrent(item);
      closeRef.current?.focus();
    };
    return () => {
      opener = null;
    };
  }, []);

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        // Mantiene el foco dentro del reproductor.
        const items = [closeRef.current, videoRef.current].filter(
          Boolean,
        ) as HTMLElement[];
        const index = items.indexOf(document.activeElement as HTMLElement);
        event.preventDefault();
        items[
          (index + (event.shiftKey ? -1 : 1) + items.length) % items.length
        ]?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [current]);

  function close() {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    if (overlayRef.current) overlayRef.current.hidden = true;
    delete document.documentElement.dataset.videoOpen;
    document.documentElement.style.overflow = "";
    suspendLoops(false);
    setCurrent(null);
    triggerRef.current?.focus();
  }

  return (
    <div
      ref={overlayRef}
      className="video-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current ? `Video: ${current.title}` : "Video"}
      hidden
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="video-lightbox-close"
        onClick={close}
        aria-label="Cerrar video"
      >
        <X size={26} strokeWidth={2.6} aria-hidden="true" />
      </button>
      <video
        ref={videoRef}
        className="video-lightbox-player"
        controls
        playsInline
        preload="metadata"
        width={720}
        height={1280}
      />
      {current && (
        <p className="video-lightbox-caption">
          <span>Ejemplo · marca ficticia</span> Personas, voces y escenas hechas
          con IA.
        </p>
      )}
    </div>
  );
}

/* ---------- Loop silencioso (abanico de la portada) ---------- */

export function LoopVideo({
  item,
  priority = 0,
  className = "",
}: {
  item: WorkVideo;
  priority?: number;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const onPlaying = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    const unregister = registerLoop(video, priority);
    return () => {
      unregister();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
    };
  }, [priority]);
  return (
    <span
      className={`loop-media${playing ? " is-playing" : ""} ${className}`.trim()}
    >
      {/* El poster es una imagen diferida: no compite con la carga inicial */}
      <DeferredImg src={item.posterSmall} width={300} height={533} alt="" />
      <video
        ref={ref}
        data-src={item.preview}
        muted
        loop
        playsInline
        preload="metadata"
        width={540}
        height={960}
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      />
    </span>
  );
}

/* ---------- Tarjeta de video en marco de celular ---------- */

export function VideoCard({
  item,
  headingLevel = 3,
}: {
  item: WorkVideo;
  headingLevel?: 3 | 4;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h4";
  return (
    <article className="work-card work-video">
      <button
        type="button"
        className="phone-frame"
        onClick={(event) => openWorkVideo(item, event.currentTarget)}
        aria-label={`Ver video con sonido: ${item.title}`}
      >
        <span className="phone-notch" aria-hidden="true" />
        <DeferredImg src={item.poster} width={540} height={960} alt="" />
        <span className="phone-play" aria-hidden="true">
          <Play size={26} strokeWidth={2.6} fill="currentColor" />
        </span>
      </button>
      <span className="work-tag">Ejemplo · marca ficticia</span>
      <Heading className="work-title">{item.title}</Heading>
      <span className="work-sector">{item.sector}</span>
    </article>
  );
}
