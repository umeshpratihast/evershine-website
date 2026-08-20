import {
  Armchair,
  Atom,
  CircleDot,
  CircleGauge,
  Droplets,
  Shield,
  Sparkles,
  SunDim,
  Wind,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { categories, services } from "../data/services";
import styles from "./ServicesOverview.module.css";

const iconMap = {
  Sparkles,
  Shield,
  Atom,
  SunDim,
  Armchair,
  CircleDot,
  Wind,
  CircleGauge,
  Droplets,
  Wrench,
};

export default function ServicesOverview({ hideHead = false }) {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        {!hideHead && (
          <div className={styles.head}>
            <span className="eyebrow">What We Do</span>
            <h2 className={styles.title}>Every service, one workshop.</h2>
            <p className={styles.dek}>
              From invisible paint protection to full mechanical care — ten
              specialist services, each carried out by trained technicians using
              certified premium-grade products.
            </p>
          </div>
        )}

        {categories.map((cat) => (
          <div key={cat.id} className={styles.group}>
            <h3 className={styles.groupTitle}>{cat.label}</h3>
            <div className={styles.grid}>
              {services
                .filter((s) => s.category === cat.id)
                .map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <Link key={s.slug} to={s.path} className={styles.card}>
                      <div className={styles.cardTop}>
                        <span className={styles.iconWrap}>
                          <Icon size={20} strokeWidth={1.6} />
                        </span>
                        <ArrowUpRight size={17} className={styles.cardArrow} />
                      </div>
                      <h4 className={styles.cardName}>{s.name}</h4>
                      <p className={styles.cardTagline}>{s.tagline}</p>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardPrice}>From {s.priceFrom}</span>
                        <span className={styles.cardDuration}>{s.duration}</span>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
