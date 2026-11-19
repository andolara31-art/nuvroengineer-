import { useEffect, useRef, type ImgHTMLAttributes } from "react";

/*
  Imagen que se pide recién cuando la página terminó de cargar y está a menos
  de 300 px de la pantalla. Evita que las capturas de Trabajos compitan con la
  fuente y el título de la portada (más estricto que loading="lazy").
*/
let pageLoaded = false;
const waiting = new Set<() => void>();
if (typeof window !== "undefined") {
  const done = () => {
    pageLoaded = true;
    waiting.forEach((run) => run());
    waiting.clear();
  };
  if (document.readyState === "complete") done();
  else window.addEventListener("load", done, { once: true });
}

export default function DeferredImg({
  src,
  srcSet,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = ref.current;
    if (!image) return;
    const show = () => {
      if (srcSet) image.srcset = srcSet;
      image.src = src;
    };
    if (!("IntersectionObserver" in window)) return show();
    let observer: IntersectionObserver | null = null;
    const watch = () => {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            observer?.disconnect();
            show();
          }
        },
        { rootMargin: "300px" },
      );
      observer.observe(image);
    };
    if (pageLoaded) watch();
    else waiting.add(watch);
    return () => {
      waiting.delete(watch);
      observer?.disconnect();
    };
  }, [src, srcSet]);

  return <img ref={ref} decoding="async" {...rest} />;
}
