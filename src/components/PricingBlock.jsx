import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./Header";
import styles from "./PricingBlock.module.css";

export default function PricingBlock({ service, note }) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.card}`}>
        <div className={styles.info}>
          <span className="eyebrow">Pricing</span>
          <h2 className={styles.title}>
            {service.name} from <span className={styles.price}>{service.priceFrom}</span>
          </h2>
          <p className={styles.note}>
            {note ||
              `Final pricing depends on your vehicle size and condition. Typical turnaround is ${service.duration}.`}
          </p>
        </div>
        <a
          href={whatsappLink(`Hi Ever Shine, can you give me a quote for ${service.seoName}?`)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <MessageCircle size={16} /> Get an Exact Quote
        </a>
      </div>
    </section>
  );
}
