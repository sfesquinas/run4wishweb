import type { MetadataRoute } from "next";

const base = "https://run4wish.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base },
    { url: `${base}/como-funciona` },
    { url: `${base}/carreras` },
    { url: `${base}/clubes` },
    { url: `${base}/wishes` },
    { url: `${base}/mi-diario` },
    { url: `${base}/empieza-ahora` },
    { url: `${base}/faq` },
  ];
}
