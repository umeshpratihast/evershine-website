import { CalendarCheck, ClipboardCheck, PackageCheck, Wrench } from "lucide-react";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book in minutes",
    copy: "Reach us on WhatsApp or the booking form — tell us your car and what it needs, get a straight price back.",
  },
  {
    icon: ClipboardCheck,
    title: "Free assessment",
    copy: "Every vehicle is inspected on arrival so you know exactly what's being treated, and why, before we start.",
  },
  {
    icon: Wrench,
    title: "Expert treatment",
    copy: "Trained technicians carry out the work using certified products — no shortcuts, no subcontracting.",
  },
  {
    icon: PackageCheck,
    title: "Handover & warranty",
    copy: "A walkaround with you before you drive off, plus a written warranty card for coating and film work.",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">How It Works</span>
          <h2 className={styles.title}>From WhatsApp to handover.</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={styles.step}>
                <div className={styles.stepTop}>
                  <span className={styles.num}>0{i + 1}</span>
                  <Icon size={22} strokeWidth={1.6} className={styles.icon} />
                </div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepCopy}>{s.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
