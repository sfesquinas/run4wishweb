import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mi diario — Microtextos motivadores | Run4Wish",
  description:
    "Pequeños textos motivadores a diario. Inspiración y constancia para tu camino.",
  alternates: { canonical: "/mi-diario" },
  openGraph: {
    title: "Mi diario — Microtextos motivadores | Run4Wish",
    description:
      "Pequeños textos motivadores a diario. Inspiración y constancia para tu camino.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi diario — Microtextos motivadores | Run4Wish",
    description:
      "Pequeños textos motivadores a diario. Inspiración y constancia para tu camino.",
    images: ["/og-image.png"],
  },
};

export default function MiDiario() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Mi diario", item: `${SITE_URL}/mi-diario` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section style={{ paddingTop: "3rem" }}>
      <h1>Mi diario</h1>
      <p>Microtextos motivadores a diario. (Próximamente.)</p>
    </section>
    </>
  );
}
