import styles from "./StepsList.module.css";

export default function StepsList({ eyebrow, title, dek, steps }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {dek && <p className={styles.dek}>{dek}</p>}
        </div>

        <div className={styles.list}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepCopy}>{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
