import { Quote, Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Avraam A.",
    service: "Full Detail & Ceramic Coating",
    quote:
      "Extremely professional, honest and transparent. Mr. Saif walked me through every step before starting. Highly recommend this shop.",
  },
  {
    name: "Mothilal S.",
    service: "Ceramic Coating & Tinting",
    quote:
      "Excellent service, fair price. The team was knowledgeable and paid great attention to detail — the coating gave my car a beautiful finish.",
  },
  {
    name: "Allen Jay D.",
    service: "Ceramic Coating",
    quote:
      "Very good job overall, the coat was nicely done. Staff are friendly and fast. Recommend Ever Shine for both quality and price.",
  },
  {
    name: "Deepana C.",
    service: "Full Detail",
    quote: "Highly recommend — quick turnaround and the greatest care for my vehicle.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Real Customers</span>
          <h2 className={styles.title}>Hear it from Dubai car owners.</h2>
          <div className={styles.overall}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span>4.5 average · Google Reviews</span>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <Quote size={22} className={styles.quoteIcon} />
              <p className={styles.quote}>{r.quote}</p>
              <div className={styles.who}>
                <span className={styles.avatar}>{r.name.charAt(0)}</span>
                <div>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.service}>{r.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
