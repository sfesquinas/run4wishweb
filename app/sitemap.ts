import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/como-funciona` },
    { url: `${SITE_URL}/carreras` },
    { url: `${SITE_URL}/clubes` },
    { url: `${SITE_URL}/wishes` },
    { url: `${SITE_URL}/mi-diario` },
    { url: `${SITE_URL}/empieza-ahora` },
    { url: `${SITE_URL}/faq` },
    { url: `${SITE_URL}/aviso-legal` },
    { url: `${SITE_URL}/politica-privacidad` },
    { url: `${SITE_URL}/politica-cookies` },
  ];
}
