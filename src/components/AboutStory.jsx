import { images } from "../data/images";
import styles from "./AboutStory.module.css";

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Our Story</span>
          <h2 className={styles.title}>Built on precision, not shortcuts.</h2>
          <p className={styles.p}>
            Ever Shine started with a simple goal — to give every car in Dubai the
            treatment it deserves. From a single detailing bay in Ras Al Khor,
            we've grown into a full-service workshop covering detailing, paint
            protection and mechanical care, without losing the hands-on approach
            we started with.
          </p>
          <p className={styles.p}>
            Every vehicle that comes through our doors — from a daily commuter to
            a weekend car — gets the same level of care. We use professional-grade
            products across every service, and every job is carried out by our
            own trained technicians.
          </p>
        </div>
        <div className={styles.media}>
          <img src={images.workshop} alt="Ever Shine automotive workshop in Ras Al Khor, Dubai" />
          <div className={styles.badge}>
            <span className={styles.badgeValue}>9+</span>
            <span className={styles.badgeLabel}>Years serving Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
