import styles from "./BrandsStrip.module.css";

const brands = [
  { name: "GYEON", note: "Ceramic coatings" },
  { name: "3M", note: "Paint protection film" },
  { name: "Armolan", note: "Window film & PPF" },
  { name: "TOPAZ", note: "Engine & lubricants" },
  { name: "XPEL", note: "Graphene coating" },
];

export default function BrandsStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>Trusted brands we use — sourced from authorised UAE distributors</p>
        <div className={styles.row}>
          {brands.map((b) => (
            <div key={b.name} className={styles.brand}>
              <span className={styles.name}>{b.name}</span>
              <span className={styles.note}>{b.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
