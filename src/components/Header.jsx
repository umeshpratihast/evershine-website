import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { services, categories } from "../data/services";
import styles from "./Header.module.css";

const WHATSAPP_NUMBER = "971506338183";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_DISPLAY = "+971 50 633 8183";
const PHONE_HREF = "tel:+971506338183";

function whatsappLink(message) {
  return message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo}>
          <img src="/logo/evershine-logo.png" alt="Ever Shine Auto Services" className={styles.logoImg} />
        </Link>

        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className={styles.dropdownTrigger}>
              Services <ChevronDown size={15} />
            </Link>
            {servicesOpen && (
              <div className={styles.megaMenu}>
                {categories.map((cat) => (
                  <div key={cat.id} className={styles.megaCol}>
                    <span className={styles.megaColTitle}>{cat.label}</span>
                    {services
                      .filter((s) => s.category === cat.id)
                      .map((s) => (
                        <Link key={s.slug} to={s.path}>
                          {s.name}
                        </Link>
                      ))}
                  </div>
                ))}
                <Link to="/services" className={styles.megaAll}>
                  View all services →
                </Link>
              </div>
            )}
          </div>
          <Link to="/#gallery">Gallery</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact</Link>
        </nav>

        <div className={styles.actions}>
          <a href={PHONE_HREF} className={styles.phone}>
            <Phone size={16} strokeWidth={2} />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.whatsappIcon}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={19} strokeWidth={2} />
          </a>
          <a
            href={whatsappLink("Hi Ever Shine, I'd like to book a detail.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            Book Now
          </a>
          <button
            className={styles.burger}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobilePanel}>
          <div className={styles.mobileTop}>
            <img src="/logo/evershine-logo.png" alt="Ever Shine Auto Services" className={styles.mobileLogoImg} />
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className={styles.mobileNav}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>All Services</Link>
            <span className={styles.mobileGroupLabel}>Services</span>
            {services.map((s) => (
              <Link key={s.slug} to={s.path} onClick={() => setMenuOpen(false)}>
                {s.name}
              </Link>
            ))}
            <Link to="/#gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/about/" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact/" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
          <div className={styles.mobileCtas}>
            <a
              href={whatsappLink("Hi Ever Shine, I'd like to book a detail.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export { WHATSAPP_URL, WHATSAPP_NUMBER, whatsappLink, PHONE_DISPLAY, PHONE_HREF };
