import { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion({ eyebrow, title, faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} className={styles.item}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  {faq.q}
                  <Plus size={18} className={`${styles.icon} ${open ? styles.iconOpen : ""}`} />
                </button>
                {open && <p className={styles.answer}>{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
