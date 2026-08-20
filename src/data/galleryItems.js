import { images, u } from "./images";

// Categories mirror the filter tabs on the current live gallery
// (evershinecars.com/gallery): All, Full Detail, Ceramic Coating,
// Paint Correction, Interior, PPF, Window Tinting.
export const galleryCategories = [
  { id: "full-detail", label: "Full Detail", serviceSlug: null },
  { id: "ceramic-coating", label: "Ceramic Coating", serviceSlug: "ceramic-coating-dubai" },
  { id: "paint-correction", label: "Paint Correction", serviceSlug: "polishing-dubai" },
  { id: "interior", label: "Interior", serviceSlug: "interior-detailing-dubai" },
  { id: "ppf", label: "PPF", serviceSlug: "ppf-installation-dubai" },
  { id: "window-tinting", label: "Window Tinting", serviceSlug: "window-tinting-dubai" },
];

// Project entries recreated from the current live gallery's captions.
// Imagery reuses this project's existing, already-verified photo set.
export const galleryItems = [
  {
    category: "full-detail",
    title: "Sedan Full Detail — Before & After",
    description:
      "Complete exterior and interior treatment — hand wash, clay bar decontamination and paint sealant.",
    image: images.gallery[0],
  },
  {
    category: "ceramic-coating",
    title: "Ceramic Coating — BMW 5 Series",
    description:
      "Ceramic coating applied after full paint correction, for a hydrophobic finish with deep gloss.",
    image: images.ceramic,
  },
  {
    category: "interior",
    title: "Interior Deep Clean — Range Rover",
    description: "Leather conditioning, fabric shampooing and dashboard treatment for a like-new cabin.",
    image: images.interior,
  },
  {
    category: "paint-correction",
    title: "Paint Correction — Mercedes C-Class",
    description:
      "Multi-stage machine polish to remove swirl marks and water spots, restoring true paint depth.",
    image: images.polishing,
  },
  {
    category: "ppf",
    title: "Full PPF Wrap — Porsche Cayenne",
    description:
      "Full-body self-healing paint protection film — an invisible shield against stone chips and scratches.",
    image: images.ppf,
  },
  {
    category: "window-tinting",
    title: "Window Tinting — Toyota Land Cruiser",
    description: "Premium heat-rejection film across all windows, with UAE-legal tint levels.",
    image: images.tint,
  },
  {
    category: "full-detail",
    title: "Showroom Detail — Audi A6",
    description:
      "Pre-sale full detail — paint correction, protective coating and interior deep clean for a showroom finish.",
    image: images.gallery[2],
  },
  {
    category: "full-detail",
    title: "SUV Exterior Detail — Nissan Patrol",
    description: "Hand wash, clay bar decontamination and paint sealant, ready for the road.",
    image: u("photo-1605437241278-c1806d14a4d9", 1200),
  },
];
