import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_URL } from "./Header";
import styles from "./MobileStickyBar.module.css";

export default function MobileStickyBar() {
  return (
    <div className={styles.bar}>
      <a href={PHONE_HREF} className={styles.item}>
        <Phone size={19} strokeWidth={1.8} />
        <span>Call</span>
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.item}>
        <MessageCircle size={19} strokeWidth={1.8} />
        <span>WhatsApp</span>
      </a>
      <a href="#contact" className={`${styles.item} ${styles.primary}`}>
        <CalendarCheck size={19} strokeWidth={1.8} />
        <span>Book Now</span>
      </a>
    </div>
  );
}
