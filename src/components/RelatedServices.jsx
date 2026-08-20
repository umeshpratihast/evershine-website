import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./RelatedServices.module.css";

export default function RelatedServices({ services }) {
  if (!services.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <span className="eyebrow">Related Services</span>
        <h2 className={styles.title}>You might also need.</h2>

        <div className={styles.grid}>
          {services.map((s) => (
            <Link key={s.slug} to={s.path} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardName}>{s.name}</h3>
                <ArrowUpRight size={17} className={styles.cardArrow} />
              </div>
              <p className={styles.cardTagline}>{s.tagline}</p>
              <span className={styles.cardPrice}>From {s.priceFrom}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
