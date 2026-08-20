import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileStickyBar from "./components/MobileStickyBar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import ServicesPage from "./pages/ServicesPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/car-window-tinting-dubai" element={<ServicePage slugOverride="window-tinting-dubai" />} />
          <Route path="/best-ppf-installation-dubai" element={<ServicePage slugOverride="ppf-installation-dubai" />} />
          <Route path="/car-graphene-coating-dubai" element={<ServicePage slugOverride="graphene-coating-dubai" />} />
          <Route path="/car-ac-servicing-dubai" element={<ServicePage slugOverride="ac-servicing-dubai" />} />
          <Route path="/car-garage-ras-al-khor" element={<ServicePage slugOverride="garage-ras-al-khor" />} />
          <Route path="/car-garage-ras-al-khor/" element={<ServicePage slugOverride="garage-ras-al-khor" />} />
          <Route
            path="/car-interior-detailing-dubai"
            element={<ServicePage slugOverride="interior-detailing-dubai" />}
          />
          <Route
            path="/car-interior-detailing-dubai/"
            element={<ServicePage slugOverride="interior-detailing-dubai" />}
          />
          <Route path="/car-polishing-services-dubai" element={<ServicePage slugOverride="polishing-dubai" />} />
          <Route path="/car-polishing-services-dubai/" element={<ServicePage slugOverride="polishing-dubai" />} />
          <Route path="/car-engine-oil-change" element={<ServicePage slugOverride="engine-oil-change" />} />
          <Route path="/car-engine-oil-change/" element={<ServicePage slugOverride="engine-oil-change" />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
    </>
  );
}
