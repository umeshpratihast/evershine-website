import BrandsStrip from "../components/BrandsStrip";
import FinalCTA from "../components/FinalCTA";
import GallerySection from "../components/GallerySection";
import Hero from "../components/Hero";
import LocationHours from "../components/LocationHours";
import ProcessSection from "../components/ProcessSection";
import ServicesOverview from "../components/ServicesOverview";
import SignatureServices from "../components/SignatureServices";
import Testimonials from "../components/Testimonials";
import WhyEverShine from "../components/WhyEverShine";
import TrustBar from "../components/TrustBar";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <SignatureServices />
      <ProcessSection />
      <WhyEverShine />
      <GallerySection />
      <BrandsStrip />
      <Testimonials />
      <LocationHours />
      <FinalCTA />
    </>
  );
}
