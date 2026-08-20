import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { images } from "../data/images";
import { WHATSAPP_URL, whatsappLink } from "./Header";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Dubai's Detail Specialists</span>

          <h1 className={styles.headline}>Your Car Deserves the Best</h1>

          <p className={styles.sub}>
            Dubai's trusted car detailing specialists. From ceramic coating to
            full interior restoration — we treat every vehicle with precision
            and care.
          </p>

          <div className={styles.ctaRow}>
            <a
              href={whatsappLink("Hi Ever Shine, I'd like to book a detail.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Book a Detail <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn btn-ghost">
              View Services
            </a>
          </div>

          <div className={styles.proof}>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span>4.5 on Google</span>
            </div>
            <span className={styles.dot} />
            <span>Ras Al Khor, Dubai</span>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.mediaCard}>
            <img src={images.hero} alt="Ever Shine detailed vehicle, mirror-finish paint" />
          </div>
          <div className={styles.floatCard}>
            <span className={styles.floatValue}>12,000+</span>
            <span className={styles.floatLabel}>Cars detailed in Dubai</span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.waChip}>
            <MessageCircle size={15} /> Chat with us
          </a>
        </div>
      </div>
    </section>
  );
}
