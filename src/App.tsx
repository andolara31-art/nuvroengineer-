import SiteHeader from "./components/site/SiteHeader";
import EditorialSections from "./components/site/EditorialSections";
import SiteContact from "./components/site/SiteContact";
import SiteFooter from "./components/site/SiteFooter";
import "./home.css";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <EditorialSections />
        <SiteContact />
      </main>
      <SiteFooter />
    </>
  );
}
