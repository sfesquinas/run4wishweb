import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mi diario — Microtextos motivadores a diario | Run4Wish",
  description:
    "Inspiración y constancia cada día. Consejos, propuestas y retos para tu camino. Entra y avanza.",
  alternates: { canonical: "/mi-diario" },
  openGraph: {
    title: "Mi diario — Microtextos motivadores a diario | Run4Wish",
    description:
      "Inspiración y constancia cada día. Consejos, propuestas y retos para tu camino. Entra y avanza.",
    images: ["/og/run4wish.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi diario — Microtextos motivadores a diario | Run4Wish",
    description:
      "Inspiración y constancia cada día. Consejos, propuestas y retos para tu camino. Entra y avanza.",
    images: ["/og/run4wish.jpg"],
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
      <section className="mi-diario-hero" aria-labelledby="mi-diario-heading">
        <Image
          src="/img/hero-mi-diario.jpg"
          alt="Mi diario — Inspiración y constancia cada día"
          width={1200}
          height={630}
          priority={true}
          className="mi-diario-hero-img"
        />
        <p className="mi-diario-hero-label">Cada día</p>
        <h1 id="mi-diario-heading">Mi diario</h1>
        <p className="mi-diario-hero-tagline">Microtextos motivadores a diario.</p>
        <p className="mi-diario-hero-text">
          Inspiración y constancia para tu camino. Consejos, propuestas y retos. Próximamente.
        </p>
        <hr className="mi-diario-hero-hr" />
      </section>
    </>
  );
}
