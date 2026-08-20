import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">404</span>
        <h1 className={styles.title}>We couldn't find that page.</h1>
        <p className={styles.sub}>
          The page you're looking for may have moved. Head back to the homepage
          or browse our services.
        </p>
        <div className={styles.ctaRow}>
          <Link to="/" className="btn btn-primary">
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link to="/services" className="btn btn-ghost">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
