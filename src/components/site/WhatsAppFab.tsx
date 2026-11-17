import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../lib/site";

/*
  Botón fijo de WhatsApp, solo en pantallas chicas (ver brand.css).
  Aparece al pasar la portada y se oculta cuando ya se ve el contacto o el pie,
  para no tapar botones que hacen lo mismo.
*/
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector(".craft-hero, main > section");
    const ends = document.querySelectorAll("#contacto, .corp-footer");
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const state = { hero: Boolean(hero), end: false };
    const seen = new Map<Element, boolean>();
    const update = () => setVisible(!state.hero && !state.end);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) seen.set(entry.target, entry.isIntersecting);
      state.hero = hero ? Boolean(seen.get(hero)) : false;
      state.end = Array.from(ends).some((element) => seen.get(element));
      update();
    });
    if (hero) observer.observe(hero);
    ends.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <a
      className={`wa-fab${visible ? " is-visible" : ""}`}
      href={whatsappUrl("Hola NUVRO, quiero conversar sobre mi negocio.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
    >
      <MessageCircle size={22} strokeWidth={2.3} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
