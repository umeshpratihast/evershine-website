import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./Header";
import styles from "./LocationHours.module.css";

const hours = [
  { days: "Mon – Thu & Sat", time: "8:30 AM – 8:30 PM" },
  { days: "Fri & Sun", time: "9:00 AM – 9:00 PM" },
];

export default function LocationHours() {
  return (
    <section className={styles.section} id="location">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Visit The Workshop</span>
          <h2 className={styles.title}>Ras Al Khor, Dubai.</h2>
          <p className={styles.dek}>
            Drop in or book ahead — we're open every day of the week.
          </p>

          <div className={styles.infoRow}>
            <MapPin size={18} className={styles.infoIcon} />
            <span>Ras Al Khor Industrial Area 3, Dubai, UAE</span>
          </div>
          <div className={styles.infoRow}>
            <Phone size={18} className={styles.infoIcon} />
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </div>

          <div className={styles.hoursBlock}>
            <span className={styles.hoursLabel}>
              <Clock size={15} /> Opening Hours
            </span>
            {hours.map((h) => (
              <div key={h.days} className={styles.hoursRow}>
                <span>{h.days}</span>
                <span className={styles.hoursTime}>{h.time}</span>
              </div>
            ))}
          </div>

          <a
            href="https://maps.google.com/?q=Ras+Al+Khor+Industrial+Area+3+Dubai"
            target="_blank"
            rel="noreferrer"
            className={`btn btn-ghost ${styles.directions}`}
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>

        <div className={styles.mapPanel} role="img" aria-label="Map placeholder for Ras Al Khor workshop location">
          <div className={styles.mapGrid} />
          <span className={styles.mapPin}>
            <MapPin size={26} strokeWidth={1.6} />
          </span>
          <span className={styles.mapNote}>Interactive map embed goes here</span>
        </div>
      </div>
    </section>
  );
}
