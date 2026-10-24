import SiteHeader from "./components/site/SiteHeader";
import CorporateHero from "./components/site/CorporateHero";
import CorporateSections from "./components/site/CorporateSections";
import SiteContact from "./components/site/SiteContact";
import SiteFooter from "./components/site/SiteFooter";
import ServicePage from "./components/site/ServicePage";
import BusinessGuide from "./components/site/BusinessGuide";
import SiteInfo from "./components/site/SiteInfo";
import ServicePolicies from "./components/site/ServicePolicies";
import AnalyticsConsent from "./components/site/AnalyticsConsent";
import { servicePages } from "./content/services";
import "./home.css";
import "./corporate.css";

export default function App({ path = "/" }: { path?: string }) {
  const page = servicePages.find((service) => service.path === path);
  return (
    <>
      <SiteHeader />
      {path === "/" ? (
        <main id="contenido">
          <CorporateHero />
          <CorporateSections />
          <SiteContact />
        </main>
      ) : page ? (
        <ServicePage page={page} />
      ) : path === "/guias/ia-y-automatizacion-para-pymes" ? (
        <BusinessGuide />
      ) : path === "/politicas-de-servicio" ? (
        <ServicePolicies />
      ) : (
        <SiteInfo page={path} />
      )}
      <SiteFooter />
      <AnalyticsConsent />
    </>
  );
}
