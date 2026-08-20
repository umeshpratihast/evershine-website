import Breadcrumb from "../components/Breadcrumb";
import FinalCTA from "../components/FinalCTA";
import ServicesOverview from "../components/ServicesOverview";
import TrustBar from "../components/TrustBar";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <span className="eyebrow">What We Do</span>
          <h1 className={styles.title}>Every service, one Ras Al Khor workshop.</h1>
          <p className={styles.sub}>
            From invisible paint protection to full mechanical care — ten specialist
            services, each carried out by trained technicians using certified
            premium-grade products.
          </p>
        </div>
      </section>

      <TrustBar />
      <ServicesOverview hideHead />
      <FinalCTA />
    </>
  );
}
