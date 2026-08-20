import AboutStory from "../components/AboutStory";
import BenefitsGrid from "../components/BenefitsGrid";
import BrandsStrip from "../components/BrandsStrip";
import FinalCTA from "../components/FinalCTA";
import LocationHours from "../components/LocationHours";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import ServicesOverview from "../components/ServicesOverview";
import TrustBar from "../components/TrustBar";
import WhyEverShine from "../components/WhyEverShine";

const expertise = [
  {
    title: "Paint & protection specialists",
    copy: "Ceramic coating, graphene coating, PPF and window tinting, applied by trained technicians.",
  },
  {
    title: "Full detailing services",
    copy: "Interior detailing and multi-stage machine polishing to keep your car looking its best inside and out.",
  },
  {
    title: "Mechanical & maintenance care",
    copy: "AC servicing, brake repair and engine oil changes, alongside general vehicle diagnostics.",
  },
  {
    title: "One Ras Al Khor workshop",
    copy: "Everything handled in a single visit, without shuttling between garages.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Ever Shine Auto Service Center | Dubai Car Detailing & Auto Care"
        description="Ever Shine is Dubai's trusted car detailing, paint protection and mechanical care specialists — based in Ras Al Khor, serving daily drivers and weekend cars alike."
        path="/about/"
      />

      <PageHero
        eyebrow="About Us"
        title="About Ever Shine Auto Service Center"
        description="Dubai's trusted car detailing, paint protection and mechanical care specialists — based in Ras Al Khor, built on precision and care for every vehicle that comes through our doors."
      />

      <TrustBar />
      <AboutStory />

      <BenefitsGrid
        eyebrow="Our Expertise"
        title="Detailing, protection and mechanical care — under one roof."
        dek="From paint correction and ceramic coating to AC servicing and oil changes, our technicians handle it all using certified, professional-grade products."
        items={expertise}
      />

      <BrandsStrip />
      <WhyEverShine />
      <ServicesOverview />
      <LocationHours />
      <FinalCTA />
    </>
  );
}
