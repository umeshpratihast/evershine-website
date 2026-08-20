import { Check } from "lucide-react";
import styles from "./BenefitsGrid.module.css";

export default function BenefitsGrid({ eyebrow, title, dek, items }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {dek && <p className={styles.dek}>{dek}</p>}
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.iconWrap}>
                <Check size={18} strokeWidth={2.5} />
              </span>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {item.copy && <p className={styles.cardCopy}>{item.copy}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
