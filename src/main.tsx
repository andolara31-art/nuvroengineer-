import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

const isProposalRoute = window.location.pathname.startsWith("/propuesta");
const Page = lazy(() =>
  isProposalRoute
    ? Promise.all([
        import("./components/ProposalPage.tsx"),
        import("./index.css"),
      ]).then(([module]) => ({ default: module.ProposalPage }))
    : import("./App.tsx"),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
      <Page />
    </Suspense>
  </StrictMode>,
);
