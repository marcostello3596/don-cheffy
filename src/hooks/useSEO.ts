import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  lang: "en" | "es";
  path: string; // e.g. "privacy", "terms", "support", "account-deletion"
}

export const useSEO = ({ title, description, canonicalUrl, lang, path }: SEOProps) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 3. Update Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute("href", canonicalUrl);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      linkCanonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(linkCanonical);
    }

    // 5. Update Open Graph Meta Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    } else {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", title);
      document.head.appendChild(ogTitle);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    } else {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      ogDesc.setAttribute("content", description);
      document.head.appendChild(ogDesc);
    }

    // 6. Update hreflang Alternate tags
    const baseUrl = "https://recilist.app";
    const enUrl = `${baseUrl}/${path}`;
    const esUrl = `${baseUrl}/es/${path}`;

    // Remove existing alternate links for the same path
    const existingAlternates = document.querySelectorAll('link[rel="alternate"]');
    existingAlternates.forEach((el) => el.remove());

    // Add English alternate
    const linkEn = document.createElement("link");
    linkEn.setAttribute("rel", "alternate");
    linkEn.setAttribute("hreflang", "en");
    linkEn.setAttribute("href", enUrl);
    document.head.appendChild(linkEn);

    // Add Spanish alternate
    const linkEs = document.createElement("link");
    linkEs.setAttribute("rel", "alternate");
    linkEs.setAttribute("hreflang", "es");
    linkEs.setAttribute("href", esUrl);
    document.head.appendChild(linkEs);

    // Add x-default alternate (pointing to English version as default)
    const linkDefault = document.createElement("link");
    linkDefault.setAttribute("rel", "alternate");
    linkDefault.setAttribute("hreflang", "x-default");
    linkDefault.setAttribute("href", enUrl);
    document.head.appendChild(linkDefault);
  }, [title, description, canonicalUrl, lang, path]);
};
