import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FinalCTA from "../components/FinalCTA";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { whatsappLink } from "../components/Header";
import { getServiceBySlug } from "../data/services";
import { galleryCategories, galleryItems } from "../data/galleryItems";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <>
      <Seo
        title="Gallery | Car Detailing Results Dubai — Ever Shine"
        description="Browse Ever Shine's detailing, protection and paint correction work — ceramic coating, PPF, window tinting and interior detailing projects from our Ras Al Khor workshop."
        path="/gallery/"
      />

      <PageHero
        eyebrow="Real Results"
        title="Our Work"
        description="A look at the kind of work that comes through our Ras Al Khor workshop — detailing, protection and paint correction projects across ceramic coating, PPF, tinting and more."
        breadcrumbLabel="Gallery"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.filters} role="group" aria-label="Filter gallery by service">
            <button
              className={`${styles.filterBtn} ${active === "all" ? styles.filterActive : ""}`}
              aria-pressed={active === "all"}
              onClick={() => setActive("all")}
            >
              All
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${active === cat.id ? styles.filterActive : ""}`}
                aria-pressed={active === cat.id}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((item) => {
              const category = galleryCategories.find((c) => c.id === item.category);
              const service = category?.serviceSlug ? getServiceBySlug(category.serviceSlug) : null;

              return (
                <article key={item.title} className={styles.card}>
                  <div className={styles.media}>
                    <img src={item.image} alt={`${item.title} — Ever Shine Auto Services, Dubai`} loading="lazy" />
                    <span className={styles.tag}>{category?.label}</span>
                  </div>
                  <div className={styles.body}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardCopy}>{item.description}</p>
                    <div className={styles.cardActions}>
                      {service ? (
                        <Link to={service.path} className={styles.serviceLink}>
                          View {service.name}
                        </Link>
                      ) : (
                        <span />
                      )}
                      <a
                        href={whatsappLink(
                          `Hi Ever Shine, I saw "${item.title}" in your gallery and I'd like something similar for my car.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className={`btn btn-primary btn-sm ${styles.buyNow}`}
                      >
                        <MessageCircle size={14} /> Buy Now
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
