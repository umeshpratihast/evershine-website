import { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { services } from "../data/services";
import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from "./Header";
import styles from "./ContactForm.module.css";

const initialForm = { name: "", phone: "", email: "", service: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi Ever Shine, I'd like to get in touch.",
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.service && `Preferred Service: ${form.service}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(lines), "_blank", "noreferrer");
  };

  return (
    <section className={styles.section} id="contact-form">
      <div className={`container ${styles.grid}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Send us your details</h2>
          <p className={styles.formNote}>
            Fill in the form below — it opens a WhatsApp message to our team with
            your details, so we can get back to you directly.
          </p>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Name</span>
              <input type="text" required value={form.name} onChange={update("name")} placeholder="Your name" />
            </label>
            <label className={styles.field}>
              <span>Phone</span>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={update("phone")}
                placeholder="+971 5X XXX XXXX"
              />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Email</span>
              <input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
            </label>
            <label className={styles.field}>
              <span>Preferred Service</span>
              <select value={form.service} onChange={update("service")}>
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className={styles.field}>
            <span>Message</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us about your car and what it needs"
            />
          </label>

          <button type="submit" className={`btn btn-primary ${styles.submit}`}>
            <Send size={16} /> Send via WhatsApp
          </button>
        </form>

        <div className={styles.quick}>
          <h3 className={styles.quickTitle}>Prefer to talk now?</h3>
          <p className={styles.quickNote}>Call or message us directly — we're open every day.</p>
          <a href={PHONE_HREF} className={`btn btn-ghost ${styles.quickBtn}`}>
            <Phone size={16} /> {PHONE_DISPLAY}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className={`btn btn-primary ${styles.quickBtn}`}>
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
