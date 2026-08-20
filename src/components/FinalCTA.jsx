import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, whatsappLink } from "./Header";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow eyebrow-on-navy">Limited Slots This Week</span>
        <h2 className={styles.title}>Ready to make your car shine?</h2>
        <p className={styles.sub}>
          Book your detail today and experience the Ever Shine difference —
          Ras Al Khor workshop, serving all of Dubai.
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
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-on-navy">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
