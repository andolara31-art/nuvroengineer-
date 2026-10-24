import SiteHeader from "./components/site/SiteHeader";
import EditorialSections from "./components/site/EditorialSections";
import SiteContact from "./components/site/SiteContact";
import SiteFooter from "./components/site/SiteFooter";
import ServicePage from "./components/site/ServicePage";
import BusinessGuide from "./components/site/BusinessGuide";
import SiteInfo from "./components/site/SiteInfo";
import AnalyticsConsent from "./components/site/AnalyticsConsent";
import { servicePages } from "./content/services";
import "./home.css";

export default function App({ path = "/" }: { path?: string }) {
  const page = servicePages.find((service) => service.path === path);
  return (
    <>
      <SiteHeader />
      {path === "/" ? (
        <main id="contenido">
          <EditorialSections />
          <SiteContact />
        </main>
      ) : page ? (
        <ServicePage page={page} />
      ) : path === "/guias/ia-y-automatizacion-para-pymes" ? (
        <BusinessGuide />
      ) : (
        <SiteInfo page={path} />
      )}
      <SiteFooter />
      <AnalyticsConsent />
    </>
  );
}
