import { useEffect } from "react";

const SITE_URL = "https://evershinecars.com";
const DEFAULT_TITLE = "Ever Shine Cars — Premium Car Detailing & Auto Care, Dubai";
const DEFAULT_DESCRIPTION =
  "Ever Shine Cars — Dubai's premium car detailing, ceramic coating, PPF and auto service specialists. Ras Al Khor, Dubai.";

function upsertMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Sets document title, meta description and canonical URL for the current route. */
export default function Seo({ title, description, path }) {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE;
    upsertMeta("description", description || DEFAULT_DESCRIPTION);
    if (path) upsertCanonical(`${SITE_URL}${path}`);

    return () => {
      document.title = DEFAULT_TITLE;
      upsertMeta("description", DEFAULT_DESCRIPTION);
    };
  }, [title, description, path]);

  return null;
}
