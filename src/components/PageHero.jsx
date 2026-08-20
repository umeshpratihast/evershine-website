import Breadcrumb from "./Breadcrumb";
import styles from "./PageHero.module.css";

export default function PageHero({ eyebrow, title, description, breadcrumbLabel }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: breadcrumbLabel || title }]} />
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.sub}>{description}</p>}
      </div>
    </section>
  );
}
