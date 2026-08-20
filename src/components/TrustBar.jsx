import styles from "./TrustBar.module.css";

const stats = [
  { value: "12,000+", label: "Cars detailed" },
  { value: "4.2★", label: "Google rating" },
  { value: "9+", label: "Years in Dubai" },
  { value: "Same Day", label: "Service available" },
];

export default function TrustBar() {
  return (
    <section className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
