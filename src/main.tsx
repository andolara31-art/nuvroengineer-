import { lazy, StrictMode, Suspense } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { initAnalytics } from "./lib/analytics";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const isProposalRoute = path === "/propuesta";
const Proposal = lazy(() =>
  Promise.all([
    import("./components/ProposalPage.tsx"),
    import("./index.css"),
  ]).then(([module]) => ({ default: module.ProposalPage })),
);

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    {isProposalRoute ? (
      <Suspense
        fallback={
          <p
            role="status"
            style={{ padding: 24, fontFamily: "Arial, sans-serif" }}
          >
            Cargando NUVRO ENGINEER…
          </p>
        }
      >
        <Proposal />
      </Suspense>
    ) : (
      <App path={path} />
    )}
  </StrictMode>
);
if (!isProposalRoute && root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
initAnalytics();
