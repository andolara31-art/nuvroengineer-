/*
  Reproducción de videos en loop (sin sonido) con un límite global:
  como máximo MAX_PLAYING videos a la vez, solo los visibles y con mayor prioridad.
  No arranca hasta que la página terminó de cargar, y no reproduce nada con
  prefers-reduced-motion o ahorro de datos: en ese caso se ve el poster.
*/

const MAX_PLAYING = 2;
const START_DELAY_MS = 1200;

type Entry = {
  video: HTMLVideoElement;
  priority: number;
  ratio: number;
};

const entries = new Map<HTMLVideoElement, Entry>();
let observer: IntersectionObserver | null = null;
let ready = false;
let suspended = false;
let scheduled = false;

function motionAllowed(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
    return false;
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  return !connection?.saveData;
}

function load(video: HTMLVideoElement) {
  const source = video.dataset.src;
  if (source && video.getAttribute("src") !== source) {
    video.src = source;
  }
}

function update() {
  scheduled = false;
  if (!ready) return;
  const allowed = !suspended && motionAllowed();
  const ranked = [...entries.values()]
    .filter((entry) => entry.ratio >= 0.5)
    .sort((a, b) => b.priority - a.priority || b.ratio - a.ratio)
    .slice(0, allowed ? MAX_PLAYING : 0);
  const playing = new Set(ranked.map((entry) => entry.video));
  for (const { video } of entries.values()) {
    if (playing.has(video)) {
      load(video);
      if (video.paused) video.play().catch(() => {});
    } else if (!video.paused) {
      video.pause();
    }
  }
}

function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(update);
}

function ensureObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return;
  observer = new IntersectionObserver(
    (records) => {
      for (const record of records) {
        const entry = entries.get(record.target as HTMLVideoElement);
        if (entry)
          entry.ratio = record.isIntersecting ? record.intersectionRatio : 0;
      }
      schedule();
    },
    { threshold: [0, 0.5, 0.75, 1] },
  );
  const start = () =>
    window.setTimeout(() => {
      ready = true;
      schedule();
    }, START_DELAY_MS);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
  window
    .matchMedia?.("(prefers-reduced-motion: reduce)")
    .addEventListener?.("change", schedule);
}

export function registerLoop(video: HTMLVideoElement, priority = 0) {
  ensureObserver();
  entries.set(video, { video, priority, ratio: 0 });
  observer?.observe(video);
  return () => {
    observer?.unobserve(video);
    entries.delete(video);
    video.pause();
  };
}

/** Pausa todos los loops (por ejemplo, mientras se ve un video con sonido). */
export function suspendLoops(value: boolean) {
  suspended = value;
  schedule();
}
