import { Award, ShieldCheck, ThumbsUp } from "lucide-react";
import { images } from "../data/images";
import styles from "./WhyEverShine.module.css";

const pillars = [
  {
    icon: Award,
    title: "Dubai's detail experts",
    copy: "Years of experience across every make and model in the UAE — from daily drivers to supercars.",
  },
  {
    icon: ShieldCheck,
    title: "Premium products only",
    copy: "We use professional-grade ceramic coatings, PPF and detailing products trusted across the industry — never generic substitutes.",
  },
  {
    icon: ThumbsUp,
    title: "100% satisfaction, guaranteed",
    copy: "A job isn't done until you're completely happy with the result. Every car, every time.",
  },
];

export default function WhyEverShine() {
  return (
    <section className={styles.section} id="why">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Our Promise</span>
          <h2 className={styles.title}>Why Dubai chooses Ever Shine.</h2>
          <div className={styles.pillars}>
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={styles.pillar}>
                  <Icon size={20} strokeWidth={1.6} className={styles.pillarIcon} />
                  <div>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarCopy}>{p.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.media}>
          <img src={images.interior} alt="Detailed vehicle interior, leather and trim" loading="lazy" />
          <div className={styles.badge}>
            <span className={styles.badgeValue}>9+</span>
            <span className={styles.badgeLabel}>Years serving Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
