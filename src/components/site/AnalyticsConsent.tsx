import { useEffect, useState } from "react";
import { getAnalyticsConsent, setAnalyticsConsent } from "../../lib/analytics";
import "./site-expansion.css";

export default function AnalyticsConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const open = () => setVisible(true);
    const configured = /^G-[A-Z0-9]+$/.test(
      import.meta.env.VITE_GA_MEASUREMENT_ID || "",
    );
    setVisible(configured && getAnalyticsConsent() === "unknown");
    window.addEventListener("nuvro:open-privacy", open);
    return () => window.removeEventListener("nuvro:open-privacy", open);
  }, []);
  if (!visible) return null;
  return (
    <aside className="analytics-consent" aria-label="Preferencias de medición">
      <p>
        Podés permitir medición de visitas y clics para ayudarnos a mejorar la
        web. <a href="/privacidad">Ver privacidad</a>.
      </p>
      <div>
        <button
          type="button"
          onClick={() => {
            setAnalyticsConsent("denied");
            setVisible(false);
          }}
        >
          Solo necesarias
        </button>
        <button
          type="button"
          onClick={() => {
            setAnalyticsConsent("granted");
            setVisible(false);
          }}
        >
          Permitir medición
        </button>
      </div>
    </aside>
  );
}
