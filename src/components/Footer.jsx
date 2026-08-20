import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, services } from "../data/services";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "./Header";
import styles from "./Footer.module.css";

function InstagramIcon(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <img src="/logo/evershine-logo.png" alt="Ever Shine Auto Services" className={styles.logoImg} />
          <p className={styles.tagline}>
            Dubai's trusted auto care centre — detailing, ceramic coating,
            PPF, tinting and mechanical service, all under one roof in
            Ras Al Khor.
          </p>
          <div className={styles.socials}>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={17} />
            </a>
            <a href="https://instagram.com/evershineautodxb" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {categories.map((cat) => (
          <div key={cat.id} className={styles.col}>
            <span className={styles.colTitle}>{cat.label}</span>
            <ul>
              {services
                .filter((s) => s.category === cat.id)
                .map((s) => (
                  <li key={s.slug}>
                    <Link to={s.path}>{s.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        <div className={styles.col}>
          <span className={styles.colTitle}>Company</span>
          <ul className={styles.companyLinks}>
            <li>
              <Link to="/about/">About Us</Link>
            </li>
            <li>
              <Link to="/contact/">Contact Us</Link>
            </li>
          </ul>
          <div className={styles.contactItem}>
            <MapPin size={15} />
            <span>Ras Al Khor Industrial Area 3, Dubai, UAE</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={15} />
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </div>
          <div className={styles.contactItem}>
            <MessageCircle size={15} />
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottom}`}>
          <span>© {year} Ever Shine Auto Service Center. All rights reserved.</span>
          <div className={styles.legal}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
