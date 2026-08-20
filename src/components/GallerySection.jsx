import { ArrowUpRight } from "lucide-react";
import { images } from "../data/images";
import styles from "./GallerySection.module.css";

const captions = [
  "Full detail — sedan, exterior correction",
  "Ceramic coating — beading test, day one",
  "PPF install — front bumper, full coverage",
  "Interior detail — leather deep clean",
  "Window tint — UAE-legal finish",
  "Graphene coating — gloss finish, SUV",
];

export default function GallerySection() {
  return (
    <section className={styles.section} id="gallery">
      <div className={`container ${styles.head}`}>
        <div>
          <span className="eyebrow">Recent Work</span>
          <h2 className={styles.title}>See the finish for yourself.</h2>
        </div>
        <a
          href="https://instagram.com/evershineautodxb"
          target="_blank"
          rel="noreferrer"
          className={styles.igLink}
        >
          @evershineautodxb <ArrowUpRight size={15} />
        </a>
      </div>

      <div className={`container ${styles.grid}`}>
        {images.gallery.map((src, i) => (
          <figure key={src} className={styles.item}>
            <img src={src} alt={captions[i]} loading="lazy" />
            <figcaption>{captions[i]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
