import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.crumb} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className={styles.item}>
            {item.to && !isLast ? <Link to={item.to}>{item.label}</Link> : <span className={styles.current}>{item.label}</span>}
            {!isLast && <ChevronRight size={13} className={styles.sep} />}
          </span>
        );
      })}
    </nav>
  );
}
