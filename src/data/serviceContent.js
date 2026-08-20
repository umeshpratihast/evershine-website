import { images } from "./images";

// Rich, hand-written content for services that have their dedicated page built.
// Anything not listed here falls back to buildFallbackContent() below, which
// only reuses copy already established elsewhere in the site (tagline, price,
// duration, location, hours) — nothing invented.
export const serviceContent = {
  "ceramic-coating-dubai": {
    tag: "Most Popular",
    heroImage: images.ceramic,
    intro:
      "Our nano-ceramic coating bonds directly to your paint, creating an ultra-hard, mirror-gloss layer that shields against UV rays, dust and Dubai's harsh climate. Results last 2–5 years.",
    benefits: [
      {
        title: "Hydrophobic, self-cleaning surface",
        copy: "Water, dirt and grime bead up and slide off the paint instead of sticking to it.",
      },
      {
        title: "UV & heat protection built for the UAE",
        copy: "Engineered to withstand intense sun and high temperatures without breaking down.",
      },
      {
        title: "Resists scratches and swirl marks",
        copy: "Adds a hard protective layer over your paint, reducing fine scratches from everyday washing.",
      },
      {
        title: "Improves resale value",
        copy: "A well-maintained, protected paint finish helps your car look newer for longer.",
      },
    ],
    steps: [
      {
        title: "Vehicle assessment",
        copy: "We inspect your paintwork on arrival and talk through the right coating package for your car.",
      },
      {
        title: "Wash & decontamination",
        copy: "A full hand wash and clay bar treatment to strip away embedded dirt and contaminants before coating.",
      },
      {
        title: "Paint correction",
        copy: "Machine polishing to refine the paint surface so the coating bonds evenly and looks its best.",
      },
      {
        title: "Ceramic coating application",
        copy: "GYEON nano-ceramic coating applied by hand in a controlled environment.",
      },
      {
        title: "Curing & handover",
        copy: "The coating is left to cure, then inspected before handover with a written warranty card.",
      },
    ],
    faqs: [
      {
        q: "How long does ceramic coating take?",
        a: "Most vehicles are completed within 1–2 days, depending on paint condition and vehicle size.",
      },
      {
        q: "How long does the coating last?",
        a: "Our nano-ceramic coating typically lasts 2–5 years, depending on how the vehicle is maintained and driven.",
      },
      {
        q: "Does it protect against Dubai's heat and sun?",
        a: "Yes — the coating is engineered to withstand UV rays and high temperatures, helping protect your paint from sun damage and fading in Dubai's climate.",
      },
      {
        q: "How much does ceramic coating cost?",
        a: "Ceramic coating starts from AED 1,200 for a sedan. Final pricing depends on your vehicle size and paint condition — contact us on WhatsApp for an exact quote.",
      },
      {
        q: "Do I get a warranty?",
        a: "Yes, ceramic coating work comes with a written warranty card provided at handover.",
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: { name: "GYEON", note: "Ceramic coatings" },
    relatedSlugs: ["graphene-coating-dubai", "ppf-installation-dubai", "polishing-dubai"],
  },

  "window-tinting-dubai": {
    tag: null,
    heroImage: images.tint,
    intro:
      "Professional window tinting cuts down heat and glare, blocks harmful UV rays and adds privacy — without altering your car's factory glass. We fit quality film designed to handle Dubai's sun without fading, bubbling or peeling.",
    benefits: [
      {
        title: "Heat rejection",
        copy: "Blocks solar heat before it builds up in the cabin, so your AC works less and you stay cooler on the drive.",
      },
      {
        title: "UV protection",
        copy: "Filters out harmful UV rays that fade interior trim and affect skin exposure on long drives.",
      },
      {
        title: "Glare reduction",
        copy: "Cuts sun and headlight glare for a more comfortable, safer drive.",
      },
      {
        title: "Privacy",
        copy: "Reduces visibility into the cabin from outside, without affecting your own view from inside.",
      },
    ],
    steps: [
      {
        title: "Vehicle assessment",
        copy: "We check any existing tint and talk through the right film and shade for your car.",
      },
      {
        title: "Glass preparation",
        copy: "Windows are cleaned and prepped to remove dust and residue before application.",
      },
      {
        title: "Film application",
        copy: "Film is precision-cut and applied by hand for a clean, bubble-free finish.",
      },
      {
        title: "Quality check & handover",
        copy: "Edges and corners are inspected before handover, with UAE-legal tint levels available.",
      },
    ],
    faqs: [
      {
        q: "Is your window tinting legal in the UAE?",
        a: "Yes — we offer UAE-legal tint levels for your windscreen and windows.",
      },
      {
        q: "How long does window tinting take?",
        a: "Most vehicles are completed within 2–3 hours.",
      },
      {
        q: "Will tinting actually reduce heat inside my car?",
        a: "Yes — the film is designed to reject solar heat, helping keep the cabin cooler in Dubai's climate.",
      },
      {
        q: "How much does window tinting cost?",
        a: "Window tinting starts from AED 350. Final pricing depends on your vehicle — contact us on WhatsApp for an exact quote.",
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: { name: "Armolan", note: "Window film & PPF" },
    relatedSlugs: ["ppf-installation-dubai", "ceramic-coating-dubai", "graphene-coating-dubai"],
    seo: {
      title: "Car Window Tinting Dubai | UAE-Legal Film — Ever Shine",
      description:
        "Professional car window tinting in Dubai. Heat rejection, UV protection, glare reduction and UAE-legal tint levels, fitted at our Ras Al Khor workshop.",
    },
  },

  "ppf-installation-dubai": {
    tag: "Ultimate Shield",
    heroImage: images.ppf,
    intro:
      "PPF is the strongest physical barrier available for your paint. Our certified film is virtually invisible, self-healing, and absorbs stone chips and road debris — keeping your car showroom-fresh.",
    benefits: [
      {
        title: "Self-healing film",
        copy: "Light scratches and swirl marks in the film soften and disappear with heat, keeping it looking new.",
      },
      {
        title: "Stone chip & road debris protection",
        copy: "A tough physical layer that absorbs impact instead of your paint.",
      },
      {
        title: "Flexible coverage options",
        copy: "Full-front, partial or full-body coverage, depending on your car and budget.",
      },
      {
        title: "Preserves factory paint",
        copy: "Protects the original paint underneath rather than replacing or altering it.",
      },
    ],
    steps: [
      {
        title: "Vehicle assessment",
        copy: "We inspect your paintwork and discuss the right coverage — full-front, partial or full-body.",
      },
      {
        title: "Paint preparation",
        copy: "Panels are washed and decontaminated so the film bonds cleanly.",
      },
      {
        title: "Precision film application",
        copy: "3M and Armolan film is cut and fitted by hand for a clean, near-invisible finish.",
      },
      {
        title: "Edge sealing & handover",
        copy: "Edges are sealed and the vehicle is inspected before handover.",
      },
    ],
    faqs: [
      {
        q: "How long does PPF installation take?",
        a: "1–3 days, depending on the coverage you choose.",
      },
      {
        q: "Does PPF really self-heal?",
        a: "Yes — light scratches and swirl marks in the film soften and disappear with heat, such as sunlight or warm water.",
      },
      {
        q: "What coverage options are available?",
        a: "Full-front, partial or full-body coverage — we'll help you choose based on your car and how you drive.",
      },
      {
        q: "How much does PPF cost?",
        a: "PPF starts from AED 2,500. Final pricing depends on your vehicle and the coverage you choose — contact us on WhatsApp for an exact quote.",
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: { name: "3M", note: "Paint protection film" },
    relatedSlugs: ["ceramic-coating-dubai", "graphene-coating-dubai", "window-tinting-dubai"],
    seo: {
      title: "Best PPF Installation Dubai | Paint Protection Film — Ever Shine",
      description:
        "Professional PPF installation in Dubai. Self-healing paint protection film against stone chips and road debris, with full-front, partial or full-body coverage.",
    },
  },

  "graphene-coating-dubai": {
    tag: "Next-Gen Protection",
    heroImage: images.graphene,
    intro:
      "A step beyond ceramic — graphene's molecular structure resists heat build-up better than traditional coatings, holding its gloss and hydrophobic properties even under peak Dubai sun.",
    benefits: [
      {
        title: "Superior heat resistance",
        copy: "Built to handle extreme climates like Dubai's without breaking down.",
      },
      {
        title: "Deeper, longer-lasting gloss",
        copy: "A richer finish than ceramic coating alone.",
      },
      {
        title: "Hydrophobic, slick finish",
        copy: "Water and dirt bead and slide off, keeping the surface cleaner for longer.",
      },
      {
        title: "3–5 year protection window",
        copy: "A long-lasting layer of protection for your paint.",
      },
    ],
    steps: [
      {
        title: "Vehicle assessment",
        copy: "We inspect your paint and confirm graphene coating is the right fit for your car.",
      },
      {
        title: "Wash & decontamination",
        copy: "A full hand wash and clay bar treatment to prepare the surface.",
      },
      {
        title: "Paint correction",
        copy: "Machine polishing to refine the paint surface before coating.",
      },
      {
        title: "Graphene coating application",
        copy: "XPEL graphene coating applied by hand in a controlled environment.",
      },
      {
        title: "Curing & handover",
        copy: "The coating is left to cure, then inspected before handover with a written warranty card.",
      },
    ],
    faqs: [
      {
        q: "How is graphene coating different from ceramic coating?",
        a: "Graphene coating uses a different molecular structure that offers better heat resistance and a deeper gloss than ceramic alone.",
      },
      {
        q: "How long does graphene coating take?",
        a: "Most vehicles are completed within 1–2 days.",
      },
      {
        q: "How long does it last?",
        a: "Graphene coating typically protects for 3–5 years, depending on maintenance and driving conditions.",
      },
      {
        q: "How much does graphene coating cost?",
        a: "Graphene coating starts from AED 1,800. Final pricing depends on your vehicle — contact us on WhatsApp for an exact quote.",
      },
      {
        q: "Do I get a warranty?",
        a: "Yes, graphene coating comes with a written warranty card provided at handover.",
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: { name: "XPEL", note: "Graphene coating" },
    relatedSlugs: ["ceramic-coating-dubai", "ppf-installation-dubai", "polishing-dubai"],
    seo: {
      title: "Car Graphene Coating Dubai | Next-Gen Paint Protection — Ever Shine",
      description:
        "Graphene coating in Dubai for superior heat resistance, deep gloss and long-lasting hydrophobic protection, applied by Ever Shine's trained technicians.",
    },
  },

  "ac-servicing-dubai": {
    tag: null,
    heroImage: images.workshop,
    intro:
      "Dubai's heat puts real strain on a car's AC system. Our AC servicing checks cooling performance, refrigerant levels and common leak points, so you're not caught out with weak airflow in summer.",
    benefits: [
      {
        title: "Cooling performance check",
        copy: "We test how well your AC is actually cooling, not just whether it switches on.",
      },
      {
        title: "Refrigerant / gas check",
        copy: "Refrigerant levels are checked and topped up where needed.",
      },
      {
        title: "Leak detection",
        copy: "We check common leak points that cause AC performance to drop over time.",
      },
      {
        title: "Cabin filter check",
        copy: "Cabin air filter checked and replaced where needed, for cleaner airflow.",
      },
    ],
    steps: [
      {
        title: "AC system inspection",
        copy: "We check current cooling performance and airflow from the vents.",
      },
      {
        title: "Refrigerant & leak check",
        copy: "Gas levels are checked and the system is inspected for common leak points.",
      },
      {
        title: "Refrigerant refill",
        copy: "Refrigerant is topped up or replaced where needed.",
      },
      {
        title: "Final check & handover",
        copy: "We confirm cooling performance before handover.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my car needs an AC service?",
        a: "Weak airflow, warm air instead of cold, or unusual smells from the vents are common signs it's time for a check.",
      },
      {
        q: "How long does AC servicing take?",
        a: "Typical AC servicing takes around 1 hour, depending on what's needed.",
      },
      {
        q: "Do you check for leaks?",
        a: "Yes — we check common leak points as part of the service, since low refrigerant is often caused by a leak rather than normal use.",
      },
      {
        q: "How much does AC servicing cost?",
        a: "AC servicing starts from AED 150 for a sedan. Final pricing depends on your vehicle — contact us on WhatsApp for an exact quote.",
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: null,
    relatedSlugs: ["brake-repair-dubai", "engine-oil-change", "garage-ras-al-khor"],
    seo: {
      title: "Car AC Servicing Dubai | Cooling & Refrigerant Check — Ever Shine",
      description:
        "Professional car AC servicing in Dubai — cooling performance checks, refrigerant top-up and leak detection to keep you cool in the UAE heat.",
    },
  },

  "garage-ras-al-khor": {
    tag: null,
    heroImage: images.workshop,
    intro:
      "Ever Shine is a full-service automotive workshop in Ras Al Khor — detailing, paint protection, window tinting and mechanical servicing, all under one roof. Whether it's a routine check or a specific issue, our technicians assess it before any work begins.",
    benefits: [
      {
        title: "One-stop workshop",
        copy: "Detailing, protection and mechanical servicing handled in a single visit, without shuttling between garages.",
      },
      {
        title: "General diagnostics & maintenance",
        copy: "From routine checks to specific mechanical issues, we assess and explain before any work starts.",
      },
      {
        title: "Certified products & parts",
        copy: "Professional-grade products and parts used across every service we offer.",
      },
      {
        title: "Ras Al Khor, open every day",
        copy: "Drop in or book ahead — we're open daily in Ras Al Khor Industrial Area 3.",
      },
    ],
    steps: [
      {
        title: "Tell us what your car needs",
        copy: "Reach us on WhatsApp — whether it's a specific issue or a general check-up.",
      },
      {
        title: "Vehicle inspection",
        copy: "We inspect your vehicle on arrival and confirm what work is needed before starting.",
      },
      {
        title: "Work carried out",
        copy: "Our technicians complete the work — detailing, protection or mechanical — using certified products.",
      },
      {
        title: "Handover",
        copy: "A walkaround with you before you drive off, so you know exactly what was done.",
      },
    ],
    faqs: [
      {
        q: "What services can I get done at the Ever Shine garage?",
        a: "Everything from detailing and ceramic coating to window tinting, AC servicing, oil changes and brake work — all in one workshop.",
      },
      {
        q: "Do I need to book ahead?",
        a: "You're welcome to drop in, though booking ahead on WhatsApp helps us plan your visit.",
      },
      {
        q: "Where exactly are you located?",
        a: "Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
      {
        q: "What are your opening hours?",
        a: "Mon–Thu & Sat: 8:30 AM–8:30 PM. Fri & Sun: 9:00 AM–9:00 PM.",
      },
      {
        q: "How much will my service cost?",
        a: "Pricing depends on what your car needs — contact us on WhatsApp and we'll confirm a straight price before starting.",
      },
    ],
    brand: null,
    relatedSlugs: ["ceramic-coating-dubai", "ac-servicing-dubai", "brake-repair-dubai"],
    seo: {
      title: "Car Garage in Ras Al Khor, Dubai | Ever Shine Auto Services",
      description:
        "Ever Shine's full-service car garage in Ras Al Khor, Dubai — detailing, paint protection and mechanical servicing under one roof, open every day.",
    },
  },

  "interior-detailing-dubai": {
    tag: null,
    heroImage: images.interior,
    intro:
      "A full interior detail reaches every surface of your cabin — leather conditioning, fabric shampooing, dashboard treatment and glass polish — lifting dust, stains and everyday grime that a regular vacuum misses.",
    benefits: [
      {
        title: "Leather conditioning",
        copy: "Cleans and conditions leather seats and trim to help keep them soft and crack-free.",
      },
      {
        title: "Fabric & carpet shampooing",
        copy: "Lifts embedded dirt and stains from fabric seats and carpets.",
      },
      {
        title: "Dashboard & plastics treatment",
        copy: "Cleans and restores interior plastics and trim without leaving a greasy finish.",
      },
      {
        title: "Glass polish",
        copy: "Interior glass cleaned and polished for a clear, streak-free finish.",
      },
    ],
    steps: [
      {
        title: "Interior assessment",
        copy: "We check the condition of your seats, carpets and trim before starting.",
      },
      {
        title: "Vacuum & dust removal",
        copy: "A thorough vacuum of seats, carpets, mats and hard-to-reach areas.",
      },
      {
        title: "Leather & fabric treatment",
        copy: "Leather conditioning or fabric shampooing, depending on your interior.",
      },
      {
        title: "Dashboard, trim & glass finish",
        copy: "Plastics and dashboard cleaned and treated, glass polished to finish.",
      },
    ],
    faqs: [
      {
        q: "How long does interior detailing take?",
        a: "Most vehicles take 2–3 hours, depending on condition.",
      },
      {
        q: "Do you clean leather and fabric seats?",
        a: "Yes — we condition leather seats and shampoo fabric seats and carpets as part of the service.",
      },
      {
        q: "Can you remove stains and odours?",
        a: "We treat visible stains and embedded dirt as part of the deep clean; results depend on how set-in they are.",
      },
      {
        q: "How much does interior detailing cost?",
        a: "Interior detailing starts from AED 180. Final pricing depends on your vehicle — contact us on WhatsApp for an exact quote.",
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: null,
    relatedSlugs: ["polishing-dubai", "ceramic-coating-dubai", "garage-ras-al-khor"],
    seo: {
      title: "Car Interior Detailing Dubai | Deep Clean — Ever Shine",
      description:
        "Professional car interior detailing in Dubai — leather conditioning, fabric shampooing, dashboard treatment and glass polish at our Ras Al Khor workshop.",
    },
  },

  "polishing-dubai": {
    tag: null,
    heroImage: images.polishing,
    intro:
      "Multi-stage machine polishing corrects swirl marks, light scratches, water spots and oxidation — restoring the true depth and gloss of your paint before it's sealed or coated.",
    benefits: [
      {
        title: "Removes swirl marks & light scratches",
        copy: "Machine polishing cuts back fine surface imperfections that dull your paint.",
      },
      {
        title: "Corrects water spots & oxidation",
        copy: "Restores clarity to paint that's faded or marked from Dubai's sun and hard water.",
      },
      {
        title: "Restores true paint depth",
        copy: "Brings back the gloss and clarity your paint had when new.",
      },
      {
        title: "Prepares paint for protection",
        copy: "The ideal step before ceramic or graphene coating, so protection is sealed over a corrected surface.",
      },
    ],
    steps: [
      {
        title: "Paint assessment",
        copy: "We inspect your paint under proper lighting to identify swirl marks, scratches and problem areas.",
      },
      {
        title: "Wash & decontamination",
        copy: "A full hand wash and clay bar treatment to remove embedded contaminants before polishing.",
      },
      {
        title: "Multi-stage machine polishing",
        copy: "Machine polishing in stages to cut back imperfections and refine the finish.",
      },
      {
        title: "Final inspection & finish",
        copy: "Paint is checked under light before handover to confirm the correction.",
      },
    ],
    faqs: [
      {
        q: "What does paint correction actually fix?",
        a: "It reduces swirl marks, light scratches, water spots and oxidation — the everyday marks that dull a car's paint.",
      },
      {
        q: "How long does polishing take?",
        a: "Typically 6–8 hours, depending on paint condition and vehicle size.",
      },
      {
        q: "Should I polish before ceramic coating?",
        a: "Yes — polishing corrects the paint surface first, so any coating applied afterwards seals in a clean, corrected finish.",
      },
      {
        q: "How much does car polishing cost?",
        a: "Car polishing starts from AED 600. Final pricing depends on your vehicle and paint condition — contact us on WhatsApp for an exact quote.",
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: null,
    relatedSlugs: ["ceramic-coating-dubai", "graphene-coating-dubai", "interior-detailing-dubai"],
    seo: {
      title: "Car Polishing Services Dubai | Paint Correction — Ever Shine",
      description:
        "Multi-stage machine polishing in Dubai to correct swirl marks, water spots and oxidation and restore true paint gloss and depth.",
    },
  },

  "engine-oil-change": {
    tag: null,
    heroImage: images.engineOil,
    intro:
      "A routine oil change keeps your engine protected against Dubai's heat and stop-start traffic. We use TOPAZ 5W-30 fully synthetic oil, with a free fuel injector cleaner included on every service.",
    benefits: [
      {
        title: "TOPAZ fully synthetic oil",
        copy: "5W-30 fully synthetic oil suited to Dubai's climate and daily driving conditions.",
      },
      {
        title: "Free fuel injector cleaner",
        copy: "Included with every oil change at no extra cost.",
      },
      {
        title: "Oil filter replacement",
        copy: "Filter changed alongside the oil as part of the service.",
      },
      {
        title: "Preventive maintenance",
        copy: "Regular oil changes help protect your engine and catch issues early.",
      },
    ],
    steps: [
      {
        title: "Vehicle check-in",
        copy: "We confirm your vehicle's engine size and oil requirements.",
      },
      {
        title: "Oil & filter drain",
        copy: "Old oil and filter are drained and removed.",
      },
      {
        title: "TOPAZ oil refill",
        copy: "Fresh TOPAZ 5W-30 fully synthetic oil and a new filter are fitted.",
      },
      {
        title: "Final check",
        copy: "Fluid levels and common leak points are checked before handover.",
      },
    ],
    faqs: [
      {
        q: "What oil do you use?",
        a: "TOPAZ 5W-30 fully synthetic oil, with a free fuel injector cleaner included.",
      },
      {
        q: "How long does an oil change take?",
        a: "Around 30 minutes for most vehicles.",
      },
      {
        q: "Is the oil filter included?",
        a: "Yes, the oil filter is replaced as part of the service.",
      },
      {
        q: "How often should I change my oil?",
        a: "As a general guide, our oil change is valid up to 10,000 km — your specific interval may vary by vehicle and manufacturer guidance.",
      },
      {
        q: "How much does an oil change cost?",
        a: "Oil changes start from AED 150 for a 4-cylinder engine. Final pricing depends on your engine size — contact us on WhatsApp for an exact quote.",
      },
    ],
    brand: { name: "TOPAZ", note: "Engine & lubricants" },
    relatedSlugs: ["ac-servicing-dubai", "brake-repair-dubai", "garage-ras-al-khor"],
    seo: {
      title: "Car Engine Oil Change Dubai | TOPAZ Synthetic Oil — Ever Shine",
      description:
        "Engine oil change in Dubai using TOPAZ 5W-30 fully synthetic oil, with free fuel injector cleaner included and oil filter replacement.",
    },
  },
};

const brandByCategoryHint = {
  "ppf-installation-dubai": { name: "3M", note: "Paint protection film" },
  "graphene-coating-dubai": { name: "XPEL", note: "Graphene coating" },
  "window-tinting-dubai": { name: "Armolan", note: "Window film & PPF" },
  "engine-oil-change": { name: "TOPAZ", note: "Engine & lubricants" },
};

export function buildFallbackContent(service) {
  return {
    tag: null,
    heroImage: images.workshop,
    intro: service.tagline,
    benefits: [
      {
        title: "Certified products",
        copy: "Carried out using professional-grade products trusted across the industry — never generic substitutes.",
      },
      {
        title: "Trained technicians",
        copy: "Handled by our own experienced technicians, not subcontracted out.",
      },
      {
        title: "Straight pricing",
        copy: `Starting from ${service.priceFrom}, confirmed with you before any work begins.`,
      },
      {
        title: "Ras Al Khor workshop",
        copy: "Drop in or book ahead at our Ras Al Khor Industrial Area workshop, open every day.",
      },
    ],
    steps: [
      {
        title: "Book in minutes",
        copy: "Reach us on WhatsApp — tell us your car and what it needs, and get a straight price back.",
      },
      {
        title: "Vehicle assessment",
        copy: "Every vehicle is inspected on arrival so you know exactly what's being done, and why.",
      },
      {
        title: "Expert service",
        copy: "Trained technicians complete the work using certified products — no shortcuts.",
      },
      {
        title: "Handover",
        copy: "A walkaround with you before you drive off.",
      },
    ],
    faqs: [
      {
        q: `How much does ${service.name} cost?`,
        a: `${service.name} starts from ${service.priceFrom}. Final pricing depends on your vehicle — contact us on WhatsApp for an exact quote.`,
      },
      {
        q: "How long does it take?",
        a: `Typical turnaround is ${service.duration}.`,
      },
      {
        q: "Where is Ever Shine located?",
        a: "Our workshop is in Ras Al Khor Industrial Area 3, Dubai — open every day.",
      },
    ],
    brand: brandByCategoryHint[service.slug] || null,
    relatedSlugs: [],
  };
}

export function getServiceContent(service) {
  return serviceContent[service.slug] || buildFallbackContent(service);
}
