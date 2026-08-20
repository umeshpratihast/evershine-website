import ContactForm from "../components/ContactForm";
import FinalCTA from "../components/FinalCTA";
import LocationHours from "../components/LocationHours";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Ever Shine Auto Service Center | Ras Al Khor, Dubai"
        description="Get in touch with Ever Shine for car detailing, paint protection and mechanical servicing in Dubai. Call, WhatsApp or visit our Ras Al Khor workshop."
        path="/contact/"
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Ever Shine Auto Service Center"
        description="Have a question or ready to book? Reach us on WhatsApp, call the workshop directly, or send your details below."
      />

      <ContactForm />
      <LocationHours />
      <FinalCTA />
    </>
  );
}
