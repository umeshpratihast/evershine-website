import { Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../data/images";
import { whatsappLink } from "./Header";
import styles from "./SignatureServices.module.css";

const spotlights = [
  {
    tag: "Most Popular",
    name: "Ceramic Coating",
    path: "/services/ceramic-coating-dubai",
    seoName: "Car Ceramic Coating Dubai",
    img: images.ceramic,
    copy: "Our nano-ceramic coating bonds directly to your paint, creating an ultra-hard, mirror-gloss layer that shields against UV rays, dust and Dubai's harsh climate. Results last 2–5 years.",
    points: [
      "Hydrophobic, self-cleaning surface",
      "UV & heat protection built for the UAE",
      "Resists scratches and swirl marks",
      "Improves resale value",
    ],
    cta: "Book Ceramic Coating",
  },
  {
    tag: "Ultimate Shield",
    name: "Paint Protection Film",
    path: "/best-ppf-installation-dubai",
    seoName: "Best PPF Installation Dubai",
    img: images.ppf,
    copy: "PPF is the strongest physical barrier available for your paint. Our certified film is virtually invisible, self-healing, and absorbs stone chips and road debris — keeping your car showroom-fresh.",
    points: [
      "Self-healing film — light scratches disappear with heat",
      "Full-front, partial or full-body coverage",
      "Certified installation, UAE-legal finish",
      "Preserves factory paint underneath",
    ],
    cta: "Book PPF Installation",
  },
  {
    tag: "Next-Gen Protection",
    name: "Graphene Coating",
    path: "/car-graphene-coating-dubai",
    seoName: "Car Graphene Coating Dubai",
    img: images.graphene,
    copy: "A step beyond ceramic — graphene's molecular structure resists heat build-up better than any coating on the market, holding its gloss and hydrophobic properties even under peak Dubai sun.",
    points: [
      "Superior heat resistance in extreme climates",
      "Deeper, longer-lasting gloss than ceramic alone",
      "Extremely slick, dirt-repelling finish",
      "3–5 year protection window",
    ],
    cta: "Book Graphene Coating",
  },
];

export default function SignatureServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className="eyebrow">Signature Services</span>
        <h2 className={styles.title}>Built for Dubai's paint, not just any paint.</h2>
      </div>

      <div className={styles.stack}>
        {spotlights.map((s, i) => (
          <div key={s.name} className={styles.row} data-reverse={i % 2 === 1 ? "true" : undefined}>
            <div className={styles.media}>
              <img src={s.img} alt={`${s.name} on a detailed vehicle`} loading="lazy" />
            </div>
            <div className={styles.copyWrap}>
              <span className={styles.tag}>{s.tag}</span>
              <h3 className={styles.name}>{s.seoName}</h3>
              <p className={styles.copy}>{s.copy}</p>
              <ul className={styles.points}>
                {s.points.map((p) => (
                  <li key={p}>
                    <Check size={15} strokeWidth={2.5} /> {p}
                  </li>
                ))}
              </ul>
              <div className={styles.ctaRow}>
                <Link to={s.path} className="btn btn-primary">
                  {s.cta}
                </Link>
                <a
                  href={whatsappLink(`Hi Ever Shine, I'd like to ask about ${s.seoName}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.waLink}
                >
                  <MessageCircle size={16} /> Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
