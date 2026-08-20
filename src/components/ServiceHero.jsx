import { ArrowRight, Clock, MessageCircle, Tag } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import { whatsappLink } from "./Header";
import styles from "./ServiceHero.module.css";

export default function ServiceHero({ service, tag, image, breadcrumbLabel }) {
  const bookMessage = `Hi Ever Shine, I'd like to book ${service.seoName}.`;

  return (
    <section className={styles.hero}>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: breadcrumbLabel || service.name },
          ]}
        />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          {tag && <span className={styles.tag}>{tag}</span>}
          <h1 className={styles.headline}>{service.seoName}</h1>
          <p className={styles.sub}>{service.tagline}</p>

          <div className={styles.factRow}>
            <span className={styles.fact}>
              <Tag size={15} /> From {service.priceFrom}
            </span>
            <span className={styles.fact}>
              <Clock size={15} /> {service.duration}
            </span>
          </div>

          <div className={styles.ctaRow}>
            <a href={whatsappLink(bookMessage)} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book {service.name} <ArrowRight size={16} />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <img src={image} alt={`${service.name} in Dubai — Ever Shine Auto Services`} />
        </div>
      </div>
    </section>
  );
}
