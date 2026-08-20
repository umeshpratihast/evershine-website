import { Navigate, useParams } from "react-router-dom";
import BenefitsGrid from "../components/BenefitsGrid";
import FaqAccordion from "../components/FaqAccordion";
import FinalCTA from "../components/FinalCTA";
import PricingBlock from "../components/PricingBlock";
import RelatedServices from "../components/RelatedServices";
import Seo from "../components/Seo";
import ServiceHero from "../components/ServiceHero";
import StepsList from "../components/StepsList";
import TrustBar from "../components/TrustBar";
import WhyEverShine from "../components/WhyEverShine";
import { getServiceBySlug, services } from "../data/services";
import { getServiceContent } from "../data/serviceContent";

export default function ServicePage({ slugOverride }) {
  const params = useParams();
  const slug = slugOverride || params.slug;
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const content = getServiceContent(service);

  const related = content.relatedSlugs.length
    ? content.relatedSlugs.map(getServiceBySlug).filter(Boolean)
    : services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {content.seo && (
        <Seo title={content.seo.title} description={content.seo.description} path={service.path} />
      )}

      <ServiceHero service={service} tag={content.tag} image={content.heroImage} />
      <TrustBar />

      <BenefitsGrid
        eyebrow="Why It's Worth It"
        title={`What you get with ${service.name}.`}
        dek={content.intro}
        items={content.benefits}
      />

      <StepsList
        eyebrow="How It Works"
        title="What's included."
        dek={`Every ${service.name} booking follows the same careful process, start to finish.`}
        steps={content.steps}
      />

      <PricingBlock service={service} />

      <WhyEverShine />

      <FaqAccordion eyebrow="Common Questions" title="Frequently asked questions." faqs={content.faqs} />

      <RelatedServices services={related} />

      <FinalCTA />
    </>
  );
}
